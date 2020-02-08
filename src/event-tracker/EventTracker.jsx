import { assertEventListeners } from "./utils";

class EventTracker {
  constructor(eventListeners) {
    this.eventHistory = [];
    this.eventListeners = assertEventListeners(eventListeners);
    this.trackEvent = this.trackEvent.bind(this);
  }
  onEvent(eventType, callback) {
    callback.eventType = eventType;
    this.listeners = [...this.listeners, callback];
  }
  trackEvent(event) {
    const type = event.type;
    const data = event.data;
    for (let i = 0; i < this.eventListeners.length; i++) {
      const eventListener = this.eventListeners[i];
      if (typeof eventListener === "function") {
        if (
          eventListener.eventType === type ||
          eventListener.eventType === "*" ||
          typeof eventListener === undefined
        ) {
          const savedEvent = eventListener.call(null, event, this.eventHistory);
          if (savedEvent) {
            this.eventHistory = [...this.eventHistory, savedEvent];
          }
        }
      }
    }
  }
  getEventHistory() {
    return this.eventHistory;
  }
}

export default EventTracker;
