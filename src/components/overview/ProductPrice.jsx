import React from "react";

const ProductPrice = (props) => {
  return (
    <div className="container">
      <div className="level">
        <div className="level-left">
          {props.salePrice === "0" ? (
            <p id="product-price" className="tag is-light is-large">
              ${props.originalPrice}
            </p>
          ) : (
            <div className="field is-grouped">
              <div className="control">
                <div className="tags has-addons">
                  <span
                    className="tag is-light is-large"
                    style={{
                      border: "solid",
                      borderWidth: "thin",
                      borderColor: "#0000003F",
                      backgroundColor: "none",
                      borderRadius: "0px"
                    }}
                  >
                    <strong>${props.salePrice}</strong>
                  </span>
                  <span className="tag is-light is-large">
                    <u
                      style={{
                        color: "red",
                        textDecoration: "line-through",
                        borderRadius: "0px"
                      }}
                    >
                      ${props.originalPrice}
                    </u>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPrice;
