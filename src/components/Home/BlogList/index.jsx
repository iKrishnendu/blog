import React from "react";
import BlogItem from "./BlogItem";
import "./style.css";

const BlogList = ({ blogs }) => {
  return (
    <div className="blogList-wrap">
      {blogs.map((blog) => (
        <BlogItem blog={blog} id={blog.id} />
      ))}
    </div>
  );
};

export default BlogList;