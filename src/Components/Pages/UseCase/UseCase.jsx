import React, { useEffect, useRef } from 'react'
import './useCase.css'
import { gsap } from "gsap";
import pharmaImg from '../../../images/usecase/Pharma.svg'
import financeImg from '../../../images/usecase/Finance.svg'
import GovImg from '../../../images/usecase/Gov-Medical.svg'
import factoryImg from '../../../images/usecase/Manufacturing.svg'
import { ArrowLeft, ArrowRight } from 'lucide-react';

const cards = [
  {
    title: "Pharma Contracts",
    description:
      "AI-powered extraction tailored for pharmaceutical contracts, ensuring accuracy, compliance, and seamless Model N onboarding.",
    tags: ["Precision", "Accuracy", "Compliance"],
    image:pharmaImg
  },
  {
    title: "Finance & Legal",
    description:
      "Automate analysis of financial agreements and legal contracts, reducing risk and improving decision-making.",
    tags: ["Trust", "Reliability", "Confidence"],
    image:financeImg
  },
  {
    title: "Manufacturing Agreements",
    description:
      "Streamline supplier and vendor agreements with structured insights, faster reviews, and consistent version tracking.",
    tags: ["Efficiency", "Productivity"],
    image:factoryImg
  },
  {
    title: "Government Contracts",
    description:
      "Simplify tender evaluation with AI-driven data extraction, analytics, and ready records for audits.",
    tags: ["Compliance", "Transparency"],
    image:GovImg,
  },
];

function UseCase() {
   const trackRef = useRef(null);
  const containerRef = useRef(null);

  const cardWidth = 300;
  const gap = 20;
  const step = cardWidth + gap;

  const move = (direction) => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    const trackWidth = track.scrollWidth;
    const containerWidth = container.offsetWidth;
    const currentX = gsap.getProperty(track, "x") || 0;

    // ✅ Prevent movement if content fits
    if (trackWidth <= containerWidth) return;

    let newX = direction === "left" ? currentX + step : currentX - step;

    // ✅ Calculate max scroll limit
    const maxScroll = trackWidth - containerWidth;
    if (newX > 0) newX = 0;
    if (Math.abs(newX) > maxScroll) newX = -maxScroll;

    gsap.to(track, {
      x: newX,
      duration: 0.6,
      ease: "power2.out",
    });
  };
  return (
    <section id='useCases'>
        <div className='container-fluid px-0' style={{backgroundColor:'#161B26',paddingTop:'96px',paddingBottom:'96px'}}>
        <div className="container use-case-container p-0">
      <div className="use-case-headings">
        <div className='' style={{width:'70%'}}>
            <h5>Use Cases Across Industries</h5>
        <h6>
          IntelliContract is built for pharma today and designed to scale across
          industries tomorrow — adaptable to diverse data formats, workflows,
          and compliance needs.
        </h6>
        </div>
        <div>
            <button className='contact'>Contact Us</button>
        </div>
      </div>
      <div className="scroll-wrapper">
        <div
          className="scroll-container"
          ref={containerRef}
        //   style={{ maxWidth: `${2.6 * cardWidth + 2 * gap}px` }}
        >
          <div className="scroll-track" ref={trackRef}>
            {cards.map((card, idx) => (
              <div className="card" key={idx}>
                <img src={card.image}/>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="tags">
                  {card.tags.map((tag, i) => (
                    <span key={i} className="tag violet">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="nav-buttons">
          <button onClick={() => move("left")}><ArrowLeft/></button>
          <button onClick={() => move("right")}><ArrowRight /></button>
        </div>
      </div>
    </div>
    </div>
    </section>
  );
}

export default UseCase