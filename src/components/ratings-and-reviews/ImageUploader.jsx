import React, { useState } from "react";

const ImageUploader = (props) => {
  const [picture, setPicture] = useState(null);
  const uploadPicture = (picture) => {
    setPicture(picture);
  };
  return (
    <>
      <label className="label">Upload an Image</label>
      <div className="file has-name is-boxed">
        <label className="file-label">
          <input
            className="file-input"
            type="file"
            name="picture"
            onChange={(event) => {
              let picture = event.target.files[0];
              uploadPicture(picture);
            }}
          />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload"></i>
            </span>
            <span className="file-label">Choose a file…</span>
          </span>

          {picture ? <span className="file-name">{picture}</span> : null}
        </label>
      </div>
    </>
  );
};

export default ImageUploader;
