import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import axios from "axios";

import PostElement from "./PostElement.jsx";

import "./Post.css";

const Post = () => {
  const [data, setData] = useState([]);
  const [max, setMax] = useState(4);
  const [maxLength, setMaxLength] = useState(null);
  const handleMax = () => {
    setMax((prevState) => prevState + 4);
  };
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      if (!maxLength) setMaxLength(res.data.length);
      setData(res.data.slice(0, max));
    });
  }, [max, maxLength]);
  return (
    <div className="_main_posts _margin_horizontal">
      <Container>
        <div className="flex flex-col">
          <div className="flex">
            <p className="title black-txt _margin_vertical_sm">Community</p>
          </div>
          {data.map((elm, index) => (
            <PostElement data={elm} key={index} />
          ))}
        </div>
      </Container>
      {maxLength > max && (
        <div className="flex _margin_horizontal">
          <p
            className="_login_button _margin_horizontal pointer  _button shadow medium-text border-radius-bg"
            onClick={handleMax}
          >
            Load more
          </p>
        </div>
      )}
    </div>
  );
};
export default Post;
