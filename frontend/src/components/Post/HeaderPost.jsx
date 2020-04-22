import React from "react";
import { Image, Icon } from "semantic-ui-react";

import Img from "../../assets/recommended.png";
import { ReactComponent as Dots } from "../../assets/icons/dots.svg";
import { ReactComponent as Check } from "../../assets/icons/checked.svg";

const HeaderPost = () => (
  <div className="_post_header">
    <div className="row">
      <div className="col">
        <div className="flex">
          <Image src={Img} alt="img" className="_post_image_profile" />
          <div className="_post_title extra_sm_padding">
            <div className="flex">
              <div className="_post_username flex">
                <p className="medium-text black-txt">AtlasVoyage</p>
                <Check />
              </div>
              <div className="_post_action extra_sm_padding ">
                <p className="extra-small default-color">posted a picture</p>
              </div>
            </div>
            <div className="_post_date">
              <p className="small default-color">nov 2020</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="flex">
          <Icon name="check circle outline" size="large" id="check_post" />
          <p className="medium-text black-txt extra_sm_padding">follow</p>
          <Dots style={{ width: "25px", marginLeft: "0.25rem" }} />
        </div>
      </div>
    </div>
    <div className="row description">
      <span>
        Af deel pomp soms tijd veel ad. En voorloopig uitgegeven en nu ad
        verkochten. Al zout al in over bord te.Voorschijn moeilijker wedijveren
        na op
      </span>
    </div>
  </div>
);
export default HeaderPost;
