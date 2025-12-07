import React from "react";
import { motion } from "framer-motion";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Personal Portfolio & Resume Site",
      type: "Frontend",
      tech: "HTML, CSS, JavaScript",
      description:
        "Your own portfolio site with projects, skills and a contact section — deployed and shareable with companies.",
    },
    {
      title: "Task Manager / To-Do App",
      type: "Frontend",
      tech: "React, JavaScript",
      description:
        "Create, edit, complete and filter tasks with clean UI. Stored in local storage or backend as you progress.",
    },
    {
      title: "Blog / CMS Platform",
      type: "Full-Stack",
      tech: "React, Node, Express, MongoDB",
      description:
        "Admin can create, edit and delete posts. Users can read posts with clean routing and real database.",
    },
    {
      title: "E-Commerce Store",
      type: "Full-Stack",
      tech: "MERN Stack",
      description:
        "Product listing, cart, checkout and user accounts. A complete full-stack project for your portfolio.",
    },
    {
      title: "Real-Time Chat App",
      type: "Full-Stack",
      tech: "MERN + WebSockets (or similar)",
      description:
        "Login, chat rooms and live messages. Great project to show understanding of real-time communication.",
    },
    {
      title: "Client / Open-Source Project",
      type: "Real World",
      tech: "Depends on project",
      description:
        "Work on real client work, internal tools or open-source so your experience looks real — not just practice.",
    },
  ];

  return (
    <section className="projects">
      <div className="projects-inner">
        <div className="projects-header">
          <p className="projects-tagline">Projects</p>
          <h2 className="projects-title">Projects you’ll actually build</h2>
          <p className="projects-subtitle">
            From simple UIs to full-stack apps with authentication, dashboards
            and real users. Your GitHub and portfolio will be full of projects
            that prove you can do the work.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05, duration: 0.35 }}
            >
              <div className="project-chip-row">
                <span className="project-chip project-type">
                  {project.type}
                </span>
                <span className="project-chip project-tech">
                  {project.tech}
                </span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </motion.article>
          ))}
        </div>

        <p className="projects-footer-note">
          Plus many smaller apps, exercises and mini-projects that keep your
          skills sharp and your GitHub active throughout the 6 months.
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
