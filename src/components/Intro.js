import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-container">
        {/* Left Column - Image Section */}
        <div className="intro-image-section">
          <div className="image-background">
            <img src="/assests/img/moja.jpg" alt="Smartphone Repair" className="intro-image" />
            <div className="image-overlay"></div>
          </div>
          
          {/* Red Overlay Box */}
          <div className="red-quote-box">
            <div className="quote-text">
              <span className="quote-label">OUR GOAL:</span>
              <span className="quote-content">"We will fix it, till we make it"</span>
            </div>
          </div>
          
          {/* Dotted Pattern */}
          <div className="dotted-pattern-left"></div>
        </div>

        {/* Right Column - Content Section */}
        <div className="intro-content-section">
          {/* Dotted Pattern */}
          <div className="dotted-pattern-right"></div>
          
          <div className="intro-content">
            {/* Header */}
            <div className="intro-header">
              <div className="intro-subtitle">
                <div className="subtitle-line"></div>
                <span>OUR INTRODUCTION</span>
              </div>
              <h2 className="intro-title">
                Welcome To Smartphone & Laptop Repair Service Center
              </h2>
            </div>

            {/* Description */}
            <p className="intro-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Service Cards */}
            <div className="service-cards">
              <div className="service-card">
                <div className="service-content">
                  <h3 className="service-title">Repair Device</h3>
                  <p className="service-description">Lorem ipsum dolor sit amet at labore consectetur</p>
                </div>
              </div>

              <div className="service-card">
                <div className="service-content">
                  <h3 className="service-title">Replace Device</h3>
                  <p className="service-description">Lorem ipsum dolor sit amet at labore consectetur</p>
                </div>
              </div>
            </div>

            {/* Call to Action Button */}
            <button className="intro-cta-button">
              Contact Us
            </button>
          </div>

          {/* Scroll to Top Button */}
          <button className="scroll-to-top">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M18 15l-6-6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
