import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Rating from "react-rating";
import RadioGroup from "./RadioGroup.jsx";
import axios from "axios";

const AddReview = (props) => {
  const [isOpen, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <div className="box is-button is-shadowless" onClick={openModal}>
        <strong>ADD TO CART +</strong>
      </div>
      <Modal isOpen={isOpen} closeOnEsc={true} closeOnOverlayClick={true}></Modal>
    </>
  );
};

export default AddReview;
