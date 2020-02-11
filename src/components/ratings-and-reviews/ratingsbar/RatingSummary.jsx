import React from "react";

import StarRating from "../StarRating.jsx";

const RatingSummary = (props) => {
  return (
    <div className="level" style={{ justifyContent: "left" }}>
      <div className="level-left">
        <div className="level-item">
          <p style={{ fontSize: "400%" }}>
            <strong>{props.rating}</strong>
          </p>
        </div>
        <div className="level-item">
          <StarRating averageRating={props.rating} />
        </div>
      </div>
    </div>
  );
};

export default RatingSummary;
