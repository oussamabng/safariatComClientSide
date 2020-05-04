import React from "react";

//? import components
import SortTours from "../../components/SortTours/SortTours.jsx";
import ShopCard from "../../components/ShopCard/ShopCard.jsx";
import { Container, Grid, Dropdown, Button } from "semantic-ui-react";

import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import { ReactComponent as Sort } from "../../assets/icons/card_sort.svg";
export default function Shop() {
  const options = [
    { key: 1, text: "Choice 1", value: 1 },
    { key: 2, text: "Choice 2", value: 2 },
    { key: 3, text: "Choice 3", value: 3 },
  ];
  const trigger = (
    <span className="span_sort">
      Sorted By
      <Arrow
        style={{
          marginLeft: "10px",
        }}
      />
    </span>
  );

  return (
    <>
      <SortTours date={false} dropdown={false} />
      <Container>
        <div className="filter_shop">
          <Dropdown
            trigger={trigger}
            options={options}
            floating
            labeled
            button
          />
          <Sort />
        </div>
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
    </>
  );
}
