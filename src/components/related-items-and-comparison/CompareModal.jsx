import React from "react";

const CompareModal = (props) => {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={props.closeModal}></div>
      <div className="modal-card">
        <section className="modal-card-body">
          <div className="columns">
            <div className="column is-half" style={{ borderRight: "1px solid black" }}>
            <p>
                <em>
                  <b>{props.currentName}</b>
                </em>
              </p>
              <br />
              {props.currentFeatures.map((feature) => {
                return (
                  <p>
                    <i className="far fa-check-circle"></i>
                    &nbsp;{feature.feature}:{" "}
                    {feature.value !== "null" ? feature.value : "Trusted"}
                  </p>
                );
              })}
            </div>
            <div className="column is-half">
              <p>
                <em>
                  <b>{props.newName}</b>
                </em>
              </p>
              <br />
              {props.newFeatures.map((feature) => {
                return (
                  <p>
                    <i className="far fa-check-circle"></i>
                    &nbsp;{feature.feature}:{" "}
                    {feature.value !== "null" ? feature.value : "Trusted"}
                  </p>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={props.closeModal}
      ></button>
    </div>
  );
};

export default CompareModal;
