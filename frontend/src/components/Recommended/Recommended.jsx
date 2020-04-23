import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import {
  Grid,
  Button,
  Container,
  Image,
  Reveal,
  Rating,
} from "semantic-ui-react";
import axios from "axios";
import RecommendedImg from "../../assets/recommended.png";

import Activities from "../Activities/Activities.jsx";

import "./Recommended.css";

const Recommended = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    axios.get(" http://localhost:3000/recommended").then((res) => {
      setData(res.data);
      setIsLoaded(true);
    });
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
        breakpoint: 1001,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {isLoaded ? (
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
                <Grid
                  stackable
                  className="_recommended_imgs"
                  relaxed
                  columns="equal"
                >
                  <Grid.Row
                    style={{ width: "100%", padding: "0 50px" }}
                    className="_recommended_row"
                  >
                    {data.length > 3 && (
                      <Slider
                        {...settings}
                        style={{ width: "100%" }}
                        className="my-slider"
                      >
                        {data.map((element, index) => {
                          console.log(element);
                          return (
                            <Grid.Column key={index}>
                              <Reveal
                                animated="fade"
                                style={{ width: "100%", height: "100%" }}
                              >
                                {/* //?Visible part */}
                                <Reveal.Content
                                  className="visible"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    zIndex: "100",
                                  }}
                                >
                                  <Image
                                    src={RecommendedImg}
                                    style={{ width: "100%", height: "100%" }}
                                  />
                                </Reveal.Content>
                                {/* //?hidden part */}
                                <Reveal.Content
                                  className="hidden and"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    zIndex: "100",
                                  }}
                                >
                                  <Image
                                    src={RecommendedImg}
                                    size="medium"
                                    className="_recommended_image_hidden"
                                  />
                                  <div className="recomended_hidden_items">
                                    <div className="extra-small text-white dayz ">
                                      <p>Explore</p>
                                    </div>
                                    <div
                                      className="small text-white dayz center shadow"
                                      style={{ marginTop: "12px" }}
                                    >
                                      <p>{element.time}</p>
                                    </div>
                                    <Rating
                                      style={{ marginTop: "12px" }}
                                      icon="star"
                                      defaultRating={element.staring}
                                      maxRating={5}
                                      disabled
                                    />
                                    <div
                                      style={{
                                        marginBottom: "4px",
                                        fontWeight: "bold",
                                      }}
                                      className="huh"
                                    >
                                      <p className="text-white small ">
                                        From : {element.from}$
                                      </p>
                                      <p className="text-white medium-text">
                                        {element.name}
                                      </p>
                                    </div>
                                  </div>
                                </Reveal.Content>
                              </Reveal>
                            </Grid.Column>
                          );
                        })}
                      </Slider>
                    )}
                    {data.length <= 3 && (
                      <>
                        {data.map((element, index) => {
                          console.log(element);
                          return (
                            <Grid.Column key={index}>
                              <Reveal
                                animated="fade"
                                style={{ width: "100%", height: "100%" }}
                              >
                                {/* //?Visible part */}
                                <Reveal.Content
                                  className="visible"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    zIndex: "100",
                                  }}
                                >
                                  <Image
                                    src={RecommendedImg}
                                    style={{ width: "100%", height: "100%" }}
                                  />
                                </Reveal.Content>
                                {/* //?hidden part */}
                                <Reveal.Content
                                  className="hidden and"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    zIndex: "100",
                                  }}
                                >
                                  <Image
                                    src={RecommendedImg}
                                    size="medium"
                                    className="_recommended_image_hidden"
                                  />
                                  <div className="recomended_hidden_items">
                                    <div className="extra-small text-white dayz ">
                                      <p>Explore</p>
                                    </div>
                                    <div
                                      className="small text-white dayz center shadow"
                                      style={{ marginTop: "12px" }}
                                    >
                                      <p>{element.time}</p>
                                    </div>
                                    <Rating
                                      style={{ marginTop: "12px" }}
                                      icon="star"
                                      defaultRating={element.staring}
                                      maxRating={5}
                                      disabled
                                    />
                                    <div
                                      style={{
                                        marginBottom: "4px",
                                        fontWeight: "bold",
                                      }}
                                      className="huh"
                                    >
                                      <p className="text-white small ">
                                        From : {element.from}$
                                      </p>
                                      <p className="text-white medium-text">
                                        {element.name}
                                      </p>
                                    </div>
                                  </div>
                                </Reveal.Content>
                              </Reveal>
                            </Grid.Column>
                          );
                        })}
                      </>
                    )}
                  </Grid.Row>
                </Grid>
                <p className="medium-text black-txt  _margin_vertical_sm">
                  Activities
                </p>
                <div className="activities_grid">
                  <Activities type="hicking" text="Hicking" />
                  <Activities type="national" text="National City tour" />
                  <Activities
                    type="international"
                    text="International City tour"
                  />
                  <Activities type="haj" text="Hajj & Omrah" />
                  <Activities type="summer" text="Summer" />
                </div>
                <div className="activities_grid mobile">
                  <div className="flex justify-between">
                    <Activities type="hicking" text="Hicking" />
                    <Activities type="national" text="National City tour" />
                  </div>
                  <div className="flex justify-between">
                    <Activities
                      type="international"
                      text="International City tour"
                    />
                    <Activities type="haj" text="Hajj & Omrah" />
                  </div>
                  <div className="flex justify-between">
                    <Activities type="summer" text="Summer" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </>
  );
};
export default Recommended;
