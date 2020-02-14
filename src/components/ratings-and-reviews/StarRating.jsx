import React from "react";
import Rating from "react-rating";

const StarRating = (props) => {
  return (
    <div>
      <Rating
        initialRating={props.rating}
        emptySymbol={<i className="far fa-star" style={{}}></i>}
        fullSymbol={<i className="fa fa-star" style={{ color: "#d4af37" }}></i>}
      />
    </div>
  );
};

export default StarRating;
