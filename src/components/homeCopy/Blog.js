import React from "react";
import SharedBlog from "../SharedBlog";

const Blog = ({ blogData }) => {
    return (
        <SharedBlog
            blogData={blogData}
            title="Explore Expert Insights, Study Tips, & Success Stories"
        />
    );
};

export default Blog;