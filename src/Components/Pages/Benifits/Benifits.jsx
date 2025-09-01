import React from "react";
import "./benifits.css";
import clock from "../../../images/icons/clock-fast-forward.svg";
import fileche from "../../../images/icons/file-check-02.svg";
import linecha from "../../../images/icons/line-chart-up-02.svg";
import rocket from "../../../images/icons/rocket-01.svg";
import shield from "../../../images/icons/shield-tick.svg";
import target from "../../../images/icons/target-03.svg";
const Benifits = () => {
  return (
    <section class="contract-benefits py-5" id="benifits">
      <div class="container text-center">
        {/* <!-- Header --> */}
        <div class="" style={{ marginBottom: "64px" }}>
          <span class="benefits-subtitle d-block">Benefits</span>
          <h2 class="benefits-title">Why Choose IntelliContract</h2>
        </div>

        {/* <!-- Row 1 --> */}
        <div class="row g-4 mb-4">
          <div class="col-md-4">
            <div class="benefit-card p-4 h-100">
              <div class="benefit-icon">
                <img src={clock} />
              </div>
              <h3 class="benefit-heading">Save Time</h3>
              <p class="benefit-text">
                Automate hours of manual contract review with instant AI
                extraction and analysis.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="benefit-card p-4 h-100">
              <div class="benefit-icon">
                <img src={target} />
              </div>
              <h3 class="benefit-heading">Ensure Accuracy</h3>
              <p class="benefit-text">
                Reduce human errors and maintain data consistency across every
                contract and dataset.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="benefit-card p-4 h-100">
              <div class="benefit-icon">
                <img src={fileche} />
              </div>
              <h3 class="benefit-heading">Streamline Compliance</h3>
              <p class="benefit-text">
                Stay aligned with regulatory standards through structured,
                auditable workflows.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Row 2 --> */}
        <div class="row g-4">
          <div class="col-md-4">
            <div class="benefit-card p-4 h-100">
              <div class="benefit-icon">
                <img src={rocket} />
              </div>
              <h3 class="benefit-heading">Future-Ready</h3>
              <p class="benefit-text">
                Modular design supports multiple industries and diverse data
                formats like PDF, JSON, and beyond.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="benefit-card p-4 h-100">
              <div class="benefit-icon">
                <img src={linecha} />
              </div>
              <h3 class="benefit-heading">Boost Productivity</h3>
              <p class="benefit-text">
                Empower teams with a natural language chat interface to quickly
                retrieve answers and insights.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="benefit-card p-4 h-100">
              <div class="benefit-icon">
                <img src={shield} />
              </div>
              <h3 class="benefit-heading">Secure & Scalable</h3>
              <p class="benefit-text">
                Role-based access and enterprise security enable safe use across
                any team size.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benifits;
