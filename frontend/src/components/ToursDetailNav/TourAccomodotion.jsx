import React from "react";
import { Container } from "semantic-ui-react";

import TourShots from "./TourShots.jsx";

const TourAccomodotion = () => {
  return (
    <Container>
      <div className="tour_detail_overview tour_accmodotion">
        <div className="col">
          <div className="title_acomodotion">
            <p className="medium-text">Hotels, Tea Houses and Lodges</p>
          </div>
          <div className="paragraphs default-color">
            <p className="small ">
              This is Photoshop’s version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagit tis sem nibh id elit.
            </p>
            <p className="small">
              This is Photoshop’s version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagit tis sem nibh id elit.
            </p>{" "}
            <p className="small">
              This is Photoshop’s version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagit tis sem nibh id elit.
            </p>{" "}
            <p className="small">
              This is Photoshop’s version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagit tis sem nibh id elit.
            </p>
          </div>
        </div>
        <div className="col second">
          <TourShots title="Preview" />
        </div>
      </div>
    </Container>
  );
};
export default TourAccomodotion;
