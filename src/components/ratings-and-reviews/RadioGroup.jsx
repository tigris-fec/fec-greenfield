import React from "react";

const RadioGroup = (props) => {
  const handleChange = (event) => {
    props.func(event.target.value);
  };
  return (
    <div className="control">
      <label className="level">{props.name}</label>
      <label>
        <input
          type="radio"
          value={1}
          checked={props.val === "1"}
          onChange={handleChange}
        />
        &nbsp; {props.settings[0]} &nbsp;
      </label>
      <label>
        <input
          type="radio"
          value={2}
          checked={props.val === "2"}
          onChange={handleChange}
        />
        &nbsp; {props.settings[1]} &nbsp;
      </label>
      <label>
        <input
          type="radio"
          value={3}
          checked={props.val === "3"}
          onChange={handleChange}
        />
        &nbsp; {props.settings[2]} &nbsp;
      </label>
      <label>
        <input
          type="radio"
          value={4}
          checked={props.val === "4"}
          onChange={handleChange}
        />
        &nbsp; {props.settings[3]} &nbsp;
      </label>
      <label>
        <input
          type="radio"
          value={5}
          checked={props.val === "5"}
          onChange={handleChange}
        />
        &nbsp; {props.settings[4]} &nbsp;
      </label>
    </div>
  );
};

export default RadioGroup;
