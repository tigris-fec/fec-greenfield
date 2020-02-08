import React from "react";
import { render } from "enzyme";
import QuestionUnit from "./QuestionUnit.jsx.js"

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

    render(){
        
        return (
            <div className="all-questions">
                <h5>{"Questions & Answers"}</h5>
                <input type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
                {sampleQuestions.results.map(question => <QuestionUnit question={question} />)} <br />
                <button>More Answered Questions</button>
                {/*  Render Modal right here*/}
                <button onClick={this.handleAddQuestion}>Add a Question +</button>
                <div class="modal">
                    <div class="modal-background"></div>
                    <div class="modal-content">
                        <form>
                            <label><h1>Your Question</h1></label>
                            <input type="text" placeholder="Sup" />
                            <label><h2>What is your nickname</h2></label>
                            <p>For privacy reasons, do not use your full name or email address</p>
                            <input type="text" placeholder="Example: jackson11!"/>
                            <label><h2>Your email</h2></label>
                            <input type="text" placeholder="Why did you like the product or not?" />
                            <br/>
                            <input type = "button" value = "Submit"></input>
                          
                        </form>
                    </div>
                    <button class="modal-close is-large" aria-label="close" onClick={this.handleCloseQuestion}></button>

                </div>
            </div>
        );
    }



}
export default QA;