import React from "react";
import { render } from "enzyme";
import QuestionUnit from "./QuestionUnit.jsx"

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
    render(){
        
        return (
            <div className="all-questions">
                <h5>{"Questions & Answers"}</h5>
                <input type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
                {/*holyCrap.results.map(question => <QuestionUnit question={question} />)*/} <br />
                <button>More Answered Questions</button>
                {/*  Render Modal right here*/}
                <button onClick={this.handleAddQuestion}>Add a Question +</button>
                <div class="modal">
                    <div class="modal-background"></div>
                    <div class="modal-content">
                        <form>
                            <input type="input" placeholder="Sup" />
                            <input type="button" />
                        </form>
                    </div>
                    <button class="modal-close is-large" aria-label="close"></button>
                </div>
            </div>
        );
    }



}
export default QA;