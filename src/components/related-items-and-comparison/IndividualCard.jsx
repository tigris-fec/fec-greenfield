import React, { useState } from "react";
import StarRating from "./StarRating.jsx";
import CompareModal from "./CompareModal.jsx";
import { connect } from "react-redux";

const mapStateToProps = (store) => ({
  currentItem: store.current_item
});

const IndividualCard_ = (props) => {
  const [modelOpen, setModalOpen] = useState(false);
  const defaultPic =
    "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg";

  const handleClickChange = () => {
    props.func(props.product.id);
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
                <i className="far fa-star clickable" aria-hidden="true"></i>
              </p>
            ) : (
              <p onClick={handleClickChange}>
                <i className="far fa-times-circle clickable" aria-hidden="true"></i>
              </p>
            )}
          </span>
        </a>
      </div>

      <div className="card-image">
        <figure className="image is-4by3 clickable" onClick={showModal}>
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
          currentFeatures={props.currentItem.currentProduct.features}
          newFeatures={props.features}
          currentName={props.currentItem.currentProduct.name}
          newName={props.product.name}
        />
      ) : null}
    </div>
  );
};
const IndividualCard = connect(mapStateToProps,null)(IndividualCard_);
export default IndividualCard;
