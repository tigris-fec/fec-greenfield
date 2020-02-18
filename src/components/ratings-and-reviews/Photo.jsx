import React, {useState} from "react";

const Photo = (props) => {
  const [modalOpen,setModalOpen] = useState(false);

  const toggleModal = () =>{
    setModalOpen(!modalOpen)
  }

  return (
    <div>
      <figure className="image is-96x96" style={{ maxHeight: "100%" }} onClick={toggleModal}>
        <img src={props.photo.url} alt="img" style={{ height: "75%" }} />
      </figure>
      <div className={`modal ${modalOpen? "is-active":null}`}>
        <div className="modal-background" onClick={toggleModal}></div>
        <div className="modal-content">
          <p className="image is-4by3">
            <img src={props.photo.url} alt="None Available" />
          </p>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={toggleModal}></button>
      </div>
    </div>
  );
};

export default Photo;
