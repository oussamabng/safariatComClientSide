import React from "react";

//? import components
import SortTours from "../../components/SortTours/SortTours.jsx";
import ToursHero from "../../components/ToursHero/ToursHero.jsx";
import ToursDetailNav from "../../components/ToursDetailNav/ToursDetailNav.jsx";
const ToursDetails = () => {
  return (
    <>
      <SortTours />
      <ToursHero />
      <ToursDetailNav />
    </>
  );
};
export default ToursDetails;
