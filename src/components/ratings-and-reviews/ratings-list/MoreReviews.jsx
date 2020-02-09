import React from "react";

const MoreReviews = (props) => {
  return (
    <div style={{ margin: "2%" }}>
      <button className="button is-medium" onClick={props.handleMoreReviews}>
        More Reviews
      </button>
    </div>
  );
};

export default MoreReviews;
