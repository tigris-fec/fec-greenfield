import React from "react";

const Photo = props => {
    return (
      <div className="level-item">
      <figure className="image is-96x96">
          <img src={props.photo.url} style={{"marginRight": "10px"}} alt="img"/>
      </figure>
      </div>
      
    );
};
  
export default Photo;