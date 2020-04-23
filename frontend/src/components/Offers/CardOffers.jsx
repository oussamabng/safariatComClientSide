import React, { useState } from "react";
import { Card, Image, Rating, Button } from "semantic-ui-react";
import Img from "../../assets/recommended.png";

const CardOffers = (props) => {
  const [element] = useState(props.data);
  return (
    <Card className="_offers_card">
      <Image src={Img} wrapped ui={false} />
      <div className="_card_offers_pinner">
        <p className="extra-small">{element.time}</p>
      </div>
      <Card.Content>
        <div className="flex justify-between">
          <p className="text-black text-black m-0">{element.title}</p>
          <p
            className="_button rounded extra-small shadow"
            style={{ padding: ".5rem" }}
          >
            Sale
          </p>
        </div>
        <Card.Meta>
          <p className="default-color extra-small">{element.type}</p>
        </Card.Meta>
        <div className="flex justify-between _margin_vertical_xs">
          <div className="flex-col _diff">
            <p className="black-txt small">Difficulty</p>
            <Rating
              icon="star"
              defaultRating={element.difficulty}
              maxRating={5}
              disabled
              size="large"
            />
          </div>
          <div className="flex-col">
            <p className="black-txt small">Rate</p>
            <Rating
              icon="star"
              defaultRating={element.rate}
              maxRating={5}
              disabled
              size="large"
            />
          </div>
        </div>
        <div className="text-black flex-col _margin_horizontal _margin_vertical_sm">
          <p className="small m-0">Description</p>
          <p className="extra-small">{element.description}</p>
          <div className="flex justify-between medium-text _padding_horizontal_sm _margin_vertical_xs">
            <p className="m-0 default-color ">
              From :{" "}
              <span className="line-through black-txt">{element.from}$</span>
            </p>
            <p className="default-color ">
              To : <span className=" black-txt">{element.top}$</span>
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
