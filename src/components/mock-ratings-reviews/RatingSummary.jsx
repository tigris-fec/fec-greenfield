import React from "react";
import StarRating from "./StarRating.jsx";

const RatingSummary = (props) => {
  return (
    <div className="level">
      <div className="level-left">
        <h1 className="title is-1">{props.rating}</h1>
        &nbsp;&nbsp;
        <StarRating averageRating={props.rating} />
      </div>
    </div>
  );
};

export default RatingSummary;
