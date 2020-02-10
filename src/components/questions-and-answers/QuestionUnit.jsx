import React, { useState } from "react";
import Axios from 'axios';
import AnswerUnit from "./AnswerUnit.jsx";
import $ from 'jquery';
import AddAnswer from "./AddAnswer.jsx"
const QuestionUnit = (props) => {
  const [votes, setVotes] = useState(props.question.question_helpfulness);
  const [didVote, setDidVote] = useState(false);
  const [answersToDisplay, setAnswersToDisplay] = useState(2);
  const answers = props.question.answers;
  const handleClick = function(id) {
    if (didVote) return;
    Axios.put(`http://3.134.102.30/qa/question/${id}/helpful`)
    .then((data) => {console.log(data)})
    .catch((err) => {console.log(err)});
    setDidVote(true);
    setVotes(votes + 1);
  };

  const handleAddAnswer = function() {

    props.setCurrentlyAnswering(props.question.question_id);
    $("#answer-form").addClass("is-active");
  };

  return (
    <div>
      Q: {props.question.question_body}
      Helpful?
      <a onClick={() => {handleClick(props.question.question_id)}}>Yes ({votes})</a>|
      <a onClick={handleAddAnswer}>Add Answer</a>
      {answers.slice(0,answersToDisplay)
        .map((answer, index) => (
          <AnswerUnit answer={answer} key = {index}/>
        ))}
      
      {answersToDisplay <= answers.length ? (
        <b onClick={() => setAnswersToDisplay(answersToDisplay + 2)}>Load More</b>
      ) : (
        <b></b>
      )}
    </div>
  );
};

export default QuestionUnit;
