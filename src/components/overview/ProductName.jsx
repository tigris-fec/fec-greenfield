import React from "react";

const ProductName = (props) => {
  return (
    <h3 id="product-name" className="title is-1">
      {props.name}
    </h3>
  );
};

export default ProductName;
