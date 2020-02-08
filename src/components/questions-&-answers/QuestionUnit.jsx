import React, { useState } from 'react';

import AnswerUnit from './AnswerUnit.jsx'



const QuestionUnit = (props) => {

    const [votes, setVotes] = useState(props.question.question_helpfulness);
    const [didVote, setDidVote] = useState(false);

    const handleClick = function(){
        if (didVote) return;
        setDidVote(true);
        setVotes(votes + 1);
    }

    const handleAddAnswer = function(){
        
    }
    let answers = props.question.answers;
    
    return (
        <div>
            Q: {props.question.question_body}
            Helpful?
            <a onClick={handleClick}>Yes ({votes})</a>
            |
            <a onClick={handleAddAnswer}>Add Answer</a>
           {Object.keys(answers).map((answerId,index) => <AnswerUnit answer = {answers[answerId]}/>) }
        </div>
    );

}

export default QuestionUnit;