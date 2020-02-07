import React from "react";
import IndicatorBar from "./IndicatorBar.jsx";

const Factors = props => {

  return (
    <div>
      {props.characteristics.map(char => {
        let name = Object.keys(char);
        return (
          <>
          <br/>
          <p key={char[name[0]].id}>
            {name[0]} : {char[name[0]].value}
          </p>
        <IndicatorBar width={((char[name[0]].value - 0.5)/5)*100}/>
        </>
        );
      })}
    </div>
  );
};

export default Factors;
