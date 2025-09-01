import React, { useEffect, useState } from "react";
import Home from "../Home/Home";
import Features from "../Features/Features";
import Benifits from "../Benifits/Benifits";
import Cognitive from "../Cognitive/Cognitive";
import UseCase from "../UseCase/UseCase";
import Footer from "../Footer/Footer";
import FAQ from "../FAQ/FAQ";
import Experience from "../Experience/Experience";
import { MoveUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import SmoothScroll from "../../Animation/SmoothScroll";

gsap.registerPlugin(ScrollTrigger);

function Main() {
  const navigate = useNavigate();


  const moveUp = () => {
    window.scroll(0, 0);
    navigate("/");
  };
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <SmoothScroll />
          <Home />
          <Features />
          <Cognitive />
          <Benifits />
          <UseCase />
          <Experience />
          <FAQ />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Main;
