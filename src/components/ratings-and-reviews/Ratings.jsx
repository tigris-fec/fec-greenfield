import React, { useState } from "react";
import RatingSummary from "./RatingSummary.jsx";
import Breakdown from "./Breakdown.jsx";
import Factors from "./Factors.jsx";

const Ratings = (props) => {
  const fakeReview = props.soloReview;
  const [widgetName] = useState("Ratings & Reviews");

  const getAverageRating = (obj) => {
    let count = 0;
    let sum = 0;
    for (let key in obj) {
      count += obj[key];
      sum += Number(key) * obj[key];
    }
    return sum / count;
  };

  const getAverageRecommend = (obj) => {
    let count = obj[0] + obj[1];
    return (obj[1] / count) * 100;
  };

  let getCharacteristics = (characteristics) => {
    let returnArr = [];
    for (let key in characteristics) {
      returnArr.push({ [key]: characteristics[key] });
    }
    return returnArr;
  };

  let averageRating = Math.round(10 * getAverageRating(fakeReview.ratings)) / 10;

  let averageRecommend = Math.round(getAverageRecommend(fakeReview.recommended));

  let productCharacteristics = getCharacteristics(fakeReview.characteristics);

  return (
    <>
      <p>{widgetName.toUpperCase()}</p>
      <RatingSummary rating={averageRating} />
      <Breakdown
        recommended={averageRecommend}
        ratings={fakeReview.ratings}
        filters={props.filters}
        setFilter={props.setFilter}
      />
      <br />
      <br />
      <Factors characteristics={productCharacteristics} charList={props.charList} />
    </>
  );
};

export default Ratings;
