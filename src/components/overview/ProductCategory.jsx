import React from "react";

const ProductRating = (props) => {
  return (
    <p style={{ fontSize: "12px", paddingBottom: "2%" }}>
      {props.category.toUpperCase()}
    </p>
  );
};

export default ProductRating;
