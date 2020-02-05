import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../js/actions/index";

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (data) => dispatch(addItem(data))
  };
};

class ConnectedExampleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    let data = this.state.data;
    this.props.addItem({ data });
    this.setState({ data: "" });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="label">Add Item</label>
          <div className="control">
            <input
              className="input"
              name="data"
              value={this.state.data}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <button className="button">Add Item</button>
      </form>
    );
  }
}

const ExampleForm = connect(null, mapDispatchToProps)(ConnectedExampleForm);

export default ExampleForm;
