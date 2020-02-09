import React from "react";
import IndicatorBar from "./IndicatorBar.jsx";

const Factors = (props) => {
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
                  {char[name[0]].setting[0]}
                </p>
              </div>
              <div className="level-right">
                <p className="is-size-7" style={{ paddingRight: "230px" }}>
                  {char[name[0]].setting[4]}
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
