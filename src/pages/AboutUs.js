import React from 'react';
import mojaImage from '../assets/img/moja.jpg';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <section 
        className="about-hero"
        style={{ backgroundImage: `url(${mojaImage})` }}
      >
        <div className="about-hero-overlay">
          <div className="about-hero-content">
            <div className="breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-separator">{'//'}</span>
              <span>About company</span>
            </div>
            <h1 className="about-hero-title">About company</h1>
            <p className="about-hero-subtitle">
              Professional Smartphone Laptop Repair Services in Germany Since 2000
            </p>
          </div>
        </div>
      </section>
      {/* Quality Repair Section */}
      <section className="quality-repair">
        <div className="quality-container">
          <div className="quality-content">
            {/* Left Column - Visuals */}
            <div className="quality-visual">
              <div className="technician-image-container">
                <img src={mojaImage} alt="Technician Working" className="technician-image" />
                <div className="stats-overlay">                
                </div>
              </div>
              
              <div className="connecting-line"></div>
            </div>

            {/* Right Column - Content */}
            <div className="quality-text">
              <div className="quality-header">
                <div className="quality-subtitle">
                  <div className="subtitle-line"></div>
                  <span>QUALITY REPAIR</span>
                </div>
                <h2 className="quality-title">
                  We Can Fix It Almost As Fast As You Can Break It.
                </h2>
              </div>

              <p className="quality-description">
                Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore
              </p>

              <ul className="quality-features">
                <li className="feature-item">
                  <div className="feature-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>WE ALWAYS PUT QUALITY FIRST</span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="9" cy="7" r="4" stroke="#ff0000" strokeWidth="2"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>CUSTOMER SATISFACTION IS ABSOLUTE</span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12l2 2 4-4" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>FAST AND QUALITY WORK</span>
                </li>
              </ul>

              <p className="quality-conclusion">
                Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat nulla dolor atur with Lorem ipsum is simply free text market web bites eius mod ut labore duis aute irure pari
              </p>

              <button className="quality-cta-button">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Experience Section */}
      <section className="about-experience">
        <div className="experience-container">
          {/* Header */}
          <div className="experience-header">
            <div className="experience-subtitle">
              <div className="subtitle-line"></div>
              <span>ABOUT EXPERIENCE</span>
              <div className="subtitle-line"></div>
            </div>
            <h2 className="experience-title">
              We Have Than 20 Years Experience in Gadget Smartphone & Laptop Repair Services
            </h2>
          </div>

          {/* Service Cards */}
          <div className="experience-cards">
            <div className="experience-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2"/>
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="card-content">
                <h3 className="card-title">Quality Services</h3>
                <p className="card-description">
                  Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

            <div className="experience-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="card-content">
                <h3 className="card-title">Professional Team</h3>
                <p className="card-description">
                  Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

            <div className="experience-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="card-content">
                <h3 className="card-title">24 Hour Support</h3>
                <p className="card-description">
                  Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="experience-stats">
            <div className="stat-item">
              <div className="stat-number">
                <span className="number">20</span>
                <span className="symbol">+</span>
              </div>
              <div className="stat-label">Glorious Years</div>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item">
              <div className="stat-number">
                <span className="number">2k</span>
                <span className="symbol">+</span>
              </div>
              <div className="stat-label">Happy Customer</div>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item">
              <div className="stat-number">
                <span className="number">5k</span>
                <span className="symbol">+</span>
              </div>
              <div className="stat-label">Service Complete</div>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item">
              <div className="stat-number">
                <span className="number">99</span>
                <span className="symbol">%</span>
              </div>
              <div className="stat-label">Satisfactions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Who We Are Section */}
      <section className="mission-vision">
        <div className="mission-container">
          <div className="mission-cards">
            <div className="mission-card">
              <div className="mission-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="mission-title">Who We Are</h3>
              <p className="mission-description">
                Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore fugiat nulla dolor atur
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="mission-title">Our Vision</h3>
              <p className="mission-description">
                Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore fugiat nulla dolor atur
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="mission-title">Our Mission</h3>
              <p className="mission-description">
                Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore fugiat nulla dolor atur
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
