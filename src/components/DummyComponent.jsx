import React, { Component } from "react";

class DummyComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h1 className="title is-1 has-text-centered">Hello World!</h1>
      </div>
    );
  }
}

export default DummyComponent;
