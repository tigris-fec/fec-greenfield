import React, { useState } from "react";
import axios from "axios";
import ImageUploader from "react-images-upload";
import AddRatingModal from "./AddRatingModal.jsx";
import CharRadio from "./CharRadio.jsx";

const AddReviewModal = (props) => {
  const changeRecommended = (e) => setRecommendProduct(e.target.value);
  const reviewChange = (e) => setReviewSum(e.target.value);
  const reviewBodyChange = (e) => setReviewBody(e.target.value);
  const usernameChange = (e) => setUsername(e.target.value);
  const emailChange = (e) => setEmail(e.target.value);

  const pictureChange = (e) => {
    let newPhotos = photos.slice();
    newPhotos.push(e[0].name);
    setPhotos(newPhotos);
  };

  const sendData = () => {
    const charArray = {
      Size: sizeChar,
      Width: widthChar,
      Comfort: comfortChar,
      Quality: qualityChar,
      Length: lengthChar,
      Fit: fitChar
    };
    const characterSendOver = {};
    for (let key in props.charList) {
      characterSendOver[props.charList[key].id] = parseInt(charArray[key]);
    }
    const data = {
      rating: overallRating,
      summary: reviewSum,
      body: reviewBody,
      recommend: Boolean(recommendProduct),
      name: username,
      email: email,
      photos: [],
      characteristics: characterSendOver
    };

    axios.post(`http://3.134.102.30/reviews/` + props.PRODUCT_ID, data).catch((err) => {
      console.log("Error posting the review", err);
    });
    props.closeModal();
  };

  return (
    <div className="modal is-active">
      <div
        className="modal-background"
        onClick={() => {
          console.log("Closed");
          console.log(props);
        }}
      ></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Write Your Review</p>
          <button
            className="delete"
            aria-label="close"
            onClick={props.closeModal}
          ></button>
        </header>
        <section className="modal-card-body">
          <form
            className="form"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <div className="field is-horizontal">
              <div className="control">
                <label className="label">Overall Rating</label>
              </div>
              &nbsp;&nbsp;
              <div className="control is-inline-flex">
                <AddRatingModal
                  check={1}
                  rating={overallRating}
                  setOverallRating={setOverallRating}
                />
                <AddRatingModal
                  check={2}
                  rating={overallRating}
                  setOverallRating={setOverallRating}
                />
                <AddRatingModal
                  check={3}
                  rating={overallRating}
                  setOverallRating={setOverallRating}
                />
                <AddRatingModal
                  check={4}
                  rating={overallRating}
                  setOverallRating={setOverallRating}
                />
                <AddRatingModal
                  check={5}
                  rating={overallRating}
                  setOverallRating={setOverallRating}
                />
              </div>
            </div>

            {overallRating !== 0 ? (
              <p
                className="is-size-7"
                onClick={() => {
                  setOverallRating(0);
                }}
              >
                <em>
                  <u>Clear Rating</u>
                </em>
              </p>
            ) : null}
            <br />

            <p>Do you recommend this product?</p>
            <div className="level">
              <div className="level-left">
                <label>
                  <input
                    type="radio"
                    value="true"
                    checked={recommendProduct === "true"}
                    onChange={changeRecommended}
                  />
                  &nbsp; Yes &nbsp;
                </label>
                <label>
                  <input
                    type="radio"
                    value="false"
                    checked={recommendProduct === "false"}
                    onChange={changeRecommended}
                  />
                  &nbsp; No
                </label>
              </div>
            </div>

            <p>Product Characteristics:</p>
            {itemChar.map((char, i) => (
              <CharRadio
                key={i}
                name={char}
                settings={characteristicNames[char].setting}
                setFunc={characteristicNames[char].func}
                val={characteristicNames[char].val}
              />
            ))}

            <p>Review Summary:</p>
            <input
              value={reviewSum}
              placeholder="Example: Best purchase ever!"
              type="text"
              onChange={reviewChange}
              style={{ width: "50%" }}
              maxLength="60"
            />

            <label className="label">Review Description:</label>
            <textarea
              className="textarea"
              value={reviewBody}
              placeholder="Why did you like the product or not?"
              type="text"
              onChange={reviewBodyChange}
              style={{ width: "50%", height: "100px" }}
              minLength="50"
              required="required"
            />
            <br />
            <ImageUploader
              withIcon={true}
              withPreview={true}
              singleImage={false}
              buttonText="Upload Images"
              onChange={pictureChange}
              imgExtension={[".jpg", ".gif", ".png", ".gif", "jpeg"]}
              maxFileSize={5242880}
            />
            <p>Nickname:</p>
            <input
              value={username}
              placeholder="Example: jackson11!"
              type="text"
              onChange={usernameChange}
              style={{ width: "50%" }}
              maxLength="60"
            />
            <p>Email:</p>
            <input
              value={email}
              placeholder="Example: jackson11@email.com"
              type="text"
              onChange={emailChange}
              style={{ width: "50%" }}
              maxLength="60"
            />
          </form>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={sendData}>
            Send Review
          </button>
          <button className="button" onClick={props.closeModal}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default AddReviewModal;
