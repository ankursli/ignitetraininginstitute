// pages/[slug].js
// 'use client';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useRef, useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import SidebarForm from '@/components/SidebarForm';
import { useMemo } from "react";
import { PopupContext } from '../../pages/_app';
import SEO from "@/components/SEO";


// You must add 'import "locomotive-scroll/dist/locomotive-scroll.css";'
// to your `pages/_app.js` file to avoid a build error.

// --- API Endpoints ---
const VOTE_API_URL = '/api/vote';
const POSTS_API_BASE_URL = '/api/wp/posts';

// Fetcher function for SWR to handle API requests
const fetcher = async (url) => {
    try {
        // Append unique timestamp so the Next.js API Proxy doesn't return stale 0-votes,
        // without mutating the stable `url` SWR key which causes infinite React renders.
        const bustUrl = url.includes('?') ? `${url}&_t=${Date.now()}` : `${url}?_t=${Date.now()}`;
        const res = await fetch(bustUrl);
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

// const getSidebarHtmlImage = () => {
//     return `
//         <div class="sidebar-image mb-3 sticky-gif">
//         <a href="/join-free-demo-class/">
//             <img
//                 src="/images/blog-sidebar.webp"
//                 alt="Get a Free Counseling"
//                 class="img-fluid gif-3 w-100 rounded"
//             />
//         </a>
//         </div>
//     `;
// };

const getSidebarHtmlStaticMobile = () => {
    return `
        <div class="sticky-sidebar-wrapper">
 
            <div class="form-container blog-container blog-sidebar-form-mobile">
               <p class="pre-h"><strong>Ignite Brings Dubai’s Best Tutors To You</strong></p>
                <p class="main-h">Get a Free Demo Class +Free Study Resources</p>
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

        const needsCollapse = toc.length > 3;
        const initialListClass = needsCollapse ? 'toc-list collapsed' : 'toc-list';

        const tocToggleBtnHtml = needsCollapse ? `
            <div class="toc-toggle-wrapper">
                <button type="button" class="toc-toggle-btn m-0 p-0 border-0 bg-transparent d-flex align-items-center justify-content-end w-100 mt-2">
                    <span class="btn-text" style="font-weight:600; font-size: 16px; color:#161616;">Open</span>
                    <svg class="btn-icon ms-1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="transition: transform 0.3s ease;">
                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        ` : '';

        const tocHtml = `
            <div class="my-4 toc-outer-container">
                <div class="card-body">
                    <h5 class="toc-title">Table of Contents</h5>
                    <nav>
                        <ul class="list-unstyled mb-0 ${initialListClass}">
                            ${toc.map(({ text, id }) => `<li class="toc-item py-1"><a href="#${id}" class="text-decoration-none">${text}</a></li>`).join('')}
                        </ul>
                    </nav>
                    ${tocToggleBtnHtml}
                </div>
            </div>
            <div class="d-lg-none">
                ${getSidebarHtmlStaticMobile()}
            </div>
        `;

        const video1Html = `
            <div class="blog-video-wrapper my-5 highlight-on-scroll" data-scroll data-scroll-call="video-highlight" data-scroll-repeat="true">
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
            <div class="blog-video-wrapper my-5 ${gif2PlaceholderClass} highlight-on-scroll" data-scroll data-scroll-call="video-highlight" data-scroll-repeat="true">
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

        const fourthH2 = allH2s[4];
        if (fourthH2) {
            const gif2TempDiv = document.createElement('div');
            gif2TempDiv.innerHTML = video2Html.trim();
            fourthH2.parentNode.insertBefore(gif2TempDiv.firstChild, fourthH2);
        }

        const thirdH2 = allH2s[3];
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

    // --- BoundingClientRect Polling Logic for Spotlight ---
    useEffect(() => {
        let animationFrameId;

        const checkHighlight = () => {
            const wrapperElements = contentRef.current?.querySelectorAll('.highlight-on-scroll');
            let currentlyHighlightedCount = 0;

            if (wrapperElements) {
                const wh = window.innerHeight;

                wrapperElements.forEach((el) => {
                    const rect = el.getBoundingClientRect();
                    // Check if the center of the element is within the middle 60% of the screen
                    const elementCenter = rect.top + (rect.height / 2);
                    const isVisible = elementCenter > (wh * 0.2) && elementCenter < (wh * 0.8);

                    if (isVisible) {
                        if (!el.classList.contains('is-highlighted')) {
                            el.classList.add('is-highlighted');
                        }
                        currentlyHighlightedCount++;
                    } else {
                        if (el.classList.contains('is-highlighted')) {
                            el.classList.remove('is-highlighted');
                        }
                    }
                });
            }

            if (currentlyHighlightedCount > 0) {
                document.body.classList.add('has-highlighted-video');
            } else {
                document.body.classList.remove('has-highlighted-video');
            }

            animationFrameId = requestAnimationFrame(checkHighlight);
        };

        // Start polling
        animationFrameId = requestAnimationFrame(checkHighlight);

        return () => {
            cancelAnimationFrame(animationFrameId);
            document.body.classList.remove('has-highlighted-video');

            if (contentRef.current) {
                const highlighted = contentRef.current.querySelectorAll('.is-highlighted');
                highlighted.forEach(el => el.classList.remove('is-highlighted'));
            }
        };

    }, [displayContent]);

    // --- Event Delegation Logic for GIF Popup & TOC Toggle ---
    useEffect(() => {
        const rootElement = contentRef.current;
        if (!rootElement) return;

        // Use event delegation on the root element
        const handleClick = (event) => {
            // Check for GIF popup click
            const gifElement = event.target.closest(`.${gif2PlaceholderClass}`);
            if (openManualPopup && gifElement) {
                console.log('Popup: Delegated click caught. Opening popup.');
                event.preventDefault(); // Stop any default link behavior
                openManualPopup();
                return;
            }

            // Check for TOC Toggle button click
            const toggleElement = event.target.closest('.toc-toggle-btn');
            if (toggleElement) {
                const navElement = toggleElement.closest('.card-body').querySelector('nav');
                const listElement = navElement.querySelector('.toc-list');
                const textSpan = toggleElement.querySelector('.btn-text');
                const iconSvg = toggleElement.querySelector('.btn-icon');

                if (listElement && listElement.classList.contains('collapsed')) {
                    // Expand
                    listElement.classList.remove('collapsed');
                    textSpan.textContent = 'Close';
                    iconSvg.style.transform = 'rotate(180deg)';
                } else if (listElement) {
                    // Collapse
                    listElement.classList.add('collapsed');
                    textSpan.textContent = 'Open';
                    iconSvg.style.transform = 'rotate(0deg)';
                }
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
    const [hasVoted, setHasVoted] = useState(false);
    // --------------------------------------------

    // --- NEW: State for Related Posts ---
    const [relatedPosts, setRelatedPosts] = useState(null);
    // ------------------------------------

    const postApiUrl = slug ? `/api/wp/posts?slug=${slug}&_embed` : null;
    const { data, error } = useSWR(postApiUrl, fetcher, { fallbackData: [initialPost] });

    const scrollInstanceRef = useRef(null);
    const post = data?.[0] || initialPost; // Define post once here





    // --- Function to handle the vote submission ---
    const handleVote = async (voteType) => {
        if (!post || hasVoted) return;

        // Synchronously block rapid double clicks before React state flushes
        if (sessionStorage.getItem(`voting_lock_${post.id}`)) return;
        sessionStorage.setItem(`voting_lock_${post.id}`, 'true');

        const prevLikes = likes;
        const prevDislikes = dislikes;

        // 1. Optimistic UI update
        if (voteType === 'like') {
            setLikes(l => l + 1);
        } else {
            setDislikes(d => d + 1);
        }
        setHasVoted(true);

        // 2. Network Request
        try {
            const response = await fetch(VOTE_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    post_id: post?.id,
                    vote_type: voteType,
                }),
            }).catch(e => {
                // Manually catch TypeErrors to prevent Next.js from surfacing it 
                // as an unhandled boundary error.
                return { ok: false, status: 503, json: async () => ({ success: false, message: 'Network disconnected' }) };
            });

            if (!response.ok) {
                throw new Error('Voting API failed to respond properly');
            }

            const data = await response.json();

            if (data?.success) {
                // Sync with server source of truth
                setLikes(data.likes);
                setDislikes(data.dislikes);

                // Only persist into localStorage on complete success
                localStorage.setItem(`ignite_vote_${post.id}`, voteType);
                sessionStorage.removeItem(`voting_lock_${post.id}`);
                return; // Exit point on success
            }
            throw new Error(data?.message || 'API returned unsuccessful response');
        } catch (error) {
            // Intentionally omit console.error(error) to prevent Next.js Error Overlay hijacking
            console.warn('API Interaction warning:', error.message);

            // Revert on failure
            setLikes(prevLikes);
            setDislikes(prevDislikes);
            setHasVoted(false);
            sessionStorage.removeItem(`voting_lock_${post.id}`);

            alert(`Could not submit vote: ${error.message || 'Network error'}`);
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
            window.locomotiveScrollInstance = scroll; // Make scroll instance globally available for the inner component
        };

        if (typeof window !== "undefined") {
            initScroll();
        }

        return () => {
            scrollInstanceRef.current?.destroy();
            scrollInstanceRef.current = null;
            if (typeof window !== "undefined") {
                delete window.locomotiveScrollInstance;
            }
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
            // Check for the custom fields added by register_rest_field from the new WP API
            const initialCounts = post.ignite_vote_counts || { likes: 0, dislikes: 0 };
            setLikes(initialCounts.likes);
            setDislikes(initialCounts.dislikes);

            // Check if user has already voted on this device
            const storedVote = localStorage.getItem(`ignite_vote_${post.id}`);
            if (storedVote) {
                setHasVoted(true);
            } else {
                setHasVoted(false);
            }

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

    // Ensure server/client match perfectly to avoid Hydration Mismatches
    const postUrl = `https://ignitetraininginstitute.com${router.asPath}`;
    const postTitle = post.title.rendered.replace(/<\/?[^>]+(>|$)/g, "");

    // --- Styling Classes for Buttons ---
    // (Removed legacy SVG button CSS generators)

    const postTags = post._embedded?.['wp:term']?.find(term => term[0]?.taxonomy === 'post_tag') || [];
    const keywordsArray = postTags.map(tag => tag.name);
    if (yoastData?.focuskw) keywordsArray.unshift(yoastData.focuskw);
    const seoKeywords = keywordsArray.join(', ');

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
                keywords={seoKeywords}
            />
            {/* Additional manual tags if needed (e.g. article specific) */}
            <Head>
                <meta property="og:type" content="article" key="og-type" />
            </Head>

            <section className="post-detail-section py-5" data-scroll data-scroll-section>
                <div className="container blog-detail-container" >
                    <h1 className="mb-4 display-4 main-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    <div className="post-meta-wrapper mb-4">
                        <div className="meta-col-left">
                            <div className="meta-item meta-published">
                                <span>Published on {publishedDate}</span>
                            </div>
                            {updatedDate && (
                                <>
                                    <span className="post-date-separator mx-2 d-none d-md-inline">|</span>
                                    <div className="meta-item meta-updated">
                                        <span>Updated on {updatedDate}</span>
                                    </div>
                                </>
                            )}
                            <div className="meta-item d-md-none meta-author mt-2">
                                <span>By <a href="#author-part" style={{ color: "#233467", textDecoration: "underline" }}>{authorName}</a></span>
                            </div>
                        </div>
                        <span className="post-date-separator mx-2 d-none d-md-inline">|</span>

                        {post.reading_time && (
                            <div className="post-reading-time desktop-only text-start text-md-center" style={{ fontWeight: "600", color: "#233467" }}>
                                <span style={{ textTransform: 'capitalize' }}>⏱ {post.reading_time}</span>
                            </div>
                        )}
                        <span className="post-date-separator mx-2 d-none d-md-inline">|</span>

                        <div className="meta-col-right flex-md-row align-items-md-center">
                            <div className="meta-item meta-author d-none d-md-block">
                                <span>By <a href="#author-part" style={{ color: "#233467", textDecoration: "underline" }}>{authorName}</a></span>
                            </div>

                            {post.reading_time && (
                                <div className="post-reading-time d-block d-md-none mb-2" style={{ fontSize: "12px", fontWeight: "600", color: "#233467" }}>
                                    <span style={{ textTransform: 'capitalize' }}>⏱ {post.reading_time}</span>
                                </div>
                            )}

                            <div className="meta-item meta-share d-flex align-items-center gap-2">
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
                        </div>
                    </div>



                    {featuredImage && (
                        <div className="text-center image-feature w-100">
                            <Image
                                src={featuredImage}
                                alt={post.title.rendered}
                                className="img-fluid gif-4"
                                style={{
                                    width: 'auto',
                                    height: 'auto',
                                    maxHeight: '800px',
                                    maxWidth: '100%',
                                    borderRadius: '8px'
                                }}
                                width={1200}
                                height={800}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 1200px"
                                priority
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
                            <div className="helpful-block d-flex align-items-center flex-wrap mt-4 mb-4 gap-3 bg-light p-3 rounded shadow-sm border" id='author-part'>
                                <span className="fw-bold text-dark me-2" style={{ fontSize: '18px' }}>Was This Page Helpful?</span>

                                {/* Like Button */}
                                <button
                                    onClick={() => handleVote('like')}
                                    disabled={!post || hasVoted}
                                    style={{
                                        cursor: (!post || hasVoted) ? 'not-allowed' : 'pointer',
                                        opacity: (!post || hasVoted) ? 0.6 : 1,
                                        backgroundColor: '#A3CAF5',
                                        border: '1px solid #1f2d61',
                                        color: '#1f2d61',
                                        fontWeight: '600',
                                        padding: '8px 16px',
                                        borderRadius: '24px',
                                        transition: 'all 0.2s',
                                        outline: 'none'
                                    }}
                                    onMouseOver={(e) => { if (!hasVoted) e.currentTarget.style.backgroundColor = '#82b5eb' }}
                                    onMouseOut={(e) => { if (!hasVoted) e.currentTarget.style.backgroundColor = '#A3CAF5' }}
                                >
                                    👍 {likes} {likes === 1 ? 'Like' : 'Likes'}
                                </button>

                                {/* Dislike Button */}
                                <button
                                    onClick={() => handleVote('dislike')}
                                    disabled={!post || hasVoted}
                                    style={{
                                        cursor: (!post || hasVoted) ? 'not-allowed' : 'pointer',
                                        opacity: (!post || hasVoted) ? 0.6 : 1,
                                        backgroundColor: '#E7F6FF',
                                        border: '1px solid #1f2d61',
                                        color: '#1f2d61',
                                        fontWeight: '600',
                                        padding: '8px 16px',
                                        borderRadius: '24px',
                                        transition: 'all 0.2s',
                                        outline: 'none'
                                    }}
                                    onMouseOver={(e) => { if (!hasVoted) e.currentTarget.style.backgroundColor = '#cce7fb' }}
                                    onMouseOut={(e) => { if (!hasVoted) e.currentTarget.style.backgroundColor = '#E7F6FF' }}
                                >
                                    👎 {dislikes} {dislikes === 1 ? 'Dislike' : 'Dislikes'}
                                </button>

                                {hasVoted && (
                                    <span className="ms-auto text-success" style={{ fontSize: '14px', fontWeight: '500', color: '#4CAF50' }}>
                                        Thanks for your feedback!
                                    </span>
                                )}
                            </div>
                            {/* --- END UPDATED: Like/Dislike Block --- */}
                            <div className="author-bio-section" >
                                <div className="author-bio-image">
                                    <img src="/images/sumit.webp" alt="Author image" />
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
                                {/* <div dangerouslySetInnerHTML={{ __html: getSidebarHtmlImage() }} /> */}

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