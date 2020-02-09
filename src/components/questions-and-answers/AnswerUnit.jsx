import React, { useState } from "react";
// In regards to taking props, does redux change this?

const AnswerUnit = (props) => {
  const [votes, setVotes] = useState(props.answer.helpfulness);
  const [didVote, setDidVote] = useState(false);

  const handleClick = function() {
    if (didVote) return;
    setDidVote(true);
    setVotes(votes + 1);
  };

  return (
    <div>
      A: {props.answer.body}
      <br />
      by {props.answer.answerer_name} | Helpful? <a onClick={handleClick}>Yes({votes})</a>{" "}
      | <a onClick={() => {}}>Report</a>
    </div>
  );
};

export default AnswerUnit;
