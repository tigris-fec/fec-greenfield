import React from "react";
import { render } from "enzyme";
<<<<<<< HEAD
import QuestionUnit from "./QuestionUnit.jsx"



const QA = (props) =>{
    
    return (
        <div className = "all-questions">
            <h5>{"Questions & Answers"}</h5>
            <input type = "text" placeholder = "HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
            {props.questions.map(question => <QuestionUnit question = {question} />)}
=======


const QA = () =>{
    
    return (
        <div>
            <h5>{"Questions & Answers"}</h5>
            <input type = "text" placeholder = "HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
            <p><strong>Q: Who what which when ....</strong></p>
            <p><strong>A: Tootlsie roll something cats are cute and potato chips</strong></p>
>>>>>>> ead1180962ab7456f0e4a58d1c9fcc63d891337f
            <button>More Answered Questions</button>
            <button>Add a Question +</button>
        </div>
    );
}

export default QA;