import React from "react";

const ProductDetails = (props) => {
  return (
    <div id="product-details" className="container is-fluid">
      <h4 className="title is-4">
        <strong>{props.slogan}</strong>
      </h4>
      <p>{props.description}</p>
    </div>
  );
};

export default ProductDetails;
