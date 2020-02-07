import React, {useState, useEffect} from "react";
import RatingsBar from "./ratingsbar/main.jsx";
import RatingsList from "./ratingslist/main.jsx";

const RR = props => {
  const [filters, setFilter] = useState([]);
  
  return (
    <div className="container is-fluid">
    <div className="columns">
      <RatingsBar setFilter={setFilter} filters={filters}/>
      <RatingsList filters={filters} />
    </div>
    </div>
  );
};
//TODO
//sending helpful and report to the server
//send review to server
//filter by function , should just change reviews from the api call
export default RR;
