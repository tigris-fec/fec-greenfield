import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { data: state.data };
};

const ConnectedExampleList = (props) => {
  return (
    <ul>
      {props.data.map((item) => {
        return <li key={item.id}>{item.data}</li>;
      })}
    </ul>
  );
};

const ExampleList = connect(mapStateToProps)(ConnectedExampleList);

export default ExampleList;
