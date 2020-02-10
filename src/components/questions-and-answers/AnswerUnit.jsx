import React, { useState } from "react";
import Axios from "axios";
// In regards to taking props, does redux change this?

const AnswerUnit = (props) => {
  const [votes, setVotes] = useState(props.answer.helpfulness);
  const [didVote, setDidVote] = useState(false);
  const [didReport, setDidReport] = useState(false);
  const handleUpvote = function(id) {
    if (didVote) return;
    Axios.put(`http://3.134.102.30/qa/answer/${id}/helpful`);
    setDidVote(true);
    setVotes(votes + 1);
  };

  const handleReport = function(e, id) {
    if (didReport) return;
    console.log("report");
    Axios.put(`http://3.134.102.30/qa/answer/${id}/report`)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
    setDidReport(true);
    e.target.innerText = "Reported"

  };
  return (
    <div id = {props.answer.id}>
      A: {props.answer.body}
      <br />
      by {props.answer.answerer_name} | Helpful?{" "}
      <a
        onClick={() => {
          handleUpvote(props.answer.id);
        }}
      >
        Yes({votes})
      </a>{" "}
      |{" "}
      <a
        
        onClick={(e) => {
          handleReport(e, props.answer.id);
        }}
      >
        Report
      </a>
    </div>
  );
};

export default AnswerUnit;
