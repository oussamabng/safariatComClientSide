import React from "react";

//? import components
import SortTours from "../../components/SortTours/SortTours.jsx";
import TourCard from "../../components/TourCard/TourCard.jsx";
import ResultsTours from "../../components/TourCard/ResultsTours.jsx";
import Stories from "../../components/Stories/Stories.jsx";

const Tours = () => {
  return (
    <>
      <SortTours />
      <TourCard title text="Best price deal" color="#A2D9B8" />
      <TourCard title text="Top rated offer" color="#FFB808" />
      <ResultsTours />
      <Stories />
    </>
  );
};
export default Tours;
