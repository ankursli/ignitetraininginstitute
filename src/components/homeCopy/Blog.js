import React, { useEffect } from "react";
import he from "he";
import { useScroll } from "../LocomotiveScrollProvider";

// Import CSS Module
import styles from "@/styles/home-copy/Blog.module.css";

const fetchBlogs = async () => {
    const res = await fetch(
        "https://api.ignitetraininginstitute.com/wp-json/wp/v2/posts?per_page=3&_embed"
    );
    const data = await res.json();
    return data;
};

const createBlogData = async () => {
    const data = await fetchBlogs();

    const formattedBlogs = data.map((post) => {
        const rawExcerpt = post.excerpt.rendered.replace(/<[^>]*>?/gm, "");
        const rawTitle = post.title.rendered.replace(/<[^>]*>?/gm, "");

        const decodedExcerpt = he.decode(rawExcerpt);
        const decodedTitle = he.decode(rawTitle);

        const trimmedExcerpt =
            decodedExcerpt.length > 80
                ? decodedExcerpt.substring(0, decodedExcerpt.lastIndexOf(" ", 80)) + "..."
                : decodedExcerpt;

        return {
            img: post._embedded["wp:featuredmedia"]?.[0]?.source_url || "/images/blog-placeholder.webp",
            title: decodedTitle,
            desc: trimmedExcerpt,
            link: post.slug,
        };
    });

    return formattedBlogs;
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
    const [blogData, setBlogData] = React.useState(staticBlogs);
    const scrollInstance = useScroll();

    useEffect(() => {
        const fetchData = async () => {
            const data = await createBlogData();
            setBlogData(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (blogData.length > 0) {
            if (scrollInstance && typeof scrollInstance.update === 'function') {
                scrollInstance.update();
            }
        }
    }, [blogData, scrollInstance]);

    return (
        <section className={styles.blogSection} data-scroll-section>
            <div className="container">
                <div className="row gap-5 gap-lg-0">
                    <div className={`col-12 col-lg-5 ${styles.blogLeft}`}>
                        <div
                            className={`fade-in-section ${styles.blogHeadingRow}`}
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
                            className={`fade-in-section ${styles.blogTitle}`}
                            style={{ animationDelay: "0.2s" }}
                        >
                            Explore Expert Insights, Study Tips, & Success Stories
                        </h3>
                        <h4
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className={`fade-in-section ${styles.blogSubtitle}`}
                            style={{ animationDelay: "0.3s" }}
                        >
                            Dive Into Our Signature Blogs
                        </h4>
                        <a href="/blog" className="nodecoration mobile-hide">
                            <button
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className={`${styles.blogAllBtn} buttonBlue fade-in-section`}
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
                        {blogData &&
                            blogData.map((blog, i) => (
                                <div
                                    key={i}
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    className={`fade-in-section ${styles.blogCard}`}
                                    style={{ animationDelay: "0.2s" }}
                                >
                                    <a href={`/blog/${blog.link}`} className="nodecoration">
                                        <img
                                            src={blog.img}
                                            alt="blog"
                                            data-scroll
                                            data-scroll-class="is-clipped"
                                            data-scroll-repeat="true"
                                            data-scroll-offset="-10%"
                                            className={styles.blogImg}
                                        />
                                    </a>
                                    <div className={styles.blogCardContent}>
                                        <div className={styles.blogCardTitle}>{blog.title}</div>
                                        <div className={styles.blogCardDesc}>{blog.desc}</div>
                                        <span className={styles.blogCardLine}></span>
                                        <a href={`/blog/${blog.link}`} className="nodecoration">
                                            <button className={`${styles.blogReadMoreBtn} buttonSkyBlue`}>
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
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className={`${styles.blogAllBtnmobile} buttonBlue fade-in-section`}
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