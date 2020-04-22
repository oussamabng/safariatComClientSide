import React from "react";
//? import components
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import LandingNavigation from "../../components/LandingNavigation/LandingNavigation.jsx";
import Recommended from "../../components/Recommended/Recommended.jsx";
import Actions from "../../components/Actions/Actions.jsx";
import Offers from "../../components/Offers/Offers.jsx";
import PopularTour from "../../components/PopularTours/PopularTours.jsx";
import TopRated from "../../components/TopRated/TopRated.jsx";
import Parteners from "../../components/Parteners/Parteners.jsx";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <LandingNavigation />
      <Recommended />
      <Actions />
      <Offers />
      <PopularTour />
      <TopRated />
      <Parteners />
    </>
  );
};
export default LandingPage;
