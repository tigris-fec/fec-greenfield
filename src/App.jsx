import React, { Component } from "react";
import DummyComponent from "./components/DummyComponent.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <DummyComponent />
      </div>
    );
  }
}

export default App;
