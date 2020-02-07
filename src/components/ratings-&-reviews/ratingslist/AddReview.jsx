import React, { useState } from "react";
import ReviewModal from "./ReviewModal.jsx";

const AddReview = props => {
  const [showModal, setShowModal] = useState(false);

  const revealModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className="button is-small" onClick={revealModal}>
        Add Review +
      </button>
      {showModal? <ReviewModal closeModal={closeModal}/>:null}
      
    </div>
  );
};

export default AddReview;
