import React from "react";
import SharedBlog from "../SharedBlog";

const Blog = ({ blogData }) => {
    return (
        <SharedBlog
            title="Explore Expert Tips, Study Hacks & Student Stories"
            blogData={blogData}
        />
    );
};

export default Blog;