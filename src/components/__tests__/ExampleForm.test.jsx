import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";

import ExampleForm from "../../components/ExampleForm.jsx";
import rootReducer from "../../js/reducers/index";

describe("ExampleForm", () => {
  const mockStore = createStore(rootReducer, { data: [] });
  const getWrapper = () =>
    mount(
      <Provider store={mockStore}>
        <ExampleForm />
      </Provider>
    );

  it("should be true", () => {});
});
