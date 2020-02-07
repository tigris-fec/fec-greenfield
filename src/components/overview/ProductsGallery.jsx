import React from "react";

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
          {props.photos.map((photo) => {
            return (
              <figure className="image" key={photo.thumbnail_url}>
                <img
                  src={photo.thumbnail_url}
                  alt=""
                  style={{
                    maxHeight: "75%",
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

/*
{props.images.map((productImage) => {
  return (
    <figure className="image" key={productImage.id}>
      <img src={productImage["thumbnail_url"]} alt="" />
    </figure>
  );
})}
*/
