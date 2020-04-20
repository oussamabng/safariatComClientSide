import React from "react";
import { Container, List } from "semantic-ui-react";
import { ReactComponent as Position } from "../../assets/icons/position.svg";
import { ReactComponent as Location } from "../../assets/icons/location.svg";
import { ReactComponent as Camera } from "../../assets/icons/camera.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import { ReactComponent as Add } from "../../assets/icons/add.svg";

import "./LandingNavigation.css";

const LandingNavigation = () => {
  return (
    <div className="_header_container">
      <Container>
        <List className="_header_list navigation" horizontal>
          <List.Item className=" _landing_navigation">
            <Position />
            <p className="small bold _margin_horizontal_xs">Travel agencies</p>
          </List.Item>
          <List.Item className=" _landing_navigation">
            <User />
            <p className="small bold _margin_horizontal_xs">Influencers</p>
          </List.Item>
          <List.Item className=" _landing_navigation">
            <Camera />
            <p className="small bold _margin_horizontal_xs">Photo- graphers</p>
          </List.Item>
          <List.Item className=" _landing_navigation">
            <Location />
            <p className="small bold _margin_horizontal_xs">Tour Guides</p>
          </List.Item>
          <List.Item className=" _landing_navigation">
            <Add />
            <p className="small bold _margin_horizontal_xs">Add story</p>
          </List.Item>
        </List>
      </Container>
    </div>
  );
};
export default LandingNavigation;
