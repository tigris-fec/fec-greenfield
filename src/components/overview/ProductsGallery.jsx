import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductsGallery = (props) => {
  const [current, setCurrent] = useState(0)
 
    return (
      <>
        <div className="container is-fluid" >
          <Slider
            afterChange={(index) =>
              setCurrent(index)
            }
            className="bulma"
            lazyLoad={true}
            slide={"figure"}
            arrows={true}
            dots={true}
          >
            {props.photos.map((photo, index) => {
              return <img src={photo.url} style={{height:"10px"}}/>;
            })}
          </Slider>
          <div className="columns" >
            {props.photos.map((photo, index) => {
              return (
                <div className="column">
                  <figure
                    className="image is-128x128"
                    key={index}
                    style={
                      current === index
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
                        width: "auto",
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


export default ProductsGallery;
