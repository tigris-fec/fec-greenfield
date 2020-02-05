import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { exampleData: state.exampleData };
};

const ConnectedExample = (props) => {
  return (
    <div>
      <ol>
        {props.exampleData.map((data) => {
          return <li key={data.text}>{data.text}</li>;
        })}
      </ol>
    </div>
  );
};

const Example = connect(mapStateToProps)(ConnectedExample);

export default Example;
