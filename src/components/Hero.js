import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src="/assests/img/moja.jpg" alt="Gadget Repair" className="hero-image" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Have Broken Gadget ? We Can Fix Anything
          </h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="hero-button">
            Discover More
          </button>
        </div>
        
        <div className="hero-navigation">
          <button className="nav-arrow nav-arrow-up">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M18 15l-6-6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="nav-arrow nav-arrow-down">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
