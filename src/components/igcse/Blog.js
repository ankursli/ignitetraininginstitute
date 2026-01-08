import React, { useEffect, useState } from "react";
import he from "he";
import { useScroll } from "../LocomotiveScrollProvider";
import styles from "@/styles/bloginnerpage.module.css";

const fetchBlogs = async () => {
    const res = await fetch(
        "https://api.ignitetraininginstitute.com/wp-json/wp/v2/posts?per_page=3&_embed"
    );
    return res.json();
};

const createBlogData = async () => {
    const data = await fetchBlogs();

    return data.map((post) => {
        const rawExcerpt = post.excerpt.rendered.replace(/<[^>]*>?/gm, "");
        const rawTitle = post.title.rendered.replace(/<[^>]*>?/gm, "");

        const decodedExcerpt = he.decode(rawExcerpt);
        const decodedTitle = he.decode(rawTitle);

        const trimmedExcerpt =
            decodedExcerpt.length > 80
                ? decodedExcerpt.substring(0, decodedExcerpt.lastIndexOf(" ", 80)) + "..."
                : decodedExcerpt;

        return {
            img:
                post._embedded["wp:featuredmedia"]?.[0]?.source_url ||
                "/images/blog-placeholder.webp",
            title: decodedTitle,
            desc: trimmedExcerpt,
            link: post.slug,
        };
    });
};

const staticBlogs = [
    {
        img: "/images/blogImage1.webp",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        desc: "Choosing us means partnering with experienced coaches who are...",
        link: "/blogs",
    },
    {
        img: "/images/blogImage2.webp",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        desc: "Choosing us means partnering with experienced coaches who are...",
        link: "/blogs",
    },
    {
        img: "/images/blogImage3.webp",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        desc: "Choosing us means partnering with experienced coaches who are...",
        link: "/blogs",
    },
];

const Blog = () => {
    const [blogData, setBlogData] = useState(staticBlogs);
    const scrollRef = useScroll();

    useEffect(() => {
        createBlogData().then(setBlogData);
    }, []);

    useEffect(() => {
        if (blogData.length && scrollRef?.scroll) {
            scrollRef.scroll.update();
        }
    }, [blogData, scrollRef]);

    return (
        <section className={styles.blogSection}>
            <div className="container">
                <div className="row gap-5 gap-lg-0">
                    <div className={`col-12 col-lg-5 ${styles.blogLeft}`}>
                        <div
                            className={`fade-in-section ${styles.blogHeadingRow}`}
                            data-scroll
                            data-scroll-class="is-inview"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <h2 className="SubHeading">BLOGS</h2>
                        </div>

                        <h3
                            className={`fade-in-section ${styles.blogTitle}`}
                            data-scroll
                            data-scroll-class="is-inview"
                            style={{ animationDelay: "0.2s" }}
                        >
                            Everything You Need To Learn, Improve &amp; Succeed
                        </h3>

                        <div
                            className={`fade-in-section ${styles.blogSubtitle}`}
                            data-scroll
                            data-scroll-class="is-inview"
                            style={{ animationDelay: "0.3s" }}
                        >
                            Dive Into Our Signature Blogs
                        </div>

                        <a href="/blog" className="nodecoration">
                            <button
                                className={`${styles.blogAllBtn} buttonBlue fade-in-section`}
                                data-scroll
                                data-scroll-class="is-inview"
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

                    <div className={`col-12 col-lg-7 ${styles.blogRight}`}>
                        {blogData.map((blog, i) => (
                            <div
                                key={i}
                                className={`fade-in-section ${styles.blogCard}`}
                                data-scroll
                                data-scroll-class="is-inview"
                                style={{ animationDelay: "0.2s" }}
                            >
                                <a href={`/blog/${blog.link}`} className="nodecoration">
                                    <img
                                        src={blog.img}
                                        alt="blog"
                                        className={styles.blogImg}
                                        data-scroll
                                        data-scroll-class="is-clipped"
                                        data-scroll-offset="-10%"
                                    />
                                </a>

                                <div className={styles.blogCardContent}>
                                    <div className={styles.blogCardTitle}>{blog.title}</div>
                                    <div className={styles.blogCardDesc}>{blog.desc}</div>
                                    <span className={styles.blogCardLine}></span>

                                    <a href={`/blog/${blog.link}`} className="nodecoration">
                                        <button
                                            className={`${styles.blogReadMoreBtn} buttonSkyBlue`}
                                        >
                                            READ MORE
                                            <span className={styles.blogReadMoreArrow}>
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
                            className={`${styles.blogAllBtnmobile} buttonBlue fade-in-section`}
                            data-scroll
                            data-scroll-class="is-inview"
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

export default Blog;
