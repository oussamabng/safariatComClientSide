import React, { useState, useEffect } from "react";
import { Grid, Image, Icon } from "semantic-ui-react";
import Slider from "react-slick";

//? import imgs
import Img from "../../assets/recommended.png";

const ProfileMenuOverview = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
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
      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [paragraph, setParagraph] = useState("");
  const [isTextHidden, setText] = useState(true);
  const [slider, setSlider] = useState(null);

  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };
  const handleSeeMore = () => {
    setText((prevState) => !prevState);
  };
  useEffect(() => {
    let text =
      " Evenals eronder groeien smelter ik en. Krijgen bij als waarbij tinspleten wat tienden bersawa. Beletsel al failliet op en de trooien gezegend. Goa vele tot dier toen dien. Uitmaakt kinderen failliet op en de trooien gezegend. Goa vele tot dier toen dien. Uitmaakt kinderenfailliet op en de trooien gezegend. Goa vele tot dier toen dien. Uitmaakt kinderenfailliet op en de trooien gezegend. Goa vele tot dier toen dien. Uitmaakt kinderenfailliet op en de trooien gezegend. Goa vele tot dier toen dien. Uitmaakt kinderenfailliet op en de trooien gezegend. Goa vele tot dier toen dien. Uitmaakt kinderenfailliet op en de trooien gezegend. Goa vele tot dier toen dien. Uitmaakt kinderen";
    if (isTextHidden) {
      setParagraph(text.slice(0, 400));
    } else {
      setParagraph(text);
    }
  }, [isTextHidden]);
  return (
    <div className="_profile_inf_about overview">
      <Grid columns={2} stackable>
        <Grid.Column>
          <div className={isTextHidden ? "col first" : "col first paragraph"}>
            <h3 className="medium-text black-txt">Bio</h3>
            <p className="default-color small _margin_vertical_xs">
              {paragraph}
              {isTextHidden && (
                <span
                  className="underline black-txt small pointer"
                  onClick={handleSeeMore}
                  style={{
                    marginLeft: "6px",
                  }}
                >
                  See more
                </span>
              )}
              {!isTextHidden && (
                <span
                  className="underline black-txt small pointer"
                  onClick={handleSeeMore}
                  style={{
                    marginLeft: "6px",
                  }}
                >
                  See minus
                </span>
              )}
            </p>
          </div>
        </Grid.Column>
        <Grid.Column
          style={{
            height: "250px",
            position: "relative",
          }}
        >
          <div className=" left_i pointer shadow" onClick={previous}>
            <Icon name="arrow left" />
          </div>
          <div className="right_i pointer shadow" onClick={next}>
            <Icon name="arrow right" />
          </div>
          <div className="col">
            <h3 className="medium-text black-txt">Visited places</h3>
            <div className="slider-f">
              <Slider
                {...settings}
                ref={(c) => setSlider(c)}
                className="_profile_slider_menu"
              >
                <div>
                  <Image src={Img} />
                </div>{" "}
                <div>
                  <Image src={Img} />
                </div>{" "}
                <div>
                  <Image src={Img} />
                </div>{" "}
                <div>
                  <Image src={Img} />
                </div>{" "}
                <div>
                  <Image src={Img} />
                </div>{" "}
              </Slider>
            </div>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ProfileMenuOverview;
