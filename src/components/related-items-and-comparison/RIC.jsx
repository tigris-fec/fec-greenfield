import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import IndividualCard from "./IndividualCard.jsx";

const mapStateToProps = (store) => ({ PRODUCT_ID: 1, Cart: [] });

const RIC_ = (props) => {
  const [relatedItemsArr, setRelatedItemsArr] = useState([]);
  const [relatedProductsContent, setRelatedProductsContent] = useState([]);


  useEffect(() => {
    axios
      .get(`http://3.134.102.30/products/${props.PRODUCT_ID}/related`)
      .then((data) => {
        setRelatedItemsArr(data.data);
      })
      .catch((err) => {
        console.log("Error with getting related items array");
      });
  }, []);

  useEffect(() => {
    let maxIndex = Math.max(...relatedItemsArr);
    axios
      .get(`http://3.134.102.30/products/list?page=1&count=` + maxIndex)
      .then((data) => {
        let insertArray = [];
        for (let index of relatedItemsArr) {
          insertArray.push(data.data[index - 1]);
        }
        setRelatedProductsContent(insertArray);
        return insertArray;
      })
      .then((insertArray)=>{
          for(let product of insertArray){

          }
      })
      .catch((err) => {
        console.log("Error with getting the list of items:", err);
      });
  }, [relatedItemsArr]);

  const changeTheId = (id) =>{
    console.log(id)
  }

  return (
    <div className="container is-fluid">
        <p>RELATED PRODUCTS</p>
      <div name="related-items" className="level" style={{overflow:"auto" , width: "100vw", height: "90vh"}}>
        <div className="level-left">
          {relatedProductsContent.map((product) => {
            return <IndividualCard product={product} changeTheId={changeTheId} cardType={"related"}/>;
          })}
        </div>
      </div>

      <div name="outfit"></div>
      <p>YOUR OUTFIT</p>
      <div name="related-items" className="level" style={{overflow:"auto" , width: "100vw", height: "90vh"}}>
        <div className="level-left">
          {props.Cart.map((product) => {
            return <IndividualCard product={product} cardType={"outfit"}/>;
          })}
        </div>
      </div>
    </div>
  );
};

const RIC = connect(mapStateToProps)(RIC_);

export default RIC;
