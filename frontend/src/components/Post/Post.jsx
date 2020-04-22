import React from "react";
import { Container } from "semantic-ui-react";

import PostElement from "./PostElement.jsx";

import "./Post.css";

const Post = () => {
  return (
    <div className="_main_posts">
      <Container>
        <div className="_posts">
          <PostElement />
        </div>
      </Container>
    </div>
  );
};
export default Post;
