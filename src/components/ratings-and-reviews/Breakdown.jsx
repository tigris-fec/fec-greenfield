import React, { useState } from "react";
import "./Breakdown.css";

const Breakdown = (props) => {
  let max = Math.max(...Object.values(props.ratings));
  const [stars] = useState([5, 4, 3, 2, 1]);
  const ratings = props.ratings;

  const clearFilter = () => {
    props.setFilter([]);
  };

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
          {stars.map((star) => {
            return (
              <div className="level">
                <div className="level-left">
                  <div
                    id="star-filter"
                    className="level-item"
                    onClick={() => starClick(star)}
                    style={{ cursor: "pointer" }}
                  >
                    <u>
                      {star} Star({Object.values(props.ratings)[star - 1]})
                    </u>
                    &nbsp;&nbsp;
                  </div>
                  </div>
                  <div className="level-right">
                    <div className="level-item">
                      <div className="progress">
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
          {props.filters.length !== 0 ? (
            <p onClick={clearFilter}>
              <em>
                <u>Clear Filters</u>
              </em>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Breakdown;
