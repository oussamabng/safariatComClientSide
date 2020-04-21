import React from "react";
import { Card, Image, Rating, Button } from "semantic-ui-react";
import Img from "../../assets/recommended.png";

const CardOffers = (props) => {
  return (
    <Card className="_offers_card">
      <Image src={Img} wrapped ui={false} />
      <div className="_card_offers_pinner">
        <p className="extra-small">10 days left</p>
      </div>
      <Card.Content>
        <div className="flex justify-between">
          <p className="text-black text-black m-0">Hiking in Chrea</p>
          <p
            className="_button rounded extra-small shadow"
            style={{ padding: ".5rem" }}
          >
            Sale
          </p>
        </div>
        <Card.Meta>
          <p className="default-color extra-small">
            touristic, hiking ,hard tour
          </p>
        </Card.Meta>
        <div className="flex justify-between _margin_vertical_xs">
          <div className="flex-col _diff">
            <p className="black-txt small">Difficulty</p>
            <Rating
              icon="star"
              defaultRating={3}
              maxRating={5}
              disabled
              size="large"
            />
          </div>
          <div className="flex-col">
            <p className="black-txt small">Rate</p>
            <Rating
              icon="star"
              defaultRating={3}
              maxRating={5}
              disabled
              size="large"
            />
          </div>
        </div>
        <div className="text-black flex-col _margin_horizontal _margin_vertical_sm">
          <p className="small m-0">Description</p>
          <p className="extra-small">
            Af deel pomp soms tijd veel ad. En voorloopig uitgegeven en nu ad
            verkochten beschikken. Al zout al in over bord te. Voorschijn
            moeilijker wedijveren na op.
          </p>
          <div className="flex justify-between medium-text _padding_horizontal_sm _margin_vertical_xs">
            <p className="m-0 default-color ">
              From : <span className="line-through black-txt">575$</span>
            </p>
            <p className="default-color ">
              From : <span className=" black-txt">575$</span>
            </p>
          </div>
          <div className="flex _margin_vertical_xs">
            <Button className="_primary_button _offers_card_button">
              Explore
            </Button>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
};
export default CardOffers;
