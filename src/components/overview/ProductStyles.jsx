import React, { useState } from "react";

const ProductStyles = (props) => {
  const [selectedId, setSelectedId] = useState(props.defaultStyle.style_id);

  const handleStyleChange = (Id, style) => {
    setSelectedId(Id);
    props.setSelectedProduct(style);
  };

  console.log(props.defaultStyle, props.productStyles, props.setSelectedProduct)
  return (
    <>
      <p>
        <strong>STYLE ></strong> &nbsp;
        <em>{props.defaultStyle.name}</em>
      </p>

      <ul
        className="level"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "left",
          paddingTop: "2%"
        }}
      >
        {props.productStyles.map((style) => {
          return (
            <li
              style={{ margin: "1%", flex: "0 0 20%", listStyle: "none" }}
              key={style.style_id}
            >
              <figure className="image is-96x96">
                {selectedId === style.style_id ? (
                  <div>
                    <i
                      className="far fa-check-circle fa-lg"
                      style={{
                        float: "right",
                        position: "absolute",
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
                  src={style.photos[style["default?"]].thumbnail_url}
                  alt={style.name}
                  style={{
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
    </>
  );
};

export default ProductStyles;
