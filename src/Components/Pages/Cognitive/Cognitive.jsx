import React, { useState, useRef, useEffect } from "react";
import "./cognitive.css";
import entityImg from "../../../images/feature/entity-dark.svg";
import modelnImg from "../../../images/feature/modeln-dark.svg";
import chartImg from "../../../images/feature/chart-dark.svg";

const features = [
  {
    id: 1,
    title: "GenAI Entity Extraction",
    description:
      "Automatically extract critical contract fields using advanced Generative AI. Save time, reduce errors, and accelerate onboarding into Model N.",
    link: "#",
    image: entityImg,
  },
  {
    id: 2,
    title: "Model N Compatible Excel Output",
    description:
      "Export contract insights into Excel sheets formatted for Model N. Ensure a smooth, error-free onboarding process with structured data ready for integration.",
    link: "#",
    image: modelnImg,
  },
  {
    id: 3,
    title: "Natural Language Chat Interface",
    description:
      "Interact with your contracts using conversational AI. Ask questions in plain language and receive instant, accurate responses from your documents.",
    link: "#",
    image: chartImg,
  },
];

const Cognitive = () => {
  const [activeId, setActiveId] = useState(features[0].id);
  const [lineStyle, setLineStyle] = useState({ top: 0, height: 0 });
  const itemRefs = useRef([]);

  useEffect(() => {
    if (itemRefs.current[activeId]) {
      const el = itemRefs.current[activeId];
      setLineStyle({
        top: el.offsetTop,
        height: el.offsetHeight,
      });
    }
  }, [activeId]);

  const activeFeature = features.find((f) => f.id === activeId);

  return (
    <section className="features-tabs">
      <div className="cognitive-heading">
        <h5>Work smarter with AI-driven intelligence.</h5>
        <h3>Cognitive Tools</h3>
        <h4>
          From automated data extraction to natural conversations, IntelliContract
          <br /> empowers you to work smarter, not harder
        </h4>
      </div>

      <div className="features-tabs__container">
        {/* Left side (tab list) */}
        <div className="features-tabs__list">
          <div
            className="features-tabs__active-line"
            style={{
              top: `${lineStyle.top}px`,
              height: `${lineStyle.height}px`,
            }}
          />
          {features.map((feature) => (
            <div
              key={feature.id}
              ref={(el) => (itemRefs.current[feature.id] = el)}
              className={`features-tabs__item ${
                activeId === feature.id ? "active" : ""
              }`}
              onClick={() => setActiveId(feature.id)}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Right side (image mockup) */}
        <div className="features-tabs__image">
          <img src={activeFeature.image} alt={activeFeature.title} />
        </div>
      </div>
    </section>
  );
};

export default Cognitive;
