import React from "react";
import { Link } from "@reach/router";
import Detail from "../views/Detail";
export default (props) => {
  return (
    <div>
      <h2>All Products</h2>
      {props.products.map((product, idx) => {
        return (
          <p key={idx}>
            <Link to={"/product/" + product._id}>{product.title}</Link>
          </p>
        );
      })}
    </div>
  );
};
