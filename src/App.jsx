import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import ExampleList from "./components/ExampleList.jsx";
import ExampleForm from "./components/ExampleForm.jsx";
import RR from "./components/ratings-&-reviews/RR.jsx";

const App = () => {
  return (
    <div className="is-mobile">
      <NavBar />
      <br />
      <br />
      <section className="section">
        <Switch>
          <Route exact path="/example-list" render={() => <ExampleList />} />
          <Route exact path="/example-form" render={() => <ExampleForm />} />
        </Switch>
      </section>
      <RR />
    </div>
  );
};

export default App;
