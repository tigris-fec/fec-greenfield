import React from "react";

const Photo = (props) => {
  return (
    <div>
      <figure className="image is-96x96">
        <img src={props.photo.url} alt="img" />
      </figure>
    </div>
  );
};

export default Photo;
