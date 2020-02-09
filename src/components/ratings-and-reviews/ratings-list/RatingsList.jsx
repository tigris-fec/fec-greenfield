import React, { useState, useEffect } from "react";
import RatingsListEntry from "./RatingsListEntry.jsx";
import MoreReviews from "./MoreReviews.jsx";
import AddReview from "./AddReview";
import axios from "axios";

const RatingsList = (props) => {
  const [filter] = useState(["relevant", "newest", "helpful"]);
  const [reviews, setReviews] = useState([]);
  const [currentReviews, setCurrentReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`http://3.134.102.30/reviews/${props.PRODUCT_ID}/list?page=1&count=100`)
      .then((data) => {
        setReviews(data.data.results);
      })
      .catch((err) => {
        console.log("Error with gathering data from API");
      });
  }, []);

  useEffect(() => {
    setCurrentReviews(reviews.slice(0, 2));
  }, [reviews]);

  const handleMoreReviews = () => {
    let currentIndex = currentReviews.length;
    let newArrAddOn = reviews.slice(currentIndex, currentIndex + 2);
    let newArrSet = currentReviews.slice();
    newArrSet.push(newArrAddOn);
    let finalArr = newArrSet.flat();
    setCurrentReviews(finalArr);
  };

  const sendFilter = (e) => {
    axios
      .get(
        `http://3.134.102.30/reviews/${props.PRODUCT_ID}/list?page=1&count=100&sort=${e.target.value}`
      )
      .then((data) => {
        setReviews(data.data.results);
      })
      .catch((err) => {
        console.log("Error with getting filtered reviews of:", e.target.value);
      });
  };

  return (
    <>
      <p>
        {reviews.length} reviews, sort by
        <select onChange={sendFilter}>
          {filter.map((filter) => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
      </p>
      <br />
      <div
        className="tile is-12 is-vertical is-parent"
        style={{ height: "540px", overflow: "auto" }}
      >
        {currentReviews.map((review) => {
          if (props.filters.length === 0 || props.filters.includes(review.rating)) {
            return <RatingsListEntry key={review.review_id} review={review} />;
          }
        })}
      </div>
      <br />
      <div className="buttons">
        {currentReviews.length !== reviews.length ? (
          <MoreReviews handleMoreReviews={handleMoreReviews} />
        ) : null}

        <AddReview charList={props.charList} PRODUCT_ID={props.PRODUCT_ID} />
      </div>
    </>
  );
};

export default RatingsList;
