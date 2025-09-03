import React from 'react'
import './features.css'
import { CheckCircle } from 'lucide-react'
import chatMsg from '../../../images/icons/users-edit.svg'
import zapImg from '../../../images/icons/dash-dark (2).svg'
import squareImg from '../../../images/icons/check-done.svg'
import accessImg from '../../../images/feature/access-dark.svg'
import dashImg from '../../../images/feature/dash-dark.svg'
import versionImg from '../../../images/feature/version-dark.svg'

function Features() {
  return (
    <section class="contract-features" id="features">
      <div class="features-header">
        <div class="features-subtitle">Features</div>
        <h2 class="features-title">
          Powerful Features That Simplify Contract Intelligence
        </h2>
      </div>

      <div class="features-content">
        {/* <!-- Left Side (Text + Icon + Bullets) --> */}
        <div class="feature-text">
          <div class="feature-icon">
            <span>
              <img src={chatMsg} />
            </span>
          </div>
          <h3 class="feature-heading">Role-Based Access (SSO Secure Login)</h3>
          <p class="feature-description">
            Ensure enterprise-grade security with controlled access.
            IntelliContract supports role-specific permissions integrated with
            Single Sign-On (SSO) for seamless login and administration.
          </p>

          <ul className="feature-list">
            <li>
              <CheckCircle
                size={18}
                color="#7F56D9"
                className="tick-icon"
                style={{ marginRight: "12px" }}
              />
              Granular access control for admins, managers, and analysts
            </li>
            <li>
              <CheckCircle
                size={18}
                color="#7F56D9"
                className="tick-icon"
                style={{ marginRight: "12px" }}
              />
              Integrated with SSO for quick, secure login
            </li>
            <li>
              <CheckCircle
                size={18}
                color="#7F56D9"
                className="tick-icon"
                style={{ marginRight: "12px" }}
              />
              Enterprise-ready compliance and data protection
            </li>
          </ul>
        </div>

        {/* <!-- Right Side (Empty Box / Placeholder for Image/Video) --> */}
        <div class="feature-media">
          <img src={accessImg} />
        </div>
      </div>

      <div class="features-content reverse">
        {/* <!-- Right Side (Empty Box / Placeholder for Image/Video) --> */}
        <div class="feature-media">
          <img src={dashImg} />
        </div>
        {/* <!-- Left Side (Text + Icon + Bullets) --> */}
        <div class="feature-text">
          <div class="feature-icon">
            <span>
              <img src={zapImg} />
            </span>
          </div>
          <h3 class="feature-heading">
            Dashboard Overview
          </h3>
          <p class="feature-description">
            Gain a complete view of your contracts in one place. The dashboard
            displays the original contract alongside AI-extracted entities for
            quick review and validation.
          </p>

          <ul className="feature-list">
            <li>
              <CheckCircle
                size={18}
                color="#7F56D9"
                className="tick-icon"
                style={{ marginRight: "12px" }}
              />
              Side-by-side PDF contract and extracted data view
            </li>
            <li>
              <CheckCircle
                size={18}
                color="#7F56D9"
                className="tick-icon"
                style={{ marginRight: "12px" }}
              />
              Key entities like contract number, dates, pricing auto-highlighted
            </li>
            <li>
              <CheckCircle
                size={18}
                color="#7F56D9"
                className="tick-icon"
                style={{ marginRight: "12px" }}
              />
              Clean, user-friendly interface for faster navigation
            </li>
          </ul>
        </div>
      </div>

      <div class="features-content">
        {/* <!-- Left Side (Text + Icon + Bullets) --> */}
        <div class="feature-text">
          <div class="feature-icon">
            <span>
              <img src={squareImg} />
            </span>
          </div>
          <h3 class="feature-heading">Contract Comparison & Versioning</h3>
          <p class="feature-description">
            Track changes across versions effortlessly. IntelliContract
            highlights differences to ensure accuracy and compliance throughout
            the contract lifecycle.
          </p>

          <ul className="feature-list">
            <li>
              <CheckCircle
                size={18}
                color="#7F56D9"
                className="tick-icon"
                style={{ marginRight: "12px" }}
              />
              Compare multiple contract versions instantly
            </li>
            <li>
              <CheckCircle
                size={18}
                color="#7F56D9"
                className="tick-icon"
                style={{ marginRight: "12px" }}
              />
              Visual highlights of additions, removals, and edits
            </li>
            <li>
              <CheckCircle
                size={18}
                color="#7F56D9"
                className="tick-icon"
                style={{ marginRight: "12px" }}
              />
              Maintain a clear audit trail of contract history
            </li>
          </ul>
        </div>

        {/* <!-- Right Side (Empty Box / Placeholder for Image/Video) --> */}
        <div class="feature-media">
          <img src={versionImg} />
        </div>
      </div>
    </section>
  );
}

export default Features