import React from "react";

const ProductCard = ({product}) => {
  return (
    <div className="flex flex-col w-[25%] gap-4 px-5 py-[1%] " >
      <div className="">
        <img className="w-full pr-4 h-[200px] object-cover" src={product.thumbnail} alt=""  />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-bold text-2xl">{product.title}</h2>
        <p className=" text-xxl py-5">{product.description}</p>
        <div className="font-bold text-md">price:{product.price}</div>
      </div>
    </div>
    
  )
}

export default ProductCard;