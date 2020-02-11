import React, { useState } from "react";
import ReviewModal from "./ReviewModal.jsx";

const AddReview = (props) => {
  const [showModal, setShowModal] = useState(false);

  const revealModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="level-item">
      <div
        className="box is-shadowless"
        style={{
          border: "solid",
          borderWidth: "thin",
          borderRadius: "0",
          fontSize: "75%"
        }}
        onClick={props.revealModal}
      >
        <strong>ADD REVIEW +</strong>
      </div>
    </div>
  );
};

export default AddReview;
