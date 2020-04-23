import React, { useState, useEffect } from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import Slider from "react-slick";
import axios from "axios";

import "./Actions.css";

import Img from "../../assets/hicking.png";

const Actions = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/new_actions")
      .then((res) => setData(res.data));
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    autoplay: true,
    // focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="_actions shadow">
      <Container>
        <div className="flex">
          <p className="medium-text black-txt  _margin_vertical_sm">
            News actions
          </p>
        </div>
        <Grid className="_action_grid">
          <Grid.Row>
            {data.length > 4 && (
              <Slider
                {...settings}
                style={{ width: "100%" }}
                className="_actions_slider"
              >
                {data.map((elm) => (
                  <Grid.Column>
                    <div className="flex _action justify-between">
                      <Image src={Img} alt="img" className=" h-full" />
                      <p className="extra-small">{elm.title}</p>
                    </div>
                  </Grid.Column>
                ))}
              </Slider>
            )}
            {data.length <= 4 && (
              <div className="less_then">
                {data.map((elm) => (
                  <Grid.Column>
                    <div className="flex _action justify-between">
                      <Image src={Img} alt="img" className=" h-full" />
                      <p className="extra-small">{elm.title}</p>
                    </div>
                  </Grid.Column>
                ))}
              </div>
            )}
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};
export default Actions;
