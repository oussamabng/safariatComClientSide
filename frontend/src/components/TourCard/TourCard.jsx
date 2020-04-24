import React from "react";
import { Image, Button, Rating, Icon } from "semantic-ui-react";

import "./TourCard.css";
import Img from "../../assets/recommended.png";

const TourCard = () => {
  return (
    <div className="flex _margin_vertical_sm">
      <div className="_tour_card" style={{ borderTop: "solid 3px #A2D9B8" }}>
        <div className="row">
          <div className="col">
            <Image src={Img} alt="img" />
            <div className="under_col">
              <div className="flex" style={{ justifyContent: "flex-start" }}>
                <p className="small">18 days left</p>
              </div>
              <p className="title black-txt" style={{ margin: "5px 0" }}>
                Jijel hicking tour
              </p>
              <div className="flex" style={{ justifyContent: "flex-start" }}>
                <span className="extra-small">hicking</span>
                <span className="extra-small">hicking</span>
                <span className="extra-small">hicking</span>
              </div>
              <p className="medium-text description default-color">
                Duis sed odio sit amet nibh vulputate cursus a sit amet
                mauris.Morbi accumsan ipsum velit.Nam nec tellus a odio
                tincidunt auctor a ornare odio.
              </p>
              <div className="_tour_card_star">
                <div className="flex">
                  <p className="medium-text default-color">Rate</p>
                  <Rating
                    icon="star"
                    defaultRating={5}
                    maxRating={5}
                    disabled
                    size="large"
                  />
                </div>
                <div className="flex _diff">
                  <p className="medium-text default-color">Difficulty</p>
                  <Rating
                    icon="star"
                    defaultRating={5}
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
    </div>
  );
};
export default TourCard;
