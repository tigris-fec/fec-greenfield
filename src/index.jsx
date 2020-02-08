import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { EventTracker, EventTrackerProvider } from "./event-tracker";
import store from "./js/store/index";
import "bulma";

/**
 * Can dynamically listen for events by calling `eventTracker.onEvent()`
 */
const eventTracker = new EventTracker();

ReactDOM.render(
  <EventTrackerProvider eventTracker={eventTracker}>
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  </EventTrackerProvider>,
  document.getElementById("root")
);

/**
 * Using cookies can be an alternative to EventTracker
 */
