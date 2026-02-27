import React, { useEffect } from "react";
import he from "he";
import { useScroll } from "./LocomotiveScrollProvider";

const SharedBlog = ({ title, blogData: initialBlogData, locoScroll }) => {
    const [blogData, setBlogData] = React.useState(initialBlogData || []);
    const contextScroll = useScroll();
    const scrollInstance = locoScroll || contextScroll;

    // Optional: If initialBlogData is not provided (shouldn't happen with SSR), fetch on client
    useEffect(() => {
        if (!initialBlogData || initialBlogData.length === 0) {
            const fetchData = async () => {
                try {
                    // Use internal API proxy (/api/wp/...) to avoid CORS / "Failed to fetch" on client side
                    const res = await fetch("/api/wp/posts?per_page=3&_embed");
                    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

                    const data = await res.json();
                    if (!Array.isArray(data)) return;

                    const formatted = data.map((post) => {
                        const rawExcerpt = post.excerpt?.rendered?.replace(/<[^>]*>?/gm, "") || "";
                        const rawTitle = post.title?.rendered?.replace(/<[^>]*>?/gm, "") || "";
                        const decodedExcerpt = he.decode(rawExcerpt);
                        const decodedTitle = he.decode(rawTitle);
                        const trimmedExcerpt = decodedExcerpt.length > 80
                            ? decodedExcerpt.substring(0, decodedExcerpt.lastIndexOf(" ", 80)) + "..."
                            : decodedExcerpt;

                        return {
                            img: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/blog-placeholder.webp",
                            title: decodedTitle,
                            desc: trimmedExcerpt,
                            link: post.slug,
                        };
                    });
                    setBlogData(formatted);
                } catch (error) {
                    console.error("SharedBlog: Client-side fetch failed:", error);
                    // Silently fail or set empty data to avoid crashing the whole page
                    setBlogData([]);
                }
            };
            fetchData();
        }
    }, [initialBlogData]);

    useEffect(() => {
        if (blogData.length > 0 && scrollInstance) {
            if (typeof scrollInstance.update === 'function') {
                scrollInstance.update();
            } else if (scrollInstance.scroll && typeof scrollInstance.scroll.update === 'function') {
                scrollInstance.scroll.update();
            }
        }
    }, [blogData, scrollInstance]);

    return (
        <section className="blogSection">
            <div className="container">
                <div className="row gap-5 gap-lg-0">
                    <div className="col-12 col-lg-5 blogLeft">
                        <div
                            className="fade-in-section blogHeadingRow"
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <h2 className="SubHeading">BLOGS</h2>
                        </div>
                        <h3
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="fade-in-section blogTitle"
                            style={{ animationDelay: "0.2s" }}
                        >
                            {title}
                        </h3>
                        <div
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="fade-in-section blogSubtitle"
                            style={{ animationDelay: "0.3s" }}
                        >
                            Dive Into Our Signature Blogs
                        </div>
                        <a href="/blog" className="nodecoration">
                            <button
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="blogAllBtn buttonBlue fade-in-section"
                                style={{ animationDelay: "0.4s" }}
                            >
                                VIEW ALL BLOGS
                                <img
                                    src="/images/right-arrow-skyblue.webp"
                                    alt="arrow"
                                    width={24}
                                    height={24}
                                />
                            </button>
                        </a>
                    </div>

                    <div className="col-12 col-lg-7 blogRight">
                        {blogData &&
                            blogData.map((blog, i) => (
                                <div
                                    key={i}
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    className="fade-in-section blogCard"
                                    style={{ animationDelay: "0.2s" }}
                                >
                                    <a href={`/blog/${blog.link}`} className="nodecoration"><img
                                        src={blog.img}
                                        alt="blog"
                                        data-scroll
                                        data-scroll-class="is-clipped"
                                        data-scroll-repeat="true"
                                        data-scroll-offset="-10%"
                                        className="blogImg"
                                        width={blog.width}
                                        height={blog.height}
                                    /></a>
                                    <div className="blogCardContent">
                                        <div className="blogCardTitle">{blog.title}</div>
                                        <div className="blogCardDesc">{blog.desc}</div>
                                        <span className="blogCardLine"></span>
                                        <a href={`/blog/${blog.link}`} className="nodecoration">
                                            <button className="blogReadMoreBtn buttonSkyBlue">
                                                READ MORE
                                                <span className="blogReadMoreArrow">
                                                    <img
                                                        src="/images/right-arrow-blue.webp"
                                                        alt="arrow"
                                                        width={20}
                                                        height={20}
                                                    />
                                                </span>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            ))}
                    </div>

                    <a href="/blog" className="nodecoration d-lg-none">
                        <button
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="blogAllBtnmobile buttonBlue fade-in-section"
                            style={{ animationDelay: "0.4s" }}
                        >
                            VIEW ALL BLOGS
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
        </section>
    );
};

export default SharedBlog;
