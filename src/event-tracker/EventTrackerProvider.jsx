import React, { Component, Children } from "react";

class EventTrackerProvider extends Component {
  getChildContext() {
    return { trackedEvent: this.eventTracker.trackedEvent };
  }
  constructor(props, context) {
    super(props, context);
    this.eventTracker = props.eventTracker;
  }
  render() {
    return Children.only(this.props.children);
  }
}

export default EventTrackerProvider;
