import React, { useState, useEffect } from "react";

//? import components
import SortTours from "../../components/SortTours/SortTours.jsx";
import ToursHero from "../../components/ToursHero/ToursHero.jsx";
import ToursDetailNav from "../../components/ToursDetailNav/ToursDetailNav.jsx";
import ResultsTours from "../../components/TourCard/ResultsTours.jsx";
import RecentTours from "../../components/RecentTours/RecentTours.jsx";

import { Segment } from "semantic-ui-react";
const ToursDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <Segment
      style={{
        background: "transparent",
        border: "0px",
        padding: "0",
        margin: "0",
        boxShadow: "0px",
      }}
      loading={isLoading}
    >
      <SortTours />
      <ToursHero />
      <ToursDetailNav />
      <ResultsTours title="Tours Matching search" />
      <RecentTours />
    </Segment>
  );
};
export default ToursDetails;
