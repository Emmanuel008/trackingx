import React from 'react';
import './About.css';

const About = () => {
  const features = [
    {
      id: 0,
      title: "Quality Services",
      description: "Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1v6l3-3 3 3V1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 1,
      title: "Professional Team",
      description: "Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "24 Hour Support",
      description: "Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="about">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <div className="about-subtitle">
            <div className="subtitle-line"></div>
            <span>ABOUT EXPERIENCE</span>
            <div className="subtitle-line"></div>
          </div>
          <h2 className="about-title">
            We Have Than 20 Years Experience in Gadget Smartphone & Laptop Repair Services
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="about-cards">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="about-card"
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
      </div>
    </section>
  );
};

export default About;
