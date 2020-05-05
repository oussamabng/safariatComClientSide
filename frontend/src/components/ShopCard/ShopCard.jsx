import React from "react";
import { Card, Image, Button } from "semantic-ui-react";

import ShopImg from "../../assets/shop.png";

import "./ShopCard.css";
const ShopCard = () => {
  return (
    <div className="shop_card">
      <Card>
        <Image src={ShopImg} wrapped ui={false} />
        <Card.Content>
          <h1 className="medium-text black-txt">Hikers backpack</h1>
          <Card.Meta>
            <span className="date default-color extra-small">
              Category : Camping , hiking , backpack
            </span>
          </Card.Meta>
          <Card.Description className="extra-small black-txt">
            Af deel pomp soms tijd veel ad. En voorloopig uitgegeven en nu ad
            verkochten beschikken. Al zout al in over bord te. Voorschijn
            moeilijker wedijveren na op.
          </Card.Description>
        </Card.Content>
        <div className="shop_card_btn">
          <p className="medium-text default-color">
            From : <span className="black-txt medium-text">449 $ </span>
          </p>
          <Button className="_button_inverted">Shop</Button>
        </div>
      </Card>
    </div>
  );
};

export default ShopCard;
