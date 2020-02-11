import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import RatingsAndReviews from "./components/mock-ratings-reviews/RatingsAndReviews.jsx";
import Overview from "./components/overview/Overview.jsx";
import QA from "./components/questions-and-answers/QA.jsx";
import "./App.css";

const App = (props) => {
  return (
    <>
      <div>
        <NavBar />
        <section className="section">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/overview" render={() => <Overview />} />
            <Route exact path="/questions-and-answers" render={() => <QA />} />
            <Route
              exact
              path="/ratings-and-reviews"
              render={() => <RatingsAndReviews />}
            />
          </Switch>
        </section>
      </div>
    </>
  );
};

export default App;
