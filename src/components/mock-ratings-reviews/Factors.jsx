import React, { useState } from "react";
import IndicatorBar from "./IndicatorBar.jsx";

const Factors = (props) => {
  const characteristicNames = {
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
  return (
    <>
      {props.characteristics.map((char) => {
        let name = Object.keys(char);
        return (
          <>
            <br />
            <p key={char[name[0]].id}>{name[0]}</p>
            <IndicatorBar width={((char[name[0]].value - 0.5) / 5) * 100} />
            <div className="level">
              <div className="level-left">
                <p className="is-size-7" style={{ marginRight: "10px" }}>
                  {characteristicNames[name[0]].setting[0]}
                </p>
              </div>
              <div className="level-right">
                <p className="is-size-7" style={{ paddingRight: "230px" }}>
                  {characteristicNames[name[0]].setting[4]}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Factors;

