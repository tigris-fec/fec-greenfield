import React from "react";
import { render } from "enzyme";
import QuestionUnit from "./QuestionUnit.jsx"
import AddQuestion from "./AddQuestion.jsx"
import {sampleQuestions} from '../../mockData/questions.js'
import $ from 'jquery';


class QA extends React.Component{ 
    constructor(props){
        super(props);
        this.handleAddQuestion = this.handleAddQuestion.bind(this);
        this.state = {
            questions: sampleQuestions
        }
    }
    handleAddQuestion(e){
        $(".modal").addClass("is-active");
    }
    handleCloseQuestion(e){
        $(".modal").removeClass("is-active");
    }
    handleSubmitQuestion(e){
        // Verify

    }
    handleChange(){}
    render(){
        
        return (
            <div className="all-questions">
                <h5>{"Questions & Answers"}</h5>
                <input type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
                {sampleQuestions.results.map(question => <QuestionUnit question={question} />)} <br />
                <input type = "button" class = "button" value = "More Answered Questions" />
                <AddQuestion />

            </div>
        );
    }



}
export default QA;