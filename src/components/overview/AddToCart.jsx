import React, { useState, useEffect } from "react";

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
      <div className="columns">
        <div className="column">
          <div className="columns">
            <div className="column">
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <div className="control">
                      <div className="select is-dark is-large">
                        <select
                          onChange={handleSizeChange}
                          style={{
                            border: "solid",
                            borderWidth: "thin",
                            borderRadius: "0px",
                            width: "325px"
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
                  <div className="level-item">
                    <div className="field ">
                      <div className="control">
                        <div className="select is-dark is-large">
                          <select onChange={handleSizeChange}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="level">
            <div className="level-item">ADD TO CART</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
