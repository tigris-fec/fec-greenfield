import React, { useState, useEffect } from "react";
import RatingsListEntry from "./RatingsListEntry.jsx";
import MoreReviews from "./MoreReviews.jsx";
import AddReview from "./AddReview";

const RatingsList = props => {
  const [filter, setFilter] = useState(["Relevant", "Newest", "Helpful"]);
  const [reviews, setReviews] = useState([]);
  const [currentReviews, setCurrentReviews] = useState([]);

  useEffect(() => {
    const fakeStuff = [
      {
        review_id: 4,
        rating: 4,
        summary: "They look good on me",
        recommend: 0,
        response: "",
        body: "I so stylish and just my aesthetic.",
        date: "2019-03-12T00:00:00.000Z",
        reviewer_name: "fashionperson",
        helpfulness: 4,
        photos: []
      },
      {
        review_id: 57560,
        rating: 4,
        summary: "We need Photos for Reviews",
        recommend: 1,
        response: null,
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "2020-01-30T00:00:00.000Z",
        reviewer_name: "tthenne",
        helpfulness: 2,
        photos: [
          {
            id: 27147,
            url: "https://source.unsplash.com/random/800x600"
          },
          {
            id: 27148,
            url: "https://source.unsplash.com/random/800x600?v=12345"
          },
          {
            id: 27149,
            url: "https://source.unsplash.com/random/800x600?v=54321"
          }
        ]
      },
      {
        review_id: 6,
        rating: 5,
        summary: "I'm not a fan!",
        recommend: 0,
        response:
          "Sorry to hear. Is there anything in particular you don't like?",
        body: "I don't like them",
        date: "2019-06-16T00:00:00.000Z",
        reviewer_name: "negativity",
        helpfulness: 0,
        photos: []
      },
      {
        review_id: 7,
        rating: 2,
        summary: "This product was ok!",
        recommend: 0,
        response: "",
        body: "They're fine but I wouldn't buy again.",
        date: "2019-05-23T00:00:00.000Z",
        reviewer_name: "anyone",
        helpfulness: 0,
        photos: []
      },
      {
        review_id: 124,
        rating: 2,
        summary: "This product was ok!",
        recommend: 0,
        response: "",
        body: "They're fine but I wouldn't buy again.",
        date: "2019-05-23T00:00:00.000Z",
        reviewer_name: "anyone",
        helpfulness: 0,
        photos: []
      },
      {
        review_id: 622,
        rating: 2,
        summary: "This product was ok!",
        recommend: 0,
        response: "",
        body: "They're fine but I wouldn't buy again.",
        date: "2019-05-23T00:00:00.000Z",
        reviewer_name: "anyone",
        helpfulness: 0,
        photos: []
      },
      {
        review_id: 15,
        rating: 2,
        summary: "This product was ok!",
        recommend: 0,
        response: "",
        body: "They're fine but I wouldn't buy again.",
        date: "2019-05-23T00:00:00.000Z",
        reviewer_name: "anyone",
        helpfulness: 0,
        photos: []
      }
    ];

    setReviews(fakeStuff);
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

  return (
    <div className="column is-two-thirds">
      <p>
        # reviews, sort by
        <select>
          {filter.map(filter => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
      </p>
      <br />
      <div
        className="tile is-12 is-vertical is-parent"
        style={{ height: "480px", overflow: "auto" }}
      >
        {currentReviews.map(review => {
          if (
            props.filters.length === 0 ||
            props.filters.includes(review.rating)
          ) {
            return <RatingsListEntry key={review.review_id} review={review} />;
          }
        })}
      </div>
      <br />
      <div className="buttons">
        {currentReviews.length !== reviews.length ? (
          <MoreReviews handleMoreReviews={handleMoreReviews} />
        ) : null}
        <AddReview />
      </div>
    </div>
  );
};

export default RatingsList;
