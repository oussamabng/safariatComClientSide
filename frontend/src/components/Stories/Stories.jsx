import React from "react";
import { Container, Button, Grid, Image } from "semantic-ui-react";

import Recommended from "../../assets/recommended.png";
import "./Stories.css";

const Stories = () => {
  return (
    <div className="_stories bg-white">
      <Container>
        <div className="flex justify-between">
          <p className="title black-txt">Stories matching search</p>
          <Button size="tiny" className="_primary_button _offers_card_button">
            See all
          </Button>
        </div>
        <Grid
          stackable
          columns={3}
          className="_stories_grid _padding_vertical_sm"
        >
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <div
              className="flex  pointer col"
              style={{
                padding: "1rem",
              }}
            >
              <div>
                <div style={{ position: "relative" }}>
                  {" "}
                  <Image src={Recommended} style={{ width: "100%" }} />
                  <p className="check_story">check story</p>
                </div>
                <p className="_padding_vertical_xs">
                  Duis sed odio sit amet nibh vulputate cursu mauris.Morbi
                  accumsan ipsum velit.Nam n odio tincidunt auctor a ornare
                  odio.
                </p>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <div
              className="flex  pointer col"
              style={{
                padding: "1rem",
              }}
            >
              <div>
                <div style={{ position: "relative" }}>
                  {" "}
                  <Image src={Recommended} style={{ width: "100%" }} />
                  <p className="check_story">check story</p>
                </div>
                <p className="_padding_vertical_xs">
                  Duis sed odio sit amet nibh vulputate cursu mauris.Morbi
                  accumsan ipsum velit.Nam n odio tincidunt auctor a ornare
                  odio.
                </p>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <div
              className="flex  pointer col"
              style={{
                padding: "1rem",
              }}
            >
              <div>
                <div style={{ position: "relative" }}>
                  {" "}
                  <Image src={Recommended} style={{ width: "100%" }} />
                  <p className="check_story">check story</p>
                </div>
                <p className="_padding_vertical_xs">
                  Duis sed odio sit amet nibh vulputate cursu mauris.Morbi
                  accumsan ipsum velit.Nam n odio tincidunt auctor a ornare
                  odio.
                </p>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <div
              className="flex  pointer col"
              style={{
                padding: "1rem",
              }}
            >
              <div>
                <div style={{ position: "relative" }}>
                  {" "}
                  <Image src={Recommended} style={{ width: "100%" }} />
                  <p className="check_story">check story</p>
                </div>
                <p className="_padding_vertical_xs">
                  Duis sed odio sit amet nibh vulputate cursu mauris.Morbi
                  accumsan ipsum velit.Nam n odio tincidunt auctor a ornare
                  odio.
                </p>
              </div>
            </div>
          </Grid.Column>{" "}
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <div
              className="flex  pointer col"
              style={{
                padding: "1rem",
              }}
            >
              <div>
                <div style={{ position: "relative" }}>
                  {" "}
                  <Image src={Recommended} style={{ width: "100%" }} />
                  <p className="check_story">check story</p>
                </div>
                <p className="_padding_vertical_xs">
                  Duis sed odio sit amet nibh vulputate cursu mauris.Morbi
                  accumsan ipsum velit.Nam n odio tincidunt auctor a ornare
                  odio.
                </p>
              </div>
            </div>
          </Grid.Column>{" "}
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <div
              className="flex  pointer col"
              style={{
                padding: "1rem",
              }}
            >
              <div>
                <div style={{ position: "relative" }}>
                  {" "}
                  <Image src={Recommended} style={{ width: "100%" }} />
                  <p className="check_story">check story</p>
                </div>
                <p className="_padding_vertical_xs">
                  Duis sed odio sit amet nibh vulputate cursu mauris.Morbi
                  accumsan ipsum velit.Nam n odio tincidunt auctor a ornare
                  odio.
                </p>
              </div>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};
export default Stories;
