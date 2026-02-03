// pages/[slug].js
// 'use client';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useRef, useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import SidebarForm from '@/components/SidebarForm';
import { useMemo } from "react";
import { PopupContext } from '../../pages/_app';
import SEO from "@/components/SEO";


// You must add 'import "locomotive-scroll/dist/locomotive-scroll.css";'
// to your `pages/_app.js` file to avoid a build error.

// --- API Endpoints ---
const VOTE_API_URL = '/api/mpl/vote';
// --- NEW API Endpoint ---
// --- NEW API Endpoint ---
const POSTS_API_BASE_URL = '/api/wp/posts';

// Fetcher function for SWR to handle API requests
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
        return res.json();
    } catch (err) {
        // In development environments like Turbopack, throwing "TypeError: Failed to fetch"
        // often triggers a blocking overlay. We wrap it to stay silent but functional.
        if (err instanceof TypeError && err.message === "Failed to fetch") {
            const silentError = new Error(`API Connection Failed: ${url}`);
            silentError.status = 503;
            console.warn("Suppressing fetch overlay for network error.");
            throw silentError;
        }
        throw err;
    }
};


// Helper function to create a URL-friendly slug from a string
const slugify = (text) => {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/-+$/, '');
};

const getSidebarHtmlImage = () => {
    return `
        <div class="sidebar-image mb-3 sticky-gif">
        <a href="/join-free-demo-class/">
            <img
                src="/images/blog-sidebar.webp"
                alt="Get a Free Counseling"
                class="img-fluid gif-3 w-100 rounded"
            />
        </a>
        </div>
    `;
};

const getSidebarHtmlStaticMobile = () => {
    return `
        <div class="sticky-sidebar-wrapper">
            ${getSidebarHtmlImage()}
            <div class="form-container blog-container">
                <p>Get a Free Demo Class +<br />Free Study Resources</p>
                <form>
                    <div class="form-row">
                        <div class="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <div class="phone-input">
                            <img src="https://flagcdn.com/w40/ae.webp" alt="UAE Flag" class="flag" />
                            <input type="text" id="phone" placeholder="+971" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label htmlFor="course">Tests/Courses</label>
                        <select id="course">
                            <option value="IB Diploma">IB Diploma</option>
                            <option value="IB MYP">IB MYP</option>
                            <option value="IGCSE/GCSE">IGCSE/GCSE</option>
                            <option value="A Levels">A Levels</option>
                            <option value="Homeschooling">Homeschooling</option>
                            <option value="ACT">ACT</option>
                            <option value="UCAT">UCAT</option>
                            <option value="Advanced Placements">Advanced Placements</option>
                            <option value="STEM (Undergraduate)">STEM (Undergraduate)</option>
                            <option value="STEM (Others)">STEM (Others)</option>
                        </select>
                    </div>
                    <button type="submit" class="submit-btn blog-submit-btn">
                        Submit
                        <span class="blogReadMoreArrow"><img alt="arrow" width="20" height="20" src="/images/right-arrow-blue.webp"></span>
                    </button>
                </form>
            </div>
        </div>
    `;
};

const getClientUUID = () => {
    // Ensure window/localStorage is available (client-side execution)
    if (typeof window === 'undefined') {
        return '';
    }

    let uuid = localStorage.getItem('mpl_client_id');
    if (!uuid) {
        // Generate a simple unique ID (production code might use a dedicated UUID library)
        uuid = 'guest-' + Date.now() + Math.random().toString(16).substring(2);
        localStorage.setItem('mpl_client_id', uuid);
    }
    return uuid;
};

// --- TOCPostContent COMPONENT ---
const TOCPostContent = ({ content, toc }) => {
    const { openManualPopup } = useContext(PopupContext);
    const contentRef = useRef(null);
    const gif2PlaceholderClass = 'gif2-placeholder'; // Define the placeholder class

    const [displayContent, setDisplayContent] = useState(content);

    useEffect(() => {
        if (!content) return;

        // --- DOM Manipulation (Client-Side Only) ---
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        const allH2s = tempDiv.querySelectorAll('h2');

        const firstH2 = allH2s[0];
        if (firstH2) {
            const tocWrapper = document.createElement('div');
            tocWrapper.id = 'toc-container';
            firstH2.parentNode.insertBefore(tocWrapper, firstH2);
        }

        const tocHtml = `
            <div class="my-4">
                <div class="card-body">
                    <h5 class="toc-title">Table of Contents</h5>
                    <nav>
                        <ul class="list-unstyled mb-0 toc-list">
                            ${toc.map(({ text, id }) => `<li class="toc-item py-1"><a href="#${id}" class="text-decoration-none">${text}</a></li>`).join('')}
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="d-lg-none">
                ${getSidebarHtmlStaticMobile()}
            </div>
        `;

        const video1Html = `
            <div class="blog-video-wrapper my-5">
                <a href="/join-free-demo-class/" style="display: block; line-height: 0;">
                    <video
                        class="img-fluid gif-1 w-100 rounded"
                        autoPlay
                        muted
                        loop
                        playsInline
              
                        style="object-fit: cover;"
                    >
                        <source src="/videos/blog-gif1.mp4" type="video/mp4" />
                    </video>
                </a>
            </div>
        `;

        const video2Html = `
            <div class="blog-video-wrapper my-5 ${gif2PlaceholderClass}">
                <a href="/join-free-demo-class/" style="display: block; line-height: 0;">
                    <video
                        class="img-fluid gif-2 w-100 rounded"
                        autoPlay
                        muted
                        loop
                        playsInline
              
                        style="object-fit: cover;"
                    >
                        <source src="/videos/blog-gif-2.mp4" type="video/mp4" />
                    </video>
                </a>
            </div>
        `;

        const fourthH2 = allH2s[3];
        if (fourthH2) {
            const gif2TempDiv = document.createElement('div');
            gif2TempDiv.innerHTML = video2Html.trim();
            fourthH2.parentNode.insertBefore(gif2TempDiv.firstChild, fourthH2);
        }

        const thirdH2 = allH2s[2];
        if (thirdH2) {
            const video1TempDiv = document.createElement('div');
            video1TempDiv.innerHTML = video1Html.trim();
            thirdH2.parentNode.insertBefore(video1TempDiv.firstChild, thirdH2);
        }

        let newContent = tempDiv.innerHTML;
        if (firstH2) {
            const tocPlaceholder = `<div id="toc-container"></div>`;
            newContent = newContent.replace(tocPlaceholder, tocHtml);
        }

        setDisplayContent(newContent);

    }, [content, toc]);

    // --- Event Delegation Logic ---
    useEffect(() => {
        const rootElement = contentRef.current;
        if (!rootElement || !openManualPopup) return;

        // Use event delegation on the root element
        const handleClick = (event) => {
            // Check if the clicked element (or an ancestor) has the trigger class
            const triggerElement = event.target.closest(`.${gif2PlaceholderClass}`);

            if (triggerElement) {
                console.log('Popup: Delegated click caught. Opening popup.');
                event.preventDefault(); // Stop any default link behavior
                openManualPopup();
            }
        };

        // Attach ONE listener to the root container
        rootElement.addEventListener('click', handleClick);

        return () => {
            rootElement.removeEventListener('click', handleClick);
        };

    }, [content, openManualPopup]);

    return (
        <div ref={contentRef}>
            <div
                className="post-content lh-lg text-secondary"
                dangerouslySetInnerHTML={{ __html: displayContent }}
            />
        </div>
    );
};

export async function getServerSideProps(context) {
    const { slug } = context.params;
    try {
        // Fetch the post data on the server
        const res = await fetch(`https://api.ignitetraininginstitute.com/wp-json/wp/v2/posts?slug=${slug}&_embed`);

        if (!res.ok) {
            // If API returns 500 or other errors, handle gracefully
            console.error(`Post fetch failed for slug: ${slug}, status: ${res.status}`);
            return {
                notFound: true,
            };
        }

        const data = await res.json();

        // If no post found, return 404
        if (!data || !data.length) {
            return {
                notFound: true,
            };
        }

        // Return the post data as props
        return {
            props: {
                initialPost: data[0],
            },
        };
    } catch (error) {
        console.error(`Server-side error fetching post for slug ${slug}:`, error);
        // Fallback to 404 or a custom error page prop if preferred. 
        // Returning notFound: true is the safest specific failure mode.
        return {
            notFound: true,
        };
    }
}

export default function PostDetail({ initialPost }) {
    const router = useRouter();
    const [pageInfo, setPageInfo] = useState('');
    const { slug } = router.query;
    const [toc, setToc] = useState([]);

    // --- State for Like/Dislike functionality ---
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [userVoteStatus, setUserVoteStatus] = useState(false);
    // --------------------------------------------

    // --- NEW: State for Related Posts ---
    const [relatedPosts, setRelatedPosts] = useState(null);
    // ------------------------------------

    const postApiUrl = slug ? `/api/wp/posts?slug=${slug}&_embed` : null;
    const { data, error } = useSWR(postApiUrl, fetcher, { fallbackData: [initialPost] });

    const scrollInstanceRef = useRef(null);
    const post = data?.[0] || initialPost; // Define post once here





    // --- Function to handle the vote submission ---
    // pages/[slug].js (Inside PostDetail function)

    const handleVote = async (voteType) => {
        if (!post) return;

        const clientUuid = getClientUUID();

        try {
            const response = await fetch(VOTE_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    post_id: post.id,
                    vote_type: voteType,
                    // --- CRITICAL FIX: INCLUDE client_uuid ---
                    client_uuid: clientUuid,
                }),
            });

            if (!response.ok) {
                // Safety check: Attempt to parse error data, but handle non-JSON 500 errors
                let errorInfo = 'Unknown server error.';
                try {
                    const errorData = await response.json();
                    errorInfo = errorData.message || errorData.code || JSON.stringify(errorData);
                } catch (e) {
                    // If parsing fails (common with 500 error), use the status text
                    errorInfo = `Server returned status ${response.status}. Check backend logs.`;
                }
                console.error('API Voting Error:', errorInfo);
                alert('Failed to record vote. You may have already voted or there was a server error.');
                return;
            }

            const data = await response.json();

            if (data.success) {
                setLikes(data.data.likes);
                setDislikes(data.data.dislikes);

                let newStatus = voteType;
                if (userVoteStatus === voteType) {

                    newStatus = userVoteStatus;
                } else {
                    newStatus = voteType;
                }

                setUserVoteStatus(newStatus);
            }
        } catch (error) {
            console.error('Network or Parse Error during voting:', error);
            alert('A network error occurred while submitting your vote.');
        }
    };
    // --------------------------------------------------


    // --- NEW: Helper function to fetch related posts based on categories ---
    const fetchRelatedPosts = async (currentPost, categoriesArray) => {
        try {
            const postId = currentPost?.id;
            if (!postId) return;

            const related = [];
            const excludedPostIds = [postId];
            const MAX_POSTS = 3;

            const primaryCategory = Array.isArray(categoriesArray) ? categoriesArray[0] : null;
            const secondaryCategory = Array.isArray(categoriesArray) ? categoriesArray[1] : null;

            const fetchPostsAndAppend = async (categoryId, limit) => {
                if (!categoryId || related.length >= MAX_POSTS || limit <= 0) return;

                const excludeList = excludedPostIds.join(',');
                const categoryUrl = `${POSTS_API_BASE_URL}?categories=${categoryId}&exclude=${excludeList}&per_page=${limit}&_embed`;

                try {
                    const res = await fetch(categoryUrl);
                    if (!res.ok) {
                        console.warn(`Category fetch failed with status: ${res.status}`);
                        return;
                    }
                    const data = await res.json();
                    if (Array.isArray(data)) {
                        data.forEach(p => {
                            if (related.length < MAX_POSTS && !excludedPostIds.includes(p.id)) {
                                related.push(p);
                                excludedPostIds.push(p.id);
                            }
                        });
                    }
                } catch (err) {
                    console.warn(`Silently skipped category ${categoryId} due to network error:`, err.message);
                }
            };

            if (primaryCategory) {
                await fetchPostsAndAppend(primaryCategory.id, MAX_POSTS);
            }

            if (related.length < MAX_POSTS && secondaryCategory) {
                const limit = MAX_POSTS - related.length;
                await fetchPostsAndAppend(secondaryCategory.id, limit);
            }

            if (related.length < MAX_POSTS) {
                const limit = MAX_POSTS - related.length;
                const excludeList = excludedPostIds.join(',');
                const latestUrl = `${POSTS_API_BASE_URL}?per_page=${limit}&orderby=date&order=desc&exclude=${excludeList}&_embed`;
                try {
                    const res = await fetch(latestUrl);
                    if (!res.ok) {
                        console.warn(`Latest posts fetch failed with status: ${res.status}`);
                    } else {
                        const latestData = await res.json();
                        if (Array.isArray(latestData)) {
                            latestData.forEach(p => {
                                if (related.length < MAX_POSTS && !excludedPostIds.includes(p.id)) {
                                    related.push(p);
                                    excludedPostIds.push(p.id);
                                }
                            });
                        }
                    }
                } catch (err) {
                    console.warn('Silently skipped latest posts due to network error:', err.message);
                }
            }

            setRelatedPosts(related);
        } catch (globalErr) {
            console.warn("Silent error in fetchRelatedPosts:", globalErr.message);
        }
    };
    // --------------------------------------------------------------------------------


    // Initialization and TOC generation effect
    useEffect(() => {
        // ... (Locomotive Scroll setup) ...
        let scroll;
        const initScroll = async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
            scroll = new LocomotiveScroll({
                el: document.body,
                smooth: true,
                lerp: 0.1,
            });
            scrollInstanceRef.current = scroll;
        };

        if (typeof window !== "undefined") {
            initScroll();
        }

        return () => {
            scrollInstanceRef.current?.destroy();
            scrollInstanceRef.current = null;
        };
    }, []);

    useEffect(() => {
        if (data && data[0]?.content?.rendered) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data[0].content.rendered;

            const headings = Array.from(tempDiv.querySelectorAll('h2'));
            const generatedToc = headings.map(heading => {
                const text = heading.textContent;
                const id = slugify(text);
                heading.id = id;
                return { text, id };
            });

            data[0].content.rendered = tempDiv.innerHTML;
            setToc(generatedToc);

            if (scrollInstanceRef.current?.update) {
                scrollInstanceRef.current.update();
            }
        }
    }, [data]);

    // --- Initialization of Likes/Dislikes state and NEW Related Posts Fetch ---
    useEffect(() => {
        if (post) {
            // Check for the custom fields added by register_rest_field
            const initialCounts = post.mpl_counts || { likes: 0, dislikes: 0 };
            const initialVoteStatus = post.mpl_user_vote || false;

            setLikes(initialCounts.likes);
            setDislikes(initialCounts.dislikes);
            setUserVoteStatus(initialVoteStatus);

            // Set page info (existing logic)
            if (typeof window !== 'undefined') {
                const url = window.location.href;
                const title = post.title.rendered.replace(/<\/?[^>]+(>|$)/g, "");
                setPageInfo(`URL: ${url} | Title: ${title}`);
            }

            // --- RELATED POSTS FETCH START ---
            if (typeof window !== 'undefined') {
                const postCategories = post._embedded?.['wp:term']?.find(term => term[0]?.taxonomy === 'category') || [];
                if (postCategories.length > 0) {
                    fetchRelatedPosts(post, postCategories).catch(err => console.warn("Background fetchRelatedPosts failed:", err.message));
                } else {
                    // If no categories, rely entirely on the latest posts fallback
                    fetchRelatedPosts(post, []).catch(err => console.warn("Background fetchRelatedPosts (fallback) failed:", err.message));
                }
            }
            // --- RELATED POSTS FETCH END ---
        }
    }, [post]);
    // --------------------------------------------------------------------




    if (error && !post) {
        return <div className="alert alert-danger my-5 p-4">Failed to load post. Please try again later.</div>;
    }

    if (!post) {
        return (
            <div className="text-center text-muted h4 py-5">
                <h1>404 - Post Not Found</h1>
                <p>The blog post you are looking for does not exist.</p>
                <button onClick={() => router.push('/')} className="btn btn-primary mt-3">
                    Go to Homepage
                </button>
            </div>
        );
    }

    const yoastData = post?.yoast_head_json;
    // This variable holds the array of category objects (used for display and logic)
    const categories = post._embedded?.['wp:term']?.find(term => term[0]?.taxonomy === 'category') || [];
    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const authorName = post._embedded?.author?.[0]?.name || 'Sumit Advani';
    const publishedDate = post.date ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A';
    const updatedDate = post.modified ? new Date(post.modified).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : null;

    const postUrl = typeof window !== 'undefined' ? window.location.href : '';
    const postTitle = post.title.rendered.replace(/<\/?[^>]+(>|$)/g, "");

    // --- Styling Classes for Buttons ---
    const likeButtonClasses = `border-0 background-none 
        flex items-center justify-center transition ${userVoteStatus === 'like'
            ? 'like'
            : 'dislike'
        }`;

    const dislikeButtonClasses = `border-0 background-none
        flex items-center justify-center transition ${userVoteStatus === 'dislike'
            ? 'dislike'
            : 'like'
        }`;

    const likeIconColor = userVoteStatus === 'like' ? '#fff' : '#1c3664';
    const dislikeIconColor = userVoteStatus === 'dislike' ? '#fff' : '#1c3664';
    // -----------------------------------

    // Prepare SEO data
    const seoTitle = yoastData?.title || postTitle;
    const seoDesc = yoastData?.description || post.excerpt.rendered.replace(/<[^>]*>/g, "").slice(0, 160);
    const seoUrl = `https://ignitetraininginstitute.com/blog/${post.slug}`;
    const seoImage = yoastData?.og_image?.[0]?.url || featuredImage;

    return (
        <>
            {/* Standardized SEO Component */}
            <SEO
                title={seoTitle}
                description={seoDesc}
                url={seoUrl}
                image={seoImage}
            />
            {/* Additional manual tags if needed (e.g. article specific) */}
            <Head>
                <meta property="og:type" content="article" key="og-type" />
            </Head>

            <section className="post-detail-section py-5" data-scroll data-scroll-section>
                <div className="container blog-detail-container" >
                    <h1 className="mb-4 display-4 main-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    <div className="mb-2 post-date">
                        <span>Published on {publishedDate} </span>
                        <span className="post-date-separator">|</span>
                        {updatedDate && (
                            <span>Updated on {updatedDate}</span>
                        )}
                    </div>
                    <div className="mb-2 post-author">
                        <span>By {authorName}</span>
                    </div>

                    <div className="post-share-icons mb-4">
                        {/* ... (Existing share icons) ... */}
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`} target="_blank" rel="noopener noreferrer">

                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 1.19995C-4.26814 2.02795 -7.15102 41.6942 20.4192 46.8H24H27.5808C55.1573 41.6894 52.2619 2.02507 24 1.19995Z" fill="#1877F2" />
                                <path d="M27.5807 30.7699H32.9207L33.9369 24.1392H27.5807V19.836C27.5807 18.0221 28.4687 16.2538 31.3156 16.2538H34.2057V10.6085C28.0166 9.49343 20.5809 9.83279 20.4191 19.0853V24.1392H14.6001V30.7699H20.4191V46.8H23.9999H27.5807V30.7699Z" fill="#F1F1F1" />
                            </svg>

                        </a>
                        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(postTitle)}`} target="_blank" rel="noopener noreferrer">

                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_7_16)">
                                    <path d="M24 0C10.7456 0 0 10.7456 0 24C0 37.2544 10.7456 48 24 48C37.2544 48 48 37.2544 48 24C48 10.7456 37.2544 0 24 0Z" fill="black" />
                                    <path d="M26.6257 21.8281L36.8998 9.88525H34.4652L25.5441 20.2551L18.419 9.88525H10.2009L20.9756 25.5662L10.2009 38.0901H12.6357L22.0565 27.1392L29.5812 38.0901H37.7993L26.6251 21.8281H26.6257ZM13.513 11.7181H17.2526L34.4663 36.3406H30.7266L13.513 11.7181Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_7_16">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </a>
                        <a href={`mailto:?subject=${encodeURIComponent(postTitle)}&body=${encodeURIComponent(postUrl)}`} target="_blank" rel="noopener noreferrer">

                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_7_13)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24.008 0.0078125C37.2627 0.0078125 48.008 10.7503 48.008 24.0111C48.008 37.2652 37.2628 48.0077 24.008 48.0077C10.7531 48.0077 0.00805664 37.2657 0.00805664 24.0111C0.00805664 10.7503 10.7532 0.0078125 24.008 0.0078125ZM38.8883 14.8716L25.7709 25.7709C25.2776 26.1868 24.6531 26.4149 24.0078 26.4149C23.3626 26.4149 22.7381 26.1868 22.2447 25.7709L9.1274 14.8716C9.04812 15.0744 9.00761 15.2904 9.00796 15.5082V32.5071C9.00903 32.9736 9.19478 33.4208 9.52461 33.7507C9.85444 34.0806 10.3015 34.2666 10.768 34.2678H37.2476C37.7142 34.2666 38.1613 34.0808 38.4912 33.7508C38.8211 33.4208 39.0069 32.9737 39.008 32.5071V15.5082C39.0082 15.2904 38.9676 15.0744 38.8883 14.8716Z" fill="#4CAF50" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_7_13">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </a>
                    </div>

                    {featuredImage && (
                        <div className="text-center mb-5 image-feature">
                            <img
                                src={featuredImage}
                                alt={post.title.rendered}
                                className="img-fluid gif-4"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    )}
                </div>
            </section>

            <section
                className="post-content-and-sidebar-section py-5"
                data-scroll
                data-scroll-section
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <TOCPostContent content={post.content.rendered} toc={toc} />

                            {/* --- UPDATED: Like/Dislike Block --- */}
                            <div className="helpful-block">
                                <span className="">
                                    Was This Page Helpful
                                </span>

                                {/* Like Button with dynamic class and count */}
                                <button
                                    className={likeButtonClasses}
                                    onClick={() => handleVote('like')}
                                    disabled={!post} // Disable if post data is not yet loaded
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <circle cx="30" cy="30" r="29" stroke="url(#paint0_linear_61_5)" strokeWidth="2" />
                                        <circle cx="30" cy="30" r="29" stroke="black" strokeOpacity="0.2" strokeWidth="2" />
                                        <path d="M29.1068 39.8317H39.4548C40.231 39.8317 41.7004 40.0103 41.7004 39.0129L41.7262 36.1797C42.2488 36.1797 43.1284 36.1152 43.1284 35.4503C43.1284 33.9617 43.1336 33.3266 43.1336 31.848C43.4751 31.848 43.7441 31.4858 43.7441 31.1732V28.5731C43.7441 28.2605 43.5165 27.7395 43.1336 27.7395V24.554C43.1336 23.5914 41.6124 23.4128 40.8777 23.4128H33.8979C33.1322 23.4128 32.6044 22.7082 32.8166 22.0135L33.8462 17.136C33.9186 16.7837 33.7893 15.9798 33.5668 15.1959C33.4271 14.7096 33.2408 13.9355 32.7803 13.6279C32.2681 13.2806 31.5075 13.0722 30.897 13.2012L30.0174 17.2749C29.976 17.4783 29.8777 17.657 29.7432 17.7959L24.4243 24.157V34.7804C24.4243 35.7877 24.595 36.8446 25.0917 37.7427C25.9247 39.2561 27.4149 39.8317 29.1068 39.8317ZM22.1684 24.8567L16.4873 24.8219C15.3335 24.812 15.2611 25.07 15.2611 26.1319V38.482C15.2611 39.4694 15.2973 39.8317 16.3993 39.8317H22.1684V24.8567ZM24.4243 40.4023V40.9183C24.4243 41.5137 23.9172 42 23.2963 42H16.3993C13.9882 42 13 40.6702 13 38.482V26.1319C13 23.8841 14.04 22.6536 16.4976 22.6685L22.7582 22.7032L27.8598 16.6001L28.7032 12.5561C28.7601 12.2683 28.8998 12.0054 29.0964 11.787C30.3382 10.4275 33.0546 11.0328 34.3532 12.0699L34.4309 12.1294C34.9586 12.576 35.4346 13.5832 35.7347 14.6252C36.04 15.6921 36.19 16.8879 36.0503 17.5577L35.2742 21.2444H40.8777C43.0042 21.2444 45.3895 22.1971 45.3895 24.554V25.1048C45.3895 25.6158 45.317 26.0723 45.1515 26.4643C45.6947 27.0498 46 27.7842 46 28.5731V31.1732C46 31.9472 45.6896 32.6319 45.1256 33.1827C45.317 33.6541 45.3843 34.2148 45.3843 34.8152V35.4503C45.3843 36.269 45.0428 37.058 44.3029 37.6186L43.9045 37.8767C43.9718 38.2538 43.9563 38.6358 43.9563 39.0129C43.9563 41.6824 41.6693 42 39.4548 42H29.1068C27.3942 42 25.7074 41.5237 24.4243 40.4023Z" fill="url(#paint1_linear_61_5)" />
                                        <path d="M29.1068 39.8317H39.4548C40.231 39.8317 41.7004 40.0103 41.7004 39.0129L41.7262 36.1797C42.2488 36.1797 43.1284 36.1152 43.1284 35.4503C43.1284 33.9617 43.1336 33.3266 43.1336 31.848C43.4751 31.848 43.7441 31.4858 43.7441 31.1732V28.5731C43.7441 28.2605 43.5165 27.7395 43.1336 27.7395V24.554C43.1336 23.5914 41.6124 23.4128 40.8777 23.4128H33.8979C33.1322 23.4128 32.6044 22.7082 32.8166 22.0135L33.8462 17.136C33.9186 16.7837 33.7893 15.9798 33.5668 15.1959C33.4271 14.7096 33.2408 13.9355 32.7803 13.6279C32.2681 13.2806 31.5075 13.0722 30.897 13.2012L30.0174 17.2749C29.976 17.4783 29.8777 17.657 29.7432 17.7959L24.4243 24.157V34.7804C24.4243 35.7877 24.595 36.8446 25.0917 37.7427C25.9247 39.2561 27.4149 39.8317 29.1068 39.8317ZM22.1684 24.8567L16.4873 24.8219C15.3335 24.812 15.2611 25.07 15.2611 26.1319V38.482C15.2611 39.4694 15.2973 39.8317 16.3993 39.8317H22.1684V24.8567ZM24.4243 40.4023V40.9183C24.4243 41.5137 23.9172 42 23.2963 42H16.3993C13.9882 42 13 40.6702 13 38.482V26.1319C13 23.8841 14.04 22.6536 16.4976 22.6685L22.7582 22.7032L27.8598 16.6001L28.7032 12.5561C28.7601 12.2683 28.8998 12.0054 29.0964 11.787C30.3382 10.4275 33.0546 11.0328 34.3532 12.0699L34.4309 12.1294C34.9586 12.576 35.4346 13.5832 35.7347 14.6252C36.04 15.6921 36.19 16.8879 36.0503 17.5577L35.2742 21.2444H40.8777C43.0042 21.2444 45.3895 22.1971 45.3895 24.554V25.1048C45.3895 25.6158 45.317 26.0723 45.1515 26.4643C45.6947 27.0498 46 27.7842 46 28.5731V31.1732C46 31.9472 45.6896 32.6319 45.1256 33.1827C45.317 33.6541 45.3843 34.2148 45.3843 34.8152V35.4503C45.3843 36.269 45.0428 37.058 44.3029 37.6186L43.9045 37.8767C43.9718 38.2538 43.9563 38.6358 43.9563 39.0129C43.9563 41.6824 41.6693 42 39.4548 42H29.1068C27.3942 42 25.7074 41.5237 24.4243 40.4023Z" fill="black" fillOpacity="0.2" />
                                        <defs>
                                            <linearGradient id="paint0_linear_61_5" x1="64.2646" y1="58.5955" x2="-15.2113" y2="36.2351" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.00638475" stopColor="#3F88BA" />
                                                <stop offset="1" stopColor="#161664" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_61_5" x1="48.3455" y1="41.2743" x2="5.05671" y2="28.3094" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.00638475" stopColor="#3F88BA" />
                                                <stop offset="1" stopColor="#161664" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </button>
                                <span className="text-lg font-semibold text-[#1c3664]">{likes}</span>

                                {/* Dislike Button with dynamic class and count */}
                                <button
                                    className={dislikeButtonClasses}
                                    onClick={() => handleVote('dislike')}
                                    disabled={!post} // Disable if post data is not yet loaded
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <circle cx="30" cy="30" r="30" fill="url(#paint0_linear_61_9)" />
                                        <circle cx="30" cy="30" r="30" fill="black" fillOpacity="0.2" />
                                        <path d="M30.3813 20.1683H20.3468C19.5942 20.1683 18.1693 19.9897 18.1693 20.9871L18.1442 23.8203C17.6375 23.8203 16.7846 23.8848 16.7846 24.5497C16.7846 26.0383 16.7796 26.6734 16.7796 28.152C16.4484 28.152 16.1875 28.5142 16.1875 28.8268V31.4269C16.1875 31.7395 16.4083 32.2605 16.7796 32.2605V35.446C16.7796 36.4086 18.2546 36.5872 18.9671 36.5872H25.7353C26.4779 36.5872 26.9897 37.2918 26.7839 37.9865L25.7855 42.864C25.7153 43.2163 25.8407 44.0202 26.0564 44.8041C26.1919 45.2904 26.3725 46.0645 26.8191 46.3721C27.3158 46.7194 28.0533 46.9278 28.6453 46.7988L29.4983 42.7251C29.5384 42.5217 29.6337 42.343 29.7642 42.2041L34.9219 35.843V25.2196C34.9219 24.2123 34.7564 23.1554 34.2747 22.2573C33.4669 20.7439 32.022 20.1683 30.3813 20.1683ZM37.1094 35.1433L42.6184 35.1781C43.7372 35.188 43.8075 34.93 43.8075 33.8681V21.518C43.8075 20.5306 43.7723 20.1683 42.7037 20.1683H37.1094V35.1433ZM34.9219 19.5977V19.0817C34.9219 18.4863 35.4136 18 36.0157 18H42.7037C45.0417 18 46 19.3298 46 21.518V33.8681C46 36.1159 44.9915 37.3464 42.6083 37.3315L36.5375 37.2968L31.5905 43.3999L30.7727 47.4439C30.7175 47.7317 30.582 47.9946 30.3913 48.213C29.1872 49.5725 26.5532 48.9672 25.2938 47.9301L25.2186 47.8706C24.7068 47.424 24.2452 46.4168 23.9542 45.3748C23.6582 44.3079 23.5127 43.1121 23.6482 42.4423L24.4008 38.7556H18.9671C16.905 38.7556 14.592 37.8029 14.592 35.446V34.8952C14.592 34.3842 14.6623 33.9277 14.8228 33.5357C14.296 32.9502 14 32.2158 14 31.4269V28.8268C14 28.0528 14.301 27.3681 14.8479 26.8173C14.6623 26.3459 14.5971 25.7852 14.5971 25.1848V24.5497C14.5971 23.731 14.9282 22.942 15.6457 22.3814L16.032 22.1233C15.9668 21.7462 15.9818 21.3642 15.9818 20.9871C15.9818 18.3176 18.1994 18 20.3468 18H30.3813C32.042 18 33.6776 18.4763 34.9219 19.5977Z" fill="white" />
                                        <defs>
                                            <linearGradient id="paint0_linear_61_9" x1="64.2646" y1="58.5955" x2="-15.2113" y2="36.2351" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.00638475" stopColor="#3F88BA" />
                                                <stop offset="1" stopColor="#161664" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </button>
                                {/* <span className="text-lg font-semibold text-[#1c3664]">{dislikes}</span> */}

                            </div>
                            {/* --- END UPDATED: Like/Dislike Block --- */}
                            <div className="author-bio-section">
                                <div className="author-bio-image">
                                    <img src="/images/Sumit.webp" alt="Author image" />
                                </div>

                                <div className="author-bio-content">
                                    <h3 className="author-bio-heading">WRITTEN BY SUMIT ADVANI</h3>

                                    <p className="author-bio-text">
                                        Sumit Advani, Co-Founder of Ignite Training Institute, brings over 10 years of education expertise in the UAE. With a B.Sc. in IT and a Diploma in Advertising & PR, he designs personalised academic programs that empower students to achieve their goals.
                                    </p>

                                    <a href="/join-free-demo-class" className="">
                                        <button
                                            data-scroll
                                            data-scroll-class="is-inview"
                                            data-scroll-repeat="true"
                                            className="buttonBlue author-section-cta"
                                            style={{ animationDelay: "0.4s" }}
                                        >
                                            Get Tutor Help
                                            <img
                                                src="/images/right-arrow-skyblue.webp"
                                                alt="arrow"
                                                width={24}
                                                height={24}
                                            />
                                        </button>
                                    </a>
                                </div>
                            </div>


                            {categories.length > 0 && (
                                <div className="mt-5 pt-3 border-top">
                                    <h5 className="mb-3">Categories:</h5>
                                    <div className="d-flex flex-wrap gap-2">
                                        {categories.map((category) => (
                                            <a
                                                key={category.id}
                                                // Note: 'link' property is available on embedded terms
                                                href={`/category/${category.slug}`}
                                                className="btn category-button "
                                            >
                                                {category.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="col-lg-1 d-none d-lg-block">  </div>
                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="sticky-sidebar-wrapper">

                                {/* 1. RENDER STATIC IMAGE PART */}
                                <div dangerouslySetInnerHTML={{ __html: getSidebarHtmlImage() }} />

                                {/* 2. RENDER FUNCTIONAL REACT FORM (replaces the old static form HTML) */}
                                <SidebarForm
                                    pageInfo={pageInfo}
                                    formType="BLOG_SIDEBAR"
                                />
                            </div>
                        </div>
                    </div>

                    {/* --- START: RELATED POSTS SECTION (Inserted after the main row) --- */}
                    <div className='row'>
                        <div className="col-12">
                            {relatedPosts && relatedPosts.length > 0 && (
                                <div className="mt-5">
                                    <div className="subtitle-wrapper">
                                        <div
                                            className="d-flex align-items-center justify-content-center mb-md-4 mb-3"
                                            data-scroll
                                            data-scroll-class="is-inview"
                                            data-scroll-repeat
                                            style={{ animationDelay: "0.25s" }}
                                        >
                                            <div
                                                data-scroll
                                                data-scroll-class="is-inview"
                                                data-scroll-repeat="true"
                                                className=""
                                                style={{ animationDelay: "0.1s" }}
                                            >
                                                <div className="SubHeading testSubheading">More Blogs</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4 p-4 postsList">
                                        {relatedPosts.map((post) => {
                                            const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                                            const postSlug = post.slug;
                                            const postTitle = encodeURIComponent(post.title.rendered);
                                            const postLink = post.link;

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
                                                                        style={{ objectFit: "cover", objectPosition: "center" }}
                                                                        onError={(e) => {
                                                                            e.target.onerror = null;
                                                                            e.target.src =
                                                                                "https://placehold.co/600x400/E0F2F7/333333?text=No+Image";
                                                                        }}
                                                                    />
                                                                </a>
                                                            )}

                                                            <div className="card-body-text d-flex flex-column">

                                                                <div className="d-flex justify-content-between align-items-center mb-3">
                                                                    <p className="card-subtitle">
                                                                        {new Date(post.date).toLocaleDateString("en-US", {
                                                                            month: "long",
                                                                            day: "numeric",
                                                                        })}
                                                                    </p>

                                                                    <div className="d-flex gap-2">
                                                                        <a
                                                                            href={`https://www.facebook.com/sharer/sharer.php?u=${postLink}`}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="text-muted social-icon-hover"
                                                                        >
                                                                            <img src="/images/facebk.webp" width="18" height="18" alt="Facebook" />
                                                                        </a>

                                                                        <a
                                                                            href={`https://twitter.com/intent/tweet?url=${postLink}&text=${postTitle}`}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="text-muted social-icon-hover"
                                                                        >
                                                                            <img src="/images/x.webp" width="18" height="18" alt="Twitter/X" />
                                                                        </a>

                                                                        <a
                                                                            href={`mailto:?subject=${postTitle}&body=${postLink}`}
                                                                            className="text-muted social-icon-hover"
                                                                        >
                                                                            <img src="/images/mail.webp" width="18" height="18" alt="Email" />
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
                                                                        __html: post.excerpt.rendered.replace(/<[^>]*>/g, "").slice(0, 90) + '...',
                                                                    }}
                                                                />

                                                                <a
                                                                    href={`/blog/${postSlug}`}
                                                                    className="btn btn-primary rounded-circle position-absolute m-4 d-flex align-items-center justify-content-center"
                                                                    aria-label="Read More"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24"
                                                                        height="24"
                                                                        fill="currentColor"
                                                                        className="bi bi-arrow-right"
                                                                        viewBox="0 0 16 16"
                                                                    >
                                                                        <path
                                                                            fillRule="evenodd"
                                                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                                                        />
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
                                </div>
                            )}

                        </div>
                    </div>
                    {/* --- END: RELATED POSTS SECTION --- */}


                </div>
            </section>
        </>
    );
}