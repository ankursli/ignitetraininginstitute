'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import useSWR from 'swr';
import SEO from "@/components/SEO";
import Image from 'next/image';
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";
import styles from '@/styles/blog/Blogpg.module.css';

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
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages'), 10) || 1;
    return { data, totalPages };
};

// 1. Accept the headerHeight prop
const Blogpg = ({ headerHeight }) => {

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
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [tagsMap, setTagsMap] = useState({});
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [hasMore, setHasMore] = useState(true);

    // Debounce effect for search term
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm]);

    const postsApiUrl = `https://api.ignitetraininginstitute.com/wp-json/wp/v2/posts?per_page=9&page=${page}&_embed${selectedCategories.length > 0 ? `&categories=${selectedCategories.join(',')}` : ''}${debouncedSearchTerm ? `&search=${debouncedSearchTerm}` : ''}`;

    const { data, error, isLoading, isValidating } = useSWR(postsApiUrl, fetcher);

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
                const res = await fetch('https://api.ignitetraininginstitute.com/wp-json/wp/v2/tags?per_page=100');
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
                const res = await fetch('https://api.ignitetraininginstitute.com/wp-json/wp/v2/categories?per_page=100');
                const cats = await res.json();
                setCategories(cats);
            } catch (err) {
                console.error("Failed to fetch categories:", err);
            }
        };
        fetchCategories();
    }, []);

    const handleCategoryClick = useCallback((categoryId) => {
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
    }, []);

    const handleAllCategoriesClick = useCallback(() => {
        setPosts([]);
        setSelectedCategories([]);
        setPage(1);
        setSearchTerm('');
        setDebouncedSearchTerm('');
        setHasMore(true);
    }, []);

    const handleSearchChange = useCallback((event) => {
        setPosts([]);
        setSearchTerm(event.target.value);
        setPage(1);
        setSelectedCategories([]);
        setHasMore(true);
    }, []);

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            alert('Link copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy link.');
        }
    };

    // Function to limit words (Not used in final return, but kept from original)
    const limitWords = (text, limit) => {
        if (!text) return '';
        const words = text.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return text;
    };
    // --- End of Blog Content State and Hooks (from WpPosts) ---

    // Error message rendering
    if (error) {
        // Applying the headerHeight fix
        return (
            <>
                <JsonLd schema={blogSchema} />
                <div style={{ minHeight: 'calc(100vh - 200px)', paddingTop: `${headerHeight}px` }}>
                    <section className="ibdpBanner" data-scroll data-scroll-section>
                        <div className="alert alert-danger my-5 p-4">Oh no babe, the API broke again 😭</div>
                    </section>
                </div>
            </>
        );
    }

    // Determine current breadcrumb path (kept for context, but breadcrumb is hardcoded in JSX)
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
            <SEO title="Academic Blog - IB, IGCSE, A-Level, AP & Test Prep Tips"
                description="Explore the latest academic tips, study guides, and subject insights for IB, IGCSE, A-Levels, AP, and entrance exams from Ignite Training Institute experts." />
            {/* 2. RENDER THE SCHEMA COMPONENT, passing the data as a prop */}
            <JsonLd schema={blogSchema} />

            {/* 3. Apply the headerHeight as paddingTop to the main scroll container. */}
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
                    {/* Dark overlay */}
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
                    {/* Image with Wrapper */}

                    {/* End Image with Wrapper */}

                    {/* Loading spinner always within the container */}
                    {isLoading && posts.length === 0 && (
                        <div className={`d-flex justify-content-center align-items-center py-5 ${styles.minHeight300px}`}>
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}

                    {/* Only render blog content if not loading or if posts are available */}
                    {(!isLoading || posts.length > 0) && (
                        <>
                            {/* Blog Search */}
                            <div className={`mb-4 p-4 bg-white rounded ${styles.searchBox}`}>
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        placeholder="SEARCH"
                                        className={`form-control rounded-pill pe-5 ${styles.searchbar}`}
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

                            {/* Category List */}
                            <div className={`p-4 bg-white rounded ${styles.categoryList}`}>
                                <div className={`d-flex flex-wrap justify-content-center gap-3 ${styles.categoryButtonsContainer}`}>
                                    <button
                                        className={`btn ${styles.categoryButton} ${selectedCategories.length === 0 && !searchTerm ? styles.categoryButtonSelected : ''}`}
                                        onClick={() => handleAllCategoriesClick()}
                                    >
                                        All Categories
                                    </button>
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            className={`btn ${styles.categoryButton} ${selectedCategories.includes(category.id) ? styles.categoryButtonSelected : ''}`}
                                            onClick={() => handleCategoryClick(category.id)}
                                        >
                                            {category.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Posts List */}
                            {posts.length === 0 && !isValidating && !isLoading ? (
                                <div className="text-center text-muted h4 py-5">No posts found for this category or search term.</div>
                            ) : (
                                <div className={`mb-4 p-4 ${styles.postsList}`}>
                                    {posts.map((post) => {
                                        const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                                        const postTags = post.tags.map(tagId => tagsMap[tagId]).filter(Boolean);
                                        const postLink = post.link;
                                        const postSlug = post.slug;
                                        const postTitle = encodeURIComponent(post.title.rendered);

                                        return (
                                            <div className={styles.col} key={post.id}>
                                                <div className={`${styles.card} border-0 position-relative`}>
                                                    <div className="p-3 position-relative">

                                                        {featuredImage && (
                                                            <a href={`/blog/${postSlug}`} rel="noopener noreferrer">
                                                                <img
                                                                    src={featuredImage}
                                                                    className={styles.cardImgTop}
                                                                    alt={post.title.rendered}
                                                                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                                                                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/E0F2F7/333333?text=No+Image`; }}
                                                                />
                                                            </a>
                                                        )}
                                                        <div className={`${styles.cardBodyText} d-flex flex-column`}>


                                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                                <p className={styles.cardSubtitle}>
                                                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                                                                </p>
                                                                <div className="d-flex gap-2">
                                                                    <a
                                                                        href={`https://www.facebook.com/sharer/sharer.php?u=${postLink}`}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className={`text-muted ${styles.socialIconHover}`}
                                                                        aria-label="Share on Facebook"
                                                                    >
                                                                        <img src="/images/facebk.webp" alt="Facebook" width="18" height="18" />

                                                                    </a>
                                                                    <a
                                                                        href={`https://twitter.com/intent/tweet?url=${postLink}&text=${postTitle}`}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className={`text-muted ${styles.socialIconHover}`}
                                                                        aria-label="Share on X (Twitter)"
                                                                    >
                                                                        <img src="/images/x.webp" alt="X (Twitter)" width="18" height="18" />

                                                                    </a>
                                                                    <a
                                                                        href={`mailto:?subject=${postTitle}&body=Check out this blog post: ${postLink}`}
                                                                        className={`text-muted ${styles.socialIconHover}`}
                                                                        aria-label="Share via Email"
                                                                    >
                                                                        <img src="/images/mail.webp" alt="Email" width="18" height="18" />

                                                                    </a>

                                                                </div>
                                                            </div>
                                                            <a href={`/blog/${postSlug}`} rel="noopener noreferrer">
                                                                <h5
                                                                    className={styles.cardTitle}
                                                                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                                                />
                                                            </a>
                                                            <div
                                                                className={styles.cardText}
                                                                dangerouslySetInnerHTML={{
                                                                    __html: limitChars(
                                                                        post.excerpt.rendered.replace(/<[^>]*>/g, ''),
                                                                        90 // <-- Your desired character limit
                                                                    )
                                                                }}
                                                            />

                                                            <a
                                                                href={`/blog/${postSlug}`}
                                                                className={`btn ${styles.btnPrimary} rounded-circle position-absolute m-4 d-flex align-items-center justify-content-center`}
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

                            {/* Load More Button */}
                            {hasMore && posts.length > 0 && (
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
                            )}

                            {posts.length === 0 && !isValidating && !isLoading && (
                                <div className="text-center text-muted h4 py-5">No posts found for this category or search term.</div>
                            )}
                        </>
                    )}
                </section>
                {/* <section
                    className="blog-newsletter-section py-5"
                    data-scroll
                    data-scroll-section
                >
                    <div className="container">
                        <div className="card newsletter-card text-center p-4 p-md-5">
                            <div className="card-body">
                                <h2
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    className="fade-in-section aboutTitle"
                                    style={{ animationDelay: "0.2s" }}
                                >
                                    SUBSCRIBE TO OUR NEWSLETTER

                                </h2>

                                <p className="newsletter-text mx-auto mb-4">
                                    Stay connected with the latest academic content, curated resources, & student-focused advice. Ignite your inbox with purposeful learning updates every week.
                                </p>
                                <form className="newsletter-form mx-auto">
                                    <div className="input-group">
                                        <input
                                            type="email"
                                            className="form-control newsletter-input"
                                            placeholder="Email"
                                            aria-label="Email"
                                            required
                                        />
                                        <button
                                            className="btn newsletter-submit-btn"
                                            type="submit"
                                            aria-label="Subscribe"
                                        >
                                            <span className="arrow">→</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
        </>
    );
};

export default Blogpg;