import React from 'react';
import mojaImage from '../assets/img/moja.jpg';
import './BlogPage.css';

const BlogPage = () => {

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Smartphone Repair Technology",
      excerpt: "Discover how AI and machine learning are revolutionizing the way we diagnose and repair smartphones, making the process faster and more accurate than ever before.",
      date: "15 December 2024",
      readTime: "8 min read",
      category: "Technology",
      featured: true,
      image: mojaImage
    },
    {
      id: 2,
      title: "5 Common Laptop Issues and How to Prevent Them",
      excerpt: "Learn about the most frequent laptop problems customers face and practical tips to keep your device running smoothly for years to come.",
      date: "12 December 2024",
      readTime: "6 min read",
      category: "Tips & Tricks",
      featured: false,
      image: mojaImage
    },
    {
      id: 3,
      title: "Water Damage Recovery: Success Stories",
      excerpt: "Real customer stories of devices that seemed beyond repair but were successfully restored by our expert technicians using advanced techniques.",
      date: "10 December 2024",
      readTime: "5 min read",
      category: "Success Stories",
      featured: false,
      image: mojaImage
    },
    {
      id: 4,
      title: "Choosing the Right Repair Service: A Complete Guide",
      excerpt: "Everything you need to know when selecting a repair service, from checking certifications to understanding warranties and pricing.",
      date: "8 December 2024",
      readTime: "7 min read",
      category: "Guide",
      featured: false,
      image: mojaImage
    },
    {
      id: 5,
      title: "Data Recovery: What You Need to Know",
      excerpt: "Understanding the data recovery process, when it's possible, and how to protect your valuable data before disaster strikes.",
      date: "5 December 2024",
      readTime: "9 min read",
      category: "Data Security",
      featured: false,
      image: mojaImage
    },
    {
      id: 6,
      title: "Mobile Device Security Best Practices",
      excerpt: "Essential security tips to protect your smartphone and tablet from malware, phishing, and other digital threats in today's connected world.",
      date: "3 December 2024",
      readTime: "6 min read",
      category: "Security",
      featured: false,
      image: mojaImage
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured).slice(0, 3);

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-overlay">
          <div className="blog-hero-content">
            <div className="breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-separator">{'//'}</span>
              <span>Blog</span>
            </div>
            <h1 className="blog-hero-title">Featured News</h1>
            <p className="blog-hero-subtitle">
              Stay updated with the latest insights, tips, and stories from our repair experts
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="featured-article">
        <div className="featured-container">
          <div className="featured-content">
            <div className="featured-image-container">
              <img src={featuredPost.image} alt={featuredPost.title} className="featured-image" />
              <div className="featured-category">
                {featuredPost.category}
              </div>
            </div>
            <div className="featured-text">
              <div className="featured-meta">
                <span className="featured-date">{featuredPost.date}</span>
                <span className="featured-separator">|</span>
                <span className="featured-read-time">{featuredPost.readTime}</span>
              </div>
              <h2 className="featured-title">{featuredPost.title}</h2>
              <p className="featured-excerpt">{featuredPost.excerpt}</p>
              <a href={`/blog/${featuredPost.id}`} className="featured-read-more">
                Read more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="blog-grid-section">
        <div className="blog-container">
          <h2 className="blog-grid-title">Latest Articles</h2>
          <div className="blog-grid">
            {regularPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-image-container">
                  <img src={post.image} alt={post.title} className="blog-card-image" />
                  <div className="blog-card-category">
                    {post.category}
                  </div>
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="blog-card-date">{post.date}</span>
                    <span className="blog-card-separator">|</span>
                    <span className="blog-card-read-time">{post.readTime}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <a href={`/blog/${post.id}`} className="blog-card-read-more">
                    Read more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default BlogPage;
