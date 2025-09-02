import React, { useEffect } from 'react'
import './topbar.css'
import logo from '../../../images/logo/logo-dark.svg'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

gsap.registerPlugin(ScrollTrigger);

function Topbar() {
    const navigate = useNavigate()
    useEffect(() => {
    gsap.to(".navbar-intelli", {
      backgroundColor: "#0C111D", // target color
      duration: 1,
      scrollTrigger: {
        trigger: ".home-subHead",  // element to start animation
        start: "top top",     // when content hits top of viewport
        end: "500 top",       // after 200px scroll
        scrub: true,          // smooth scrubbing
      },
    });
  }, []);

   const moveUp =()=>{
    window.scroll(0,0)
    navigate('/')
  }

  return (
    <header class="navbar-intelli" style={{ backgroundColor: "transparent" }}>
    <div class="logo" onClick={()=>moveUp()}>
      <img src={logo} alt="Logo"/>
    </div>
    <nav class="nav-links">
      <HashLink smooth to="/#features">Features</HashLink>
        <HashLink smooth to="/#benifits">Benefits</HashLink>
        <HashLink smooth to="/#useCases">Use Cases</HashLink>
        {/* <HashLink smooth to="/#pricing">Pricing</HashLink> */}
      <button class="btn">Contact Us</button>
    </nav>
    
  </header>
  )
}

export default Topbar