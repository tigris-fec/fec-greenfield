import React from 'react';
import AnswerUnit from './AnswerUnit.jsx'

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