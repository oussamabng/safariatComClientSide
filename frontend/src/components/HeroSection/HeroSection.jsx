import React from "react";
import "./HeroSection.css";
import { Container, Button, Icon } from "semantic-ui-react";
import SearchInput from "../SearchInput/SearchInput.jsx";

const HeroSection = () => {
  return (
    <div className="_hero_section">
      <div class="hero-text">
        <h1
          className="CF_regular header _margin_vertical"
          style={{ fontWeight: 500 }}
        >
          Take your travels to a next level !
        </h1>
        <div className="_hero_section_search flex flex-col">
          <SearchInput right placeholder="what is your destination ?" />
          <div className="_hero_section_trip pointer border-radius-xl shadow _margin_vertical_sm ">
            <h2 className="bold title CF_extrabold">Pick my trip</h2>
            <Icon color="yellow" size="big" name="angle right" />
          </div>
        </div>
        <h2 className="CF_bold header _margin_vertical">
          <span className="CF_bold header active-txt">Best</span> tour
          experience{" "}
        </h2>
      </div>
    </div>
  );
};
export default HeroSection;
