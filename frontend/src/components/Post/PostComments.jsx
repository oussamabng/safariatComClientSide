import React, { useState, useEffect } from "react";
import { Comment, Label, Icon } from "semantic-ui-react";

import Alex from "../../assets/alex.jpg";

const PostComments = (props) => {
  const [likes, setLikes] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked((prevState) => {
      if (prevState) {
        setLikes((prevState) => prevState - 1);
      } else {
        setLikes((prevState) => prevState + 1);
      }
      return !prevState;
    });
  };
  useEffect(() => {
    setLikes(25);
  }, []);
  return (
    <Comment.Group className="comments_comments">
      <Comment>
        <Comment.Avatar src={Alex} className="profile_image shadow" />
        <Comment.Content>
          <div className="comment_owner">
            <Comment.Author>Elliot Fu</Comment.Author>
            <Comment.Text>
              <p>This has been very useful for my research. Thanks as well!</p>
            </Comment.Text>
          </div>
          <Comment.Actions>
            <div className="bt_actions">
              <div className="action_left_comm">
                <Comment.Metadata>
                  <span>nov 2020</span>
                </Comment.Metadata>
                <div className="action_comment">
                  <p
                    className="extra-small default-color pointer"
                    onClick={handleLike}
                  >
                    Like
                  </p>
                  <p className="extra-small default-color pointer">Reply</p>
                </div>
              </div>
              <Label
                className="label_like"
                style={{
                  color: isLiked ? "red" : "",
                  border: isLiked ? ".5px solid red" : "",
                }}
              >
                <Icon
                  name="heart outline"
                  style={{
                    color: isLiked ? "red" : "",
                  }}
                />{" "}
                {likes}
              </Label>
            </div>
          </Comment.Actions>
        </Comment.Content>

        <Comment.Group>
          <Comment>
            <Comment.Avatar src={Alex} className="profile_image shadow" />
            <Comment.Content>
              <div className="comment_owner">
                <Comment.Author>Elliot Fu</Comment.Author>
                <Comment.Text>
                  <p>
                    This has been very useful for my research. Thanks as well!
                  </p>
                </Comment.Text>
              </div>
              <Comment.Actions>
                <div className="bt_actions">
                  <div className="action_left_comm">
                    <Comment.Metadata>
                      <span>nov 2020</span>
                    </Comment.Metadata>
                    <div className="action_comment">
                      <p className="extra-small default-color">Like</p>
                      <p className="extra-small default-color">Reply</p>
                    </div>
                  </div>
                  <Label className="label_like">
                    <Icon name="heart outline" /> 25
                  </Label>
                </div>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </Comment>
    </Comment.Group>
  );
};

export default PostComments;
