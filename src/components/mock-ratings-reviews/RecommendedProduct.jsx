import React from "react";

const RecommendedProduct = (props) => {
  return (
    <div className="level">
      <div className="level-left">
        <div className="level-item">
          <div
            className="box is-shadowless is-paddingless is-marginless"
            style={{ backgroundColor: "#888888" }}
          >
            <div className="field is-grouped">
              <div className="tags has-addons">
                <div className="tag has-addons is-dark">✓</div>
                <div className="tag has-addons">I recommend this product</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedProduct;
