import React from "react";
import ProductCarousel from "./ProductCarousel.jsx";
import StarRating from "./StarRating.jsx";
import "./ProductInformation.css";

import facebookIcon from "../../img/social/facebook-f.svg";
import instagramIcon from "../../img/social/instagram.svg";
import twitterIcon from "../../img/social/twitter.svg";

const style = {
  padding: "0px",
  margin: "0px",
  alignItems: "initial"
};

const ProductInformation = (props) => {
  return (
    <section className="section is-mobile" style={style}>
      <div className="container is-fluid">
        <div className="columns">
          <div className="column is-7">
            <ProductCarousel />
          </div>

          <div>
            <div className="column is-6">
              <StarRating />

              <div className="level">
                <div className="level-item">
                  <h2 className="title is-4">Vaguely Aware of Social Norms</h2>
                </div>
              </div>

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
            </div>

            <hr />

            <div class="level">
              <div class="level-left">
                <div class="level-item">
                  <a href="sexy">Add to favorites</a>
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">Share</div>
                <div class="level-item" href="#">
                  <img src={facebookIcon} alt="" />
                  &nbsp;&nbsp;
                  <img src={twitterIcon} alt="" />
                  &nbsp;&nbsp;
                  <img src={instagramIcon} alt="" />
                  &nbsp;&nbsp;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInformation;

/*
<div className="level">
  <div className="level-right">
    <div className="level-item">
      <span>
        <i className="far fa-star"></i>
      </span>
      &nbsp;
      <span>
        <i className="far fa-star"></i>
      </span>
      &nbsp;
      <span>
        <i className="far fa-star"></i>
      </span>
      &nbsp;
      <span>
        <i className="far fa-star"></i>
      </span>
      &nbsp;
      <span>
        <i className="far fa-star"></i>
      </span>
    </div>
    &nbsp;&nbsp; <p id="read-all-reviews">Read All Reviews</p>
  </div>
</div>
*/
