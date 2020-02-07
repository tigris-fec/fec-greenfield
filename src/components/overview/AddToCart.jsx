import React from "react";

const AddToCart = (props) => {
  return (
    <>
      <div className="control">
        <div className="select is-large">
          <select style={{ borderRadius: "0px" }}>
            <option>SELECT SIZE</option>
            <option>XL</option>
          </select>
        </div>
        &nbsp; &nbsp;
        <div className="select is-large">
          <select style={{ borderRadius: "0px" }}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>1</option>
          </select>
        </div>
        <div className="control"></div>
      </div>
    </>
  );
};

export default AddToCart;
