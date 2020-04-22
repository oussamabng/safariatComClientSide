import React, { useState } from "react";
import { Card, Image, Icon, Transition } from "semantic-ui-react";

import HeaderPost from "./HeaderPost.jsx";
import Imag from "../../assets/post.jpg";
import { ReactComponent as Hea } from "../../assets/heart.svg";

const PostElement = () => {
  const [heart, setHeart] = useState(false);
  const handleClickHeart = () => {
    setHeart((prevState) => !prevState);
  };
  return (
    <div className="_posts">
      <div className="flex flex-col _post_full">
        <HeaderPost />
        <Card className="_post_card">
          <Image
            src={Imag}
            wrapped
            ui={false}
            onDoubleClick={handleClickHeart}
            className="img_post"
          />
          <Transition
            visible={heart}
            animation="pulse"
            duration={500}
            className="xD"
          >
            <Hea
              className={!heart ? "heart_animated" : "heart_animated no-heart"}
              style={{ height: "50px" }}
            />
          </Transition>
          <Card.Content>
            <div className="flex justify-between">
              <div className="flex justify-between">
                <div className="flex">
                  <Icon
                    name="heart outline"
                    className={
                      !heart
                        ? "icons_post default-color heart-full"
                        : "icons_post default-color heart-full hide"
                    }
                    size="large"
                    onClick={handleClickHeart}
                  />
                  <Icon
                    name="heart"
                    className={
                      !heart
                        ? "icons_post default-color heart-full hide"
                        : "icons_post default-color heart-full"
                    }
                    size="large"
                    onClick={handleClickHeart}
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
    </div>
  );
};
export default PostElement;
