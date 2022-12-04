import React from "react";

const ProductCard = (product) => {
  return (
    <div className="" >
      <img className="card-img" src={product.imageUrl} alt="" />
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className="card-description">{product.short_description}</p>
      </div>
    </div>
    
  )
}

export default ProductCard;