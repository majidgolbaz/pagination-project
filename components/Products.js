import React, { useEffect, useState } from "react";
import ProductWrapper from "./ProductWrapper";

const Products = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((products) => setProduct(products))
  }, [])

  return (
    <div className="container">
      <MovieList products={products} />
    </div>
  )

}

export default Products;