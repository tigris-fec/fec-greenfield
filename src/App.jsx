import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Overview from "./components/Overview/Overview.jsx";
import QA from './components/questions-&-answers/QA.jsx'
import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/overview" render={() => <Overview />} />
        <Route exact path='/questions' render = {() => <QA />} />
      </Switch>
    </>
  );
};

export default App;
