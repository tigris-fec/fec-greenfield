import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Overview from "./components/overview/Overview.jsx";
import ExampleList from "./components/ExampleList.jsx";
import ExampleForm from "./components/ExampleForm.jsx";

const App = () => {
  return (
    <div className="is-mobile">
      <NavBar />
      <Overview />
      <br />
      <br />
      <section className="section">
        <Switch>
          <Route exact path="/example-list" render={() => <ExampleList />} />
          <Route exact path="/example-form" render={() => <ExampleForm />} />
        </Switch>
      </section>
    </div>
  );
};

export default App;
