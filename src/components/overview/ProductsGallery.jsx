import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProductsGallery.css";

const ProductsGallery = (props) => {
  const [photos, setPhotos] = useState(props.photos);
  const [currentPhoto, setCurrentPhoto] = useState(props.photos[0]);

  useEffect(() => {
    setPhotos(props.photos);
    setCurrentPhoto(props.photos[0]);
  }, [props.photos]);

  const clickPhotoHandler = (photo) => {
    setCurrentPhoto(photo);
  };

  const clickArrowLeftHandle = () => {
    let index = photos.indexOf(currentPhoto);
    setCurrentPhoto(photos[index - 1])
  };

  const clickArrowRightHandle = () => {
    let index = photos.indexOf(currentPhoto);
    setCurrentPhoto(photos[index + 1])
  };

  return (
    <div className="container" style={{ position: "relative" }}>
      {photos.indexOf(currentPhoto) !== 0 ? (
        <div
          name="left-arrow"
          style={{ position: "absolute", top: "40%",left:"1%", zIndex: "1" }}
          onClick={clickArrowLeftHandle}
          className="left clickable"
        >
          <i className="fas fa-arrow-alt-circle-left"></i>
        </div>
      ) : null}
      {photos.indexOf(currentPhoto) !== photos.length - 1 ? (
        <div
          name="right-arrow"
          style={{ position: "absolute", top: "40%", left: "97%", zIndex: "1" }}
          onClick={clickArrowRightHandle}
          className="right clickable"
        >
          <i className="fas fa-arrow-alt-circle-right"></i>
        </div>
      ) : null}
      <div
        name="picture-container"
        style={{ height: "80vh", width: "100%", backgroundColor: "lightgrey" }}
      >
        <figure className="image" style={{ height: "100%", width: "100%" }}>
          <img src={currentPhoto.url} style={{ height: "100%", width: "100%" }} />
        </figure>
      </div>
      <div name="thumbnail-container" style={{ paddingTop: "10px", width:"100%", overflow:"auto", height:"200px"}}>
        <div className="level">
          <div className="level-left">
            {photos.map((photo) => {
              return (
                <div className="level-item clickable">
                  <figure className="image is-96x96">
                    <img
                      src={photo.url}
                      alt="No Photo Available"
                      onClick={() => clickPhotoHandler(photo)}
                      style={{
                        border: `${currentPhoto === photo ? "2px solid red" : "none"}`
                      }}
                    />
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsGallery;
