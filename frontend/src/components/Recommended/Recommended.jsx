import React from "react";
import { Grid, Button } from "semantic-ui-react";
import RecommendedPicture from "./RecommendedPicture.jsx";
import Slider from "react-slick";
//* import activties
import Activities from "../Activities/Activities.jsx";

import "./Recommended.css";

const Recommended = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="_recommended">
      <div className="_recommended_container">
        <div className="_recommended_list">
          <p className="title">Safariatcom</p>
          <p className="small default-color _margin_vertical_xs">
            Join our Community to display your profil, and get better experience
          </p>
          <div className="_recommended_divider">
            <Button className="_recommended_list_ _primary_button secondary">
              Sign up
            </Button>
          </div>
          <p className="medium-text default-color _margin_vertical_sm">
            Recommended
          </p>
          <Grid className="_recommended_imgs" relaxed columns={3}>
            <Grid.Row>
              <Grid.Column>
                <RecommendedPicture />
              </Grid.Column>
              <Grid.Column>
                <RecommendedPicture />
              </Grid.Column>
              <Grid.Column>
                <RecommendedPicture />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <p className="medium-text default-color _margin_vertical">
            Activities
          </p>
          <div className="activities_grid">
            <Activities type="hicking" text="Hicking" />
            <Activities type="national" text="National City tour" />
            <Activities type="international" text="International City tour" />
            <Activities type="haj" text="Hajj & Omrah" />
            <Activities type="summer" text="Summer" />
          </div>
          <div
            style={{
              padding: "5rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Slider {...settings} style={{ width: "100%" }}>
              <div className="_margin_horizontal_sm">
                <RecommendedPicture />
              </div>
              <div className="_margin_horizontal_sm">
                <RecommendedPicture />
              </div>
              <div className="_margin_horizontal_sm">
                <RecommendedPicture />
              </div>
              <div className="_margin_horizontal_sm">
                <RecommendedPicture />
              </div>
              <div className="_margin_horizontal_sm">
                <RecommendedPicture />
              </div>
              <div className="_margin_horizontal_sm">
                <RecommendedPicture />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recommended;
