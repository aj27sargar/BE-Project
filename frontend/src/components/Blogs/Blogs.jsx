import React, { useEffect, useState } from "react";
import blogData from "../context/blogs.json"; // Import JSON data
import { useNavigate } from "react-router-dom";
import "./Blogs.css";

const Blogs = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const navigate = useNavigate();

  // Fetch news articles using the News API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=2e1432c2fba64d25b0ce167f7cce5318"
        );
        const data = await response.json();
        setNewsArticles(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  // Navigate to blog detail page
  const handleReadMore = (blog) => {
    navigate("/blog-detail", { state: { blog } });
  };

  return (
    <div className="blog-container">
      <h1>Blogs</h1>
      <div className="blogs-section">
        {blogData.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-description">{blog.description}</p>
            <button
              className="blog-button"
              onClick={() => handleReadMore(blog)}
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      <h1>Latest News</h1>
      <div className="news-section">
        {newsArticles.map((article, index) => (
          <div key={index} className="news-card">
            <img
              src={article.urlToImage || "https://via.placeholder.com/800"}
              alt={article.title}
              className="news-image"
            />
            <h2 className="news-title">{article.title}</h2>
            <p className="news-description">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="news-button"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
