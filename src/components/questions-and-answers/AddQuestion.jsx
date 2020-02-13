import React from "react";
import $ from "jquery";
import Modal from "react-modal";
import Axios from "axios";

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      name: "",
      email: ""
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
      this.state.body.length === 0 ||
      this.state.email.length === 0 ||
      this.state.name.length === 0
    ) {
      alert("Please fill out the empty fields");
      return;
    }
    if (!this.emailRegex.test(this.state.email)) {
      alert("Invalid email");
      return;
    }

    let myQuestion = {
      body: this.state.body,
      name: this.state.name,
      email: this.state.email
    };
    Axios.post(`http://3.134.102.30/qa/${this.props.productID}`, myQuestion)
      .then((data) => {
        this.props.loadQuestions();
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({});
    this.handleCloseQuestion();
  }
  render() {
    return (
      <div className="add-question">
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
                <textarea
                  className="textarea"
                  name="body"
                  placeholder=""
                  value={this.state.body}
                  onChange={this.handleChange}
                  autoComplete="off"
                />
                <label>
                  <h2>What is your nickname</h2>
                </label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Example: jackson11!"
                  value={this.state.name}
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
                  name="email"
                  placeholder="email@example.com"
                  value={this.state.email}
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
