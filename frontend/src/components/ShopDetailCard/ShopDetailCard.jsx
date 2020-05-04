import React from "react";
import { Container, Grid, Image, Button, Dropdown } from "semantic-ui-react";

import ShopImg from "../../assets/bag.jpg";

//? import css
import "./ShopDetailCard.css";

const ShopDetailCard = () => {
  const options = [
    { key: 1, text: "Choice 1", value: 1 },
    { key: 2, text: "Choice 2", value: 2 },
    { key: 3, text: "Choice 3", value: 3 },
  ];
  return (
    <div className="full_card_detail_shop">
      <Container>
        <Grid columns={2}>
          <Grid.Column className="col">
            <Image src={ShopImg} />
          </Grid.Column>
          <Grid.Column className="col_detail">
            <div className="shop_detail_card">
              <h1
                className="extra-text _margin_vertical_sm"
                style={{
                  color: "#474747",
                }}
              >
                Hiking backpack
              </h1>
              <p className="medium-text default-color">
                Type : Camping , hiking , backpack
              </p>
              <p className="medium-text default-color">
                Service Type : for Sell
              </p>
              <p className="medium-text black-txt _margin_vertical_sm">
                Af deel pomp soms tijd veel ad. En voorloopig uitgegeven en nu
                ad verkochten beschikken. Al zout al in over bord te. Voorschijn
                moeilijker wedijveren na op.
              </p>
              <p
                className="title"
                style={{
                  fontWeight: "800",
                  color: "#474747",
                }}
              >
                Price : 65 $
                <div className="row_shop_detail">
                  <Dropdown text="Color" options={options} item />
                  <Dropdown text="Size" options={options} item />
                </div>{" "}
                <div className="row_shop_detail">
                  <Dropdown text="1" options={options} item />
                  <Button className="_button">Shop now</Button>
                </div>
              </p>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default ShopDetailCard;
