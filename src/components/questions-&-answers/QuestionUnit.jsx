import React from 'react';

import AnswerUnit from './AnswerUnit.jsx'
// In regards to taking props, does redux change this?
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
const handleClick = (e) => {
    console.log(e);
}
const QuestionUnit = (props) => {

    let answers = props.question.answers;
    //console.log(answers);
    return (
        <div>
            Q: {props.question.question_body}
            Helpful?
            <a href="#" onClick={handleClick}>Yes ({props.question.question_helpfulness})</a>
            |
            <a href= "#" onClick={handleClick}>Add Answer</a>
           {Object.keys(answers).map((answerId,index) => <AnswerUnit answer = {answers[answerId]}/>) }
        </div>
    );

}

export default QuestionUnit;