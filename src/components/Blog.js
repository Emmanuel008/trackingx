import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How To Fix Broken Back Glass On Your Phone",
      date: "5 AUG 2023",
      comments: "02 COMMENTS",
      image: "/assests/img/moja.jpg"
    },
    {
      id: 2,
      title: "How To Fix Broken Screen On Your Laptop",
      date: "3 AUG 2023",
      comments: "05 COMMENTS",
      image: "/assests/img/moja.jpg"
    },
    {
      id: 3,
      title: "What Is The Best Affordable Android Phone In 2023?",
      date: "1 AUG 2023",
      comments: "08 COMMENTS",
      image: "/assests/img/moja.jpg"
    }
  ];

  return (
    <section className="blog">
      <div className="blog-container">
        {/* Header */}
        <div className="blog-header">
          <div className="blog-subtitle">
            <div className="subtitle-line"></div>
            <span>FROM OUR BLOG</span>
            <div className="subtitle-line"></div>
          </div>
          <h2 className="blog-title">
            News And Articles
          </h2>
          <p className="blog-description">
            Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat nulla dolor atur with Lorem ipsum is simply
          </p>
        </div>

        {/* Blog Cards */}
        <div className="blog-cards">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-image-container">
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="blog-image-overlay">
                  <div className="overlay-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <line x1="12" y1="5" x2="12" y2="19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="5" y1="12" x2="19" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="blog-content">
                <div className="blog-meta">
                  <div className="meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                      <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                      <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>{post.date}</span>
                  </div>
                  <div className="meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{post.comments}</span>
                  </div>
                </div>
                
                <h3 className="blog-card-title">{post.title}</h3>
                
                <button className="blog-read-more">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll to Top Button */}
        <button className="scroll-to-top">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M18 15l-6-6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Blog;
