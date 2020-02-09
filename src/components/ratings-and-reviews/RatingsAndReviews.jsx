import React, { useState, useEffect } from "react";
import RatingsBar from "./ratings-bar/RatingsBar.jsx";
import RatingsList from "./ratings-list/RatingsList.jsx";
import axios from "axios";
import { connect } from "react-redux";

const mapStateToProps = (store) => ({ PRODUCT_ID: 1 });

const RR_ = (props) => {
  const [filters, setFilter] = useState([]);
  const [fakeSoloReview, setFakeSoloReview] = useState({
    product_id: "1",
    ratings: {
      "1": 15,
      "2": 2,
      "3": 4,
      "4": 11,
      "5": 19
    },
    recommended: {
      "0": 23,
      "1": 28
    },
    characteristics: {
      Fit: {
        id: 1,
        value: "3.0323"
      },
      Length: {
        id: 2,
        value: "2.7188"
      },
      Comfort: {
        id: 3,
        value: "3.0625"
      },
      Quality: {
        id: 4,
        value: "2.9063"
      }
    }
  });

  useEffect(() => {
    axios.get(`http://3.134.102.30/reviews/${props.PRODUCT_ID}/meta`).then((data) => {
      setFakeSoloReview(data.data);
    });
  }, []);

  return (
    <div className="container is-fluid">
      <div className="columns">
        <RatingsBar setFilter={setFilter} filters={filters} soloRating={fakeSoloReview} />
        <RatingsList
          filters={filters}
          charList={fakeSoloReview.characteristics}
          PRODUCT_ID={props.PRODUCT_ID}
        />
      </div>
    </div>
  );
};

const RR = connect(mapStateToProps)(RR_);

export default RR;
