import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Overview from "./components/overview/Overview.jsx";
import RatingsAndReviews from "./components/ratings-and-reviews/RatingsAndReviews.jsx";
import QuestionsAndAnswers from "./components/questions-and-answers/QuestionsAndAnswers.jsx";
import "./App.css";

const App = (props) => {
  console.log(process.env.REACT_APP_API_URL);
  return (
    <>
      <div>
        <NavBar />

        <section className="section">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/overview" render={() => <Overview />} />
            <Route
              exact
              path="/questions-and-answers"
              render={() => <QuestionsAndAnswers />}
            />
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
