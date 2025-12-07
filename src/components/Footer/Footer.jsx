// src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = ({ handleScrollTo, activeSection }) => {
  return (
    <footer className="footer">
      <p className="footer-lucentico-title">Lucentico</p>
      <div className="footer-inner">
        {/* Left: Brand */}
        <div
          className="footer-brand clickable"
          onClick={() => handleScrollTo("top")}
        >
          <div className="footer-logo-circle">L</div>
          <div>
            <p className="footer-logo-text">Lucentico Learning</p>
            <p className="footer-logo-sub">
              Offline full-time developer program in Rajajipuram, Lucknow.
            </p>
          </div>
        </div>

        {/* Middle: Links */}
        <nav className="footer-links">
          <button
            className={`footer-link ${
              activeSection === "top" ? "footer-active" : ""
            }`}
            onClick={() => handleScrollTo("top")}
          >
            Home
          </button>

          <button
            className={`footer-link ${
              activeSection === "program" ? "footer-active" : ""
            }`}
            onClick={() => handleScrollTo("program")}
          >
            Program
          </button>

          <button
            className={`footer-link ${
              activeSection === "projects" ? "footer-active" : ""
            }`}
            onClick={() => handleScrollTo("projects")}
          >
            Projects
          </button>

          <button
            className={`footer-link ${
              activeSection === "fees" ? "footer-active" : ""
            }`}
            onClick={() => handleScrollTo("fees")}
          >
            Fees
          </button>

          <button
            className={`footer-link ${
              activeSection === "cta" ? "footer-active" : ""
            }`}
            onClick={() => handleScrollTo("cta")}
          >
            Contact
          </button>
        </nav>

        {/* Right: Contact */}
        <div className="footer-contact">
          <p className="footer-contact-title">Contact</p>
          <p className="footer-contact-line">E-2600, Rajajipuram, Lucknow</p>
          <a href="tel:+91-7275747545" className="footer-contact-line">
            +91-7275747545
          </a>
          <br />
          <a
            href="https://wa.me/917275747545"
            target="_blank"
            rel="noreferrer"
            className="footer-contact-line"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Lucentico Learning. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
