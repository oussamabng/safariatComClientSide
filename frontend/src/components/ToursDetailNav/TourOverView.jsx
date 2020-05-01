import React from "react";
import { Container, Icon, Label } from "semantic-ui-react";

const TourOverView = () => {
  return (
    <Container>
      <div className="tour_detail_overview">
        <div className="col shadow bg-white">
          <div className="top_header">
            <Icon size="big" name="check circle outline" />
            <h1 className="default-color title">Price includes</h1>
          </div>
          <div className="_down_info">
            <p>
              {" "}
              <Label circular empty />
              -A blend of tours fashioned by local guides and self-
            </p>{" "}
            <p>
              {" "}
              <Label circular empty />
              -A blend of tours fashioned by local guides and self-
            </p>{" "}
            <p>
              {" "}
              <Label circular empty />
              -A blend of tours fashioned by local guides and self-
            </p>{" "}
            <p>
              {" "}
              <Label circular empty />
              -A blend of tours fashioned by local guides and self-
            </p>{" "}
          </div>{" "}
        </div>
        <div className="col shadow bg-white">
          <div className="top_header">
            <Icon name="times circle outline" size="big" className="times" />
            <h1 className="default-color title">Price doesn't include</h1>
          </div>
          <div className="_down_info">
            <p>
              {" "}
              <Label circular empty />
              -A blend of tours fashioned by local guides and self-
            </p>{" "}
            <p>
              {" "}
              <Label circular empty />
              -A blend of tours fashioned by local guides and self-
            </p>{" "}
            <p>
              {" "}
              <Label circular empty />
              -A blend of tours fashioned by local guides and self-
            </p>{" "}
            <p>
              {" "}
              <Label circular empty />
              -A blend of tours fashioned by local guides and self-
            </p>
          </div>
        </div>
      </div>
      <div className="description_overview">
        <div className="row shadow">
          <h1 className="medium-text">Description</h1>
          <p className="small">
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.morbi
            accumsan ipsum velit.Nam nec tellus a odio tincidunt auctor a ornare
            odio. Sed non mauris vitae;erat consequat auctor eu in elit. Class
            aptent taciti sociosqu ad litora torquent pr conubia nostra,per
            inceptos himenaeos. Mauris in erat justo.
          </p>
        </div>
      </div>
    </Container>
  );
};
export default TourOverView;
