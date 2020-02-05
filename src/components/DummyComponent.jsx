import React, { Component } from "react";
import QA from "../components/questions-&-answers/QA.jsx"
const DummyComponent = props => {
  return (
    <div className="container">
      <h1 className="title is-1">Hello World!</h1>
      <button className="button" onClick={props.handleFunc}>
        Click
      </button>
      <QA />
    </div>
  );
};

export default DummyComponent;
