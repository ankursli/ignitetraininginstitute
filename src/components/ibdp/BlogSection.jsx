import React from "react";


const blogData = [
    {
        img: "/images/blogImage1.webp",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        desc: "Choosing us means partnering with experienced coaches who are...",
    },
    {
        img: "/images/blogImage2.webp",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        desc: "Choosing us means partnering with experienced coaches who are...",
    },
    {
        img: "/images/blogImage3.webp",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        desc: "Choosing us means partnering with experienced coaches who are...",
    },
];

const BlogSection = () => {
    return (
        <section className="blogSection">
            <div className="container">
                <div className="row gap-5 gap-lg-0">
                    <div className="col-12 col-lg-4 blogLeft">
                        <div
                            className="fade-in-section blogHeadingRow"
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <span className="SubHeading">BLOGS</span>
                        </div>
                        <h2
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="fade-in-section blogTitle"
                            style={{ animationDelay: "0.2s" }}
                        >
                            LOREM IPSUM DOLOR
                            SIT AMET, CONSECTETUR
                            <span className="blogHighlight"> ADIPISCING</span>
                        </h2>
                        <div
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="fade-in-section blogSubtitle"
                            style={{ animationDelay: "0.3s" }}
                        >
                            LOREM IPSUM DOLOR SIT AMET
                        </div>
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
                                alt="ibdp tutor in dubai"
                                width={24}
                                height={24}
                            />
                        </button>
                    </div>

                    <div className="col-12 col-lg-8 blogRight">
                        {blogData.map((blog, i) => (
                            <div
                                key={i}
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section blogCard"
                                style={{ animationDelay: "0.2s" }}
                            >
                                <img
                                    src={blog.img}
                                    alt="ibdp tutor in dubai"
                                    data-scroll
                                    data-scroll-class="is-clipped"
                                    data-scroll-repeat="true"
                                    data-scroll-offset="-10%"
                                    className="blogImg"
                                />
                                <div className="blogCardContent">
                                    <div className="blogCardTitle">{blog.title}</div>
                                    <div className="blogCardDesc">{blog.desc}</div>
                                    <span className="blogCardLine"></span>
                                    <button className="blogReadMoreBtn buttonSkyBlue">
                                        READ MORE
                                        <span className="blogReadMoreArrow">
                                            <img
                                                src="/images/right-arrow-blue.webp"
                                                alt="ibdp tutor in dubai"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

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
                            alt="ibdp tutor in dubai"
                            width={24}
                            height={24}
                        />
                    </button>
                </div>
            </div>
        </section>

    );
};

export default BlogSection;