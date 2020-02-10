import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductsGallery = (props) => {
  return (
    <>
      <div style={{ width: "100%" }}>
        <Carousel
          showArrows={true}
          showStatus={true}
          showThumbs={true}
          useKeyboardArrows={true}
          onChange={() => console.log("Changed!")}
          onClickThumb={() => console.log("Thumbnail clicked!")}
          onClickItem={() => console.log("Item clicked!")}
        >
          {props.photos.map((photo,i) => {
            return (
              <figure className="image" key={i}>
                <img
                  src={photo.thumbnail_url}
                  alt="some picture"
                  style={{
                    maxHeight: "75%",
                    minHeight: "65%",
                    width: "auto",
                    margin: "auto"
                  }}
                />
              </figure>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default ProductsGallery;
