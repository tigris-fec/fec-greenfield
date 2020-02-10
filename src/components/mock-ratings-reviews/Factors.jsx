import React, { useState } from "react";
import "./IndicatorBar.css";

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
          <div className="container" style={{ maxWidth: "100%", fontSize: "90%" }}>
            <span style={{ fontWeight: "bold" }}>
              <p key={char[name[0]].id}>{name[0]}</p>
            </span>
            <div className="indicator-container">
              <div className="indicator-bar-1">
                <div className="indicator-bar-2">
                  <div className="indicator-bar-3">
                    <i className="fas fa-caret-down indicator"></i>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <p className="has-text-left">
                      {characteristicNames[name[0]].setting[0]}
                    </p>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <p className="has-text-right">
                      {characteristicNames[name[0]].setting[4]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Factors;

/*
<IndicatorBar width={((char[name[0]].value - 0.5) / 5) * 100} />
*/
