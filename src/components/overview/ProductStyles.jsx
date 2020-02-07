import React from "react";

/**
 * [ ] User should be presented with styles of the product
 * [ ] User should have the ability to toggle between them.
 * [ ] Each style should be displayed as a thumbnail.
 */

const ProductStyles = (props) => {
  return (
    <>
      <p>
        <strong>STYLE</strong> > {props.defaultStyle === -1 ? "None" : null}
      </p>
      <figure className="image">
        <img src={props.productStyles[0]} alt="" />
      </figure>
      <button
        className="button  is-rounded is-medium"
        style={{ margin: "2%", borderColor: "#525252" }}
      ></button>
      <button
        className="button is-rounded is-medium"
        style={{ margin: "2%", borderColor: "#525252" }}
      ></button>
      <button
        className="button is-rounded is-medium"
        style={{ margin: "2%", borderColor: "#525252" }}
      ></button>
      <button
        className="button is-rounded is-medium"
        style={{ margin: "2%", borderColor: "#525252" }}
      ></button>

      <br />

      <button
        className="button is-rounded is-medium"
        style={{ margin: "2%", borderColor: "#525252" }}
      ></button>
      <button
        className="button is-rounded is-medium"
        style={{ margin: "2%", borderColor: "#525252" }}
      ></button>
      <button
        className="button is-rounded is-medium"
        style={{ margin: "2%", borderColor: "#525252" }}
      ></button>
      <button
        className="button is-rounded is-medium"
        style={{ margin: "2%", borderColor: "#525252" }}
      ></button>
    </>
  );
};

export default ProductStyles;
