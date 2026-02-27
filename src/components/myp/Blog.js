import React from "react";
import SharedBlog from "../SharedBlog";

const Blog = ({ blogData }) => {
    return (
        <SharedBlog
            title="Insights to Help You Understand, Improve, & Succeed"
            blogData={blogData}
        />
    );
};

export default Blog;