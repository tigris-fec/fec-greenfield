import React from "react";
import { shallow } from "enzyme";
import { mount } from "enzyme"
import { render } from "enzyme"
import renderer from "react-test-renderer"
import QA from "../questions-&-answers/QA.jsx";
import QuestionUnit from "../questions-&-answers/QuestionUnit.jsx"



beforeAll()
describe("QA Displays everything that would make it look functionally complete", () => {
    const wrapper = mount(<QA questions={[]} />);

    it ("should have the heading 'QUESTIONS & ANSWERS'", () => {
        //let allQuestions = wrapper.find(".all-questions")
        //expect(allQuestions.exists()).toBe(true);
    })
    it ("should have a search box with the text 'HAVE A QUESTION? SEARCH FOR ANSWERS...'", () => {});

    

    it ("should have a 'MORE ANSWERED QUESTIONS' button");
    it ("should have a 'ADD A QUESTION' button");

})

describe("Question Unit", () => {

    it ("should display the question");
    it ("should display the count of votes on Helpful? Yes()");
    it ("should increment the helpful votes when i click Yes");
    it ("it should have an Add Answer Clickable test");
})

describe("Answer Unit", () => {
    it("should display the answer, user, date");
    it("should increment the helpful? yes count when i click");
    it("should have a report link");
});
// test("QA renders", () => {


//     const wrapper = shallow(<QA questions = {[]}/>);
//     const allQuestions = wrapper.find(".all-questions");
//     expect(allQuestions.exists()).toBe(true);
// });


// test("QA renders questions, which renders answers", () =>{
//     const question = [{
//         "question_id": 37,
//         "question_body": "Why is this product cheaper here than other sites?",
//         "question_date": "2018-10-18T00:00:00.000Z",
//         "asker_name": "williamsmith",
//         "question_helpfulness": 4,
//         "reported": 0,
//         "answers": {
//             68: {
//                 "id": 68,
//                 "body": "We are selling it here without any markup from the middleman!",
//                 "date": "2018-08-18T00:00:00.000Z",
//                 "answerer_name": "Seller",
//                 "helpfulness": 4,
//                 "photos": []

//             }
//         }
//     }]

//     const wrapper = mount(<QA questions = {question}/>)
//     const QUnit = wrapper.find(QuestionUnit);
//     expect(QUnit).toBe(true);
// })


