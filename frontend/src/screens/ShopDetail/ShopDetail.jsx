import React from "react";

//? import components
import SortTours from "../../components/SortTours/SortTours.jsx";
import ShopMatchingSearch from "../../components/ShopMatchingSearch/ShopMatchingSearch.jsx";
import ShopDetailCard from "../../components/ShopDetailCard/ShopDetailCard.jsx";
const ShopDetail = () => {
  return (
    <>
      {" "}
      <SortTours date={false} dropdown={false} />
      <ShopDetailCard />
      <ShopMatchingSearch />
    </>
  );
};

export default ShopDetail;
