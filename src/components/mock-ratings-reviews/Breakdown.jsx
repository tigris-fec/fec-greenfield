import React from "react";
import BlackBar from "./BlackBar.jsx";
import Factors from "./Factors.jsx";
import "./Breakdown.css";

const Breakdown = (props) => {
  let max = Math.max(...Object.values(props.ratings));

  const starClick = (number) => {
    if (!props.filters.includes(number)) {
      let newFilters = props.filters.slice();
      newFilters.push(number);
      props.setFilter(newFilters);
    }
  };

  const filterClear = () => {
    props.setFilter([]);
  };

  return (
    <div>
      <p>{props.recommend}% of reviews recommend this product</p>
      <br />
      <div className="star-rating-container">
        <p
          className="star-rating"
          onClick={() => {
            starClick(5);
          }}
        >
          <u>5 stars</u>:
        </p>
        <BlackBar width={(props.ratings[5] / max) * 100} />
      </div>
      <div className="star-rating-container">
        <p
          className="star-rating"
          onClick={() => {
            starClick(4);
          }}
        >
          <u>4 stars</u>:
        </p>
        <BlackBar width={(props.ratings[4] / max) * 100} />
      </div>
      <div className="star-rating-container">
        <p
          className="star-rating"
          onClick={() => {
            starClick(3);
          }}
        >
          <u>3 stars</u>:
        </p>
        <BlackBar width={(props.ratings[3] / max) * 100} />
      </div>
      <div className="star-rating-container">
        <p
          className="star-rating"
          onClick={() => {
            starClick(2);
          }}
        >
          <u>2 stars</u>:
        </p>
        <BlackBar width={(props.ratings[2] / max) * 100} />
      </div>
      <div className="star-rating-container">
        <p
          className="star-rating"
          onClick={() => {
            starClick(1);
          }}
        >
          <u>1 stars</u>:
        </p>
        <BlackBar width={(props.ratings[1] / max) * 100} />
      </div>
      {props.filters.length !== 0 ? (
        <p onClick={filterClear}>
          <em>
            <u>Clear Filter</u>
          </em>
        </p>
      ) : null}
    </div>
  );
};

export default Breakdown;
