import React, { Component } from "react";
import axios from "axios";

import ProductsGallery from "./ProductsGallery.jsx";
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

import { productStyles } from "./data/product-styles";
import { productInfo } from "./data/products-info";
import { reviews } from "./data/reviews";

import "./Overview.css";
import "./Overview.scss";

const API_URL = "http://3.134.102.30";

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      name: "",
      category: "",
      defaultPrice: -1,
      defaultStyle: -1,
      photos: [],
      rating: 4.26,
      reviews: [],
      productStyles: [],
      productInfo: productInfo,
      selectedId: -1,
      selectedStyles: [],
      images: [],
      features: []
    };
    this.toggleCarouselWidth = this.toggleCarouselWidth.bind(this);
    this.setSelectedProduct = this.setSelectedProduct.bind(this);
  }
  componentDidMount() {
    this.setState({
      id: Number(productStyles.product_id),
      name: productInfo[0].name,
      category: productInfo[0].category,
      slogan: productInfo[0].slogan,
      description: productInfo[0].description,
      defaultPrice: productStyles.results[0].original_price,
      selectedStyleName: productStyles.results[0]["default?"],
      defaultStyle: productStyles.results[0].name,
      photos: productStyles.results[0].photos,
      skus: productStyles.results[0].skus,
      productStyles: productStyles.results,
      selectedStyles: productStyles.results
    });
  }
  toggleCarouselWidth() {
    this.setState((prevState) => ({ open: !prevState.open }));
  }
  setSelectedProduct(selectedId) {
    this.setState({ selectedId }, () => {
      console.log(`${this.state.selectedId} is the selected ID`);
    });
  }
  render() {
    return (
      <section className="section">
        <div className="columns">
          <div className="column is-7">
            <ProductsGallery
              photos={this.state.photos}
              productStyles={this.state.productStyles}
              selectedStyles={this.state.selectedStyles}
            />
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
              setSelectedProduct={this.setSelectedProduct}
            />
            <AddToCart skus={this.state.skus} />
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

/*
this.getProductStyles = this.getProductStyles.bind(this);
this.getProductInfo = this.getProductInfo.bind(this);

getProductStyles(id = 1) {
  axios
    .get(`${API_URL}/products/${id}/styles`)
    .then((res) => {
      let productStyles = res.data.results;
      this.setState({ productStyles });
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
*/
