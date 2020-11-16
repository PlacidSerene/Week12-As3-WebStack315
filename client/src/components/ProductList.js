import React from "react";
import { Link } from "@reach/router";
import axios from "axios";
export default (props) => {
  const { removeFromDom } = props;
  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/product/" + productId)
      .then((res) => {
        removeFromDom(productId);
      });
    console.log(productId);
  };

  return (
    <div>
      <h2>All Products</h2>
      {props.products.map((product, idx) => {
        return (
          <p key={idx}>
            <Link to={"/" + product._id}>{product.title}</Link>

            <button
              className="learn-more"
              onClick={(e) => {
                deleteProduct(product._id);
              }}
            >
              Delete
            </button>
          </p>
        );
      })}
    </div>
  );
};
