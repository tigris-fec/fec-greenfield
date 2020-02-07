import React from "react";
import BlackBar from "./BlackBar.jsx";
import "./breakdown.css";

const Breakdown = props => {
  let max = Math.max(...Object.values(props.ratings));
  return (
    <div>
      <p>{props.recommend}% of reviews recommend this product</p>
      <br/>
      <div className="star-rating-container">
        <p className="star-rating"><u>5 stars</u>:</p>
        <BlackBar width={(props.ratings[5] / max) * 100} />
      </div>
      <div className="star-rating-container">
        <p className="star-rating"><u>4 stars</u>:</p>
        <BlackBar width={(props.ratings[4] / max) * 100} />
      </div>
      <div className="star-rating-container">
        <p className="star-rating"><u>3 stars</u>:</p>
        <BlackBar width={(props.ratings[3] / max) * 100} />
      </div>
      <div className="star-rating-container">
        <p className="star-rating"><u>2 stars</u>:</p>
        <BlackBar width={(props.ratings[2] / max) * 100} />
      </div>
      <div className="star-rating-container">
        <p className="star-rating"><u>1 stars</u>:</p>
        <BlackBar width={(props.ratings[1] / max) * 100} />
      </div>
    </div>
  );
};

export default Breakdown;
