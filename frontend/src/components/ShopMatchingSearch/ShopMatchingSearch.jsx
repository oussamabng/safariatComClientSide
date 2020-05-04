import React from "react";
import { Container, Grid, Button } from "semantic-ui-react";

import ShopCard from "../../components/ShopCard/ShopCard.jsx";

const ShopMatchingSearch = () => {
  return (
    <Container
      style={{
        padding: "4rem 0",
      }}
    >
      <p
        className="title"
        style={{
          color: "#4E4E4E",
          fontWeight: "500",
        }}
      >
        Products Matching search
      </p>
      <Grid stackable columns={3}>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <ShopCard />
        </Grid.Column>{" "}
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <ShopCard />
        </Grid.Column>{" "}
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <ShopCard />
        </Grid.Column>{" "}
      </Grid>
      <div className="load_more_btn _margin_vertical">
        <Button className="">Load more</Button>
      </div>
    </Container>
  );
};

export default ShopMatchingSearch;
