import React from "react";

//? import components
import SortTours from "../../components/SortTours/SortTours.jsx";
import TourCard from "../../components/TourCard/TourCard.jsx";
import ResultsTours from "../../components/TourCard/ResultsTours.jsx";
import Stories from "../../components/Stories/Stories.jsx";
import RecentTours from "../../components/RecentTours/RecentTours.jsx";

const Tours = () => {
  return (
    <>
      <SortTours date dropdown />
      <TourCard title text="Best price deal" color="#A2D9B8" best={true} />
      <TourCard title text="Top rated offer" color="#FFB808" best={false} />
      <ResultsTours title="Results" />
      <Stories />
      <RecentTours />
    </>
  );
};
export default Tours;
