import React, { useState } from "react";
import { Container, Image, Icon } from "semantic-ui-react";

//? import css
import "./ProfileHeader.css";

//? import imgs
import Cover from "../../assets/cover.jpg";
import Alex from "../../assets/alex.jpg";

//? import icons
import { ReactComponent as Dots } from "../../assets/icons/dots.svg";
import { ReactComponent as Follow } from "../../assets/icons/follow_him.svg";
import { ReactComponent as Award } from "../../assets/icons/award.svg";

const ProfileHeader = (props) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const handleFollow = () => {
    setIsFollowed((prevState) => !prevState);
  };
  return (
    <Container>
      <div
        className="_profile_cover_img"
        style={{
          backgroundImage: `url(${Cover})`,
        }}
      >
        <div className="_profile_image">
          <Image src={Alex} className="shadow" />
        </div>
      </div>
      <div className="_profile_nav">
        <div className="_profile_fullname">
          <p className="title black-txt">Andrea piccabio</p>
          <span className="medium-text default-color">@Andreapicc</span>
        </div>
        <div className="_profile_header_options">
          <div className="flex" style={{ margin: "0rem 1.5rem" }}>
            {isFollowed ? (
              <Icon
                name="check circle outline"
                size="large"
                id="check_post"
                onClick={handleFollow}
                className="pointer"
              />
            ) : (
              <Follow
                size="large"
                id="check_post"
                onClick={handleFollow}
                className="pointer"
                style={{
                  fill: "#707070",
                }}
              />
            )}
            <p className="medium-text black-txt extra_sm_padding">
              {isFollowed ? "followed" : "follow"}
            </p>
          </div>
          <p className="medium-text" style={{ margin: "0rem 1.5rem" }}>
            25 Followers
          </p>
          <div className="_profile_badge">
            <Award />
            <p>Badge</p>
            <p className="act">
              {props.influencer ? "Influencer" : "T.agency"}
            </p>
          </div>
          <Dots style={{ width: "25px", margin: "0rem 1.5rem" }} />
        </div>
      </div>
    </Container>
  );
};

export default ProfileHeader;
