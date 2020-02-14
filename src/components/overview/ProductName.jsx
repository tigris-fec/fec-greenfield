import React from "react";

const ProductName = (props) => {
  return (
    <div className="columns">
      <div className="column">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <h1 id="product-name" className="title is-1">
                {props.name}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductName;
