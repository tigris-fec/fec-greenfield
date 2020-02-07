import React, { Component } from "react";
import axios from "axios";

import ImageGallery from "./ImageGallery.jsx";
import ImageCarousel from "./ImageCarousel.jsx";
import ProductRating from "./ProductRating.jsx";
import ProductCategory from "./ProductCategory.jsx";
import ProductName from "./ProductName.jsx";
import ProductPrice from "./ProductPrice.jsx";
import ProductStyles from "./ProductStyles.jsx";
import AddToCart from "./AddToCart.jsx";
import ProductDetails from "./ProductDetails.jsx";
import ProductFeatures from "./ProductFeatures.jsx";

import tShirt from "./images/t-shirt.jpg";
import longSleeve from "./images/long-sleeve-tee.jpg";
import tankTop from "./images/tank-top.jpg";
import vNeck from "./images/v-neck.jpg";

import "./Overview.css";
import "./Overview.scss";

const API_URL = "http://3.134.102.30";

class Overview extends Component {
  constructor(props) {
    super();
    this.state = {
      images: [
        { id: 1, thumbnail_url: tShirt },
        { id: 2, thumbnail_url: longSleeve },
        { id: 3, thumbnail_url: tankTop },
        { id: 4, thumbnail_url: vNeck }
      ],
      id: -1,
      name: "",
      category: "",
      defaultPrice: -1,
      defaultStyle: -1,
      photos: [],
      rating: 3.78,
      reviews: [{ id: 1, text: "Very nice!" }],
      slogan: "",
      description: "",
      features: [
        { id: 1, feature: "GMO and Pesticide-Free" },
        { id: 2, feature: "Made with 300% Genetic Modification" },
        { id: 4, feature: "This is made up" },
        { id: 5, feature: "It doesn't matter}" }
      ],
      productStyles: [],
      selectedId: -1,
      showCarousel: true,
      open: true
    };
    this.getProductStyles = this.getProductStyles.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.selectProductStyle = this.selectProductStyle.bind(this);
    this.toggleCarouselWidth = this.toggleCarouselWidth.bind(this);
  }
  componentDidMount() {
    this.getProductInfo(1, this.getProductStyles);
  }
  getProductStyles(id = 1) {
    axios
      .get(`${API_URL}/products/${id}/styles`)
      .then((res) => {
        let productStyles = res.data.results;
        console.log("productStyles", productStyles);
        this.setState({
          productStyles: productStyles
        });
      })
      .then(() => console.log(this.state.productStyles[0].photos))
      .catch((err) => {});
  }
  getProductInfo(id = 1, callback) {
    axios
      .get(`${API_URL}/products/${id}`)
      .then((res) => {
        let product = res.data;
        this.setState({
          id: Number(product.id),
          name: product.name,
          slogan: product.slogan,
          description: product.description,
          category: product.category,
          defaultPrice: Number(product.default_price),
          features: product.features
        });
      })
      .then(() => {
        callback();
      })
      .catch((err) => {});
  }
  toggleCarouselWidth() {
    this.setState((prevState) => ({ open: !prevState.open }));
  }
  selectProductStyle() {}
  render() {
    return (
      <section className="section">
        <div className="columns">
          <div className="column is-7">
            <ImageGallery open={this.state.open} images={this.state.images} />
          </div>
          <div className="column is-5">
            <ProductRating rating={this.state.rating} reviews={this.state.reviews} />
            <ProductCategory category={this.state.category} />
            <ProductName name={this.state.name} />
            <ProductPrice price={this.state.defaultPrice} />
            <br />
            <ProductStyles
              defaultStyle={this.state.defaultStyle}
              productStyles={this.state.productStyles}
            />
            <br />
            <br />
            <AddToCart />
          </div>
        </div>
        <div className="columns" style={{ marginLeft: "5%", marginTop: "2%" }}>
          <div
            className="column is-two-thirds"
            style={{ borderRight: "solid", borderWidth: "1.5px" }}
          >
            <ProductDetails
              slogan={this.state.slogan}
              description={this.state.description}
            />
          </div>
          <div className="column is-one-third">
            <ProductFeatures features={this.state.features} />
          </div>
        </div>
      </section>
    );
  }
}

export default Overview;
