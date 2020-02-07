import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

class ProductGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          original: "http://lorempixel.com/1000/600/nature/1/",
          thumbnail: "http://lorempixel.com/250/150/nature/1/"
        },
        {
          original: "http://lorempixel.com/1000/600/nature/2/",
          thumbnail: "http://lorempixel.com/250/150/nature/2/"
        },
        {
          original: "http://lorempixel.com/1000/600/nature/3/",
          thumbnail: "http://lorempixel.com/250/150/nature/3/"
        }
      ]
    };
  }

  render() {
    return <ImageGallery items={this.state.images} />;
  }
}

export default ProductGallery;
