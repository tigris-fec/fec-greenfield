import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import RR from "./components/ratings-and-reviews/RR.jsx";
import RatingsReviews from "./components/mock-ratings-reviews/RatingsReviews.jsx";

import Overview from "./components/overview/Overview.jsx";
import QA from "./components/questions-and-answers/QA.jsx";
import "./App.css";

const App = (props) => {
  console.log(process.env.REACT_APP_API_URL);
  return (
    <>
      <div>
        <NavBar />
        <Home />
        <section className="section">
          <Switch>
            <Route exact path="/overview" render={() => <Overview />} />
            <Route exact path="/questions-and-answers" render={() => <QA />} />
            <Route exact path="/ratings-and-reviews" render={() => <RatingsReviews />} />
          </Switch>
        </section>
      </div>
    </>
  );
};

export default App;
