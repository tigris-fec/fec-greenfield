import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import RR from "./components/ratings-&-reviews/RR.jsx";
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
          <Route exact path="/overview" render={() => <Overview />} />
          <Route exact path="/questions" render={() => <QA />} />
          <Route exact path="/ratings" render={() => <RR />} />
        </Switch>
      </section>
    </div>
    </>

  );
};

export default App;
