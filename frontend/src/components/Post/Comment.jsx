import React, { useState, useEffect } from "react";
import { Form, Segment, Image } from "semantic-ui-react";

import Alex from "../../assets/alex.jpg";
const Comment = () => {
  const [comment, setComment] = useState("");
  const [data, setData] = useState([]);
  const handleComment = (e) => {
    if (e.keyCode === 13) {
      console.log("send comment to api");
      setData((prevState) => {
        return [...prevState, comment];
      });
    }
  };
  const handleChange = (e, { value }) => {
    setComment(value);
  };
  useEffect(() => {
    setData(["Great Picture..", "Damn i like it"]);
  }, []);
  return (
    <Segment className="_post_comment_seg shadow">
      <div className="comment_post">
        <Image src={Alex} className="profile_image shadow" />
        <Form reply>
          <Form.Input
            onChange={handleChange}
            value={comment}
            onKeyDown={handleComment}
            label="Andrea piccabio"
            type="text"
            placeholder="Add a comment..."
          />
        </Form>
      </div>
    </Segment>
  );
};

export default Comment;
