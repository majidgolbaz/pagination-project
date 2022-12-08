import React, { useEffect, useState } from "react";
import ProductWrapper from "./ProductWrapper";

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((result) => {
        setProducts(result?.products);
        console.log(result);
      }).catch(console.error)
  }, [])

  return (
    <div className=" ">
      <ProductWrapper products={products} />
    </div>
  )

}

export default Products;