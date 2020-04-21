import React from "react";
import Slider from "react-slick";
import { Grid, Button, Container } from "semantic-ui-react";

import Activities from "../Activities/Activities.jsx";
import RecommendedPicture from "./RecommendedPicture.jsx";

import "./Recommended.css";

const Recommended = () => {
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
  };
  return (
    <div className="_recommended">
      <Container
        style={{
          backgroundColor: "white",
        }}
      >
        <div className="_recommended_list shadow">
          <div className="">
            <p className="extra-text">Safariatcom</p>
            <p className="small default-color _margin_vertical_xs">
              Join our Community to display your profil, and get better
              experience
            </p>
            <div className="_recommended_divider">
              <Button className="_recommended_list_ _primary_button secondary">
                Sign up
              </Button>
            </div>
            <p className="medium-text black-txt  _margin_vertical_sm">
              Recommended
            </p>
            <Grid className="_recommended_imgs" relaxed columns="equal">
              <Grid.Row style={{ width: "100%", padding: "0 50px" }}>
                <Slider
                  {...settings}
                  style={{ width: "100%" }}
                  className="my-slider"
                >
                  <Grid.Column>
                    <RecommendedPicture />
                  </Grid.Column>{" "}
                  <Grid.Column>
                    <RecommendedPicture />
                  </Grid.Column>
                  <Grid.Column>
                    <RecommendedPicture />
                  </Grid.Column>
                  <Grid.Column>
                    <RecommendedPicture />
                  </Grid.Column>
                  <Grid.Column>
                    <RecommendedPicture />
                  </Grid.Column>
                </Slider>
              </Grid.Row>
            </Grid>
            <p className="medium-text black-txt  _margin_vertical">
              Activities
            </p>
            <div className="activities_grid">
              <Activities type="hicking" text="Hicking" />
              <Activities type="national" text="National City tour" />
              <Activities type="international" text="International City tour" />
              <Activities type="haj" text="Hajj & Omrah" />
              <Activities type="summer" text="Summer" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Recommended;
