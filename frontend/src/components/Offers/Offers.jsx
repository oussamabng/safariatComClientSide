import React, { useState } from "react";
import { Container, Grid, Icon } from "semantic-ui-react";
import Slider from "react-slick";
import CardOffers from "./CardOffers.jsx";

import "./Offers.css";

const Offers = () => {
  const [slider, setSlider] = useState(null);
  //?settings of slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // focusOnSelect: true,
    slidesToShow: 3,
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
    ],
  };

  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };

  return (
    <div className="_offers">
      <Container>
        <div className="flex" style={{ paddingTop: "1rem" }}>
          <p className="title black-txt  _margin_vertical">
            Offers and promotions
          </p>
        </div>
        <Grid className="_offers_grid w-full">
          <Grid.Row className="w-full">
            <div className="_arrow_left pointer" onClick={previous}>
              <Icon name="arrow left" />
            </div>
            <div className="_arrow_right pointer" onClick={next}>
              <Icon name="arrow right" />
            </div>
            <Slider
              ref={(c) => setSlider(c)}
              {...settings}
              className="_offers_slider w-full"
            >
              <Grid.Column>
                <CardOffers />
              </Grid.Column>
              <Grid.Column>
                <CardOffers />
              </Grid.Column>
              <Grid.Column>
                <CardOffers />
              </Grid.Column>
              <Grid.Column>
                <CardOffers />
              </Grid.Column>
            </Slider>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};
export default Offers;
