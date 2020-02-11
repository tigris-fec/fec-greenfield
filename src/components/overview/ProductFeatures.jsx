import React from "react";

const ProductFeatures = (props) => {
  const features = props.features.map((feature) => (
  <li key={feature.feature}>{feature.feature} : {feature.value}</li>
  ));
  return (
    <>
      <ul id="features">{features}</ul>
    </>
  );
};

export default ProductFeatures;
