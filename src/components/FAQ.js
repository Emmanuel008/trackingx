import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); // First item is open by default

  const faqItems = [
    {
      id: 0,
      question: "Can you clean my phone or device?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 1,
      question: "Do you offer a warranty?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 2,
      question: "How Many Locations Do You Have?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 3,
      question: "Is there a charge for the loaner phone service?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        <div className="faq-content">
          {/* Left Column - Content */}
          <div className="faq-left">
            <div className="faq-header">
              <div className="faq-subtitle">
                <div className="subtitle-line"></div>
                <span>HAVE QUESTION?</span>
              </div>
              <h2 className="faq-title">
                Frequently Asked Question
              </h2>
            </div>
            
            <div className="faq-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <button className="faq-cta-button">
              Ask Questions Here
            </button>
          </div>

          {/* Right Column - Accordion */}
          <div className="faq-right">
            <div className="faq-accordion">
              {faqItems.map((item, index) => (
                <div key={item.id} className="faq-item">
                  <button
                    className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="question-text">{item.question}</span>
                    <span className="accordion-icon">
                      {activeIndex === index ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      )}
                    </span>
                  </button>
                  
                  {activeIndex === index && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
