import React from "react";
import ProductCard from "./ProductCard";

const ProductWrapper = (products) => {
  return (
    <div className="" >
      {products.map((product) => (
        <ProductCard  product={product} />
      ))}
    </div>
  )

}

export default ProductWrapper;