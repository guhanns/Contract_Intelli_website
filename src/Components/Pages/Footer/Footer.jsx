import React from "react";
import "./footer.css";
import logo from "../../../images/footer/Logomark.svg";
import x from "../../../images/footer/Social icon.svg";
import linked from "../../../images/footer/Social icon (1).svg";
import youtube from "../../../images/footer/Social icon (2).svg";
import insta from "../../../images/footer/Social icon (3).svg";

const Footer = () => {
  return (
    <div class="footer-section">
      <div class="container footer-section-content">
        <hr className="border" />

        <div class="row ">
          <div class="col-3 footer-boxes ">
            <div className="footer-logo">
              <img src={logo} />
            </div>

            <div className="footer-left-content">
              IntelliContract is a Generative AI-powered platform that extracts
              and analyzes unstructured contract data, starting with
              pharmaceutical contracts and expanding across industries.
            </div>
          </div>
          <div class="col-2 footer-boxes ">
            <h6 className="head">Product</h6>
            <ul>
              <li>Overview</li>
              <li>Features</li>
              <li>Benefits</li>
              <li>Use Cases</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div class="col-2 footer-boxes ">
            <h6 className="head">Company</h6>
            <ul>
              <li>FAQs</li>
              <li>Documentation</li>
              <li>Contact Support</li>
            </ul>
          </div>
          <div class="col-3 footer-boxes">
            <h6 className="head">Resources</h6>
            <ul>
              <li>Blog</li>
              <li>Newsletter</li>
              <li>Events</li>
              <li>Help centre</li>
              <li>Tutorials</li>
              <li>Support</li>
            </ul>
          </div>
          <div class="col-2 footer-boxes ">
            <h6 className="head">Legal</h6>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Licenses</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <hr className="border" />

        <div className="footer-icons-left">
          <div>
            <h6>© 2025 IntelliContract. All rights reserved.</h6>
          </div>

          <div className="footer-icons-right">
            <img src={x}></img>
            <img src={linked}></img>
            <img src={youtube}></img>
            <img src={insta}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
