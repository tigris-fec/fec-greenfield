import React from "react";

const CharRadio = (props) => {
  const changeHandle = (event) => {
    props.setFunc(event.target.value);
  };
  return (
    <div className="level">
      <div className="level-left">
        <p>{props.name}: &nbsp;</p>
        <label>
          <input
            type="radio"
            value={1}
            checked={props.val === "1"}
            onChange={changeHandle}
          />
          &nbsp; {props.settings[0]} &nbsp;
        </label>

        <label>
          <input
            type="radio"
            value={2}
            checked={props.val === "2"}
            onChange={changeHandle}
          />
          &nbsp; {props.settings[1]} &nbsp;
        </label>

        <label>
          <input
            type="radio"
            value={3}
            checked={props.val === "3"}
            onChange={changeHandle}
          />
          &nbsp; {props.settings[2]} &nbsp;
        </label>

        <label>
          <input
            type="radio"
            value={4}
            checked={props.val === "4"}
            onChange={changeHandle}
          />
          &nbsp; {props.settings[3]} &nbsp;
        </label>

        <label>
          <input
            type="radio"
            value={5}
            checked={props.val === "5"}
            onChange={changeHandle}
          />
          &nbsp; {props.settings[4]} &nbsp;
        </label>
      </div>
    </div>
  );
};

export default CharRadio;
