import React from "react";
//? import components
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import LandingNavigation from "../../components/LandingNavigation/LandingNavigation.jsx";
import Recommended from "../../components/Recommended/Recommended.jsx";
import Actions from "../../components/Actions/Actions.jsx";
import Offers from "../../components/Offers/Offers.jsx";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <LandingNavigation />
      <Recommended />
      <Actions />
      <Offers />
    </>
  );
};
export default LandingPage;
