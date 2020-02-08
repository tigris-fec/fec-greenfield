import React, { useState } from "react";
import RecommendProduct from "./RecommendProduct.jsx";
import ReviewResponse from "./ReviewResponse.jsx";
import Photo from "./Photo.jsx";
import StarRating from "../StarRating.jsx";
import axios from "axios";

const RatingsListEntry = (props) => {
  const [reviewID] = useState(props.review.review_id);
  const [reviewHelpful, setReviewHelpful] = useState(props.review.helpfulness);
  const [reported, setReported] = useState(false);
  const [helpClicked, setHelpClicked] = useState(false);

  const sendHelpful = () => {
    setReviewHelpful(reviewHelpful + 1);
    setHelpClicked(true);
    axios.put(`http://3.134.102.30/reviews/helpful/${reviewID}`);
  };

  const sendReport = () => {
    axios.put(`http://3.134.102.30/reviews/report/${reviewID}`)
    setReported(true);
  };

  const fauxDate = new Date(props.review.date);
  let optionsDate = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const correctDateTimeFormat = new Intl.DateTimeFormat("en-US", optionsDate);
  const correctDate = correctDateTimeFormat.format(fauxDate);
  return (
    <div className="tile is-child box">
      <div className="level">
        <StarRating averageRating={props.review.rating} />
        <p className="has-text-right">
          <em>{props.review.reviewer_name}</em> | {correctDate}
        </p>
      </div>
      <p>{props.review.summary}</p>
      <br />
      <div className="level-left">
        {props.review.photos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
      {props.review.recommend ? <RecommendProduct /> : null}
      <br />
      {props.review.response ? <ReviewResponse response={props.review.response} /> : null}
      <br />
      <div className="level">
        <div className="level-left">
          <p>Helpful? &nbsp;</p>
          <h1 onClick={helpClicked? null:sendHelpful}>
            <u>Yes</u>
          </h1>
          ({reviewHelpful}) | &nbsp;
          {reported ? (
            <h1>
              <u>
                <strong className="has-text-danger">Reported</strong>
              </u>
            </h1>
          ) : (
            <h1 onClick={sendReport}>
              <u>Report</u>
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default RatingsListEntry;
