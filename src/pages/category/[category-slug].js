// pages/category/[category-slug].js

'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
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
            console.warn("Suppressing fetch overlay for network error in category page.");
            throw silentError;
        }
        throw err;
    }
};

// New fetcher to get category ID by slug
const categoryFetcher = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            const error = new Error('Failed to fetch category data');
            error.status = res.status;
            throw error;
        }
        return await res.json();
    } catch (err) {
        if (err instanceof TypeError && err.message === "Failed to fetch") {
            console.warn("Suppressing fetch overlay for category name fetch.");
            const silentError = new Error("Category API Offline");
            silentError.status = 503;
            throw silentError;
        }
        throw err;
    }
}

// --- SEO LOOKUP TABLE ---
const categorySeoMap = {


    'a-levels': {
        title: "A Levels Blogs - Curriculum Insights & Student Resources",
        description: "Browse in-depth A Level blogs covering subject choices, study strategies, & exam success tips. Ideal for students & parents navigating A Levels",
    },
    'advanced-placements': {
        title: "AP (Advanced Placements) Blogs - Insights & Prep Tips",
        description: "Explore extensive AP blogs covering course choices, exam preparation, & scoring insights. A helpful guide for anybody confidently navigating AP",
    },
    'american-curriculum': {
        title: "American Curriculum Blogs - Grading System & Key Features",
        description: "Learn about the American Curriculum through Ignite blogs. Get to know the framework, grading, AP options, global schools, & college preparation",
    },
    'british-curriculum': {
        title: "British Curriculum Blogs - Pathways & Key Insights",
        description: "These blogs cover the British Curriculum & offer a clear look at academic stages, subject focus, progression routes, & student learning outcomes",
    },
    'gcse': {
        title: "GCSE Blogs - Curriculum Insights & Exam Prep Tips",
        description: "Stay informed with insightful blogs on GCSE subjects, grading systems, & exam formats, perfect for students & parents navigating their GCSE journey",
    },
    'homeschooling': {
        title: "Homeschooling Blogs - Guidance & Student Resources",
        description: "Homeschooling blogs offer structured guidance and subject planning tips, making them an essential resource for navigating the homeschooling journey",
    },
    'ibdp': {
        title: "IB Diploma Programme Blogs - Curriculum Insights & Tips",
        description: "Navigate the IBDP journey with blogs covering core components, subject groups, CAS, EE, TOK, & exam prep, making it a go-to guide for students",
    },
    'igcse': {
        title: "IGCSE Blogs - Curriculum Insights & Study Resources",
        description: "Explore the IGCSE structure, key subjects, grading system, & expert prep tips through our blogs, designed for navigating IGCSE in Dubai & beyond",
    },
    'international-baccalaureate': {
        title: "IB Blogs - Curriculum Insights & Exam Prep Strategies",
        description: "Navigate the International Baccalaureate (IB) with expert blogs on subjects, assessments, & learning pathways, trusted by students & parents worldwide",
    },
    'myp': {
        title: "IB MYP Programme Blogs - Curriculum Insights & Tips",
        description: "Understand the IB MYP better with blogs on subjects, skills, & projects, your complete go-to guide to the curriculum & IB MYP learning journey",
    },
    'schools': {
        title: "Top Schools In The UAE: Insightful Blogs & Reviews",
        description: "Explore insightful blogs on top UAE schools covering quality of education, reviews, & more to help parents & students make informed decisions",
    },
    'standardized-tests': {
        title: "Standardized Tests Blogs - Prep Guidance & Key Insights",
        description: "Navigate the landscape of standardized testing with blogs offering expert prep tips, grading insights & exam formats for students & learners worldwide",
    },
    'study-tips': {
        title: "Study Tips – Proven Strategies & Insights For Students",
        description: "Master your learning journey with study tips blogs packed with focus techniques, revision strategies & smart learning hacks for strong academic growth.",
    },
    'subject-choices': {
        title: "Subject Choices Blogs - Expert Guidance & Real Insights",
        description: "Gain clear guidance on subject choices through insightful blogs covering academic pathways, stream selection, & comprehensive curricula advice",
    },
    'tutoring': {
        title: "Tutoring Insights - Get Academic Support With Ignite",
        description: "Discover tutoring blogs filled with subject-specific strategies & academic growth tips, ideal for students in Dubai & parents seeking trusted support",
    },
    'universities': {
        title: "University Insights - Blogs On Admissions & Career Pathway",
        description: "Browse expert university blogs packed with insights on admissions & global rankings acting as an essential guide for those navigating global pathways",
    }


};
// ------------------------

const CategoryPage = ({ headerHeight }) => {
    const router = useRouter();
    const { 'category-slug': categorySlug } = router.query;

    // --- State & Hooks ---
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [tagsMap, setTagsMap] = useState({});
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [hasMore, setHasMore] = useState(true);
    const [currentCategory, setCurrentCategory] = useState(null);

    // 1. Fetch the category object (and ID) based on the slug
    const categoryApiUrl = categorySlug
        ? `/api/wp/categories?slug=${categorySlug}`
        : null;

    const { data: categoryData, error: categoryError } = useSWR(categoryApiUrl, categoryFetcher);

    // Update the currentCategory state once the data is fetched
    useEffect(() => {
        if (categoryData && categoryData.length > 0) {
            setCurrentCategory(categoryData[0]);
            // Reset posts and page when the category slug changes
            setPosts([]);
            setPage(1);
            setHasMore(true);
        } else if (categorySlug && categoryData && categoryData.length === 0) {
            // Handle 404 for category not found
            // router.push('/404'); // You might want to redirect to a 404 page
        }
    }, [categoryData, categorySlug]);


    // Debounce effect for search term (copied from blog.js)
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm]);

    // Construct the API URL for posts, now including the category ID
    const categoryId = currentCategory?.id;
    const postsApiUrl = categoryId
        ? `/api/wp/posts?per_page=9&page=${page}&_embed&categories=${categoryId}${debouncedSearchTerm ? `&search=${debouncedSearchTerm}` : ''}`
        : null;

    const { data, error: postsError, isLoading, isValidating } = useSWR(postsApiUrl, fetcher);

    // Effect to accumulate posts (copied from blog.js)
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

    // Fetch tags and categories (copied from blog.js)
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


    const handleCategoryClick = useCallback((categoryId) => {
        // Redirect to the new category page
        const categoryToRoute = categories.find(cat => cat.id === categoryId);
        if (categoryToRoute) {
            router.push(`/category/${categoryToRoute.slug}`);
        }
    }, [categories, router]);

    const handleAllCategoriesClick = useCallback(() => {
        // Redirect to the main blog page
        router.push('/blog');
    }, [router]);

    const handleSearchChange = useCallback((event) => {
        // Reset state for new search in the current category
        setPosts([]);
        setSearchTerm(event.target.value);
        setPage(1);
        setHasMore(true);
    }, []);

    // --- JSON-LD Schema (Use BlogPosting for the list, though Blog is also fine) ---
    const categorySchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": currentCategory ? `${currentCategory.name} - Ignite Training Institute Blog` : "Blog Category",
        "description": currentCategory?.description || `Posts under the ${currentCategory?.name || 'current'} category at Ignite Training Institute.`,
        "url": typeof window !== 'undefined' ? window.location.href : `https://ignitetraininginstitute.com/category/${categorySlug}`,
        "mainEntity": {
            "@type": "Blog",
            // Include other blog properties as needed
        }
    };
    // ----------------------------------------------------

    if (router.isFallback || !categorySlug || !currentCategory && !categoryError) {
        return (
            <div className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: '300px' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }



    if (!currentCategory) {
        // Category not found (404-like scenario)
        return (
            <div className="text-center text-muted h4 py-5" style={{ paddingTop: `${headerHeight}px`, minHeight: 'calc(100vh - 200px)' }}>
                <h1>404 - Category Not Found</h1>
                <p>The category you are looking for does not exist.</p>
                <button onClick={() => router.push('/blog')} className="btn btn-primary mt-3">
                    Go to Blog
                </button>
            </div>
        );
    }

    // Determine breadcrumb path
    const breadcrumbPath = [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: currentCategory.name, href: router.asPath }
    ];

    const currentCategoryName = currentCategory?.name || 'Category';

    // --- START: NEW SEO IMPLEMENTATION LOGIC ---
    const currentSlug = categorySlug;

    // 1. Look up the custom SEO data using the slug
    const customSeoData = categorySeoMap[currentSlug];

    // 2. Set the final Meta Title, falling back to the generic title if not found
    const metaTitle = customSeoData?.title
        || `${currentCategoryName} Posts - Ignite Blog`;

    // 3. Set the final Meta Description, falling back to WP description or generic string
    const metaDescription = customSeoData?.description
        || currentCategory?.description
        || `All blog posts in the ${currentCategoryName} category. Explore expert insights, study guides, and tips from Ignite Training Institute.`;

    // 4. Clean up any residual HTML and truncate the description (max 160 chars)
    const cleanMetaDescription = metaDescription.replace(/<[^>]*>/g, '').substring(0, 160);
    // --- END: NEW SEO IMPLEMENTATION LOGIC ---


    return (
        <>
            <SEO
                // Use the dynamically determined metaTitle
                title={metaTitle}
                // Use the dynamically determined and cleaned description
                description={cleanMetaDescription}
            />
            <JsonLd schema={categorySchema} />

            <div style={{ minHeight: 'calc(100vh - 200px)', paddingTop: `${headerHeight}px` }} >
                <section
                    className="careers-banner fade-in-section is-inview"

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
                            {currentCategoryName.toUpperCase()} BLOGS
                        </h1>
                        {/* Dynamic Breadcrumb based on the path */}
                        <p className="subHeading">
                            {breadcrumbPath.map((item, index) => (
                                <React.Fragment key={item.name}>
                                    {index > 0 && ' // '}
                                    {item.href === '#' ? item.name : <a href={item.href} className='text-white text-decoration-none'>{item.name}</a>}
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                </section>
                <section className="ibdpBanner container" data-scroll data-scroll-section>

                    {/* Loading spinner always within the container */}
                    {(isLoading || (isValidating && posts.length === 0)) && (
                        <div className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: '300px' }}>
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}

                    {/* Non-blocking error message inside the content area */}
                    {(categoryError || postsError) && posts.length === 0 && !isValidating && !isLoading && (
                        <div className="alert alert-danger my-5 p-4 text-center mx-auto" style={{ maxWidth: '600px' }}>
                            <h4>Oops! Something went wrong.</h4>
                            <p>We're having trouble loading the {currentCategoryName} category. Please try again later.</p>
                            <button onClick={() => window.location.reload()} className="btn btn-primary mt-3">Retry</button>
                        </div>
                    )}

                    {(!isLoading || posts.length > 0) && (
                        <>
                            {/* Blog Search */}
                            {/* <div className="mb-4 p-4 bg-white searchBox rounded ">
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        placeholder={`SEARCH IN ${currentCategoryName.toUpperCase()}`}
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
                            </div> */}

                            {/* Category List */}
                            {/* <div className=" p-4 bg-white rounded categoryList ">
                                <div className="d-flex flex-wrap category-buttons-container justify-content-center gap-3">
                                    <button
                                        className={`btn category-button`}
                                        onClick={() => handleAllCategoriesClick()}
                                    >
                                        All Categories
                                    </button>
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            className={`btn category-button ${currentCategory.id === category.id ? 'category-button-selected' : ''}`}
                                            onClick={() => handleCategoryClick(category.id)}
                                        >
                                            {category.name}
                                        </button>
                                    ))}
                                </div>
                            </div> */}

                            {/* Posts List - Use the same grid structure as blog.js */}
                            {posts.length === 0 && !isValidating && !isLoading ? (
                                <div className="text-center text-muted h4 py-5">No posts found for this category or search term.</div>
                            ) : (
                                <div className="mb-4 p-4 postsList ">
                                    {posts.map((post) => {
                                        const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                                        const postTags = post.tags.map(tagId => tagsMap[tagId]).filter(Boolean);
                                        const postLink = post.link;
                                        const postSlug = `/${post.slug}`; // Assuming your post detail page is at /post-detail/[slug] or similar based on [slug].js
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
            </div>
        </>
    );
};

export default CategoryPage;