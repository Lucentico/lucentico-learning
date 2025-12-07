import React from "react";
import { motion } from "framer-motion";
import "./whyLucentico.css";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.4, ease: "easeOut" },
  }),
};

const WhyLucentico = () => {
  const features = [
    {
      title: "Full-Time Like a Real Job",
      body: "10 AM – 5 PM, offline, in-office. You don’t just attend a class — you live the developer routine every day.",
    },
    {
      title: "Internship Certificate, Not Just a Course",
      body: "Complete 6 months at Lucentico and you leave with an internship certificate and solid experience, not just a paper.",
    },
    {
      title: "Projects From Day 1",
      body: "Your GitHub, resume, and portfolio start growing from the first week with real projects, client work, and open-source.",
    },
    {
      title: "Only 10 Seats, Real Mentorship",
      body: "Small batches mean you’re not lost in a crowd. You get personal guidance, code reviews, and accountability.",
    },
  ];

  return (
    <section className="why">
      <div className="why-inner">
        <div className="why-header">
          <p className="why-tagline">Why Lucentico</p>
          <h2 className="why-title">Why Lucentico is Different</h2>
          <p className="why-subtitle">
            Not a coaching class. Not just a course. A full-time developer
            environment built to get you hired.
          </p>
        </div>

        <div className="why-grid">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              className="why-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <div className="why-icon">
                <span>◆</span>
              </div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-body">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLucentico;
