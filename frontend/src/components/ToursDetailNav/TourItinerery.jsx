import React from "react";
import { Container } from "semantic-ui-react";

import TourAccordion from "./TourAccordion.jsx";
import TourShots from "./TourShots.jsx";

const TourItinerery = () => {
  return (
    <Container>
      <div className="tour_detail_overview tour_detail_iten">
        <div className="col">
          <TourAccordion
            number={1}
            text="As collected deficient objection by it discovery sincerity
          curiosity.Quiet decay who round three world whole has mrs man. Built
          the china there tried jokes which gy why. Assure in adieus wicket it
          is. But spoke round point and one joy."
          />
          <TourAccordion
            number={2}
            text="As collected deficient objection by it discovery sincerity
          curiosity.Quiet decay who round three world whole has mrs man. Built
          the china there tried jokes which gy why. Assure in adieus wicket it
          is. But spoke round point and one joy."
          />
          <TourAccordion
            number={3}
            text="As collected deficient objection by it discovery sincerity
          curiosity.Quiet decay who round three world whole has mrs man. Built
          the china there tried jokes which gy why. Assure in adieus wicket it
          is. But spoke round point and one joy."
          />
          <TourAccordion
            number={4}
            text="As collected deficient objection by it discovery sincerity
          curiosity.Quiet decay who round three world whole has mrs man. Built
          the china there tried jokes which gy why. Assure in adieus wicket it
          is. But spoke round point and one joy."
          />
          <TourAccordion
            number={5}
            text="As collected deficient objection by it discovery sincerity
          curiosity.Quiet decay who round three world whole has mrs man. Built
          the china there tried jokes which gy why. Assure in adieus wicket it
          is. But spoke round point and one joy."
          />
          <TourAccordion
            number={6}
            text="As collected deficient objection by it discovery sincerity
          curiosity.Quiet decay who round three world whole has mrs man. Built
          the china there tried jokes which gy why. Assure in adieus wicket it
          is. But spoke round point and one joy."
          />
        </div>
        <div className="col">
          <TourShots title="Shots from past tours" />
        </div>
      </div>
    </Container>
  );
};
export default TourItinerery;
