import React from "react";

import "./RecentTours.css";
import { Container, Grid } from "semantic-ui-react";
import RecommendedPicture from "../../components/Recommended/RecommendedPicture.jsx";

const RecentTours = () => {
  return (
    <div className="_recent_tours _padding_vertical_sm  ">
      <Container>
        <div className="flex _margin_vertical_sm">
          <p className="title black-txt">Recent viewed tours</p>
        </div>
        <div className="_popular_tours_grid">
          <div className="start_grid">
            <Grid stackable className="flex">
              <Grid.Column mobile={16} tablet={8} computer={5}>
                <div className="col">
                  <RecommendedPicture data={[]} />
                  <h3 className="title black-txt extra_sm_padding-v">Dubai</h3>
                  <p className="small default-color">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio excepturi vel quisquam, maxime, quae beatae ea
                    odio aperiam libero ullam temporibus, debitis natus
                    laboriosam quas eaque facere. Neque, voluptas molestiae!
                  </p>
                </div>
              </Grid.Column>{" "}
              <Grid.Column mobile={16} tablet={8} computer={5}>
                <div className="col">
                  <RecommendedPicture data={[]} />
                  <h3 className="title black-txt extra_sm_padding-v">Dubai</h3>
                  <p className="small default-color">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio excepturi vel quisquam, maxime, quae beatae ea
                    odio aperiam libero ullam temporibus, debitis natus
                    laboriosam quas eaque facere. Neque, voluptas molestiae!
                  </p>
                </div>
              </Grid.Column>{" "}
              <Grid.Column mobile={16} tablet={8} computer={5}>
                <div className="col">
                  <RecommendedPicture data={[]} />
                  <h3 className="title black-txt extra_sm_padding-v">Dubai</h3>
                  <p className="small default-color">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio excepturi vel quisquam, maxime, quae beatae ea
                    odio aperiam libero ullam temporibus, debitis natus
                    laboriosam quas eaque facere. Neque, voluptas molestiae!
                  </p>
                </div>
              </Grid.Column>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default RecentTours;
