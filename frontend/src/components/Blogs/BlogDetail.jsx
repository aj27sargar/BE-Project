import React from "react";
import { useLocation, Link } from "react-router-dom";

const BlogDetail = () => {
  const location = useLocation();
  const { blog } = location.state || { blog: {} };

  if (!blog || Object.keys(blog).length === 0) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-lg">
        Blog not found
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Blog Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-6">
          An in-depth look at the topic with comprehensive insights.
        </p>

        {/* Author and Publish Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
          <span>
            <strong>Author:</strong> {blog.author}
          </span>
          <span>Published on: {new Date().toLocaleDateString()}</span>
        </div>

        {/* Blog Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />

        {/* Blog Content */}
        <div className="text-gray-700 leading-relaxed">
          <p>{blog.content}</p>
        </div>

        {/* Back Button */}
        <div className="mt-6">
          <Link
            to="/blogs"
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition duration-200"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
