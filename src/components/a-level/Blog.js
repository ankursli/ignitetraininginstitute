import React from "react";
import SharedBlog from "../SharedBlog";

const Blog = ({ blogData }) => {
    return (
        <SharedBlog
            title="Study Smarter With Resources, Tips & Student Stories"
            blogData={blogData}
        />
    );
};

export default Blog;