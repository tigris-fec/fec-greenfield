import React, { Component } from "react";
import tShirt from "./images/t-shirt.jpg";
import longSleeve from "./images/long-sleeve-tee.jpg";
import tankTop from "./images/tank-top.jpg";
import vNeck from "./images/v-neck.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class ProductCarousel extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={true}
        useKeyboardArrows={true}
      >
        <figure className="image">
          <img src={tShirt} alt="t-shirt" />
        </figure>
        <figure className="image">
          <img src={longSleeve} alt="long-sleeve" />
        </figure>
        <figure className="image">
          <img src={tankTop} alt="tank-top" />
        </figure>
        <figure className="image">
          <img src={vNeck} alt="tank-top" />
        </figure>
      </Carousel>
    );
  }
}
export default ProductCarousel;
