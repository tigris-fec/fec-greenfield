import React from "react";
import $ from "jquery";
import Modal from "react-modal";
import Axios from 'axios';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question_body: "",
      asker_name: "",
      asker_email: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitQuestion = this.handleSubmitQuestion.bind(this);
    this.emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  }

  handleOpenQuestion() {
    $(".modal").addClass("is-active");
  }
  handleCloseQuestion() {
    $(".modal").removeClass("is-active");
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmitQuestion() {
    if (
      this.state.question_body.length === 0 ||
      this.state.asker_email.length === 0 ||
      this.state.asker_name.length === 0
    ) {
      alert("Please fill out the empty fields");
      return;
    }
    if (!this.emailRegex.test(this.state.asker_email)) {
      alert("Invalid email");
      return;
    }

  }
  render() {
    return (
      <div className="add-question">
        <button className="button" onClick={this.handleOpenQuestion}>
          Add a Question +
        </button>
        <div className="modal">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Your Question</p>
              <button
                className="delete"
                aria-label="close"
                onClick={this.handleCloseQuestion}
              ></button>
            </header>
            <section className="modal-card-body">
              <form>
                <label>
                  <h1>Your Question</h1>
                </label>
                <textarea
                  className="textarea"
                  name="question_body"
                  placeholder="Email"
                  value={this.state.question_body}
                  onChange={this.handleChange}
                  autoComplete="off"
                />
                <label>
                  <h2>What is your nickname</h2>
                </label>
                <input
                  type="text"
                  className="input"
                  name="asker_name"
                  placeholder="Example: jackson11!"
                  value={this.state.asker_name}
                  onChange={this.handleChange}
                  autoComplete="off"
                />
                <p>For privacy reasons, do not use your full name or email address</p>
                <label>
                  <h2>Your email</h2>
                </label>
                <input
                  type="text"
                  className="input"
                  name="asker_email"
                  placeholder="email@example.com"
                  value={this.state.asker_email}
                  onChange={this.handleChange}
                  autoComplete="off"
                />
                <br />
                <input
                  type="button"
                  value="Submit"
                  onClick={this.handleSubmitQuestion}
                ></input>
              </form>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default AddQuestion;
