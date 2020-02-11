import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { EventTracker, EventTrackerProvider } from "./event-tracker";
import store from "./js/store/index";
import "bulma";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

