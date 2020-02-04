import Redux from "redux";

var dummyreducer = (state = null, action) => {
  switch (action.type) {
    case "CHANGE_VIDEO":
      return action.video;
    default:
      return state;
  }
};

export default dummyreducer;
