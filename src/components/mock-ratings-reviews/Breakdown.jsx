import React, { useState, useEffect } from "react";
import Factors from "./Factors.jsx";
import "./Breakdown.css";

const Breakdown = (props) => {
  let max = Math.max(...Object.values(props.ratings));
  const [stars] = useState([5, 4, 3, 2, 1]);

  const values = Object.values(props.ratings);

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
    <>
      <table className="table is-fullwidth">
        <tbody>
          {values.map((rating, index) => {
            return (
              <tr key={index}>
                <td>
                  <u>{stars[index]} Stars</u>
                </td>
                <td>
                  <div className="progress">
                    <progress value={(rating / max) * 100} max={100} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Breakdown;
