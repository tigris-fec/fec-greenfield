import React, { Component } from "react";
import Announcement from "./Announcement.jsx";
import ImageGallery from "./ImageGallery.jsx";
import ProductInfo from "./ProductInfo.jsx";

import { connect } from "react-redux";
import { getProductStyles } from "../../js/actions";
import { getProductsList } from "../../js/actions";

const mapStateToProps = (state) => {
  return { productStyles: state.productStyles };
};

class OverviewContainer extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getProductStyles(1).then((res) => {
      console.log(res);
    });
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="columns">
            <ImageGallery />
            <ProductInfo />
          </div>
        </div>
      </>
    );
  }
}

const Overview = connect(mapStateToProps, { getProductStyles })(OverviewContainer);

export default Overview;
