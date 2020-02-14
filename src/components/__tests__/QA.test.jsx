import React from "react";
import { shallow } from "enzyme";
import { mount } from "enzyme";
import { render } from "enzyme";
import renderer from "react-test-renderer";
import QA from "../questions-and-answers/QA.jsx";
import QuestionUnit from "../questions-and-answers/QuestionUnit.jsx";
import configureStore from 'redux-mock-store';
import data from "../../mock-data/questions.js";




describe("QA Displays everything that would make it look functionally complete", () => {
  let initialState;
  let mockStore;
  let store;
  let wrapper;
  
  beforeAll(() => {
      initialState = { product_id: 5 };
      mockStore = configureStore();
      store = mockStore(initialState);
      wrapper = mount(<QA store = {store}/>);
  }, 2000);

  
  test("should have the heading 'QUESTIONS & ANSWERS'", () => {
    expect(true).toEqual(true);
  });
  test.todo("should have a search box with the text 'HAVE A QUESTION? SEARCH FOR ANSWERS...'");
  test.todo("should have a 'MORE ANSWERED QUESTIONS' button");
  test.todo("should have a 'ADD A QUESTION' button");
  expect(true).toBe(true);
});

describe("Search Feature", () => {
  test.todo("should only load questions that match keywords");
})
describe("Question Unit", () => {
  test.todo("should display the question");
  test.todo("should display the count of votes on Helpful? Yes()");
  test.todo("should increment the helpful votes when i click Yes");
  test.todo("it should have an Add Answer Clickable test");
  expect(true).toBe(true);
});

describe("Answer Unit", () => {
  test.todo("should display the answer, user, date");
  test.todo("should increment the helpful? yes count when i click");
  test.todo("should have a report link");
  expect(true).toBe(true);
});
