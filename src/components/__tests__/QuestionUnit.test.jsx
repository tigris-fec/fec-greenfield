import React from "react";
import { shallow } from "enzyme";
import { mount } from "enzyme";
import { render } from "enzyme";
import renderer from "react-test-renderer";
import QA from "../questions-and-answers/QA.jsx";
import QuestionUnit from "../questions-and-answers/QuestionUnit.jsx";
import data from "../../mock-data/questions.js"


let QuestionUnitWrapper = shallow(<QA />);

describe("Display question", () => {

  test("should display question body", () => {

  });

  test("Should render X <AnswerUnit />", () => {

  });
  
  test("Should display helpful count", () => {

  });

  test("Should have an add answer button", () => {

  });
})
