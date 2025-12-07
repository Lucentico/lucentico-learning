import React from "react";
import { motion } from "framer-motion";
import "./DailyRoutine.css";

const DailyRoutine = () => {
  const routine = [
    {
      time: "10:00 AM",
      title: "Standup & Plan",
      description:
        "Quick discussion of what you’ll learn and build today. You always know what you’re working on — no confusion, no time waste.",
    },
    {
      time: "11:00 AM",
      title: "Learning & Guided Coding",
      description:
        "New concepts explained with examples and live coding. Then you write the code yourself with help when you’re stuck.",
    },
    {
      time: "1:00 PM",
      title: "Lunch Break",
      description:
        "Short break to reset your brain so you can focus for the second half of the day.",
    },
    {
      time: "2:00 PM",
      title: "Project Work & Real Tasks",
      description:
        "You work on real projects — frontend, backend, APIs, dashboards. This is where your GitHub and portfolio grow every day.",
    },
    {
      time: "4:30 PM",
      title: "Review & Career Growth",
      description:
        "Doubt clearing, code reviews, resume/portfolio updates and interview-style questions to keep you improving.",
    },
    {
      time: "5:00 PM",
      title: "Wrap-up & Next Steps",
      description:
        "You end the day with clarity on what you finished today and what you’ll attack tomorrow — like a real developer job.",
    },
  ];

  return (
    <section className="routine">
      <div className="routine-inner">
        <div className="routine-header">
          <p className="routine-tagline">Daily Life at Lucentico</p>
          <h2 className="routine-title">A day at Lucentico</h2>
          <p className="routine-subtitle">
            You don&apos;t just attend a lecture and go home. You live the
            developer routine every day — learning, building, fixing bugs, and
            growing your portfolio.
          </p>
        </div>

        <div className="routine-layout">
          <div className="routine-timeline">
            {routine.map((item, index) => (
              <motion.div
                key={item.time}
                className="routine-item"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.06, duration: 0.35 }}
              >
                <div className="routine-time">
                  <span>{item.time}</span>
                </div>
                <div className="routine-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="routine-side-card">
            <h3>Why this routine works</h3>
            <p>
              Most courses give you 1–2 hours of theory and then leave you
              alone. At Lucentico, you stay in a focused environment from{" "}
              <strong>10 AM to 5 PM</strong>, with structure, guidance and
              accountability.
            </p>
            <ul>
              <li>Clear plan for every day.</li>
              <li>Enough time to learn and apply.</li>
              <li>Help available when you get stuck.</li>
              <li>Consistent progress that feels like a real job.</li>
            </ul>
            <p className="routine-note">
              This is how you go from confused and stuck to confident and
              job-ready in 6 months.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyRoutine;
