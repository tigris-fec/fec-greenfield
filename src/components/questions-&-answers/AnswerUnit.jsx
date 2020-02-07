import React from "react";

// In regards to taking props, does redux change this?

// "question_id": 37,
// "question_body": "Why is this product cheaper here than other sites?",
// "question_date": "2018-10-18T00:00:00.000Z",
// "asker_name": "williamsmith",
// "question_helpfulness": 4,
// "reported": 0,
// "answers": {
//   68: {
//     "id": 68,
//     "body": "We are selling it here without any markup from the middleman!",
//     "date": "2018-08-18T00:00:00.000Z",
//     "answerer_name": "Seller",
//     "helpfulness": 4,
//     "photos": []
//     // ...
//   }
// }

const handleClick = (e) => {}

const AnswerUnit = (props) => {
  return (
    <div>
      A: {props.body}
      <br />
      by {props.answerer_name} | Helpful?{" "}
      <u onClick={() => console.log("Please don't commit errored code!")}>
        Yes({props.helpfulness})
      </u>{" "}
      |{" "}
      <u onClick={() => console.log("This threw an error when I tried to rebase")}>
        Report
      </u>
    </div>
  );

export default AnswerUnit;
