import React, { useState } from "react";
import Axios from "axios";
import AnswerUnit from "./AnswerUnit.jsx";
import $ from "jquery";
import AddAnswer from "./AddAnswer.jsx";
const QuestionUnit = (props) => {
  const [votes, setVotes] = useState(props.question.question_helpfulness);
  const [didVote, setDidVote] = useState(false);
  const [answersToDisplay, setAnswersToDisplay] = useState(2);
  const [displayAll, setDisplayAll] = useState(false);
  const answers = props.question.answers;
  const handleClick = function(id) {
    if (didVote) return;
    Axios.put(`http://3.134.102.30/qa/question/${id}/helpful`)
      .catch((err) => {
        console.log(err);
      });
    setDidVote(true);
    setVotes(votes + 1);
  };

  const handleAddAnswer = function() {
    props.setCurrentlyAnswering(props.question.question_id);
    $("#answer-form").addClass("is-active");
  };

  return (
    <div>
      <div className="my-flex">
        <span className="question-body">Q:&ensp;{props.question.question_body}</span>
        <span className="question-right">
          Helpful?&nbsp;&nbsp;
          <u
            onClick={() => {
              handleClick(props.question.question_id);
            }}
          >
            Yes
          </u>
          ({votes})&ensp; |&ensp;<u onClick={handleAddAnswer}>Add Answer</u>
        </span>
      </div>
      {answers.slice(0, answersToDisplay).map((answer, index) => (
        <AnswerUnit answer={answer} key={index} />
      ))}
      {answersToDisplay < answers.length ? (
        <b onClick={() => setAnswersToDisplay(Infinity)}>&emsp;&ensp;See More Answers</b>
      ) : (
        ""
      )}
      {answersToDisplay === Infinity ? (
        <b onClick={() => setAnswersToDisplay(2)}>&emsp;&ensp;Collapse Answers</b>
      ) : (
        ""
      )}
    </div>
  );
};

export default QuestionUnit;
