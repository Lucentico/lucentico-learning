// src/components/Hero/Hero.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./Hero.css";

const snippets = {
  default: `// Lucentico Learning
function startJourney() {
  const months = 6;
  const mode = "full-time offline";
  const goal = "job-ready full-stack developer";

  return { months, mode, goal };
}`,
  heading: `function HeroHeading() {
  return (
    <h1>
      Become a <span>Job-Ready Full-Stack Developer</span> in 6 Months
    </h1>
  );
}`,
  subheading: `const program = {
  mode: "offline",
  time: "10 AM – 5 PM",
  stack: "MERN",
  outcome: "internship + portfolio"
};`,
  bulletSchedule: `const schedule = {
  start: "10:00 AM",
  end: "5:00 PM",
  style: "work like a real developer",
};`,
  bulletInternship: `const certificate = {
  type: "Internship",
  durationMonths: 6,
  value: "no fresher gap",
};`,
  bulletProjects: `const daily = {
  githubCommits: "every day",
  resumeUpdates: true,
  portfolioGrowth: true,
};`,
  ctaPrimary: `function handleBookDemo() {
  // open WhatsApp or contact page
  window.location.href = "https://wa.me/917275747545";
}`,
  ctaSecondary: `const curriculumUrl = "/curriculum.pdf";
// open in new tab or route to curriculum page`,
};

const Hero = () => {
  const [activeSnippet, setActiveSnippet] = useState("default");

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const codeVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
    },
  };

  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        {/* LEFT SIDE */}
        <motion.div
          className="hero-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="hero-tagline">
            Lucentico Learning • Full-Time Offline in Rajajipuram
          </p>

          <h1
            className="hero-title"
            onMouseEnter={() => setActiveSnippet("heading")}
            onMouseLeave={() => setActiveSnippet("default")}
          >
            Become a <span>Job-Ready Full-Stack Developer</span> in 6 Months
          </h1>

          <p
            className="hero-subtitle"
            onMouseEnter={() => setActiveSnippet("subheading")}
            onMouseLeave={() => setActiveSnippet("default")}
          >
            Join a full-time offline coding program where you learn like a real
            developer — build projects every day, master the MERN stack, and
            leave with an internship certificate and a portfolio that gets you
            hired.
          </p>

          <ul className="hero-points">
            <li
              onMouseEnter={() => setActiveSnippet("bulletSchedule")}
              onMouseLeave={() => setActiveSnippet("default")}
            >
              Learn by coding <strong>10 AM – 5 PM</strong> in an office-like
              environment.
            </li>
            <li
              onMouseEnter={() => setActiveSnippet("bulletInternship")}
              onMouseLeave={() => setActiveSnippet("default")}
            >
              Get a <strong>6-month internship certificate</strong>, not just a
              course completion paper.
            </li>
            <li
              onMouseEnter={() => setActiveSnippet("bulletProjects")}
              onMouseLeave={() => setActiveSnippet("default")}
            >
              Projects from Day 1 — your{" "}
              <strong>resume & GitHub grow every day.</strong>
            </li>
          </ul>

          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onMouseEnter={() => setActiveSnippet("ctaPrimary")}
              onMouseLeave={() => setActiveSnippet("default")}
              onClick={() =>
                (window.location.href = "https://wa.me/917275747545")
              }
            >
              Book a Free Demo
            </button>

            {/* <NavLink
              to="/curriculum.md"
              className="btn btn-secondary"
              onMouseEnter={() => setActiveSnippet("ctaSecondary")}
              onMouseLeave={() => setActiveSnippet("default")}
            >
              View Curriculum
            </NavLink> */}

            <a
              href="/curriculum.md"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              onMouseEnter={() => setActiveSnippet("ctaSecondary")}
              onMouseLeave={() => setActiveSnippet("default")}
            >
              View Curriculum
            </a>
          </div>

          <p className="hero-meta">
            Rajajipuram, Lucknow • ₹8,000/month • Only 10 seats per batch
          </p>
        </motion.div>

        {/* RIGHT SIDE: CODE PREVIEW */}
        <motion.div
          className="hero-right"
          variants={codeVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="code-card">
            <div className="code-card-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="code-card-title">hero.jsx</span>
            </div>
            <pre className="code-block">
              <code>{snippets[activeSnippet]}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
