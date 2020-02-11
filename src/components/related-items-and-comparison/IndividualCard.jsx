import React from "react";
import StarRating from "./StarRating.jsx";

const IndividualCard = (props) => {
  return (
    <div
      className="card"
      style={{
        width: "15vw",
        height: "50vh",
        marginRight: "1vw",
        border: "1px solid black"
      }}
    >
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
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
            <StarRating averageRating={3.5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualCard;
