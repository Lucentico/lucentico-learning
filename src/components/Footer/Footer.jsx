import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left: Brand */}
        <div className="footer-brand">
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
          <NavLink to="/" className="footer-link">
            Home
          </NavLink>
          <NavLink to="/courses" className="footer-link">
            Courses
          </NavLink>
          <NavLink to="/fees" className="footer-link">
            Fees
          </NavLink>
          <NavLink to="/contact" className="footer-link">
            Contact
          </NavLink>
        </nav>

        {/* Right: Contact */}
        <div className="footer-contact">
          <p className="footer-contact-title">Contact</p>
          <p className="footer-contact-line">Rajajipuram, Lucknow</p>
          <a href="tel:+91-7275747545" className="footer-contact-line">
            +91-7275747545{" "}
          </a>
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
        <p>© {new Date().getFullYear()} Lucentico Learning. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
