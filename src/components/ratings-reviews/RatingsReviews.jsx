import React, { useState } from "react";
import Rating from "react-rating";
import { size, width, comfort, quality, length, fit } from "./state.js";
import "./RatingsReviews.css";

const RatingsReviews = (props) => {
  const [widget] = useState("Ratings & Reviews");
  const [ratings] = useState([5, 4, 3, 2, 1]);
  const [filters] = useState(["relevance", "newest", "helpful"]);
  const [buttons] = useState(["More Reviews", "Add A Review +"]);
  const [sizes] = useState(size);
  const [widths] = useState(width);
  const [comforts] = useState(comfort);
  const [qualities] = useState(quality);
  const [lengths] = useState(length);
  const [fits] = useState(fit);

  return (
    <>
      <div className="container is-fluid">
        <div className="columns">
          <div className="column is-4">
            {widget.toUpperCase()}
            <div className="level">
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
            <div className="level" style={{ fontSize: "75%" }}>
              <div className="level-left">
                <div className="level-item">
                  <p>100% of reviews recommended this product</p>
                </div>
              </div>
            </div>
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <table id="star-counts" className="table">
                    <tbody>
                      {ratings.map((rating, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <u>{rating} Stars</u>
                            </td>
                            <td>
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

            <div className="level" style={{ fontSize: "65%" }}>
              <div className="level-left">
                <div className="level-item">
                  <div className="table-container">
                    <table
                      id="breakdown"
                      className="table"
                      style={{ borderColor: "white" }}
                    >
                      <tbody>
                        <tr
                          style={{
                            backgroundColor: "#EBEBEB",
                            border: "solid",
                            borderColor: "white"
                          }}
                        >
                          {sizes.map((fit, index) => {
                            return index % 2 !== 0 ? (
                              <td id={`size-${index.index}-`} key={index}>
                                {null}
                              </td>
                            ) : (
                              <td key={index}>{fit}</td>
                            );
                          })}
                        </tr>
                        <tr
                          style={{
                            backgroundColor: "#EBEBEB",
                            border: "solid",
                            borderColor: "white"
                          }}
                        >
                          {widths.map((fit, index) => {
                            return index % 2 !== 0 ? (
                              <td key={index}>{null}</td>
                            ) : (
                              <td key={index}>{fit}</td>
                            );
                          })}
                        </tr>
                        <tr
                          style={{
                            backgroundColor: "#EBEBEB",
                            border: "solid",
                            borderColor: "white"
                          }}
                        >
                          {comforts.map((fit, index) => {
                            return index % 2 !== 0 ? (
                              <td key={index}>{null}</td>
                            ) : (
                              <td key={index}>{fit}</td>
                            );
                          })}
                        </tr>
                        <tr
                          style={{
                            backgroundColor: "#EBEBEB",
                            border: "solid",
                            borderColor: "white"
                          }}
                        >
                          {qualities.map((fit, index) => {
                            return index % 2 !== 0 ? (
                              <td key={index}>{null}</td>
                            ) : (
                              <td key={index}>{fit}</td>
                            );
                          })}
                        </tr>
                        <tr
                          style={{
                            backgroundColor: "#EBEBEB",
                            border: "solid",
                            borderColor: "white"
                          }}
                        >
                          {lengths.map((fit, index) => {
                            return index % 2 !== 0 ? (
                              <td key={index}>{null}</td>
                            ) : (
                              <td key={index}>{fit}</td>
                            );
                          })}
                        </tr>
                        <tr
                          style={{
                            backgroundColor: "#EBEBEB",
                            border: "solid",
                            borderColor: "white"
                          }}
                        >
                          {fits.map((fit, index) => {
                            return index % 2 !== 0 ? (
                              <td key={index}>{null}</td>
                            ) : (
                              <td key={index}>{fit}</td>
                            );
                          })}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-8">
            <div className="content">
              <div className="level is-marginless">
                <div className="level-left">
                  <div className="level-item">
                    <strong>248 reviews, sorted by</strong>
                    <div className="select is-dark">
                      <select
                        style={{ border: "none", height: "100%", fontStyle: "bold" }}
                      >
                        {filters.map((filter) => (
                          <option>{filter}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="level" style={{ borderBottom: "solid", borderWidth: "1px" }}>
              <div className="box is-shadowless is-marginless">
                <div className="media" style={{ fontSize: "75%" }}>
                  <div className="media-content">
                    <div className="content">
                      <div className="level">
                        <div className="level-left">
                          <div className="level-item">
                            <Rating
                              initialRating={2.45}
                              emptySymbol={<i className="far fa-star"></i>}
                              fullSymbol={
                                <i
                                  className="fa fa-star"
                                  style={{ color: "#d4af37" }}
                                ></i>
                              }
                            />
                          </div>
                        </div>

                        <div className="level-right">
                          <div className="level-item">
                            <i className="far fa-check-circle"></i>
                          </div>
                          <div className="level-item">
                            User1234 &nbsp;&nbsp; January 1, 2019
                          </div>
                        </div>
                      </div>
                      <div style={{ paddingBottom: "1.5%", fontSize: "125%" }}>
                        <strong>Donut chocolate bar pudding.</strong>
                      </div>
                      <div style={{ paddingBottom: "1.5%" }}>...line if necessary</div>
                      <p style={{ fontSize: "110%" }}>
                        Only the chunkiest of boys can eat this donust chocolate bar
                        pudding. Chocolate bar gingerbread sweet carrot cake.
                      </p>
                    </div>
                    <div className="level">
                      <div className="level-left">
                        <div className="level-item">
                          <p style={{ fontStyle: "bold" }}>
                            <strong></strong>
                          </p>
                        </div>
                        <div className="level-item">
                          <div
                            className="box is-shadowless is-paddingless is-marginless"
                            style={{ backgroundColor: "#888888" }}
                          >
                            <div className="field is-grouped">
                              <div className="tags has-addons">
                                <div className="tag has-addons is-dark">✓</div>
                                <div className="tag has-addons">
                                  I recommend this product
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="level">
                      <div
                        className="notification"
                        style={{
                          backgroundColor: "#EBEBEB",
                          borderRadius: "0%"
                        }}
                      >
                        <strong>Response:</strong>
                        <p>
                          Marzipan danish jelly gummi beans apple pie cheesecake topping
                          biscuit sesame snaps.
                        </p>
                      </div>
                    </div>
                    <div className="level">
                      <div className="level-left">
                        <div className="level-item">
                          <p>Helpful?</p>
                        </div>
                        <div className="level-item">
                          <p>
                            <u>Yes</u> (9)
                          </p>
                        </div>
                        <div className="level-item">|</div>
                        <div className="level-item">
                          <p>
                            <u>Report</u>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="level" style={{ borderBottom: "solid", borderWidth: "1px" }}>
              <div className="box is-shadowless is-marginless">
                <div className="media" style={{ fontSize: "75%" }}>
                  <div className="media-content">
                    <div className="content">
                      <div className="level">
                        <div className="level-left">
                          <div className="level-item">
                            <Rating
                              initialRating={2.45}
                              emptySymbol={<i className="far fa-star"></i>}
                              fullSymbol={
                                <i
                                  className="fa fa-star"
                                  style={{ color: "#d4af37" }}
                                ></i>
                              }
                            />
                          </div>
                        </div>

                        <div className="level-right">
                          <div className="level-item">
                            <i className="far fa-check-circle"></i>
                          </div>
                          <div className="level-item">
                            User1234 &nbsp;&nbsp; January 1, 2019
                          </div>
                        </div>
                      </div>
                      <div style={{ paddingBottom: "1.5%", fontSize: "125%" }}>
                        <strong>Donut chocolate bar pudding.</strong>
                      </div>
                      <div style={{ paddingBottom: "1.5%" }}>...line if necessary</div>
                      <p style={{ fontSize: "110%" }}>
                        Only the chunkiest of boys can eat this donust chocolate bar
                        pudding. Chocolate bar gingerbread sweet carrot cake.
                      </p>
                    </div>
                    <div className="level">
                      <div className="level-left">
                        <div className="level-item">
                          <p style={{ fontStyle: "bold" }}>
                            <strong></strong>
                          </p>
                        </div>
                        <div className="level-item">
                          <div
                            className="box is-shadowless is-paddingless is-marginless"
                            style={{ backgroundColor: "#888888" }}
                          >
                            <div className="field is-grouped">
                              <div className="tags has-addons">
                                <div className="tag has-addons is-dark">✓</div>
                                <div className="tag has-addons">
                                  I recommend this product
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="level">
                      <div
                        className="notification"
                        style={{
                          backgroundColor: "#EBEBEB",
                          borderRadius: "0%"
                        }}
                      >
                        <strong>Response:</strong>
                        <p>
                          Marzipan danish jelly gummi beans apple pie cheesecake topping
                          biscuit sesame snaps.
                        </p>
                      </div>
                    </div>
                    <div className="level">
                      <div className="level-left">
                        <div className="level-item">
                          <p>Helpful?</p>
                        </div>
                        <div className="level-item">
                          <p>
                            <u>Yes</u> (9)
                          </p>
                        </div>
                        <div className="level-item">|</div>
                        <div className="level-item">
                          <p>
                            <u>Report</u>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="level">
              <div className="level-left">
                {buttons.map((button) => {
                  return (
                    <div className="level-item">
                      <div
                        className="box is-shadowless"
                        style={{
                          border: "solid",
                          borderWidth: "thin",
                          borderRadius: "0"
                        }}
                      >
                        <strong>{button.toUpperCase()}</strong>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingsReviews;

/*


Length



Fit
Runs tight
Runs slightly tight
Perfect
Runs slightly long
Runs long

*/
