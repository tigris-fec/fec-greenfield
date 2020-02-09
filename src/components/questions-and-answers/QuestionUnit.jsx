import React, { useState } from "react";

import AnswerUnit from "./AnswerUnit.jsx";

const QuestionUnit = (props) => {
  const [votes, setVotes] = useState(props.question.question_helpfulness);
  const [didVote, setDidVote] = useState(false);
  const [answersToDisplay, setAnswersToDisplay] = useState(2);
  const answers = props.question.answers;
  const handleClick = function() {
    if (didVote) return;
    setDidVote(true);
    setVotes(votes + 1);
  };

  const handleAddAnswer = function() {};

  return (
    <div>
      Q: {props.question.question_body}
      Helpful?
      <a onClick={handleClick}>Yes ({votes})</a>|
      <a onClick={handleAddAnswer}>Add Answer</a>
      {Object.keys(answers)
        .slice(0, answersToDisplay)
        .map((answerId) => (
          <AnswerUnit answer={answers[answerId]} />
        ))}
      {answersToDisplay < Object.keys(answers).length ? (
        <b onClick={() => setAnswersToDisplay(answersToDisplay + 2)}>Load More</b>
      ) : (
        <b></b>
      )}
    </div>
  );
};

export default QuestionUnit;
