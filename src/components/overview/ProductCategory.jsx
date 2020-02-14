import React from "react";

const ProductRating = (props) => {
  return (
    <div className="product-category">
      <p>{props.category.toUpperCase()}</p>
    </div>
  );
};

export default ProductRating;
