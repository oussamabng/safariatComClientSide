import React from "react";
import { Container, Grid } from "semantic-ui-react";

import "./Parteners.css";
import { ReactComponent as Part1 } from "../../assets/par1.svg";
import { ReactComponent as Part2 } from "../../assets/par2.svg";
import { ReactComponent as Part3 } from "../../assets/par3.svg";
import { ReactComponent as Part4 } from "../../assets/par4.svg";

const Parteners = () => {
  return (
    <div className="_parteners">
      <div className="_patterns_color">
        <Container>
          <div className="flex ">
            <p className="title black-txt">Partners</p>
          </div>
          <Grid
            columns={4}
            className="_padding_vertical_sm _parteners_grid"
            style={{ paddingTop: "0" }}
          >
            <Grid.Row>
              <Grid.Column width={2}>
                <Part1 />
              </Grid.Column>
              <Grid.Column width={2}>
                <Part2 />
              </Grid.Column>
              <Grid.Column width={2}>
                <Part3 />
              </Grid.Column>
              <Grid.Column width={2}>
                <Part4 />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div className="_parteners_mobile flex-col">
            <div className="flex justify-evenly _padding_vertical_xs">
              <Part1 />
              <Part2 />
            </div>
            <div className="flex justify-evenly">
              <Part3 />
              <Part4 />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Parteners;
