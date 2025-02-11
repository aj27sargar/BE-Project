import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../Blogs/blogs.json";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b._id === id);

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div className="blog-detail-container">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <p>{blog.content}</p>
      <p>Author: {blog.author}</p>
    </div>
  );
};

export default BlogDetail;
