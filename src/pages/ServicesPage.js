import React from 'react';
import mojaImage from '../assets/img/moja.jpg';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section 
        className="services-hero"
        style={{ backgroundImage: `url(${mojaImage})` }}
      >
        <div className="services-hero-overlay">
          <div className="services-hero-content">
            <div className="breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-separator">{'//'}</span>
              <span>Our services</span>
            </div>
            <h1 className="services-hero-title">Our services</h1>
            <p className="services-hero-subtitle">
              Professional Smartphone Laptop Repair Services in Germany Since 2000
            </p>
            <a href="#services" className="hero-cta">
              Explore Services
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="why-choose-container">
          <div className="why-choose-header">
            <div className="why-choose-subtitle">
              <div className="subtitle-line"></div>
              <span>WHY CHOOSE US</span>
              <div className="subtitle-line"></div>
            </div>
            <h2 className="why-choose-title">Gadget Repair For Everyone</h2>
            <p className="why-choose-description">
              Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat nulla dolor atur with Lorem ipsum is simply
            </p>
          </div>

          <div className="why-choose-cards">
            <div className="why-choose-card">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="card-title">Warranty Service</h3>
              <p className="card-description">
                Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat
              </p>
            </div>

            <div className="why-choose-card">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="card-title">Customer Service</h3>
              <p className="card-description">
                Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat
              </p>
            </div>

            <div className="why-choose-card">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="#ff0000" strokeWidth="2"/>
                  <line x1="8" y1="21" x2="16" y2="21" stroke="#ff0000" strokeWidth="2"/>
                  <line x1="12" y1="17" x2="12" y2="21" stroke="#ff0000" strokeWidth="2"/>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12l2 2 4-4" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="card-title">Secured Device</h3>
              <p className="card-description">
                Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat
              </p>
            </div>

            <div className="why-choose-card featured">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="#ff0000" strokeWidth="2"/>
                  <line x1="8" y1="21" x2="16" y2="21" stroke="#ff0000" strokeWidth="2"/>
                  <line x1="12" y1="17" x2="12" y2="21" stroke="#ff0000" strokeWidth="2"/>
                  <path d="M12 9v3m0 0v3m0-3h3m-3 0H9" stroke="#ff0000" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M20 7l-2 2m0 0l-2-2m2 2V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4l2-2m0 0l2 2" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="card-title">No Virus Threat</h3>
              <p className="card-description">
                Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat
              </p>
            </div>
          </div>

          <div className="why-choose-footer">
            <p className="footer-text">
              Get proper services from us <span className="highlight">guideline and knowledge</span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="services-main-content" id="services">
        <div className="services-container">
          <div className="services-content">
            <h2 className="services-section-title">Our Repair Services</h2>
            <p className="services-text">
              We provide comprehensive repair services for all your electronic devices. Our experienced technicians use the latest tools and genuine parts to ensure your devices are restored to perfect working condition.
            </p>
            
            <div className="services-grid">
              <div className="service-item">
                <div className="service-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                    <line x1="8" y1="21" x2="16" y2="21" stroke="white" strokeWidth="2"/>
                    <line x1="12" y1="17" x2="12" y2="21" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="service-item-title">Smartphone Repair</h3>
                <p className="service-item-description">
                  Screen replacement, battery replacement, water damage repair, and more for all smartphone brands.
                </p>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                    <line x1="8" y1="21" x2="16" y2="21" stroke="white" strokeWidth="2"/>
                    <line x1="12" y1="17" x2="12" y2="21" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="service-item-title">Laptop Repair</h3>
                <p className="service-item-description">
                  Hardware repairs, software issues, keyboard replacement, and performance optimization.
                </p>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                    <line x1="8" y1="21" x2="16" y2="21" stroke="white" strokeWidth="2"/>
                    <line x1="12" y1="17" x2="12" y2="21" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="service-item-title">Tablet Repair</h3>
                <p className="service-item-description">
                  Screen repair, charging port replacement, and software troubleshooting for all tablet models.
                </p>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                    <line x1="8" y1="21" x2="16" y2="21" stroke="white" strokeWidth="2"/>
                    <line x1="12" y1="17" x2="12" y2="21" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="service-item-title">Desktop Repair</h3>
                <p className="service-item-description">
                  Hardware upgrades, virus removal, data recovery, and system optimization services.
                </p>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                    <line x1="8" y1="21" x2="16" y2="21" stroke="white" strokeWidth="2"/>
                    <line x1="12" y1="17" x2="12" y2="21" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="service-item-title">Smart Watch Repair</h3>
                <p className="service-item-description">
                  Screen replacement, battery repair, and water damage restoration for smartwatches.
                </p>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                    <line x1="8" y1="21" x2="16" y2="21" stroke="white" strokeWidth="2"/>
                    <line x1="12" y1="17" x2="12" y2="21" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="service-item-title">Data Recovery</h3>
                <p className="service-item-description">
                  Professional data recovery services for accidentally deleted or corrupted files.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ServicesPage;
