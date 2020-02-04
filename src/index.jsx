import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from 'react-redux';
import "bulma";

ReactDOM.render(
  <Provider>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById("root")
);
