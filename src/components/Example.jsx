import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { exampleData: state.exampleData };
};

const ConnectedExample = (props) => {
  return (
    <div>
      <ul>
        {props.exampleData.map((data) => {
          return <li key={data.text}>{data.text}</li>;
        })}
      </ul>
    </div>
  );
};

const Example = connect(mapStateToProps)(ConnectedExample);

export default Example;
