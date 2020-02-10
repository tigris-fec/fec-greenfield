import React from "react";
import { render } from "enzyme";
import QuestionUnit from "./QuestionUnit.jsx";
import AddQuestion from "./AddQuestion.jsx";
//import { sampleQuestions } from "../../mockData/questions.js";
import $ from "jquery";
import Axios from "axios";

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.state = {
      questions: {},
      questionsToDisplay: 2
    };
    this.handleMoreQuestions = this.handleMoreQuestions.bind(this);
  }

  componentDidMount() {
    Axios.get("http://3.134.102.30/qa/5")
      .then((data) => {
        this.setState({
          questions: data.data
        });
        console.log(data);
      })
      .catch((err) => {
        // Do nothing
        console.log(err);
      });
  }
  handleAddQuestion(e) {
    $(".modal").addClass("is-active");
  }
  handleCloseQuestion(e) {
    $(".modal").removeClass("is-active");
  }
  handleSubmitQuestion(e) {
    // Verify
  }

  handleMoreQuestions() {
    let number = this.state.questionsToDisplay;
    this.setState({
      questionsToDisplay: (number += 2)
    });
  }
  handleChange() {}
  render() {
    return this.state.questions.product_id !== undefined ? (
      <div className="all-questions">
        <h5>{"Questions & Answers"}</h5>
        <input type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
        {this.state.questions.results
          .slice(0, this.state.questionsToDisplay)
          .map((question, index) => (
            <QuestionUnit question={question} key={index} />
          ))}{" "}
        <br />
        {this.state.questions.results.length > 0 &&
        this.state.questionsToDisplay < this.state.questions.results.length ? (
          <input
            type="button"
            className="button"
            value="More Answered Questions"
            onClick={this.handleMoreQuestions}
          />
        ) : (
          ""
        )}
        <AddQuestion />
      </div>
    ) : (
      <div></div>
    );
  }
}
export default QA;
