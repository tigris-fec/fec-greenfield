import React from "react";
import Modal from "react-modal";

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleOpenModal() {
    this.setState({
      showModal: true
    });
  }

  handleCloseModal() {
    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <div class="add-question">
        <button>Add a Question +</button>
        <Modal isOpen />
      </div>
    );
  }
}
