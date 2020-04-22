import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import axios from "axios";
import RecommendedPicture from "../../components/Recommended/RecommendedPicture.jsx";

//?import methods
import DynamicGrid from "../../methods/DynamicGrid.js";

//*import css
import "./PopularTour.css";

const PopularTour = () => {
  const [data, setData] = useState([]);
  const [dataTablette, setDataTablette] = useState([]);
  const [dataMobile, setDataMobile] = useState([]);
  const [max, setMax] = useState(2);
  const [maxLen, setMaxLen] = useState(null);
  const [maxLenTab, setMaxLenTab] = useState(null);
  const [maxLenMob, setMaxLenMob] = useState(null);

  const handleSeeMore = () => {
    if (maxLen > max) setMax((prevState) => prevState + 1);
  };

  useEffect(() => {
    axios.get("http://localhost:3000/popular_tours").then((res) => {
      var pc = DynamicGrid(res.data, 3);
      var tablette = DynamicGrid(res.data, 2);
      var mobile = DynamicGrid(res.data, 1);
      if (!maxLen) setMaxLen(pc.length);
      if (!maxLenTab) setMaxLenTab(tablette.length);
      if (!maxLenMob) setMaxLenMob(mobile.length);
      setData(pc.slice(0, max));
      setDataTablette(tablette.slice(0, max));
      setDataMobile(mobile.slice(0, max));
    });
  }, [max, maxLen, maxLenTab, maxLenMob]);
  console.log(max, maxLenTab, dataMobile);

  return (
    <div className="_parteners">
      <div className="_patterns_color">
        <Container>
          <div className="flex">
            <p className="title black-txt _margin_vertical_sm">Popular tours</p>
          </div>
          <div className="_popular_tours_grid">
            <div className="start_grid">
              <>
                {data.map((elment) => (
                  <div className="row">
                    {elment.map((item) => (
                      <div className="col">
                        <RecommendedPicture />
                        <h3 className="title black-txt">{item.name}</h3>
                        <p className="small default-color">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
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
              </>
            </div>
            <div className="start_grid tablette">
              <>
                {dataTablette.map((elment) => (
                  <div className="row">
                    {elment.map((item) => (
                      <div className="col">
                        <RecommendedPicture />
                        <h3 className="title black-txt">{item.name}</h3>
                        <p className="small default-color">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
                <div className="flex see_more_tab">
                  <p
                    className={
                      maxLenTab <= max
                        ? "d-none"
                        : "medium-text underline default-color _margin_vertical_sm pointer"
                    }
                    onClick={handleSeeMore}
                  >
                    see more
                  </p>
                </div>
              </>
            </div>
            <div className="start_grid mobile">
              <>
                {dataMobile.map((elment) => (
                  <div className="row">
                    {elment.map((item) => (
                      <div className="col">
                        <RecommendedPicture />
                        <h3 className="title black-txt">{item.name}</h3>
                        <p className="small default-color">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </>
              <div className="flex see_more_mob">
                <p
                  className={
                    maxLenMob <= max
                      ? "d-none"
                      : "medium-text underline default-color _margin_vertical_sm pointer"
                  }
                  onClick={handleSeeMore}
                >
                  see more
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PopularTour;
