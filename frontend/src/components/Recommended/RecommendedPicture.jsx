import React from "react";
import { Image, Reveal, Rating } from "semantic-ui-react";
import RecommendedImg from "../../assets/recommended.png";
const RecommendedPicture = () => {
  return (
    <Reveal animated="fade" style={{ width: "100%", height: "100%" }}>
      <Reveal.Content
        className="visible"
        style={{ width: "100%", height: "100%", zIndex: "100" }}
      >
        <Image src={RecommendedImg} style={{ width: "100%", height: "100%" }} />
      </Reveal.Content>
      <Reveal.Content
        className="hidden and"
        style={{ width: "100%", height: "100%", zIndex: "100" }}
      >
        <Image
          src={RecommendedImg}
          size="medium"
          className="_recommended_image_hidden"
        />
        <div className="recomended_hidden_items">
          <div className="extra-small text-white dayz ">
            <p>Explore</p>
          </div>
          <div
            className="small text-white dayz center shadow"
            style={{ marginTop: "12px" }}
          >
            <p>10 days left</p>
          </div>
          <Rating
            style={{ marginTop: "12px" }}
            icon="star"
            defaultRating={5}
            maxRating={5}
            disabled
          />
          <div style={{ marginBottom: "4px", fontWeight: "bold" }}>
            <p className="text-white small ">From : 1065$</p>
            <p className="text-white medium-text">DUBAI</p>
          </div>
        </div>
      </Reveal.Content>
    </Reveal>
  );
};
export default RecommendedPicture;
