import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import RatingsAndReviews from "./components/ratings-and-reviews/RatingsAndReviews.jsx";
import Overview from "./components/overview/Overview.jsx";
import QA from "./components/questions-and-answers/QA.jsx";
import RIC from "./components/related-items-and-comparison/RIC.jsx";
import "./App.css";
import RatingSummary from "./components/ratings-and-reviews/RatingSummary.jsx";

const App = (props) => {
  return (
    <>
      <NavBar />
      <div className="container is-fluid">
        <Overview />
        <br />
        <RIC />
        <br />
        <QA />
        <br />
        <RatingsAndReviews />
      </div>
    </>
  );
};

export default App;
