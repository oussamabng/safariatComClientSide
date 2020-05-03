import React, { useState } from "react";
import { Container, Menu, Accordion, Icon } from "semantic-ui-react";
import { ReactComponent as Dots } from "../../assets/icons/dots.svg";

//? import css
import "./ToursDetailNav.css";
import TourOverView from "./TourOverView.jsx";
import TourItinerery from "./TourItinerery.jsx";
import TourAccomodotion from "./TourAccomodotion";
import TourGallery from "./TourGallery.jsx";

const ToursDetailNav = () => {
  const [activeItem, setActiveItem] = useState("Overview");
  const [isShow, setIsShow] = useState(false);

  const handleItemClick = (e, { name }) => setActiveItem(name);
  const handleClick = () => {
    setIsShow((prevState) => !prevState);
  };
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
        <div className="detail_main_nav_mobile">
          <Accordion>
            <Accordion.Title index={0} className={isShow ? "hidde" : ""}>
              <div className="ouf">
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
                </Menu>
                <Dots
                  className={isShow ? "hidde" : "dots_tour_detail pointer"}
                  onClick={handleClick}
                />
              </div>
            </Accordion.Title>
            <Accordion.Content className={!isShow ? "hidde" : "active"}>
              <Menu secondary className="_tour_detail_nav mobile">
                <div className="row_mob">
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
                </div>
                <div className="row_mob">
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
                </div>
                <div className="row_mob center">
                  <Menu.Item
                    name="FAQ and Reviews"
                    active={activeItem === "FAQ & Reviews"}
                    onClick={handleItemClick}
                  />
                </div>
              </Menu>
              <div className="flex" style={{ padding: ".5rem" }}>
                <Icon
                  onClick={handleClick}
                  name="angle double up"
                  size="big"
                  className="pointer"
                  style={{
                    color: "white",
                  }}
                />
              </div>
            </Accordion.Content>
          </Accordion>
        </div>
      </div>
      {activeItem === "Overview" && <TourOverView />}
      {activeItem === "Itinerary" && <TourItinerery />}
      {activeItem === "Accomodation" && <TourAccomodotion />}
      {activeItem === "Gallery" && <TourGallery />}
    </>
  );
};
export default ToursDetailNav;
