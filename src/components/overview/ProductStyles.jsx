import React, { Component } from "react";
import axios from "axios";

class ProductStyles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: []
    };
    this.getProductStyle = this.getProductStyle.bind(this);
  }
  componentDidMount() {
    this.getProductStyle(1);
  }
  getProductStyle(id = 1) {
    axios.get(`http://3.134.102.30/products/${id}/styles`).then((res) => {
      console.log(res.data);
    });
  }
  render() {
    return (
      <>
        <p className="title is-6">$15</p>

        <p id="style-selected">
          <strong>STYLE</strong> > SELECTED
        </p>

        <p>&nbsp;</p>

        <div className="level">
          <div className="level-item">
            <div className="button is-primary is-rounded is-medium"></div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="button is-success is-rounded is-medium"></div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="button is-info is-rounded is-medium"></div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="button is-link is-rounded is-medium"></div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>

        <div className="level">
          <div className="level-item">
            <div className="button is-warning is-rounded is-medium"></div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="button is-danger is-rounded is-medium"></div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="button is-light is-rounded is-medium"></div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="button is-dark is-rounded is-medium"></div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </>
    );
  }
}

export default ProductStyles;
