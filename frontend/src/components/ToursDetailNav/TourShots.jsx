import React from "react";
import { Image, Grid } from "semantic-ui-react";

import Img from "../../assets/recommended.png";

const TourShots = (props) => {
  return (
    <div className="_tour_shots">
      <div className="colmn">
        <div className="title_col">
          <p className="medium-text">{props.title}</p>
        </div>
      </div>
      <div className="col_img">
        <Image src={Img} alt="img" />
      </div>
      <div className="col_multiple_img _margin_vertical_xs">
        <Grid stackable columns={3}>
          <Grid.Column>
            <Image src={Img} />
          </Grid.Column>
          <Grid.Column>
            <Image src={Img} />
          </Grid.Column>{" "}
          <Grid.Column>
            <Image src={Img} />
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};
export default TourShots;
