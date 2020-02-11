import React, { useState, useEffect } from "react";
import Review from "./Review.jsx";
import MoreReviews from "./MoreReviews.jsx";
import AddReview from "./AddReview";
import axios from "axios";

const Reviews = (props) => {
  const [filters] = useState(["relevant", "newest", "helpful"]);
  const [reviews, setReviews] = useState([]);
  const [currentReviews, setCurrentReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`http://3.134.102.30/reviews/${props.productId}/list?page=1&count=100`)
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
        `http://3.134.102.30/reviews/${props.productId}/list?page=1&count=100&sort=${e.target.value}`
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
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <div className="box is-shadowless is-marginless is-paddingless">
              <strong>{reviews.length} reviews, sorted by</strong>
            </div>
          </div>

          <div className="level-item">
            <div className="select is-dark">
              <select style={{ border: "none", height: "100%", fontStyle: "bold" }}>
                {filters.map((filter) => (
                  <option>{filter}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <br />

      {currentReviews.map((review) => {
        if (props.filters.length === 0 || props.filters.includes(review.rating)) {
          return <Review key={review.review_id} review={review} />;
        }
      })}

      <div className="level">
        <div className="level-left">
          <div className="level-item">
            {currentReviews.length !== reviews.length ? (
              <MoreReviews handleMoreReviews={handleMoreReviews} />
            ) : null}
          </div>
          <div className="level-item">
            <AddReview charList={props.charList} productId={props.productId} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
