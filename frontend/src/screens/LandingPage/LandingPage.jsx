import React from "react";
//? import components
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import LandingNavigation from "../../components/LandingNavigation/LandingNavigation.jsx";
import Recommended from "../../components/Recommended/Recommended.jsx";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <LandingNavigation />
      <Recommended />
    </>
  );
};
export default LandingPage;
