import React from "react";

const ProductName = (props) => {
  return (
    <h3 id="product-name" className="title is-3">
      {props.name || "Vaguely Aware of Social Norms"}
    </h3>
  );
};

export default ProductName;
