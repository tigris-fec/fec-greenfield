import React from "react";
import { render } from "enzyme";
import QuestionUnit from "./QuestionUnit.jsx";
import AddQuestion from "./AddQuestion.jsx";
import { sampleQuestions } from "../../mockData/questions.js";
import $ from "jquery";

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.state = {
      questions: sampleQuestions,
      questionsToDisplay: 2
    };
    this.handleMoreQuestions = this.handleMoreQuestions.bind(this);
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
    return (
      <div className="all-questions">
        <h5>{"Questions & Answers"}</h5>
        <input
          type="text"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        />
        {this.state.questions.results
          .slice(0, this.state.questionsToDisplay)
          .map(question => (
            <QuestionUnit question={question} />
          ))}{" "}
        <br />
        <input
          type="button"
          className="button"
          value="More Answered Questions"
          onClick={this.handleMoreQuestions}
        />
        <AddQuestion />
      </div>
    );
  }
}
export default QA;
