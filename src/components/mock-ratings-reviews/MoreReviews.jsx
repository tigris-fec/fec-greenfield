import React from "react";

const MoreReviews = (props) => {
  return (
    <div
      className="box is-shadowless"
      style={{
        border: "solid",
        borderWidth: "thin",
        borderRadius: "0",
        fontSize: "75%"
      }}
      onClick={props.handleMoreReviews}
    >
      <strong>MORE REVIEWS</strong>
    </div>
  );
};

export default MoreReviews;
