import React from "react";
import SharedBlog from "../SharedBlog";

const Blog = ({ blogData }) => {
    return (
        <SharedBlog
            title="Everything You Need To Learn, Improve & Succeed"
            blogData={blogData}
        />
    );
};

export default Blog;