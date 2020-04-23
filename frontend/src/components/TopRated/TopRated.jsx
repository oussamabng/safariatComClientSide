import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Container, Grid, Icon, Image } from "semantic-ui-react";
import axios from "axios";
import "./TopRated.css";
import Agency from "../../assets/top_rated.png";

const TopRated = () => {
  const [slider, setSlider] = useState(null);
  const [data, setData] = useState([]);
  //?settings of slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // focusOnSelect: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
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
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/top_rated")
      .then((res) => setData(res.data));
  }, []);

  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };
  return (
    <div className="_parteners _top_rated">
      <Container>
        <div className="flex">
          <p className="title black-txt">Top rated Travel Agencies</p>
        </div>
        <Grid className="w-full grid_top_rated ">
          <Grid.Row className="w-full h-full">
            {data.length > 2 && (
              <>
                <div className="_arrow_left pointer" onClick={previous}>
                  <Icon name="arrow left" />
                </div>
                <div className="_arrow_right pointer" onClick={next}>
                  <Icon name="arrow right" />
                </div>
              </>
            )}
            <Slider
              ref={(c) => setSlider(c)}
              {...settings}
              className="_top_rated_slider"
              style={{ width: "100%", height: "100%" }}
            >
              {data.map(() => (
                <Grid.Column>
                  <div className="_top_rated_picture">
                    <Image alt="img" src={Agency} />
                  </div>
                </Grid.Column>
              ))}
            </Slider>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};
export default TopRated;
