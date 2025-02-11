import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Blogs.css"; // Ensure this includes your CSS for styles
import blogData from "../Blogs/blogs.json"; // Ensure this path is correct

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    // Load blogs from JSON file
    setBlogs(blogData);
  }, []);

  // Navigate to blog detail page
  const handleReadMore = (blogId) => {
    navigate(`/blog-detail/${blogId}`); // Pass blogId in URL
  };

  return (
    <div className="blog-container">
      <h1>Blogs</h1>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog._id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-description">{blog.description}</p>
            <button
              className="blog-button"
              onClick={() => handleReadMore(blog._id)}
            >
              Read More
            </button>
          </div>
        ))
      ) : (
        <p>Loading blogs...</p>
      )}
    </div>
  );
};

export default Blogs;
