import React from "react";

const RadioGroup = (props) => {
  return (
    <div className="control">
      <label className="level" style={{ marginBottom: "0" }}>
        {props.name}
      </label>
      <div className="level-left">
        <label>
          <input
            type="radio"
            value={1}
            checked={props.val === "1"}
            onChange={props.func}
          />
          &nbsp; {props.settings[0]} &nbsp;
        </label>
        <label>
          <input
            type="radio"
            value={2}
            checked={props.val === "2"}
            onChange={props.func}
          />
          &nbsp; {props.settings[1]} &nbsp;
        </label>
        <label>
          <input
            type="radio"
            value={3}
            checked={props.val === "3"}
            onChange={props.func}
          />
          &nbsp; {props.settings[2]} &nbsp;
        </label>
        <label>
          <input
            type="radio"
            value={4}
            checked={props.val === "4"}
            onChange={props.func}
          />
          &nbsp; {props.settings[3]} &nbsp;
        </label>
        <label>
          <input
            type="radio"
            value={5}
            checked={props.val === "5"}
            onChange={props.func}
          />
          &nbsp; {props.settings[4]} &nbsp;
        </label>
      </div>
      <br />
    </div>
  );
};

export default RadioGroup;
