import React, { useState } from "react";
import ModalRating from "./ModalRating.jsx";
import CharRadio from "./CharRadio.jsx";
import ImageUploader from "react-images-upload";

const ReviewModal = props => {
  const [overallRating, setOverallRating] = useState(0);
  const [recommendProduct, setRecommendProduct] = useState("true");
  const [sizeChar, setSizeChar] = useState();
  const [widthChar, setWidthChar] = useState();
  const [comfortChar, setComfortChar] = useState();
  const [qualityChar, setQualityChar] = useState();
  const [lengthChar, setLengthChar] = useState();
  const [fitChar, setFitChar] = useState();
  const [reviewSum, setReviewSum] = useState();
  const [reviewBody, setReviewBody] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [photos, setPhotos] = useState([]);

  const characteristicNames = {
    size: [
      "A size too small",
      "Half a size too small",
      "Perfect",
      "Half a size too big",
      "A size too big"
    ],
    width: [
      "Too narrow",
      "Slightly Narrow",
      "Perfect",
      "Slightly Wide",
      "Too wide"
    ],
    comfort: [
      "Uncomfortable",
      "Slightly uncomfortable",
      "Ok",
      "Comfortable",
      "Perfect"
    ],
    quality: [
      "Poor",
      "Below average",
      "What I expected",
      "Pretty great",
      "Perfect"
    ],
    length: [
      "Runs short",
      "Runs slightly short",
      "Perfect",
      "Runs slightly long",
      "Runs long"
    ],
    fit: [
      "Runs tight",
      "Runs slightly tight",
      "Perfect",
      "Runs slightly long",
      "Runs long"
    ]
  };

  const changeRecommended = e => {
    setRecommendProduct(e.target.value);
  };

  const reviewChange = e => {
    setReviewSum(e.target.value);
  };

  const reviewBodyChange = e => {
    setReviewBody(e.target.value);
  };

  const usernameChange = e => {
    setUsername(e.target.value);
  };

  const emailChange = e => {
    setEmail(e.target.value);
  };

  const pictureChange = e => {
    let newPhotos = photos.slice();
    newPhotos.push(e[0].name);
    setPhotos(newPhotos);
    console.log(e[0].name);
  };
  const sendData = () => {
    props.closeModal();
  };
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={props.closeModal}></div>
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
          <div className="level">
            <div className="level-left">
              <p>Overall Rating:&nbsp;</p>
              <ModalRating
                check={1}
                rating={overallRating}
                setOverallRating={setOverallRating}
              />
              <ModalRating
                check={2}
                rating={overallRating}
                setOverallRating={setOverallRating}
              />
              <ModalRating
                check={3}
                rating={overallRating}
                setOverallRating={setOverallRating}
              />
              <ModalRating
                check={4}
                rating={overallRating}
                setOverallRating={setOverallRating}
              />
              <ModalRating
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

          <p>Do You Recommend This Product?</p>
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
          <CharRadio
            name="Size"
            settings={characteristicNames.size}
            setFunc={setSizeChar}
            val={sizeChar}
          />
          <CharRadio
            name="Width"
            settings={characteristicNames.width}
            setFunc={setWidthChar}
            val={widthChar}
          />
          <CharRadio
            name="Comfort"
            settings={characteristicNames.comfort}
            setFunc={setComfortChar}
            val={comfortChar}
          />
          <CharRadio
            name="Quality"
            settings={characteristicNames.quality}
            setFunc={setQualityChar}
            val={qualityChar}
          />
          <CharRadio
            name="Length"
            settings={characteristicNames.length}
            setFunc={setLengthChar}
            val={lengthChar}
          />
          <CharRadio
            name="Fit"
            settings={characteristicNames.fit}
            setFunc={setFitChar}
            val={fitChar}
          />

          <p>Review Summary:</p>
          <input
            value={reviewSum}
            placeholder="Example: Best purchase ever!"
            type="text"
            onChange={reviewChange}
            style={{ width: "50%" }}
            maxLength="60"
          />

          <p>Review Description:</p>
          <textarea
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
            imgExtension={[".jpg", ".gif", ".png", ".gif","jpeg"]}
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

export default ReviewModal;
