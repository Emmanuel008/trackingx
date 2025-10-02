import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="12" rx="2" stroke="white" strokeWidth="2"/>
              <path d="M7 8h10M7 12h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 2v2M12 20v2M4 12H2M22 12h-2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="logo-text">Fixnix</span>
        </Link>

        {/* Navigation Menu */}
        <div className="navbar-menu">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/about" className="nav-link">ABOUT</Link>
          <Link to="/services" className="nav-link">SERVICES</Link>
          <Link to="/blog" className="nav-link">BLOG</Link>
          <a href="#contact" className="nav-link">CONTACT</a>
        </div>

        {/* Right Side Contact */}
        <div className="navbar-right">
          <div className="navbar-icons">
            <div className="phone-section">
              <div className="phone-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" fill="white"/>
                </svg>
              </div>
              <div className="phone-text">
                <span className="call-text">Call Anytime</span>
                <span className="phone-number">+255625313162</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
