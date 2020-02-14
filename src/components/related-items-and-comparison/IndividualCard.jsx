import React, { useState } from "react";
import StarRating from "./StarRating.jsx";
import CompareModal from "./CompareModal.jsx";

const IndividualCard = (props) => {
  const [modelOpen, setModalOpen] = useState(false);
  const defaultPic =
    "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg";

  const handleClickChange = () => {
    props.func(props.product.id)
  };

  const showModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div
      className="card is-shadowless"
      style={{
        width: "15vw",
        height: "50vh",
        marginRight: "1vw",
        border: "1px solid black",
        position: "relative"
      }}
    >
      <div className="card-header">
        <p className="card-header-title"></p>
        <a className="card-header-icon" aria-label="more options">
          <span className="icon">
            {props.cardType === "related" ? (
              <p onClick={handleClickChange}>
                <i className="far fa-star" aria-hidden="true" onClick={handleClickChange}></i>
              </p >
            ) : (
              <i className="far fa-times-circle" onClick={handleClickChange}></i>
            )}
          </span>
        </a>
      </div>

      <div className="card-image">
        <figure className="image is-4by3" onClick={showModal}>
          <img
            src={
              props.photo ? (props.photo.url ? props.photo.url : defaultPic) : defaultPic
            }
            alt="Placeholder image"
          />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="subtitle is-7">{props.product.category.toUpperCase()}</p>
            <p className="title is-6">{props.product.name}</p>
            <p>${props.product.default_price}</p>
            <StarRating averageRating={props.rating} />
          </div>
        </div>
      </div>
      {modelOpen ? (
        <CompareModal
          closeModal={closeModal}
          currentFeatures={props.features}
          newFeatures={props.features}
        />
      ) : null}
    </div>
  );
};

export default IndividualCard;
