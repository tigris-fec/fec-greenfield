import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import ExampleList from "./components/ExampleList.jsx";
import ExampleForm from "./components/ExampleForm.jsx";
import RR from "./components/ratings-&-reviews/RR.jsx";

import OverviewMock from "./components/overview/OverviewMock.jsx";
import Overview from "./components/overview/Overview.jsx";
import QA from './components/questions-&-answers/QA.jsx'

import "./App.css";

const App = () => {
  return (
    <>
    <div>
      <NavBar />
      <br />
      <br />
      <section className="section">
        <Switch>
          <Route exact path="/example-list" render={() => <ExampleList />} />
          <Route exact path="/example-form" render={() => <ExampleForm />} />
          <Route exact path="/overview" render={() => <Overview />} />
          <Route exact path="/questions" render={() => <QA />} />
        </Switch>
      </section>
      <RR />
    </div>
    </>

  );
};

export default App;
