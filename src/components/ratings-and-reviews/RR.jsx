import React, {useState, useEffect} from "react";
import RatingsBar from "./ratingsbar/main.jsx";
import RatingsList from "./ratingslist/main.jsx";

const RR = props => {
  const [filters, setFilter] = useState(["none"]);
  const [reviews, setReviews] = useState([]);

  
  return (
    <div className="container is-fluid">
    <div className="columns">
      <RatingsBar />
      <RatingsList />
    </div>
    </div>
  );
};
//TODO
//sending helpful and report to the server
//add messages button
//send review to server
//filter by function , should just change reviews from the api call
//filter the list by clicking on the stars, should just test if includes in filter
export default RR;
