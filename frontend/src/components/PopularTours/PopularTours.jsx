import React, { useState, useEffect } from "react";
import { Container, Grid } from "semantic-ui-react";
import axios from "axios";
import RecommendedPicture from "../../components/Recommended/RecommendedPicture.jsx";

//?import methods
//import DynamicGrid from "../../methods/DynamicGrid.js";

//*import css
import "./PopularTour.css";

const PopularTour = () => {
  const [data, setData] = useState([]);
  const [max, setMax] = useState(3);
  const [maxLen, setMaxLen] = useState(null);

  const handleSeeMore = () => {
    if (maxLen > max) setMax((prevState) => prevState + 6);
  };

  useEffect(() => {
    axios.get("http://localhost:3000/popular_tours").then((res) => {
      if (!maxLen) setMaxLen(res.data.length);
      setData(res.data.slice(0, max));
    });
  }, [max, maxLen]);

  return (
    <div className="_parteners">
      <div className="_patterns_color">
        <Container>
          <div className="flex">
            <p className="title black-txt _margin_vertical_sm">Popular tours</p>
          </div>
          <div className="_popular_tours_grid">
            <div className="start_grid">
              <Grid stackable>
                {data.map((item, index) => (
                  <Grid.Column mobile={16} tablet={8} computer={5}>
                    <div className="col" key={index}>
                      <RecommendedPicture />
                      <h3 className="title black-txt">{item.name}</h3>
                      <p className="small default-color">{item.description}</p>
                    </div>
                  </Grid.Column>
                ))}
              </Grid>
            </div>
          </div>
          <div className="flex see_more">
            <p
              className={
                maxLen <= max
                  ? "d-none"
                  : "medium-text underline default-color _margin_vertical_sm pointer"
              }
              onClick={handleSeeMore}
            >
              see more
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PopularTour;
