import React from "react";

/**
 * [ ] User should be presented with styles of the product
 * [ ] User should have the ability to toggle between them.
 * [ ] Each style should be displayed as a thumbnail.
 */

const ProductStyles = (props) => {
  console.log("product-styles:", props.productStyles);
  return (
    <>
      <p>
        <strong>STYLE</strong> > {props.defaultStyle === -1 ? "None" : null}
      </p>
      <div className="level">
        {props.productStyles.map((style) => {
          return (
            <figure className="image is-64x64" key={style.style_id}>
              <img
                src={style.photos[style["default?"]].thumbnail_url}
                alt={style.name}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  height: "75%",
                  width: "75%"
                }}
              />
            </figure>
          );
        })}
      </div>
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
