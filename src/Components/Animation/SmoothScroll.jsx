import { useEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

const SmoothScroll = () => {
  useEffect(() => {
    let smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.9, // smoothness (lower = faster)
      effects: true, // enable effects like data-speed
    });

    return () => {
      if (smoother) smoother.kill(); // cleanup on unmount
    };
  }, []);

  return null; // no UI, just behavior
};

export default SmoothScroll;
