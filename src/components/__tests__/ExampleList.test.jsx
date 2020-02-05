import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";

import ExampleList from "../../components/ExampleList.jsx";
import rootReducer from "../../js/reducers/index";

import renderer from "react-test-renderer";

describe("ExampleList", () => {
  const mockStore = createStore(rootReducer, {
    data: [
      { id: 1, data: "Example Item #1" },
      { id: 2, data: "Example Item #2" }
    ]
  });

  const getWrapper = () =>
    mount(
      <Provider store={mockStore}>
        <ExampleList />
      </Provider>
    );

  it("should render as an unordered list with two items", () => {
    const wrapper = getWrapper();
    const ul = wrapper.find("ul");
    expect(ul.exists()).toBe(true);
    expect(ul.get(0).props.children.length).toEqual(2);
  });

  it("renders a snapshot properly", () => {
    const wrapper = getWrapper();
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
