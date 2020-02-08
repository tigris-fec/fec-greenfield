import React from "react";
import "../starrating.css";

const OverallRating = props => {
  const checkStar = props.rating >= props.check ? true : false;

  const handleStarClick = () => {
    props.setOverallRating(props.check);
  };

  const fillStar = (
    <div>
      <p
        onClick={() => {
          handleStarClick(props.check);
        }}
      >
        <i className="fa fa-star " style={{ color: "#d4af37" }}></i>
      </p>
    </div>
  );
  const emptyStar = (
    <p
      onClick={() => {
        handleStarClick(props.check);
      }}
    >
      <i className="far fa-star"></i>
    </p>
  );
  return <div>{checkStar ? fillStar : emptyStar}</div>;
};

export default OverallRating;
