import React from "react";
import { shallow } from "enzyme";
import App from "../../App.jsx";
import renderer from "react-test-renderer";

test("Header tag says 'Hello World'", () => {
  const wrapper = shallow(<App />);
  const h1 = wrapper.find("h1");
  expect(h1.text()).toBe("Hello World");
});

test("App component renders a snapshot properly", () => {
  const app = renderer.create(<App />).toJSON();
  expect(app).toMatchSnapshot();
});
