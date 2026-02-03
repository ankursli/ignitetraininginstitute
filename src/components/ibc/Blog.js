import React from "react";
import SharedBlog from "../SharedBlog";

const Blog = () => {
    return (
        <>
            <SharedBlog
                title="Expert Insights To Help You Learn, Grow & Excel"
            />
            <style jsx global>{`
                .blogImg {
                    width: 300px !important;
                    height: 200px !important;
                    object-fit: cover;
                    border-radius: 24px;
                }
                @media (max-width: 991px) {
                    .blogImg {
                        width: 250px !important;
                        height: 180px !important;
                    }
                }
                @media (max-width: 767px) {
                    .blogImg {
                        width: 100% !important;
                        height: 220px !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Blog;