import React from "react";
import { Container } from "semantic-ui-react";

import PostElement from "./PostElement.jsx";

import "./Post.css";

const Post = () => {
  return (
    <div className="_main_posts">
      <Container>
        <div className="flex flex-col">
          <div className="flex">
            <p className="title black-txt _margin_vertical_sm">Community</p>
          </div>
          <PostElement />
          <PostElement />
        </div>
      </Container>
    </div>
  );
};
export default Post;
