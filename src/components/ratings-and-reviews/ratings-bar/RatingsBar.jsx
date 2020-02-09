import React from "react";
import RatingSummary from "./RatingSummary.jsx";
import Breakdown from "./Breakdown.jsx";
import Factors from "./Factors.jsx";

const RatingsBar = (props) => {
  const fakeReview = props.soloRating;

  const getAverageRating = (Obj) => {
    let totalCount = 0;
    let totalSum = 0;
    for (let key in Obj) {
      totalCount += Obj[key];
      totalSum += Number(key) * Obj[key];
    }
    return totalSum / totalCount;
  };

  const getAverageRecommend = (Obj) => {
    let totalCount = Obj[0] + Obj[1];
    return (Obj[1] / totalCount) * 100;
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
      <RatingSummary rating={averageRating} />
      <Breakdown
        recommend={averageRecommend}
        ratings={fakeReview.ratings}
        setFilter={props.setFilter}
        filters={props.filters}
      />
      <br />
      <Factors characteristics={productCharacteristics} />
    </>
  );
};

export default RatingsBar;
