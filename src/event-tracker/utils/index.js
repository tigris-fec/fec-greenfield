export const assertEventListeners = (eventListeners = []) => {
  return eventListeners.filter((eventListener) => typeof eventListener === "function");
};
