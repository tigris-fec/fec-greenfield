import React, { useState } from "react";

const ProductStyles = (props) => {
  const [selectedId, setSelectedId] = useState(props.defaultStyle.style_id);

  const handleStyleChange = (Id, style) => {
    setSelectedId(Id);
    props.setSelectedProduct(style);
  };

  const defaultPic =
    "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg";

  return (
    <div className="container">
      <div className="product-styles">
        <div className="tags has-addons">
          <span
            className="tag is-white is-large"
            style={{ border: "solid", borderWidth: "thin", borderColor: "#0000001F" }}
          >
            STYLE
          </span>
          <span className="tag is-info is-light is-large">{">"}</span>
          <span
            className="tag is-white is-large"
            style={{ border: "solid", borderWidth: "thin", borderColor: "#0000001F" }}
          >
            {props.defaultStyle.name.toUpperCase()}
          </span>
        </div>
        <ul
          id="product-styles-images"
          className="level"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "left",
            margin: "2%",
            padding: "0",
            position: "relative"
          }}
        >
          {props.productStyles.map((style) => {
            return (
              <li
                className="product-styles-image"
                style={{ margin: "3%", flex: "0 0 19%", listStyle: "none" }}
                key={style.style_id}
              >
                <figure className="image is-96x96">
                  {selectedId === style.style_id ? (
                    <div>
                      <i
                        className="far fa-check-circle fa-lg"
                        style={{
                          float: "right",
                          position: "relative",
                          right: "0%",
                          top: "0%",
                          zIndex: "1",
                          backgroundColor: "#525252",
                          color: "white",
                          borderRadius: "50%"
                        }}
                      ></i>
                    </div>
                  ) : null}
                  <img
                    src={
                      style.photos[style["default?"]]
                        ? style.photos[style["default?"]].thumbnail_url
                          ? style.photos[style["default?"]].thumbnail_url
                          : defaultPic
                        : defaultPic
                    }
                    alt={style.name}
                    style={{
                      border: "solid",
                      borderWidth: "thin",
                      borderRadius: "50%",
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      zIndex: "1000",
                      opacity: "85%"
                    }}
                    onClick={() => {
                      handleStyleChange(style.style_id, style);
                    }}
                  />
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductStyles;
