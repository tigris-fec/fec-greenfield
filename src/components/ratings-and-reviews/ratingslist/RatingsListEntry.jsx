import React, {useState} from "react";
import RecommendProduct from "./RecommendProduct.jsx";
import ReviewResponse from "./ReviewResponse.jsx";
import Photo from "./Photo.jsx";
import StarRating from "../StarRating.jsx";

const RatingsListEntry = props => {
  const [reviewID] = useState(props.review.review_id)
  const [reviewHelpful, setReviewHelpful] = useState(props.review.helpfulness)

  const sendHelpful = () =>{
    setReviewHelpful(reviewHelpful + 1);
    //then send the data to server
  }

  const sendReport = () =>{
    console.log(reviewID)
    //then report to server then remove from reviews list
  }

  return (
    <div className="tile is-child box">
      <div className="level">
        <StarRating averageRating={props.review.rating} />
        <p className="has-text-right">
          <em>{props.review.reviewer_name}</em>, {props.review.date.slice(0, 10)}
        </p>
      </div>
      <p>{props.review.summary}</p>
      <div className="level-left">
        {props.review.photos.map(photo => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
      {props.review.recommend ? <RecommendProduct /> : null}
      {props.review.response ? (
        <ReviewResponse response={props.review.response} />
      ) : null}
      <br/>
      <div className="level">
        <div className="level-left">
          <p>Helpful? &nbsp;</p>
          <h1 onClick={sendHelpful}><u>Yes</u></h1>({reviewHelpful}) | &nbsp;<h1 onClick={sendReport}><u>Report</u></h1>
        </div>
      </div>
    </div>
  );
};

export default RatingsListEntry;
