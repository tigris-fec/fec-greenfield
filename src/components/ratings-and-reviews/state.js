export const fakeSoloReview = {
  product_id: "1",
  ratings: {
    "1": 15,
    "2": 2,
    "3": 4,
    "4": 11,
    "5": 19
  },
  recommended: {
    "0": 23,
    "1": 28
  },
  characteristics: {
    Fit: {
      id: 1,
      value: "3.0323"
    },
    Length: {
      id: 2,
      value: "2.7188"
    },
    Comfort: {
      id: 3,
      value: "3.0625"
    },
    Quality: {
      id: 4,
      value: "2.9063"
    }
  }
};

export const characteristics = {
  size: [
    "A size too small",
    "1/2 a size too small",
    "Perfect",
    "1/2 a size too big",
    "A size too wide"
  ],
  width: ["Too narrow", "Slightly narrow", "Perfect", "Slightly wide", "Too wide"],
  comfort: ["Uncomfortable", "Slightly uncomfortable", "Ok", "Comfortable", "Perfect"],
  quality: ["Poor", "Below average", "What I expected", "Pretty great", "Perfect"],
  length: [
    "Runs Short",
    "Runs slightly short",
    "Perfect",
    "Runs slightly long",
    "Runs long"
  ],
  fit: ["Runs tight", "Runs slightly tight", "Perfect", "Runs slightly long", "Runs long"]
};

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",

    borderStyle: "none",
    background: "#FFFFFF"
  },
  overlay: {
    background: "#0000009F",
    borderStyle: "none"
  }
};
