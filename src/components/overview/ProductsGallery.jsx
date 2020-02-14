import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ProductsGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      photos: []
    };
  }
  componentDidMount() {
    this.setState({ photos: this.props.photos });
  }
  render() {
    return (
      <>
        <div className="container is-fluid">
          <Slider
            afterChange={(index) =>
              this.setState({ current: index }, () => console.log(this.state.current))
            }
            className="bulma"
            lazyLoad={true}
            slide={"figure"}
            arrows={true}
          >
            {this.state.photos.map((photo, index) => {
              return <img key={index} src={photo.url} />;
            })}
          </Slider>
          <div className="columns">
            {this.state.photos.map((photo, index) => {
              return (
                <div className="column" key={index}>
                  <figure
                    className="image is-128x128"
                    key={index}
                    style={
                      this.state.index === index
                        ? {
                            border: "solid",
                            borderWeight: "thin",
                            borderWidth: "1px",
                            borderColor: "#0000006F"
                          }
                        : null
                    }
                  >
                    <img
                      src={photo.thumbnail_url}
                      alt="thumbnail"
                      style={{
                        height: "50%",
                        width: "autop",
                        justifyContent: "center"
                      }}
                      alt="thumbnail_url"
                    />
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default ProductsGallery;
