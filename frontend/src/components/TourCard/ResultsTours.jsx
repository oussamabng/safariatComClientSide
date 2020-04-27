import React, { useState, useEffect } from "react";
import {
  Image,
  Button,
  Rating,
  Icon,
  Container,
  Dropdown,
} from "semantic-ui-react";
import Img from "../../assets/recommended.png";
import axios from "axios";

const ResultsTours = () => {
  const options = [
    { key: 1, text: "Choice 1", value: 1 },
    { key: 2, text: "Choice 2", value: 2 },
    { key: 3, text: "Choice 3", value: 3 },
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    let url = "http://localhost:3000/tours_all";
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="flex _margin_vertical">
      <Container>
        <div
          className="_tour_card flex"
          style={{
            justifyContent: "space-between",
          }}
        >
          <p className="title black-txt">Results</p>
          <React.Fragment>
            <Dropdown
              placeholder="Sort by"
              closeOnEscape
              selection
              options={options}
            />{" "}
          </React.Fragment>
        </div>
        {data.map((elm) => (
          <div className="_tour_card card">
            <div className="row">
              <div className="col">
                <Image src={Img} alt="img" />
                <div className="under_col">
                  <div
                    className="flex"
                    style={{ justifyContent: "flex-start" }}
                  >
                    <p className="small">{elm.time}</p>
                  </div>
                  <p className="title black-txt" style={{ margin: "5px 0" }}>
                    {elm.title}
                  </p>
                  <div
                    className="flex"
                    style={{ justifyContent: "flex-start" }}
                  >
                    {elm.type.map((element) => (
                      <span className="extra-small">{element}</span>
                    ))}
                  </div>
                  <p className="medium-text description default-color">
                    {elm.description}
                  </p>
                  <div className="_tour_card_star">
                    <div className="flex">
                      <p className="medium-text default-color">Rate</p>
                      <Rating
                        icon="star"
                        rating={elm.rate}
                        maxRating={5}
                        disabled
                        size="large"
                      />
                    </div>
                    <div className="flex _diff">
                      <p className="medium-text default-color">Difficulty</p>
                      <Rating
                        icon="star"
                        rating={elm.difficulty}
                        maxRating={5}
                        disabled
                        size="large"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="under_col center">
                <p className="black-txt large-title">From : 90 $</p>
                <div className="flex _margin_vertical_xs">
                  <Button className="_primary_button _offers_card_button">
                    Explore
                  </Button>
                </div>
                <div className="flex">
                  <Icon
                    name="share alternate"
                    className="pointer"
                    size="large"
                    style={{ margin: "0 10px" }}
                  />{" "}
                  <Icon
                    name="share alternate"
                    className="pointer"
                    size="large"
                    style={{ margin: "0 10px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};
export default ResultsTours;
