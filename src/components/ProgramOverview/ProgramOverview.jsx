import React from "react";
import { motion } from "framer-motion";
import "./ProgramOverview.css";

const ProgramOverview = () => {
  const phases = [
    {
      label: "Phase 1",
      title: "Foundations: HTML, CSS & Logic",
      duration: "Weeks 1 – 4",
      points: [
        "HTML, tags, forms, and clean page structure.",
        "Modern CSS, Flexbox, Grid, and responsive layouts.",
        "Basic programming logic using JavaScript.",
        "Good habits: indentation, naming, file structure.",
      ],
    },
    {
      label: "Phase 2",
      title: "JavaScript & React (Frontend)",
      duration: "Weeks 5 – 10",
      points: [
        "Modern JavaScript (ES6+), DOM and browser APIs.",
        "React components, props, state and hooks.",
        "Routing, forms, API calls, local storage.",
        "Building real frontend projects from scratch.",
      ],
    },
    {
      label: "Phase 3",
      title: "Backend: Node, Express & MongoDB",
      duration: "Weeks 11 – 18",
      points: [
        "Node.js fundamentals and Express server setup.",
        "REST APIs, routing, controllers, and middleware.",
        "MongoDB + Mongoose, models and CRUD operations.",
        "Authentication, authorization and JWT-based login.",
      ],
    },
    {
      label: "Phase 4",
      title: "Dev Tools, Deployment & Career Prep",
      duration: "Weeks 19 – 24",
      points: [
        "Git & GitHub: branches, pull requests, issues.",
        "Linux basics and working on a real server.",
        "Deploying full-stack apps on VPS / cloud.",
        "Resume, portfolio, LinkedIn and mock interviews.",
      ],
    },
  ];

  return (
    <section id="program" className="program">
      <div className="program-inner">
        <div className="program-header">
          <p className="program-tagline">The Program</p>
          <h2 className="program-title">
            Full-Stack Web Development Career Program
          </h2>
          <p className="program-subtitle">
            A 6-month, full-time offline program that takes you from absolute
            basics to a job-ready full-stack developer with real projects,
            deployment experience and interview preparation.
          </p>
        </div>

        <div className="program-layout">
          <div className="program-summary">
            <div className="program-summary-card">
              <h3>How the 6 months are structured</h3>
              <p>
                You don&apos;t learn everything at once. We move in focused,
                clear phases — starting with strong fundamentals and then
                building up to real-world full-stack projects, deployment, and
                career preparation.
              </p>
              <ul className="program-summary-list">
                <li>
                  <strong>Duration:</strong> 6 months full-time (10 AM – 5 PM)
                </li>
                <li>
                  <strong>Mode:</strong> Offline, in-office at Rajajipuram,
                  Lucknow
                </li>
                <li>
                  <strong>Outcome:</strong> Internship certificate, portfolio,
                  and job-ready skills
                </li>
              </ul>
            </div>
          </div>

          <div className="program-phases">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.label}
                className="program-phase-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <div className="program-phase-header">
                  <span className="program-phase-label">{phase.label}</span>
                  <span className="program-phase-duration">
                    {phase.duration}
                  </span>
                </div>
                <h3 className="program-phase-title">{phase.title}</h3>
                <ul className="program-phase-list">
                  {phase.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
