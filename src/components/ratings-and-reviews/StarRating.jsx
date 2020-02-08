import React from "react";
import Rating from "react-rating";
import "./starrating.css";

/**
 * [ x ] A total of 5 stars should always appear
 * [ x ] The number of stars filled in should correspond to the average score
 * [ x ] The visual rating should be representative up to a quarter of a review point
 * [ x ] If there are no reviews this entire section should be hidden
 * [ ] Net to the star rating, a link stating "Read all reviews will show"
 * [ ] Clicking this link hould scroll the page to the Ratings & Reviews module
 */

const StarRating = props => {
  return (
    <div>
      <Rating
        initialRating={props.averageRating}
        readonly={true}
        emptySymbol={<i className="far fa-star" style={{}}></i>}
        fullSymbol={<i className="fa fa-star" style={{ color: "#d4af37" }}></i>}
      />
    </div>
  );
};

export default StarRating;
