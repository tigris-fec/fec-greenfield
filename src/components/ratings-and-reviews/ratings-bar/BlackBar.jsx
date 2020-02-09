import React from "react";

const BlackBar = (props) => {
  return (
    <div className="bar-container">
      <div className="bar" style={{ width: `${props.width}%` }}></div>
    </div>
  );
};

export default BlackBar;
