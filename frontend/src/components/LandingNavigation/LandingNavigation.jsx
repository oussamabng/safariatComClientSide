import React, { useState } from "react";
import { Container, List, Accordion, Icon } from "semantic-ui-react";
import { ReactComponent as Position } from "../../assets/icons/position.svg";
import { ReactComponent as Location } from "../../assets/icons/location.svg";
import { ReactComponent as Camera } from "../../assets/icons/camera.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import { ReactComponent as Add } from "../../assets/icons/add.svg";
import { ReactComponent as Dots } from "../../assets/icons/dots.svg";

import "./LandingNavigation.css";

const LandingNavigation = () => {
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    setIsShow((prevState) => !prevState);
  };
  return (
    <div className="_header_container">
      <Container className="spec_container">
        <List className="_header_list navigation" horizontal>
          <List.Item className=" _landing_navigation">
            <Position />
            <p className="small bold _margin_horizontal_xs">Travel agencies</p>
          </List.Item>
          <List.Item className=" _landing_navigation">
            <User />
            <p className="small bold _margin_horizontal_xs">Influencers</p>
          </List.Item>
          <List.Item className=" _landing_navigation ">
            <Camera />
            <p className="small bold _margin_horizontal_xs">Photo- graphers</p>
          </List.Item>
          <List.Item className=" _landing_navigation ">
            <Location />
            <p className="small bold _margin_horizontal_xs">Tour Guides</p>
          </List.Item>
          <List.Item className=" _landing_navigation ">
            <Add />
            <p className="small bold _margin_horizontal_xs">Add story</p>
          </List.Item>
        </List>
      </Container>
      <div className="mobile_navigation">
        <div className="_landing_navigation m-0">
          <Position className="dots" />
          <p className="extra-small bold _margin_horizontal_xs">
            Travel agencies
          </p>
        </div>
        <div className="_landing_navigation m-0">
          <User className="dots" />
          <p className="extra-small bold _margin_horizontal_xs">
            Travel agencies
          </p>
        </div>
        <div
          className={isShow ? "hidde" : "_landing_navigation m-0"}
          onClick={handleClick}
        >
          <Dots className="dots" />
        </div>
      </div>
      <Accordion className={isShow ? "" : "hidde"}>
        <Accordion.Content>
          <div className="mobile_navigation">
            <div className="_landing_navigation m-0">
              <Camera className="dots" />
              <p className="extra-small bold _margin_horizontal_xs">
                Photo- graphers
              </p>
            </div>
            <div className="_landing_navigation">
              <Location className="dots" />
              <p className="extra-small bold _margin_horizontal_xs">
                Tour Guides
              </p>
            </div>
          </div>
          <div className="flex ">
            <div className="_landing_navigation  m-0">
              <Add className="dots" />
              <p className="extra-small bold _margin_horizontal_xs">
                Add story
              </p>
            </div>
          </div>
          <div className="flex" style={{ padding: ".5rem" }}>
            <Icon
              onClick={handleClick}
              name="angle double up"
              style={{ fontSize: "1.4rem" }}
              className="pointer"
            />
          </div>
        </Accordion.Content>
      </Accordion>
    </div>
  );
};
export default LandingNavigation;
