import React from "react";

const ProductRating = (props) => {
  return (
    <div className="product-category">
      <div className="columns">
        <div className="column">
          <div className="level">
            <p id="product-category">{props.category.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRating;
