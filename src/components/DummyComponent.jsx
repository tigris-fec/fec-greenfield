import React, { Component } from "react";

const DummyComponent = props => {
  return (
    <div className="container">
      <h1 className="title is-1">Hello World!</h1>
      <button className="button" onClick={props.handleFunc}>
        Click
      </button>
    </div>
  );
};

export default DummyComponent;
