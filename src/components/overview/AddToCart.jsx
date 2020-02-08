import React, { useState } from "react";

/*
skus: {
  XS: 8,
  S: 16,
  M: 17,
  L: 10,
  XL: 15
}
*/

const AddToCart = ({ skus }) => {
  const [currentSize, setCurrentSize] = useState("");
  const [currentQuantity, setCurrentQuantity] = useState(1);
  for (let [size, quantity] of Object.entries(skus)) {
    console.log(`${size} : ${quantity}`);
  }
  const productSizes = Object.entries(skus);

  return (
    <>
      <div className="control">
        <div className="select is-medium">
          <select style={{ borderRadius: "0px" }}>
            {productSizes.map((size) => (
              <option>{size[0]}</option>
            ))}
          </select>
        </div>
        &nbsp; &nbsp;
        <div className="select is-medium">
          <select style={{ borderRadius: "0px" }}>
            {productSizes.map((size) => (
              <option>{size[1]}</option>
            ))}
          </select>
        </div>
        <div className="control"></div>
      </div>
    </>
  );
};

export default AddToCart;
