import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class ProductsGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }
  componentDidMount() {
    let images = [];
    console.log(this.props.setSelectedProduct);
  }
  render() {
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
            {this.props.photos.map((photo) => {
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
  }
}

export default ProductsGallery;

/*
There should be a state variable keeping track of the style id,
They should be all set to false
When one is selected
The state variable should be set to true based 
When a style is selected:
  
*/
