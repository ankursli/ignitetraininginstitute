import React from "react";
import SharedBlog from "../SharedBlog";

const Blog = ({ blogData }) => {
    return (
        <SharedBlog
            title="Smarter Learning Starts With The Right Insights"
            blogData={blogData}
        />
    );
};

export default Blog;