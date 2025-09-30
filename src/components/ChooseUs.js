import React from 'react';
import './ChooseUs.css';

const ChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Warranty Service",
      description: "Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Customer Service",
      description: "Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="18" y="5" width="4" height="2" rx="1" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Secured Device",
      description: "Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 9h8M8 13h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 7l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "No Virus Threat",
      description: "Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 9h8M8 13h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 1v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 1l2 2-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="18" cy="6" r="1" fill="currentColor"/>
        </svg>
      ),
      isHighlighted: true
    }
  ];

  return (
    <section className="choose-us">
      <div className="choose-us-container">
        {/* Header */}
        <div className="choose-us-header">
          <div className="choose-us-subtitle">
            <div className="subtitle-line"></div>
            <span>WHY CHOOSE US</span>
            <div className="subtitle-line"></div>
          </div>
          <h2 className="choose-us-title">
            Gadget Repair For Everyone
          </h2>
          <p className="choose-us-description">
            Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat nulla dolor atur with Lorem ipsum is simply
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="choose-us-cards">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`choose-us-card ${feature.isHighlighted ? 'highlighted' : ''}`}
            >
              <div className="card-icon">
                {feature.icon}
              </div>
              <div className="card-content">
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="choose-us-cta">
          <p className="cta-text">
            Get proper services from us <span className="cta-highlight">guideline and knowledge</span>
          </p>
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

export default ChooseUs;
