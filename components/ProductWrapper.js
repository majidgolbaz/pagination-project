import React from "react";
import ProductCard from "./ProductCard";

const ProductWrapper = ({products}) => {
  return (
    <div className="flex flex-wrap gap-y-4" >
      {products?.length > 0 && products.map((product) => (
        <ProductCard  product={product} />
      ))}
    </div>
  )

}

export default ProductWrapper;