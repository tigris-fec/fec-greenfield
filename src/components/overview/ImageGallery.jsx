import React from "react";
import { connect } from "react-redux";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageGallery = (props) => {
  console.log("ImageGallery Props", props);
  return (
    <div className="column is-8">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={true}
        useKeyboardArrows={true}
      >
        <figure className="image">
          <img src={""} alt="" />
        </figure>
      </Carousel>
    </div>
  );
};

export default ImageGallery;
