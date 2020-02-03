import React from "react";
import { mount, shallow } from "enzyme";
import { MemoryRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import App from "../../App.jsx";

test("App renders without crashing", () => {
  const wrapper = shallow(<App />);
});

test("App will call componentDidMount when mounted", () => {
  const didMount = jest.fn();
  App.prototype.componentDidMount = didMount;
  const wrapper = mount(
    <Router>
      <App />
    </Router>
  );
  expect(didMount).toHaveBeenCalledTimes(1);
});

test("App component renders a snapshot properly", () => {
  const app = renderer.create(<App />).toJSON();
  expect(app).toMatchSnapshot();
});
