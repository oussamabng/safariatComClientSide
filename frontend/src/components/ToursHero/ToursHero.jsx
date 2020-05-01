import React from "react";
import { Image, Grid, Table, Button, Rating } from "semantic-ui-react";

//? import css
import "./ToursHero.css";
import Img from "../../assets/recommended.png";

import { ReactComponent as Sauv } from "../../assets/icons/sauv.svg";
import { ReactComponent as Share } from "../../assets/icons/share.svg";

const ToursHero = () => {
  return (
    <div fluid className="_tours_hero">
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column className="hero" />
          <Grid.Column className="info_hero">
            <div className="_header_info_tour_hero">
              <div className="col">
                <Image src={Img} alt="img" />
                <div className="text_part">
                  <span className="small default-color">
                    Atlas travels Travel agency
                  </span>
                  <p className="large-title">Istanbul city tour</p>
                </div>
              </div>
            </div>
            <div className="_header_info_tour_hero center">
              <p className="small default-color">
                From{" "}
                <b
                  className="large-title"
                  style={{
                    color: "#616161",
                  }}
                >
                  625 $
                </b>
              </p>
              <Table striped>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Destination</Table.Cell>
                    <Table.Cell textAlign="right">Istanbul, Turkey</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Activity</Table.Cell>
                    <Table.Cell textAlign="right">
                      City tour, Tourism ,family
                    </Table.Cell>
                  </Table.Row>{" "}
                  <Table.Row>
                    <Table.Cell>Depart Date </Table.Cell>
                    <Table.Cell textAlign="right">21 - 06 -2020</Table.Cell>
                  </Table.Row>{" "}
                  <Table.Row>
                    <Table.Cell>Activity level </Table.Cell>
                    <Table.Cell textAlign="right">
                      <div className="flex _diff">
                        <p>(Medium)</p>
                        <Rating
                          icon="star"
                          rating={5}
                          maxRating={5}
                          disabled
                          size="large"
                        />
                      </div>
                    </Table.Cell>
                  </Table.Row>{" "}
                  <Table.Row>
                    <Table.Cell>Number of groups</Table.Cell>
                    <Table.Cell textAlign="right">6</Table.Cell>
                  </Table.Row>{" "}
                  <Table.Row>
                    <Table.Cell>Group size</Table.Cell>
                    <Table.Cell textAlign="right">8</Table.Cell>
                  </Table.Row>{" "}
                  <Table.Row>
                    <Table.Cell>Rate</Table.Cell>
                    <Table.Cell textAlign="right">
                      <div className="flex">
                        <p>(Medium)</p>
                        <Rating
                          icon="star"
                          rating={5}
                          maxRating={5}
                          disabled
                          size="large"
                        />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              <Button className="_tours_book_btn">Book now</Button>
              <div className="icon_tour_guid">
                <Sauv />
                <Share />
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default ToursHero;
