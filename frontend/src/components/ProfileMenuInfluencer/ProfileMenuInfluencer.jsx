import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";

//? import components
import ProfileMenuAbout from "./ProfileMenuAbout.jsx";
import ProfileMenuOverview from "./ProfileMenuOverview.jsx";
import ProfileMenuAboutAgency from "./ProfileMenuAboutAgency.jsx";

//? import css
import "./ProfileMenuInfluencer.css";

const ProfileMenuInfluencer = (props) => {
  const { influencer } = props;
  const [activeItem, setActiveItem] = useState("About");
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };
  return (
    <Container
      style={{
        paddingBottom: "4rem",
      }}
    >
      <div className="_profile_menu">
        <Menu pointing secondary>
          {influencer && (
            <Menu.Item
              name="Overview"
              active={activeItem === "Overview"}
              onClick={handleItemClick}
            />
          )}
          <Menu.Item
            name="About"
            active={activeItem === "About"}
            onClick={handleItemClick}
          />
        </Menu>
      </div>
      {activeItem === "About" && influencer && <ProfileMenuAbout />}
      {activeItem === "About" && !influencer && <ProfileMenuAboutAgency />}
      {activeItem === "Overview" && influencer && <ProfileMenuOverview />}
    </Container>
  );
};

export default ProfileMenuInfluencer;
