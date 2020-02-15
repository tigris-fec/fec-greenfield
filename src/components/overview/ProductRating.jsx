import React from "react";
import Rating from "react-rating";

const ProductRating = (props) => {
  return (
    <div className="product-rating">
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <Rating
              initialRating={props.rating}
              emptySymbol={<i className="far fa-star"></i>}
              readonly={true}
              fullSymbol={<i className="fa fa-star" style={{ color: "#d4af37" }}></i>}
            />
          </div>
          <div id="reviews" className="level-item">
            <p id="read-all-reviews">
              <a href="#ratings-reviews" className="clickable">Read All Reviews</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRating;
