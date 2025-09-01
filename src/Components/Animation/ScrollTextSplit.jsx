// SplitTextScroll.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function ScrollTextSplit({ children, start = "top 80%", end = "bottom 60%", stagger = 0.1, scrub = true }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;

    // Split the text into lines
    const split = new SplitText(element, {
      type: "lines",
      linesClass: "split-line",
    });

    // Animate lines
    gsap.from(split.lines, {
      yPercent: 120,
      opacity: 0,
      stagger,
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub,
        // markers: true, // Uncomment for debugging
      },
    });

    return () => {
      split.revert(); // Clean up SplitText
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [start, end, stagger, scrub]);

  return (
    <div ref={containerRef} className="split-text opacity-0">
      {children}
    </div>
  );
}
