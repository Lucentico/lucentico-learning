// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import "./navbar.css";
import { motion } from "framer-motion";

const Navbar = ({ activeSection, handleScrollTo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delayChildren: 0.1,
        staggerChildren: 0.08,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleClickAndClose = (id) => {
    handleScrollTo(id);
    closeMenu();
  };

  const whatsappLink = "https://wa.me/917275747545";

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="nav"
    >
      <div className="nav-inner">
        {/* Logo */}
        <motion.div variants={childVariants} className="nav-logo">
          <button
            className="nav-logo-btn"
            onClick={() => handleClickAndClose("top")}
          >
            <span className="nav-logo-circle">L</span>
            <span className="nav-logo-text">Lucentico Learning</span>
          </button>
        </motion.div>

        {/* Hamburger (mobile) */}
        <button
          className={`hamburger ${isMobileMenuOpen ? "is-open" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu */}
        <div className={`nav-center ${isMobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <button
                className={`nav-link-button ${
                  activeSection === "top" ? "active-nav" : ""
                }`}
                onClick={() => handleClickAndClose("top")}
              >
                Home
              </button>
            </li>

            <li>
              <button
                className={`nav-link-button ${
                  activeSection === "program" ? "active-nav" : ""
                }`}
                onClick={() => handleClickAndClose("program")}
              >
                Program
              </button>
            </li>

            <li>
              <button
                className={`nav-link-button ${
                  activeSection === "routine" ? "active-nav" : ""
                }`}
                onClick={() => handleClickAndClose("routine")}
              >
                Day at Lucentico
              </button>
            </li>

            <li>
              <button
                className={`nav-link-button ${
                  activeSection === "projects" ? "active-nav" : ""
                }`}
                onClick={() => handleClickAndClose("projects")}
              >
                Projects
              </button>
            </li>

            <li>
              <button
                className={`nav-link-button ${
                  activeSection === "fees" ? "active-nav" : ""
                }`}
                onClick={() => handleClickAndClose("fees")}
              >
                Fees
              </button>
            </li>

            <li className="nav-contact-wrapper">
              <button
                className="nav-btn-primary"
                onClick={() => (window.location.href = whatsappLink)}
              >
                Book Free Demo
              </button>
              {/* or use section-based highlight:
              <button
                className={`nav-btn-primary ${
                  activeSection === "cta" ? "active-nav" : ""
                }`}
                onClick={() => handleClickAndClose("cta")}
              >
                Book Free Demo
              </button>
              */}
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
