import React, { useState, useEffect } from "react";
import Hero from "../../components/Home/Hero";
import WhyLucentico from "../../components/WhyLucentico/WhyLucentico";
import ProgramOverview from "../../components/ProgramOverview/ProgramOverview";
import DailyRoutine from "../../components/DailyRoutine/DailyRoutine";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import FeesSection from "../../components/FeesSection/FeesSection";
import CTASection from "../../components/CTASection/CTASection";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [activeSection, setActiveSection] = useState("top");

  // intersection observer here
  useEffect(() => {
    const sectionIds = ["top", "program", "routine", "projects", "fees", "cta"];
    const sections = sectionIds.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleScrollTo = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div>
      <Navbar activeSection={activeSection} handleScrollTo={handleScrollTo} />
      <Hero />
      <WhyLucentico />
      <ProgramOverview />
      <DailyRoutine />
      <ProjectsSection />
      <FeesSection />
      <CTASection />
      <Footer activeSection={activeSection} handleScrollTo={handleScrollTo} />
    </div>
  );
};

export default Home;
