import React from "react";

const Activities = (props) => {
  const { type, text } = props;
  let className = "_recommended_image_hidden activities " + String(type);
  return (
    <div className={className}>
      <div className="recomended_hidden_items activities">
        <div className="dayz small text-white bold">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
export default Activities;
