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
        >
          {props.images.map((productImage) => {
            return (
              <figure className="image" key={productImage.id}>
                <img src={productImage["thumbnail_url"]} alt="" />
              </figure>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default ProductsGallery;
