import React, { useState } from "react";
import { Image, Icon } from "semantic-ui-react";

import Img from "../../assets/recommended.png";
import { ReactComponent as Dots } from "../../assets/icons/dots.svg";
import { ReactComponent as Check } from "../../assets/icons/checked.svg";
import { ReactComponent as Follow } from "../../assets/icons/follow_him.svg";

const HeaderPost = (props) => {
  const { name, date, type, followed, description } = props;
  const [isFollowed, setIsFollowed] = useState(followed);

  const handleFollow = () => {
    setIsFollowed((prevState) => !prevState);
  };
  return (
    <div className="_post_header">
      <div className="row">
        <div className="col">
          <div className="flex">
            <Image src={Img} alt="img" className="_post_image_profile" />
            <div className="_post_title extra_sm_padding">
              <div className="flex">
                <div className="_post_username flex">
                  <p className="medium-text black-txt">{name}</p>
                  <Check />
                </div>
                <div className="_post_action extra_sm_padding ">
                  <p className="extra-small default-color">{type}</p>
                </div>
              </div>
              <div className="_post_date">
                <p className="small default-color">{date}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="flex">
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
              />
            )}
            <p className="medium-text black-txt extra_sm_padding">
              {isFollowed ? "followed" : "follow"}
            </p>
            <Dots style={{ width: "25px", marginLeft: "0.25rem" }} />
          </div>
        </div>
      </div>
      <div className="row description">
        <span>{description}</span>
      </div>
    </div>
  );
};
export default HeaderPost;
