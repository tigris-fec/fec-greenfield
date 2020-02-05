import React from "react";
import { render } from "enzyme";
import QuestionUnit from "./QuestionUnit.jsx"



const QA = (props) =>{
    
    return (
        <div className = "all-questions">
            <h5>{"Questions & Answers"}</h5>
            <input type = "text" placeholder = "HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
            {props.questions.map(question => <QuestionUnit question = {question} />)}
            <button>More Answered Questions</button>
            <button>Add a Question +</button>
        </div>
    );
}

export default QA;