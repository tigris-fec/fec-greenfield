import React, { useState, useEffect } from "react";
import "./Breakdown.css";

const Breakdown = (props) => {
  let max = Math.max(...Object.values(props.ratings));
  const [stars] = useState([5, 4, 3, 2, 1]);

  const clearFilter = () => props.setFilter([]);

  const ratings = Object.values(props.ratings);

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
          <br />
          {ratings.map((rating, index) => {
            return (
              <div className="is-inline">
                <div className="field is-grouped is-grouped-left">
                  <p className="control is-left">
                    <u>{stars[index]} Star(s)</u>
                  </p>
                  <div className="progress is-right">
                    <progress
                      value={(rating / max) * 100}
                      max={100}
                      style={{ width: "70%", height: "75%", padding: "0", margin: "0" }}
                    />
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
