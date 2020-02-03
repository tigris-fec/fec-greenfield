import React from "react";
import { shallow } from "enzyme";
import DummyComponent from "../../components/DummyComponent.jsx";
import renderer from "react-test-renderer";

test("Header tag says 'Hello World'", () => {
  const wrapper = shallow(<DummyComponent />);
  const h1 = wrapper.find("h1");
  expect(h1.text()).toBe("Hello World!");
});

test("DummyComponent renders a snapshot properly", () => {
  const dummyComponent = renderer.create(<DummyComponent />).toJSON();
  expect(dummyComponent).toMatchSnapshot();
});
