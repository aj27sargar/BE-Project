import React from 'react';
import { useLocation } from 'react-router-dom';

const BlogDetail = () => {
  const location = useLocation();
  const blog = location.state?.blog;

  if (!blog) {
    return <h2 style={styles.notFound}>Blog not found</h2>;
  }

  return (
    <div style={styles.blogDetailContainer}>
      <h1 style={styles.title}>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} style={styles.image} />
      <p style={styles.content}>{blog.content}</p>
      <p style={styles.author}>Author: {blog.author}</p>
    </div>
  );
};

// Inline CSS styles
const styles = {
  blogDetailContainer: {
    width: '80%',
    margin: '0 auto',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '15px',
  },
  image: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  content: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#555',
  },
  author: {
    fontSize: '1rem',
    color: '#888',
    marginTop: '15px',
  },
  notFound: {
    textAlign: 'center',
    fontSize: '1.5rem',
    color: 'red',
  },
};

export default BlogDetail;
