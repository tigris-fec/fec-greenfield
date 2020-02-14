import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class ProductsGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: 0,
      photos: [],
      index: 0,
      figure: { textAlign: "center" },
      img: {
        height: "auto",
        width: "100%",
        margin: "auto"
      },
      column1: { padding: "0" }
    };
    this.setSelectedItem = this.setSelectedItem.bind(this);
  }
  componentDidMount() {
    this.setState({ photos: this.props.photos });
    console.log(this.props);
  }
  setSelectedItem(index) {
    this.setState({ index });
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="columns">
            <div className="column is-12" style={this.state.column}>
              <Carousel showThumbs={true}>
                {this.state.photos.map((photo, index) => {
                  return (
                    <figure
                      key={index}
                      className="image is-square"
                      style={this.state.figure}
                    >
                      <img src={photo.url} style={this.state.img} />
                    </figure>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductsGallery;
