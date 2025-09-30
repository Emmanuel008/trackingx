import React from 'react';
import './Services.css';

const Services = () => {
  const serviceCards = [
    {
      id: 1,
      title: "Laptop Repair",
      description: "Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore fugiat nulla dolor atur",
      image: "/assests/img/moja.jpg"
    },
    {
      id: 2,
      title: "Phone Repair",
      description: "Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore fugiat nulla dolor atur",
      image: "/assests/img/moja.jpg"
    },
    {
      id: 3,
      title: "Tablet Repair",
      description: "Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore fugiat nulla dolor atur",
      image: "/assests/img/moja.jpg"
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <div className="services-subtitle">
            <div className="subtitle-line"></div>
            <span>OUR SERVICES</span>
            <div className="subtitle-line"></div>
          </div>
          <h2 className="services-title">
            Our Efficient Solution
          </h2>
          <p className="services-description">
            Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat nulla dolor atur with Lorem ipsum is simply
          </p>
        </div>

        {/* Service Cards */}
        <div className="services-cards">
          {serviceCards.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image-container">
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="service-image-overlay">
                  <div className="overlay-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <line x1="12" y1="5" x2="12" y2="19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="5" y1="12" x2="19" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button className="service-button">
                  Repair Now
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

export default Services;
