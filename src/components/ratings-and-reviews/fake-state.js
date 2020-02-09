export const fakeState = {
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

export const characteristicNames = {
  Size: {
    setting: [
      "A size too small",
      "Half a size too small",
      "Perfect",
      "Half a size too big",
      "A size too big"
    ]
  },
  Width: {
    setting: ["Too narrow", "Slightly Narrow", "Perfect", "Slightly Wide", "Too wide"]
  },
  Comfort: {
    setting: ["Uncomfortable", "Slightly uncomfortable", "Ok", "Comfortable", "Perfect"]
  },
  Quality: {
    setting: ["Poor", "Below average", "What I expected", "Pretty great", "Perfect"]
  },
  Length: {
    setting: [
      "Runs short",
      "Runs slightly short",
      "Perfect",
      "Runs slightly long",
      "Runs long"
    ]
  },
  Fit: {
    setting: [
      "Runs tight",
      "Runs slightly tight",
      "Perfect",
      "Runs slightly long",
      "Runs long"
    ]
  }
};
