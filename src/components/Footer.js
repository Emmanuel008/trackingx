import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Column 1: Fixnix Brand */}
          <div className="footer-column">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="#ff0000" strokeWidth="2"/>
                    <line x1="8" y1="21" x2="16" y2="21" stroke="#ff0000" strokeWidth="2"/>
                    <line x1="12" y1="17" x2="12" y2="21" stroke="#ff0000" strokeWidth="2"/>
                    <path d="M8 9h8M8 13h6" stroke="#ff0000" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M6 6l2 2M8 6l-2 2" stroke="#ff0000" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="logo-text">
                  <span className="logo-fix">Fix</span>
                  <span className="logo-nix">nix</span>
                </div>
              </div>
              <p className="footer-description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur.
              </p>
              <h3 className="footer-heading">Stay Connected</h3>
              <div className="social-icons">
                <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="https://pinterest.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                    <line x1="8" y1="21" x2="16" y2="21" stroke="white" strokeWidth="2"/>
                    <line x1="12" y1="17" x2="12" y2="21" stroke="white" strokeWidth="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#blog" className="footer-link">Blog</a></li>
              <li><a href="#contact" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="footer-column">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-links">
              <li><a href="#smartphone-repair" className="footer-link">Smartphone Repair</a></li>
              <li><a href="#laptop-repair" className="footer-link">Laptop Repair</a></li>
              <li><a href="#desktop-repair" className="footer-link">Desktop Repair</a></li>
              <li><a href="#tablet-repair" className="footer-link">Tablet Repair</a></li>
              <li><a href="#smartwatch-repair" className="footer-link">Smart Watch Repair</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="footer-column">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#ff0000" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="#ff0000" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="contact-text">32 Main Street, Miami, Florida 19091, FL</span>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-text-group">
                  <span className="contact-text">666 888 0000</span>
                  <span className="contact-text">444 888 0000</span>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#ff0000" strokeWidth="2"/>
                    <polyline points="22,6 12,13 2,6" stroke="#ff0000" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="contact-text-group">
                  <span className="contact-text">needhelp@company.com</span>
                  <span className="contact-text">company@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
