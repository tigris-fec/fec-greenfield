
import React, { useState, useEffect } from "react";
import RatingsBar from "./ratingsbar/main.jsx";
import RatingsList from "./ratingslist/main.jsx";

const RR = props => {
  const [filters, setFilter] = useState([]);

  const fakeSoloReview = {
    product_id: "1",
    ratings: {
      "1": 4,
      "2": 2,
      "3": 1,
      "4": 8,
      "5": 13
    },
    recommended: {
      "0": 15,
      "1": 13
    },
    characteristics: {
      Fit: {
        id: 1,
        value: "3.0667"
      },
      Length: {
        id: 2,
        value: "2.7097"
      },
      Comfort: {
        id: 3,
        value: "3.0968"
      },
      Quality: {
        id: 4,
        value: "2.8387"
      }
    }
  };

  return (
    <div className="container is-fluid">
      <div className="columns">
        <RatingsBar setFilter={setFilter} filters={filters} soloRating={fakeSoloReview}/>
        <RatingsList filters={filters} charList={fakeSoloReview.characteristics}/>
      </div>
    </div>
  );
};

export default RR;
