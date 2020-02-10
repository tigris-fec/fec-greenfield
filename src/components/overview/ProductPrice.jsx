import React from "react";

const ProductPrice = (props) => {
  return (
    <div className="level">
      <div className="level-left">
        {props.salePrice === "0" ? (
          <p id="price">${props.originalPrice}</p>
        ) : (
          <p id="price">
            ${props.salePrice} &nbsp;{" "}
            <u style={{ color: "red", textDecoration: "line-through" }}>
              ${props.originalPrice}
            </u>
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductPrice;
