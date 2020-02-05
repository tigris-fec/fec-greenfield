import React from "react";
import { render } from "enzyme";


const QA = (props) =>{
    
    return (
        <div>
            <h5>{"Questions & Answers"}</h5>
            <input type = "text" placeholder = "HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
            <p><strong>Q: Who what which when ....</strong></p>
            <p><strong>A: Tootlsie roll something cats are cute and potato chips</strong></p>
            <button>More Answered Questions</button>
            <button>Add a Question +</button>
        </div>
    );
}

export default QA;