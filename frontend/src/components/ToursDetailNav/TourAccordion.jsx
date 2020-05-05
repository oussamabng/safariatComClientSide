import React, { useState } from "react";
import { Accordion } from "semantic-ui-react";

import { ReactComponent as Arrow } from "../../assets/icons/accordion-arrow.svg";

const TourAccodion = (props) => {
  const { number, text } = props;
  const [activeIndex, setActiveIndex] = useState(null);
  const handleAccordion = (e, titleProps) => {
    const { index } = titleProps;
    if (index === activeIndex) {
      setActiveIndex(null);
    } else setActiveIndex(index);
  };
  return (
    <Accordion styled>
      <Accordion.Title
        active={activeIndex === 0}
        index={0}
        onClick={handleAccordion}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="number_accordion">
            <p
              className="medium-text"
              style={{
                transform: "rotate(-45deg)",
              }}
            >
              {number}
            </p>
          </div>
          <p className="medium-text _margin_horizontal_sm">
            Arrival at location
          </p>
        </div>
        <Arrow />
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 0}>
        <p className="small">{text}</p>
      </Accordion.Content>
    </Accordion>
  );
};
export default TourAccodion;
