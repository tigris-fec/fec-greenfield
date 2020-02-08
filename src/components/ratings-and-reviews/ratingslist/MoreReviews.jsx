import React from "react";

const MoreReviews = props => {
  return (
    <div>
      <button className="button is-small" onClick={props.handleMoreReviews}>
        More Reviews
      </button>
    </div>
  );
};

export default MoreReviews;
