import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductsGallery = (props) => {
  let [selected, setSelected] = useState(0);
  useEffect(() => {
    setSelected(selected);
  }, [selected]);
  return (
    <>
      <div className="carousel-wrapper">
        <Carousel
          axis={"horizontal"}
          selectedItem={selected}
          showArrows={true}
          showThumbs={false}
          thumbWidth={50}
          useKeyboardArrows={true}
          onChange={(index) => setSelected(index)}
        >
          {props.photos.map((photo, index) => {
            return (
              <figure className="image" key={index}>
                <img src={photo.url} alt="No Pictures Available" />
              </figure>
            );
          })}
        </Carousel>

        <div className="level">
          <div className="level-left">
            {props.photos.map((photo, i) => {
              return (
                <div className="level-item">
                  <figure className="image is-96x96" key={i}>
                    <img
                      src={photo.thumbnail_url}
                      alt="thumbnail"
                      style={
                        selected === i
                          ? {
                              border: "solid",
                              borderWidth: "thin"
                            }
                          : null
                      }
                    />
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductsGallery;
