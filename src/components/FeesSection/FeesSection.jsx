import React from "react";
import "./FeesSection.css";

const FeesSection = () => {
  return (
    <section className="fees">
      <div className="fees-inner">
        <div className="fees-header">
          <p className="fees-tagline">Fees & Seats</p>
          <h2 className="fees-title">Fees & batch details</h2>
          <p className="fees-subtitle">
            A serious, full-time program that treats your future like a real
            investment — not a cheap crash course.
          </p>
        </div>

        <div className="fees-layout">
          {/* Main pricing card */}
          <div className="fees-card">
            <h3 className="fees-program-title">
              Full-Stack Web Development Career Program
            </h3>

            <div className="fees-row">
              <div className="fees-price-block">
                <p className="fees-label">Monthly fee</p>
                <p className="fees-price">
                  ₹8,000<span>/month</span>
                </p>
                <p className="fees-total">
                  6 months full-time • <strong>₹48,000 total</strong>
                </p>
              </div>

              <div className="fees-info">
                <ul>
                  <li>
                    <strong>Duration:</strong> 6 months (full-time)
                  </li>
                  <li>
                    <strong>Timing:</strong> 10 AM – 5 PM
                  </li>
                  <li>
                    <strong>Mode:</strong> Offline, in-office
                  </li>
                  <li>
                    <strong>Location:</strong> Rajajipuram, Lucknow
                  </li>
                  <li>
                    <strong>Seats:</strong> Only 10 students per batch
                  </li>
                </ul>
              </div>
            </div>

            <div className="fees-included">
              <h4>What’s included</h4>
              <ul>
                <li>Daily offline coding, 10 AM – 5 PM.</li>
                <li>
                  Full-stack MERN: HTML, CSS, JavaScript, React, Node, Express,
                  MongoDB.
                </li>
                <li>
                  Git, GitHub, Linux basics and deployment to a real server.
                </li>
                <li>Projects from Day 1 — portfolio and GitHub growth.</li>
                <li>Resume, LinkedIn and GitHub profile guidance.</li>
                <li>Mock interviews, doubt support and career preparation.</li>
                <li>6-month internship certificate from Lucentico Learning.</li>
              </ul>
            </div>

            <div className="fees-cta">
              <button
                className="btn btn-primary"
                onClick={() =>
                  (window.location.href = "https://wa.me/917275747545")
                }
              >
                Book a Free Demo
              </button>
              <p className="fees-note">
                You’re not paying for recorded videos or a 1-hour class. You’re
                paying for 6 months of full-time coding, mentorship and a real
                push into a developer career.
              </p>
            </div>
          </div>

          {/* Side note card */}
          <div className="fees-side">
            <div className="fees-side-card">
              <h3>Who is this for?</h3>
              <p>
                This program is for students and graduates who are serious about
                getting a developer job and are ready to treat learning like a
                full-time responsibility.
              </p>
              <ul>
                <li>No job yet and want to become a developer.</li>
                <li>Finished degree but don’t have real projects.</li>
                <li>Tired of YouTube and random courses with no result.</li>
                <li>Want daily guidance, structure and accountability.</li>
              </ul>
              <p className="fees-side-note">
                If you show up, work hard and stay consistent for 6 months, this
                program is built to change your career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeesSection;
