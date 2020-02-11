import React from "react";
import { render } from "enzyme";
import QuestionUnit from "./QuestionUnit.jsx";
import AddQuestion from "./AddQuestion.jsx";
import AddAnswer from "./AddAnswer.jsx";
//import { sampleQuestions } from "../../mockData/questions.js";
import $ from "jquery";
import Axios from "axios";

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.state = {
      questions: {},
      questionsToDisplay: 2,
      productID: 5,
      currentlyAnswering: null, // This is changed when a user clicks "Add Answer" on a particular question
      searchedQuestions: {}, // key value pairs of idx : true or false depeneding on if it matches the search term
      searchMode: false
    };
    this.handleMoreQuestions = this.handleMoreQuestions.bind(this);
    this.setCurrentlyAnswering = this.setCurrentlyAnswering.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    Axios.get("http://3.134.102.30/qa/" + this.state.productID + "/?page=1&count=200")
      .then((data) => {
        data.data.results.sort((a, b) => {
          return b.question_helpfulness - a.question_helpfulness;
        });
        let arrayOfAnswers;
        data.data.results.map((question) => {
          arrayOfAnswers = [];
          Object.keys(question.answers).map((answerID) =>
            arrayOfAnswers.push(question.answers[answerID])
          );
          arrayOfAnswers.sort((a, b) => {
            if (a.answerer_name.toLowerCase().includes("seller")) {
              return -1;
            } else {
              return b.helpfulness - a.helpfulness;
            }
          });
          question.answers = arrayOfAnswers;
        });

        this.setState({
          questions: data.data
        });
      })
      .catch((err) => {
        // Do nothing
        console.log(err);
      });
  }
  setCurrentlyAnswering(id) {
    this.setState({
      currentlyAnswering: id
    });
  }
  handleAddQuestion(e) {
    $(".modal").addClass("is-active");
  }
  handleOpenQuestion() {
    $(".modal").addClass("is-active");
  }
  handleCloseQuestion(e) {
    $(".modal").removeClass("is-active");
  }

  handleMoreQuestions() {
    let number = this.state.questionsToDisplay;
    this.setState({
      questionsToDisplay: (number += 2)
    });
  }
  handleChange(e) {
    let searchTerms = e.target.value;
    if (e.target.value.length < 3) {
      // Clear results
      this.setState({
        searchMode: false,
        searchedQuestions: {},
        numOfSearch: null
      });
    } else {
      // start matching
      let markedQuestions = {};

      this.state.questions.results.map((question, index) => {
        if (question.question_body.toLowerCase().includes(searchTerms)) {
          markedQuestions[question.question_id] = true;
        }
      });
      this.setState({
        searchMode: true,
        searchedQuestions: markedQuestions,
        prevQuestionsToDisplay: this.state.questionsToDisplay,
        numOfSearch: 100
      });
    }
  }
  render() {
    return this.state.questions.product_id !== undefined ? (
      <div className = "all-questions">
        <div>
          <h5>{"Questions & Answers"}</h5>
          <input
            className = "input is-medium"
            type="text"
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
            onChange={this.handleChange}
          />
          {this.state.questions.results
            .slice(0, this.state.numOfSearch || this.state.questionsToDisplay)
            .map((question, index) => {
              if (
                this.state.searchMode &&
                this.state.searchedQuestions[question.question_id]
              ) {
                return (
                  <QuestionUnit
                    question={question}
                    key={index}
                    setCurrentlyAnswering={this.setCurrentlyAnswering}
                  />
                );
              } else if (this.state.searchMode === false) {
                return (
                  <QuestionUnit
                    question={question}
                    key={index}
                    setCurrentlyAnswering={this.setCurrentlyAnswering}
                  />
                );
              }
            })}{" "}
          <br />
          <AddAnswer question_id={this.state.currentlyAnswering} />
          <AddQuestion productID={this.state.productID} />
        </div>
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
        <button className="button" onClick={this.handleOpenQuestion}>
          Add a Question +
        </button>
      </div>
    ) : (
      <div></div>
    );
  }
}
export default QA;
