import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductGallery = (props) => {
  const [settings, setSettings] = useState({
    dots: true,
    inifinte: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  return (
    <>
      <h1 className="title is-1 has-text-centered">Product Gallery</h1>
      <Slider {...settings}>
        <div>
          <h3 className="title is-3">0</h3>
        </div>
        <div>
          <h3 className="title is-3">1</h3>
        </div>
        <div>
          <h3 className="title is-3">2</h3>
        </div>
        <div>
          <h3 className="title is-3">3</h3>
        </div>
      </Slider>
    </>
  );
};

export default ProductGallery;

/*
  The Slider component is a container with instrinsic ration computed by the
  CarouselProvider, naturalSlideHeight, and naturalSlideHeight properties.
  By default, only one slide is visible in the Slider at a time.
  You can chage this by altering the visibleSlides properties.
  Slide components also contain a di that acts as an aria compliant focus ring
  when th Slide receives focus either by using a keyboard tab, mouse click, or touch.

*/
