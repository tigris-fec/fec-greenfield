import React, { useState, useEffect } from "react";
import "./Breakdown.css";

const Breakdown = (props) => {
  let max = Math.max(...Object.values(props.ratings));
  const [stars] = useState([5, 4, 3, 2, 1]);
  const ratings = props.ratings;

  const clearFilter = () => props.setFilter([]);

  const starClick = (number) => {
    if (!props.filters.includes(number)) {
      let newFilters = props.filters.slice();
      newFilters.push(number);
      props.setFilter(newFilters);
    }
  };

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-12">
          <p className="subtitle">
            {props.recommended}% of reviews recommend this product
          </p>
          {stars.map((star, index) => {
            return (
              <div className="level" key={index}>
                <div className="level-left">
                  <div
                    id="star-filter"
                    className="level-item"
                    onClick={() => starClick(star)}
                    style={{ cursor: "pointer" }}
                  >
                    <u>{star} Star(s)</u> &nbsp;&nbsp;
                  </div>
                  <div className="level-item">
                    <div className="progress is-left">
                      <progress
                        value={ratings[star] ? (ratings[star] / max) * 100 : 0}
                        max={100}
                        style={{ width: "300px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Breakdown;
