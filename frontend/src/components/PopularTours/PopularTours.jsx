import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import axios from "axios";
import RecommendedPicture from "../../components/Recommended/RecommendedPicture.jsx";

//*import css
import "./PopularTour.css";

const PopularTour = () => {
  const [data, setData] = useState([]);
  const [max, setMax] = useState(2);
  const [maxLen, setMaxLen] = useState(null);

  const handleSeeMore = () => {
    if (maxLen > max) setMax((prevState) => prevState + 1);
  };

  useEffect(() => {
    axios.get("http://localhost:3000/popular_tours").then((res) => {
      console.log(res.data.length, max);
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
              {data.map((elment) => (
                <div className="row">
                  {elment.map((item) => (
                    <div className="col">
                      <RecommendedPicture />
                      <h3 className="title black-txt">{item.name}</h3>
                      <p className="small default-color">{item.description}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="start_grid mobile">
              {data.map((elment) => (
                <div className="row">
                  {elment.map((item) => (
                    <div className="col">
                      <RecommendedPicture />
                      <h3 className="title black-txt">{item.name}</h3>
                      <p className="small default-color">{item.description}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex">
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
