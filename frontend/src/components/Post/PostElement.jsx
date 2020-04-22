import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

import HeaderPost from "./HeaderPost.jsx";
import Imag from "../../assets/post.jpg";

const PostElement = () => {
  return (
    <div className="flex flex-col _post_full">
      <HeaderPost />
      <Card className="_post_card">
        <Image src={Imag} wrapped ui={false} style={{ height: "100%" }} />
        <Card.Content>
          <div className="flex justify-between">
            <div className="flex justify-between">
              <div className="flex">
                <Icon
                  name="heart outline"
                  className="icons_post default-color"
                  size="large"
                />
                <p className="default-color small">12k</p>
              </div>
              <div className="flex" style={{ marginLeft: "1rem" }}>
                <Icon
                  name="comment outline"
                  className="icons_post default-color"
                  size="large"
                />
                <p className="default-color small">250</p>
              </div>
            </div>
            <div className="flex" style={{ marginLeft: "1rem" }}>
              <Icon
                name="eye"
                className="icons_post default-color"
                size="large"
              />
              <p className="default-color small">98k</p>
            </div>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};
export default PostElement;
