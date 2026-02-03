'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import useSWR from 'swr';
import SEO from "@/components/SEO";
import Image from 'next/image';
import JsonLd from "@/components/JsonLd";

/**
 * Truncates a string to a specified number of characters.
 * @param {string} text - The original string.
 * @param {number} maxChars - The maximum number of characters allowed.
 * @returns {string} The truncated string with an ellipsis if it was cut.
 */
const limitChars = (text, maxChars) => {
    if (!text) return '';
    if (text.length <= maxChars) {
        return text;
    }
    // Truncate the text and append an ellipsis
    return text.substring(0, maxChars) + '...';
};

// Fetcher function for SWR
const fetcher = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            const error = new Error('Failed to fetch data');
            try {
                error.info = await res.json();
            } catch (e) {
                error.info = { message: res.statusText || 'Unknown error' };
            }
            error.status = res.status;
            throw error;
        }
        const data = await res.json();
        const totalPages = parseInt(res.headers.get('X-WP-TotalPages'), 10) || 1;
        return { data, totalPages };
    } catch (err) {
        if (err instanceof TypeError && err.message === "Failed to fetch") {
            const silentError = new Error(`API Connection Failed: ${url}`);
            silentError.status = 503;
            console.warn("Suppressing fetch overlay for network error in blog page.");
            throw silentError;
        }
        throw err;
    }
};

const Blogpg = ({ headerHeight, ...props }) => {

    // ----------------------------------------------------
    // 👇 JSON-LD SCHEMA DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://ignitetraininginstitute.com/blog/"
        },
        "headline": "Ignite Training Institute Blog",
        "description": "Explore expert insights, academic tips, and exam strategies for IB, IGCSE, A-Levels, AP, and other international curricula at Ignite Training Institute.",
        "publisher": {
            "@type": "EducationalOrganization",
            "name": "Ignite Training Institute",
            "url": "https://ignitetraininginstitute.com/",
            "logo": {
                "@type": "ImageObject",
                "url": "https://ignitetraininginstitute.com/wp-content/uploads/2023/02/ignitefinallogos_1.svg"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971588589958",
                "contactType": "customer service",
                "areaServed": "AE",
                "availableLanguage": ["English"]
            },
            "sameAs": [
                "https://www.instagram.com/ignitetraininginstitute/",
                "https://ae.linkedin.com/company/ignite-training-institute",
                "https://www.facebook.com/ignitetraininginstitute"
            ]
        },
        "url": "https://ignitetraininginstitute.com/blog/"
    };
    // ----------------------------------------------------
    // 👆 END OF SCHEMA DEFINITION
    // ----------------------------------------------------

    // --- Start of Blog Content State and Hooks (from WpPosts) ---
    // Use fallback data from SSR if available
    const [posts, setPosts] = useState(props.fallbackData?.posts || []);
    const [page, setPage] = useState(1);
    const [tagsMap, setTagsMap] = useState({});
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [hasMore, setHasMore] = useState(props.fallbackData?.hasMore ?? true);

    // Debounce effect for search term
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm]);

    const postsApiUrl = `/api/wp/posts?per_page=9&page=${page}&_embed${selectedCategories.length > 0 ? `&categories=${selectedCategories.join(',')}` : ''}${debouncedSearchTerm ? `&search=${debouncedSearchTerm}` : ''}`;

    // Use SWR with fallback data for the initial load
    const { data, error, isLoading, isValidating } = useSWR(postsApiUrl, fetcher, {
        fallbackData: (page === 1 && !debouncedSearchTerm && selectedCategories.length === 0)
            ? { data: props.fallbackData?.posts || [], totalPages: props.fallbackData?.totalPages || 1 }
            : undefined,
        revalidateOnFocus: false
    });

    // --- FIX: Add isClient state to prevent hydration mismatch ---
    const [isClient, setIsClient] = useState(false);
    useEffect(() => { setIsClient(true); }, []);

    // Helper to determine if we should show the spinner (loading, validating, or masking a soft error)
    // We strictly use isClient to ensure we don't render this on the server or initial hydration pass if the server rendered content.
    const showSpinner = isClient && (isLoading || isValidating || (error && error.message?.includes('API Connection Failed'))) && posts.length === 0;

    // Helper to determine if we should show the hard error
    const showError = error && !showSpinner && posts.length === 0;

    // Effect to accumulate posts and determine if more are available
    useEffect(() => {
        if (data && data.data) {
            if (page === 1) {
                setPosts(data.data);
            } else {
                setPosts(prevPosts => [...prevPosts, ...data.data]);
            }
            setHasMore(page < data.totalPages);
        }
    }, [data, page]);

    // Fetch tags on component mount
    useEffect(() => {
        const fetchTags = async () => {
            try {
                const res = await fetch('/api/wp/tags?per_page=100');
                const tags = await res.json();
                const map = {};
                tags.forEach(tag => (map[tag.id] = tag.name));
                setTagsMap(map);
            } catch (err) {
                console.error("Failed to fetch tags:", err);
            }
        };
        fetchTags();
    }, []);

    // Fetch categories on component mount
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch('/api/wp/categories?per_page=100');
                const cats = await res.json();
                setCategories(cats);
            } catch (err) {
                console.error("Failed to fetch categories:", err);
            }
        };
        fetchCategories();
    }, []);

    const handleCategoryClick = (categoryId) => {
        setPosts([]);
        setPage(1);
        setSearchTerm('');
        setDebouncedSearchTerm('');
        setHasMore(true);

        setSelectedCategories(prevSelected => {
            if (prevSelected.includes(categoryId)) {
                return prevSelected.filter(id => id !== categoryId);
            } else {
                return [...prevSelected, categoryId];
            }
        });
    };

    const handleAllCategoriesClick = () => {
        setPosts([]);
        setSelectedCategories([]);
        setPage(1);
        setSearchTerm('');
        setDebouncedSearchTerm('');
        setHasMore(true);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Effect to handle search debounce side-effects
    useEffect(() => {
        if (debouncedSearchTerm) {
            setPosts([]);
            setPage(1);
            setHasMore(true);
            setSelectedCategories([]);
        }
    }, [debouncedSearchTerm]);

    // Determine current breadcrumb path
    const getBreadcrumbPath = () => {
        let path = [{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }];

        if (selectedCategories.length > 0) {
            const selectedCategoryNames = selectedCategories.map(id => {
                const category = categories.find(cat => cat.id === id);
                return category ? category.name : '';
            }).filter(Boolean);

            if (selectedCategoryNames.length > 0) {
                path.push({ name: selectedCategoryNames.join(', '), href: '#' });
            }
        } else if (debouncedSearchTerm) {
            path.push({ name: `Search: "${debouncedSearchTerm}"`, href: '#' });
        }

        return path;
    };

    const breadcrumbPath = getBreadcrumbPath();

    return (
        <>
            <SEO title="Blogs - Expert Tips, Exam Strategies & Curricula Insights"
                description="Explore Ignite’s blog for expert study tips, exam strategies, & guidance on IB, IGCSE, A-Levels, AP & more. Stay ahead with academic insights"
            />
            <JsonLd schema={blogSchema} />

            <div style={{ minHeight: 'calc(100vh - 200px)', paddingTop: `${headerHeight}px` }} >
                <section
                    className="blog-banner fade-in-section"
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat
                    style={{
                        animationDelay: "0.3s",
                    }}
                >
                    <div className="dark-overlay"></div>
                    <div className="overlay">
                        <h1
                            className="heading"
                            style={{
                                background: "linear-gradient(90deg, #EDFFF4, #A6EAC7)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            BlOG
                        </h1>
                        <p className="subHeading">HOME // Blog</p>
                    </div>
                </section>
                <section className="ibdpBanner container" data-scroll data-scroll-section>
                    {/* Blog Search - ALWAYS VISIBLE */}
                    <div className="mb-4 p-4 bg-white searchBox rounded ">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                placeholder="SEARCH"
                                className="form-control rounded-pill pe-5 searchbar"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <button
                                className="btn btn-primary position-absolute end-0 h-100 rounded-pill"
                                onClick={() => setDebouncedSearchTerm(searchTerm)}
                                style={{ zIndex: 2 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Category List - ALWAYS VISIBLE */}
                    <div className=" p-4 bg-white rounded categoryList ">
                        <div className="d-flex flex-wrap category-buttons-container justify-content-center gap-3">
                            <button
                                className={`btn category-button ${selectedCategories.length === 0 && !searchTerm ? 'category-button-selected' : ''}`}
                                onClick={() => handleAllCategoriesClick()}
                            >
                                All Categories
                            </button>
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    className={`btn category-button ${selectedCategories.includes(category.id) ? 'category-button-selected' : ''}`}
                                    onClick={() => handleCategoryClick(category.id)}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Loading spinner */}
                    {showSpinner && (
                        <div className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: '300px' }}>
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}

                    {/* Non-blocking error message inside the content area */}
                    {showError && (
                        <div className="alert alert-danger my-5 p-4 text-center mx-auto" style={{ maxWidth: '600px' }}>
                            <h4>Oops! We hit a snag.</h4>
                            <p>We're having trouble reaching our blog server. Please check your internet or try again.</p>
                            <button onClick={() => window.location.reload()} className="btn btn-primary mt-3">Retry</button>
                        </div>
                    )}

                    {/* Posts List */}
                    {(!isLoading || posts.length > 0) && (
                        <>
                            {posts.length === 0 && !isValidating && !isLoading && !error ? (
                                <div className="text-center text-muted h4 py-5">No posts found for this category or search term.</div>
                            ) : (
                                <div className="mb-4 p-4 postsList ">
                                    {posts.map((post) => {
                                        const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                                        // const postTags = post.tags.map(tagId => tagsMap[tagId]).filter(Boolean);
                                        const postLink = post.link;
                                        const postSlug = post.slug;
                                        const postTitle = encodeURIComponent(post.title.rendered);

                                        return (
                                            <div className="col" key={post.id}>
                                                <div className="card border-0 position-relative">
                                                    <div className="p-3 position-relative">

                                                        {featuredImage && (
                                                            <a href={`/blog/${postSlug}`} rel="noopener noreferrer">
                                                                <img
                                                                    src={featuredImage}
                                                                    className="card-img-top"
                                                                    alt={post.title.rendered}
                                                                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                                                                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/E0F2F7/333333?text=No+Image`; }}
                                                                />
                                                            </a>
                                                        )}
                                                        <div className="card-body-text d-flex flex-column">


                                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                                <p className="card-subtitle">
                                                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                                                                </p>
                                                                <div className="d-flex gap-2">
                                                                    <a
                                                                        href={`https://www.facebook.com/sharer/sharer.php?u=${postLink}`}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="text-muted social-icon-hover"
                                                                        aria-label="Share on Facebook"
                                                                    >
                                                                        <img src="/images/facebk.webp" alt="Facebook" width="18" height="18" />

                                                                    </a>
                                                                    <a
                                                                        href={`https://twitter.com/intent/tweet?url=${postLink}&text=${postTitle}`}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="text-muted social-icon-hover"
                                                                        aria-label="Share on X (Twitter)"
                                                                    >
                                                                        <img src="/images/x.webp" alt="X (Twitter)" width="18" height="18" />

                                                                    </a>
                                                                    <a
                                                                        href={`mailto:?subject=${postTitle}&body=Check out this blog post: ${postLink}`}
                                                                        className="text-muted social-icon-hover"
                                                                        aria-label="Share via Email"
                                                                    >
                                                                        <img src="/images/mail.webp" alt="Email" width="18" height="18" />

                                                                    </a>

                                                                </div>
                                                            </div>
                                                            <a href={`/blog/${postSlug}`} rel="noopener noreferrer">
                                                                <h5
                                                                    className="card-title"
                                                                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                                                />
                                                            </a>
                                                            <div
                                                                className="card-text"
                                                                dangerouslySetInnerHTML={{
                                                                    __html: limitChars(
                                                                        post.excerpt.rendered.replace(/<[^>]*>/g, ''),
                                                                        90 // <-- Your desired character limit
                                                                    )
                                                                }}
                                                            />

                                                            <a
                                                                href={`/blog/${postSlug}`}
                                                                className="btn btn-primary rounded-circle position-absolute m-4 d-flex align-items-center justify-content-center"
                                                                rel="noopener noreferrer"
                                                                aria-label="Read More"
                                                                style={{}}
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                                </svg>
                                                            </a>
                                                        </div>

                                                        <svg preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 524 663" fill="none" xmlns="http://www.w3.org/2000/svg" className="position-absolute">
                                                            <mask id="path-1-inside-1_1179_10211" fill="white">
                                                                <path d="M524 522C524 538.569 510.569 552 494 552H436C419.431 552 406 565.431 406 582V633C406 649.569 392.569 663 376 663H30C13.4315 663 0 649.569 0 633V30C0 13.4315 13.4315 0 30 0H494C510.569 0 524 13.4315 524 30V522Z" />
                                                            </mask>
                                                            <path d="M494 552V550H436V552V554H494V552ZM406 582H404V633H406H408V582H406ZM376 663V661H30V663V665H376V663ZM0 633H2V30H0H-2V633H0ZM30 0V2H494V0V-2H30V0ZM524 30H522V522H524H526V30H524ZM494 0V2C509.464 2 522 14.536 522 30H524H526C526 12.3269 511.673 -2 494 -2V0ZM0 30H2C2 14.536 14.536 2 30 2V0V-2C12.3269 -2 -2 12.3269 -2 30H0ZM30 663V661C14.536 661 2 648.464 2 633H0H-2C-2 650.673 12.3269 665 30 665V663ZM406 633H404C404 648.464 391.464 661 376 661V663V665C393.673 665 408 650.673 408 633H406ZM436 552V550C418.327 550 404 564.327 404 582H406H408C408 566.536 420.536 554 436 554V552ZM494 552V554C511.673 554 526 539.673 526 522H524H522C522 537.464 509.464 550 494 550V552Z" fill="url(#paint0_linear_1179_10211)" mask="url(#path-1-inside-1_1179_10211)" />
                                                            <path d="M494 552V550H436V552V554H494V552ZM406 582H404V633H406H408V582H406ZM376 663V661H30V663V665H376V663ZM0 633H2V30H0H-2V633H0ZM30 0V2H494V0V-2H30V0ZM524 30H522V522H524H526V30H524ZM494 0V2C509.464 2 522 14.536 522 30H524H526C526 12.3269 511.673 -2 494 -2V0ZM0 30H2C2 14.536 14.536 2 30 2V0V-2C12.3269 -2 -2 12.3269 -2 30H0ZM30 663V661C14.536 661 2 648.464 2 633H0H-2C-2 650.673 12.3269 665 30 665V663ZM406 633H404C404 648.464 391.464 661 376 661V663V665C393.673 665 408 650.673 408 633H406ZM436 552V550C418.327 550 404 564.327 404 582H406H408C408 566.536 420.536 554 436 554V552ZM494 552V554C511.673 554 526 539.673 526 522H524H522C522 537.464 509.464 550 494 550V552Z" fill="black" fillOpacity="0.2" mask="url(#path-1-inside-1_1179_10211)" />
                                                            <defs>
                                                                <linearGradient id="paint0_linear_1179_10211" x1="561.244" y1="647.48" x2="-152.496" y2="488.771" gradientUnits="userSpaceOnUse">
                                                                    <stop offset="0.00638475" stopColor="#3F88BA" />
                                                                    <stop offset="1" stopColor="#161664" />
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </>
                    )}
                    {
                        hasMore && posts.length > 0 && (
                            <div className="d-flex justify-content-center mt-5">
                                <button
                                    className="btn btn-primary px-5 py-3 rounded-pill"
                                    onClick={() => setPage(prevPage => prevPage + 1)}
                                    disabled={isValidating}
                                >
                                    {isValidating ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Loading More...
                                        </>
                                    ) : (
                                        'Load More'
                                    )}
                                </button>
                            </div>
                        )
                    }

                    {
                        posts.length === 0 && !isValidating && !isLoading && !error && (
                            <div className="text-center text-muted h4 py-5">No posts found for this category or search term.</div>
                        )
                    }

                </section >
            </div >
        </>
    );
};

export async function getServerSideProps() {
    try {
        // Fetch initial posts (page 1, 9 posts)
        // We use the direct external URL here because SSR runs on the server (Node.js)
        // and doesn't suffer from the same CORS/Browser-Network issues as client-side.
        const res = await fetch('https://api.ignitetraininginstitute.com/wp-json/wp/v2/posts?per_page=9&page=1&_embed');

        if (!res.ok) {
            console.warn('SSR Blog Fetch failed:', res.status);
            return {
                props: {
                    fallbackData: { posts: [], totalPages: 1, hasMore: false }
                }
            };
        }

        const data = await res.json();
        const totalPages = parseInt(res.headers.get('X-WP-TotalPages'), 10) || 1;

        return {
            props: {
                fallbackData: {
                    posts: Array.isArray(data) ? data : [],
                    totalPages: totalPages,
                    hasMore: 1 < totalPages
                }
            }
        };

    } catch (error) {
        console.error('SSR Error in blog.js:', error);
        // Return empty fallback content so the page still loads (client-side can retry)
        return {
            props: {
                fallbackData: { posts: [], totalPages: 1, hasMore: false }
            }
        };
    }
}

export default Blogpg;