import React from "react";

const Photo = (props) => {
  return (
    <div>
      <figure className="image is-96x96" style={{ maxHeight: "100%" }}>
        <img src={props.photo.url} alt="img" style={{ height: "75%" }} />
      </figure>
    </div>
  );
};

export default Photo;
