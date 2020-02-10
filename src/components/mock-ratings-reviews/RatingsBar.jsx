import React, { useState } from "react";
import RatingSummary from "./RatingSummary.jsx";
import Breakdown from "./Breakdown.jsx";
import Factors from "./Factors.jsx";

const RatingsBar = (props) => {
  const fakeReview = props.soloRating;
  const [widgetName] = useState("Ratings & Reviews");

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
    <div className="column is-4 ">
      {widgetName.toUpperCase()}
      <RatingSummary rating={averageRating} />
      <Breakdown
        recommend={averageRecommend}
        ratings={fakeReview.ratings}
        setFilter={props.setFilter}
        filters={props.filters}
      />
      <br />
      <Factors characteristics={productCharacteristics} />
    </div>
  );
};

export default RatingsBar;

/*
<div className="column is-4">
  {widget.toUpperCase()}
  <div className="level" style={{ justifyContent: "left" }}>
    <div className="level-left">
      <div className="level-item">
        <p style={{ fontSize: "400%" }}>
          <strong>3.5</strong>
        </p>
      </div>
      <div className="level-item">
        <Rating
          key={1}
          initialRating={4.67}
          emptySymbol={<i className="far fa-star"></i>}
          fullSymbol={
            <i className="fa fa-star" style={{ color: "#d4af37" }}></i>
          }
        />
      </div>
    </div>
  </div>
  <div className="level" style={{ justifyContent: "left", fontSize: "75%" }}>
    <div className="level-left">
      <div className="level-item">
        <p>100% of reviews recommended this product</p>
      </div>
    </div>
  </div>

  <div className="level" style={{ justifyContent: "left" }}>
    <div className="level-left">
      <div className="level-item">
        <table className="table" style={{ fontSize: "75%" }}>
          <tbody>
            {ratings.map((rating, index) => {
              return (
                <tr key={index}>
                  <td className="has-text-right">
                    <u>{rating} Stars</u>
                  </td>
                  <td className="has-text-left">
                    <progress value={25} max={100} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div className="level" style={{ justifyContent: "left" }}>
    <div className="level-left">
      <div className="level-item">
        <table id="breakdowns" className="table" style={{ fontSize: "65%" }}>
          <tbody>
            {attributes.map((attribute, index) => {
              return (
                <tr key={index}>
                  <td className="has-text-right">
                    <u>{attribute}</u>
                  </td>
                  <td className="has-text-left">
                    <progress value={50} max={100} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
*/
