import React, { useState, useEffect } from "react";

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
  const [currentSize, setCurrentSize] = useState("XS");
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [productSize, setProductSize] = useState({ XS: [] });
  const [availableSizes, setAvailableSizes] = useState([]);

  const getQuantityList = (max) => {
    if (max === 0) {
      return ["Out Of Stock"];
    }
    let quantityList = [];
    if (max > 15) {
      max = 15;
    }
    for (let i = 1; i <= max; i++) {
      quantityList.push(i);
    }
    return quantityList;
  };

  useEffect(() => {
    let productChar = {};
    for (let key in skus) {
      productChar[key] = getQuantityList(skus[key]);
    }
    setProductSize(productChar);
    setAvailableSizes(Object.keys(skus));
  }, []);

  const handleSizeChange = (e) => {
    setCurrentSize(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setCurrentQuantity(e.target.value);
  };

  return (
    <>
      <div className="control">
        <div className="select is-medium">
          <select style={{ borderRadius: "0px" }} onChange={handleSizeChange}>
            {availableSizes.map((size) => (
              <option value={size}>{size}</option>
            ))}
          </select>
        </div>
        &nbsp; &nbsp;
        <div className="select is-medium">
          <select style={{ borderRadius: "0px" }} onChange={handleQuantityChange}>
            {productSize[currentSize].map((size) => (
              <option value={size}>{size}</option>
            ))}
          </select>
        </div>
        <div className="control"></div>
      </div>
      <br />
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <button className="button is-medium">Add to Cart</button>
          </div>
          &nbsp; &nbsp;
          <div className="level-item">
            <div className="button is-medium">
            <i className="far fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
