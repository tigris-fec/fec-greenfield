import React from "react";

const Response = (props) => {
  return (
    <div className="level">
      <div
        className="notification"
        style={{
          backgroundColor: "#EBEBEB",
          borderRadius: "0%"
        }}
      >
        <strong>Response:</strong>
        <p>{props.response}</p>
      </div>
    </div>
  );
};

export default Response;
