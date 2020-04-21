import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import Slider from "react-slick";

import "./Actions.css";

import Img from "../../assets/hicking.png";

const Actions = () => {
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
            <Slider
              {...settings}
              style={{ width: "100%" }}
              className="_actions_slider"
            >
              <Grid.Column>
                <div className="flex _action justify-between">
                  <Image src={Img} alt="img" className=" h-full" />
                  <p className="extra-small">
                    Travel agency Added new Tour to egypt
                  </p>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="flex _action justify-between">
                  <Image src={Img} alt="img" className=" h-full" />
                  <p className="extra-small">
                    Travel agency Added new Tour to egypt
                  </p>
                </div>
              </Grid.Column>{" "}
              <Grid.Column>
                <div className="flex _action justify-between">
                  <Image src={Img} alt="img" className=" h-full" />
                  <p className="extra-small ml-auto">
                    Travel agency Added new Tour to egypt
                  </p>
                </div>
              </Grid.Column>{" "}
              <Grid.Column>
                <div className="flex _action justify-between">
                  <Image src={Img} alt="img" className=" h-full" />
                  <p className="extra-small">
                    Travel agency Added new Tour to egypt
                  </p>
                </div>
              </Grid.Column>{" "}
              <Grid.Column>
                <div className="flex _action justify-between">
                  <Image src={Img} alt="img" className=" h-full" />
                  <p className="extra-small">
                    Travel agency Added new Tour to egypt
                  </p>
                </div>
              </Grid.Column>{" "}
              <Grid.Column>
                <div className="flex _action justify-between">
                  <Image src={Img} alt="img" className=" h-full" />
                  <p className="extra-small">
                    Travel agency Added new Tour to egypt
                  </p>
                </div>
              </Grid.Column>
            </Slider>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};
export default Actions;
