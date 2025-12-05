import React from "react";
import "./Home.css";
import transition from "../../transition";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5, // Delay children animations
        staggerChildren: 0.2, // Stagger children animations
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="home-left">
        <motion.h1 variants={childVariants} className="side-effect">
          Lucentico Learning
        </motion.h1>
      </div>
      <div className="home-right">
        <motion.h3 variants={childVariants} className="mb-1">
          Hello, Welcome to
        </motion.h3>
        <br />
        <h1 className="mb-1">
          <motion.span variants={childVariants} className="red ">
            Lucentico Learning
          </motion.span>
        </h1>
        <h2>
          <motion.span variants={childVariants} className="red ">
            Get Job Ready
          </motion.span>
        </h2>
        <motion.h2 variants={childVariants}>
          Become a{" "}
          <motion.span variants={childVariants} className="red">
            Job-Ready
          </motion.span>{" "}
          FullStack Developer <br /> in 6 months.
        </motion.h2>
        <motion.div
          variants={childVariants}
          style={{ marginBottom: "50px" }}
          className="home-socials"
        >
          <FaGithub />
          <FaLinkedin />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          {/* <NavLink to="/hire" className="btn home-right-btn">
            Hire me
          </NavLink> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default transition(Home);
