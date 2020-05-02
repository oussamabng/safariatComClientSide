import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";

//? import css
import "./ToursDetailNav.css";
import TourOverView from "./TourOverView.jsx";
import TourItinerery from "./TourItinerery.jsx";

const ToursDetailNav = () => {
  const [activeItem, setActiveItem] = useState("Overview");
  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <>
      <div className="detail_main_nav">
        <Container>
          <div className="row">
            <Menu secondary className="_tour_detail_nav">
              <Menu.Item
                name="Overview"
                active={activeItem === "Overview"}
                onClick={handleItemClick}
              />
              <Menu.Item
                name="Itinerary"
                active={activeItem === "Itinerary"}
                onClick={handleItemClick}
              />
              <Menu.Item
                onClick={handleItemClick}
                name="Accomodation"
                active={activeItem === "Accomodation"}
              />
              <Menu.Item
                name="Gallery"
                active={activeItem === "Gallery"}
                onClick={handleItemClick}
              />
              <Menu.Item
                name="FAQ and Reviews"
                active={activeItem === "FAQ & Reviews"}
                onClick={handleItemClick}
              />
            </Menu>
          </div>
        </Container>
      </div>
      {activeItem === "Overview" && <TourOverView />}
      {activeItem === "Itinerary" && <TourItinerery />}
    </>
  );
};
export default ToursDetailNav;
