import React from "react";
import { Image, Grid, Container } from "semantic-ui-react";
import Img from "../../assets/recommended.png";

const TourGallery = () => {
  return (
    <div className="_tour_shots gallery">
      <Container>
        <Grid stackable columns={3}>
          <Grid.Column>
            <Image src={Img} />
          </Grid.Column>
          <Grid.Column>
            <Image src={Img} />
          </Grid.Column>{" "}
          <Grid.Column>
            <Image src={Img} />
          </Grid.Column>{" "}
          <Grid.Column>
            <Image src={Img} />
          </Grid.Column>{" "}
          <Grid.Column>
            <Image src={Img} />
          </Grid.Column>{" "}
          <Grid.Column>
            <Image src={Img} />
          </Grid.Column>{" "}
          <Grid.Column>
            <Image src={Img} />
          </Grid.Column>{" "}
          <Grid.Column>
            <Image src={Img} />
          </Grid.Column>{" "}
          <Grid.Column>
            <Image src={Img} />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};
export default TourGallery;
