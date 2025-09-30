import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Diagnostics', percentage: 84 },
    { name: 'Replacement', percentage: 95 },
    { name: 'Device Repair', percentage: 86 }
  ];

  return (
    <section className="skills">
      <div className="skills-container">
        {/* Left Column - Content */}
        <div className="skills-content">
          <div className="skills-header">
            <div className="skills-subtitle">
              <div className="subtitle-line"></div>
              <span>OUR SKILLS & EXPERTISE</span>
              <div className="subtitle-line"></div>
            </div>
            <h2 className="skills-title">
              We Specialize In Quick & Professional Repairs
            </h2>
          </div>

          <div className="skills-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Skill Progress Bars */}
          <div className="skills-progress">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-label">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className="skills-visual">
          <div className="skills-image-container">
            <img src="/assests/img/moja.jpg" alt="Technician Working" className="skills-image" />
            <div className="image-overlay"></div>
            
            {/* Red Information Box */}
            <div className="skills-info-box">
              <div className="info-text">
                <div className="info-line">Improve gadget</div>
                <div className="info-line">smartphone</div>
                <div className="info-line">laptop repair</div>
                <div className="info-line">services</div>
              </div>
            </div>

            {/* Play Button */}
            <div className="play-button">
              <div className="play-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7z" fill="white"/>
                </svg>
              </div>
              <div className="play-ripple"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button className="scroll-to-top">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M18 15l-6-6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  );
};

export default Skills;
