import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductsGallery = (props) => {
  return (
    <>
      <div style={{ width: "100%" }}>
        <Carousel
          showArrows={true}
          showStatus={true}
          showThumbs={false}
          useKeyboardArrows={true}
          onChange={() => {}}
          onClickThumb={() => console.log("Thumbnail clicked!")}
          onClickItem={() => console.log("Item clicked!")}
        >
          {props.photos.map((photo, i) => {
            return (
              <figure className="image" key={i}>
                <img
                  src={photo.thumbnail_url}
                  alt="No Pictures Available"
                  style={{
                    maxHeight: "75%",
                    height: "39vw",
                    width: "auto",
                    margin: "auto"
                  }}
                />
              </figure>
            );
          })}
        </Carousel>

        <div className="columns" style={{ marginTop: "1vw" }}>
          {props.photos.map((photo, i) => {
            return (
              <figure className="image" key={i}>
                <img
                  src={photo.thumbnail_url}
                  alt="thumbnail"
                  style={{
                    height: "auto",
                    width: "50%",
                    margin: "auto"
                  }}
                />
              </figure>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsGallery;
