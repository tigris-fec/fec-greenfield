import React from "react";
import StarRating from "./StarRating.jsx";

const ProductInfo = (props) => {
  console.log(props.productStyles);
  return (
    <h4 className="title is-4">
      {props.productName ? props.productName : "Product Name"}
    </h4>
  );
};

export default ProductInfo;
