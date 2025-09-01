import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <div className="experience-section">
      <div className="experience-section__content">
        <div className="experience-section__text">
          <h2 className="experience-section__title">Experience IntelliContract</h2>
          <p className="experience-section__subtitle">
            Smarter contract intelligence that grows with your business.
          </p>
        </div>

        <div className="experience-section__buttons">
          <button className="experience-section__btn experience-section__btn--outline">
            Request a Demo
          </button>
          <button className="experience-section__btn experience-section__btn--gradient">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
