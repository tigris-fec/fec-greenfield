import React from "react";
import NavBar from "./components/NavBar.jsx";
import RatingsAndReviews from "./components/ratings-and-reviews/RatingsAndReviews.jsx";
import Overview from "./components/overview/Overview.jsx";
import QA from "./components/questions-and-answers/QA.jsx";
import RIC from "./components/related-items-and-comparison/RIC.jsx";
import "./App.css";

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
