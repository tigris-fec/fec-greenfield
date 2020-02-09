import React, { useState, useEffect } from "react";
import RatingsBar from "./ratings-bar/RatingsBar.jsx";
import RatingsList from "./ratings-list/RatingsList.jsx";
import axios from "axios";
import { connect } from "react-redux";
import { fakeState } from "./fake-state.js";

const mapStateToProps = (store) => ({ PRODUCT_ID: 1 });

const RatingsAndReviewsContainer = (props) => {
  const [filters, setFilter] = useState([]);
  const [fakeSoloReview, setFakeSoloReview] = useState(fakeState);

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/${props.PRODUCT_ID}/meta`;
    axios.get(url).then((data) => {
      setFakeSoloReview(data.data);
    });
  }, []);

  return (
    <div className="container is-fluid">
      <div className="columns">
        <div className="column is-5">
          <RatingsBar
            setFilter={setFilter}
            filters={filters}
            soloRating={fakeSoloReview}
          />
        </div>
        <div className="column is-7">
          <RatingsList
            filters={filters}
            charList={fakeSoloReview.characteristics}
            PRODUCT_ID={props.PRODUCT_ID}
          />
        </div>
      </div>
    </div>
  );
};

const RatingsAndReviews = connect(mapStateToProps)(RatingsAndReviewsContainer);

export default RatingsAndReviews;
