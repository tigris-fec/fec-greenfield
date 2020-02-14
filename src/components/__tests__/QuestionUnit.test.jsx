import React from "react";
import { shallow } from "enzyme";
import { mount } from "enzyme";
import { render } from "enzyme";
import renderer from "react-test-renderer";
import QA from "../questions-and-answers/QA.jsx";
import QuestionUnit from "../questions-and-answers/QuestionUnit.jsx";
import data from "../../mock-data/questions.js";

//let QuestionUnitWrapper = shallow(<QA />);

describe("Display question", () => {
  let testQuestion = data.results[0];
  let questionWrapper = shallow(<QuestionUnit question={testQuestion} />);
  test("should display question body", () => {
    expect(
      questionWrapper
        .find(".my-flex")
        .childAt(0)
        .text()
    ).toEqual("Q: What fabric is the top made of?");
  });

  test("Should initially render 2 answers", () => {
    expect(questionWrapper.find("AnswerUnit").length).toEqual(2);
  });

  test("Should display helpful count", () => {

    expect(
      questionWrapper
        .find(".question-right")
        .text()
        .split("")
        .join("")
        .includes("Yes(110)")
    ).toEqual(true);
  });

  test("Should have an add answer button", () => {
    expect(
      questionWrapper
        .find(".question-right")
        .text()
        .split("")
        .join("")
        .includes("Add Answer")
    ).toEqual(true);
  });
});
