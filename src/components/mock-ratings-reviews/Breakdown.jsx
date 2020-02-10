import React, { useState, useEffect } from "react";
import BlackBar from "./BlackBar.jsx";
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
      <div className="level" style={{ justifyContent: "left" }}>
        <div className="level-left">
          <div className="level-item">
            <table className="table" style={{ fontSize: "75%" }}>
              <tbody>
                {values.map((rating, index) => {
                  return (
                    <tr key={index}>
                      <td className="has-text-right">
                        <u>{stars[index]} Stars</u>
                      </td>
                      <td className="has-text-left">
                        <progress value={(rating / max) * 100} max={100} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breakdown;
