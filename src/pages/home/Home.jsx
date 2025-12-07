import React from "react";
import Hero from "../../components/Home/Hero";
import WhyLucentico from "../../components/WhyLucentico/WhyLucentico";
import ProgramOverview from "../../components/ProgramOverview/ProgramOverview";
import DailyRoutine from "../../components/DailyRoutine/DailyRoutine";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import FeesSection from "../../components/FeesSection/FeesSection";
import CTASection from "../../components/CTASection/CTASection";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyLucentico />
      <ProgramOverview />
      <DailyRoutine />
      <ProjectsSection />
      <FeesSection />
      <CTASection />
    </div>
  );
};

export default Home;
