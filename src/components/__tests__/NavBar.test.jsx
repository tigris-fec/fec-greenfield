import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import NavBar from "../../components/NavBar.jsx";
import { MemoryRouter as Router } from "react-router-dom";

test("NavBar renders properly", () => {
  const wrapper = shallow(<NavBar />);
  const navbar = wrapper.find(".navbar");
  expect(navbar.exists()).toBe(true);
});

test("NavBar renders a snapshot properly", () => {
  const tree = renderer
    .create(
      <Router location="/">
        <NavBar />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
