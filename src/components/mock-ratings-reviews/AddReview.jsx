import React, { Component } from "react";
import Modal from "react-modal";
import Rating from "react-rating";
import RadioGroup from "./RadioGroup.jsx";
import { characteristics, customStyles } from "./state";
import ImageUploader from "react-images-upload";
import axios from "axios";
import "./AddReview.css";

class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      recommended: "",
      summary: "",
      description: "",
      username: "",
      email: "",
      photos: [],
      size: [],
      width: [],
      comfort: [],
      quality: [],
      length: [],
      fit: [],
      photos: [],
      characteristics: Object.keys(this.props.charList),
      submitted: false,
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterModalOpen = this.afterModalOpen.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  componentDidMount() {
    console.log(this.props.charList);
    console.log(this.state.characteristics);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }
  afterModalOpen() {
    console.log("After modal opened called!");
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleUploadImage(event) {
    let photos = this.state.photos.slice();
    photos.push(event[0].name);
    this.setState({ photos });
  }
  handleFormSubmit(event) {
    const formData = {
      rating: this.state.rating,
      summary: this.state.summary,
      name: this.state.username,
      email: this.state.email,
      photos: this.state.photos
    };
    const url = process.env.REACT_APP_API_URL;

    axios.post(`${url}/reviews/${this.props.productId}`, {}).then((res, data) => {});
  }

  render() {
    return (
      <>
        <div
          className="box is-button is-shadowless"
          style={{
            border: "solid",
            borderWidth: "thin",
            borderRadius: "0",
            fontSize: "75%"
          }}
          onClick={(event) => {
            event.currentTarget.blur();
            this.openModal();
          }}
        >
          <strong>ADD REVIEW +</strong>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          shouldFocusAfterRender={true}
          shouldReturnFocusAfterClose={true}
          ariaHideApp={false}
          autoFocus={true}
        >
          <div
            style={{
              backgroundColor: "#0000006F",
              paddingTop: "2%",
              paddingBottom: "2%",
              marginBottom: "1%",
              width: "100%"
            }}
          >
            <h1 style={{ color: "white", textAlign: "center" }} className="title is-5">
              Add A Rating
            </h1>
          </div>

          <div style={{ margin: "1%" }}>
            <form className="form" onSubmit={(event) => event.preventDefault()}>
              <div className="field">
                <label className="label">Rating</label>
                <div className="control is-inline-flex">
                  <Rating
                    initialRating={this.state.rating}
                    emptySymbol={<i className="far fa-star" style={{}}></i>}
                    fullSymbol={
                      <i className="fa fa-star" style={{ color: "#d4af37" }}></i>
                    }
                    onClick={(value) => this.setState({ rating: value })}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">
                  Would you recommend this product to a friend?
                </label>
                <div class="control">
                  <label class="radio">
                    <input
                      type="radio"
                      name="recommended"
                      value={this.state.recommended}
                      checked={this.state.recommended === "true"}
                      onChange={() => this.setState({ recommended: "true" })}
                    />
                    &nbsp; Yes
                  </label>
                  <label class="radio">
                    <input
                      className=""
                      type="radio"
                      name="recommended"
                      value={this.state.recommended}
                      onChange={() => this.setState({ recommended: "false" })}
                    />
                    &nbsp; No
                  </label>
                </div>
              </div>

              <label className="label">Characteristics</label>
              <div className="field">
                <label className="label">Size</label>
                <div className="control">
                  <input
                    className="radio"
                    type="radio"
                    name="size"
                    value={"Too narrow"}
                    onChange={this.handleChange}
                  />
                  &nbsp; A size too small
                  <input
                    className="radio"
                    type="radio"
                    name="size"
                    value={"Too narrow"}
                    onChange={this.handleChange}
                  />
                  &nbsp; A size too small
                </div>
              </div>

              <div className="field">
                <label className="label">Review Summary</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="summary"
                    value={this.state.summary}
                    placeholder={"Example: Best purchase ever!"}
                    maxLength="60"
                    onChange={this.handleChange}
                  />
                  {this.state.summary.length > 60 ? (
                    <p className="help is-danger">Must be fewer thatn 60 characters</p>
                  ) : null}
                </div>
              </div>

              <div className="field">
                <label className="label">Review Description</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    type="textarea"
                    name="description"
                    value={this.state.description}
                    placeholder="Why did you like (or dislike) the product?"
                    minLength="50"
                    onChange={this.handleChange}
                  />
                  {this.state.description.length <= 50 ? (
                    <p className="help">Must be at least 50 characters long</p>
                  ) : null}
                </div>
              </div>

              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className="input"
                    name="username"
                    value={this.state.username}
                    type="input"
                    placeholder="Example: jackson11!"
                    onChange={this.handleChangea}
                  />
                  <p className="help">
                    For privacy reasons, do not use your full name or email address
                  </p>
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    name="email"
                    value={this.state.email}
                    type="email"
                    onChange={this.handleChange}
                    maxLength="60"
                  />
                  <p className="help">
                    For authentication reasons, you will not be emailed
                  </p>
                </div>
              </div>

              <div className="file has-name is-boxed">
                <label className="file-label">
                  <input
                    className="file-input"
                    type="file"
                    name="photo"
                    onChange={(event) => console.log(event.target.files[0])}
                  />
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">Choose a file..</span>
                  </span>
                  <span className="file-name">Sample Image</span>
                </label>
              </div>
            </form>
          </div>
        </Modal>
      </>
    );
  }
}

export default AddReview;
