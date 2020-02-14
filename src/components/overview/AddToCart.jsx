import React, { useState, useEffect } from "react";
import "./AddToCart.css";

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
    <div className="container">
      <div
        className="level"
        style={{ paddingTop: "2.5%", paddingBottom: "2.5%", height: "105%" }}
      >
        <div className="level-item">
          <div className="field is-horizontal">
            <div className="control">
              <div className="select is-dark is-large">
                <select
                  onChange={handleSizeChange}
                  style={{
                    border: "solid",
                    borderWidth: "thin",
                    borderRadius: "0px",
                    height: "120%",
                    width: "275px"
                  }}
                >
                  {availableSizes.map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div className="level-item">
          <div className="field is-horizontal">
            <div className="control">
              <div className="select is-dark is-large">
                <select
                  onChange={handleSizeChange}
                  style={{
                    border: "solid",
                    borderWidth: "thin",
                    borderRadius: "0px",
                    height: "120%",
                    width: "275px"
                  }}
                >
                  {productSize[currentSize].map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <div className="level">
        <div className="box is-button is-shadowless" style={{ width: "100%" }}>
          ADD TO CART
        </div>
      </div>
    </div>
  );
};

export default AddToCart;

/*

      <div className="field is-horiztonal">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <button className="button is-large">Add to Cart</button>
            </div>
            &nbsp; &nbsp;
            <div className="level-item">
              <div className="button is-large">
                <i className="far fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
*/
