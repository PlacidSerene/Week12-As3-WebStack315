import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import axios from "axios";
import ProductList from "../components/ProductList";

export default () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8000/api/product").then((res) => {
      setProducts(res.data);
      setLoaded(true);
    });
  }, []);
  const removeFromDom = (productId) => {
    setProducts(products.filter((product) => product._id != productId));
  };
  return (
    <div>
      <ProductForm />
      <hr />
      {loaded && (
        <ProductList products={products} removeFromDom={removeFromDom} />
      )}
    </div>
  );
};
