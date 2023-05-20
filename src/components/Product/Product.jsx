import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Product = ({handleAddToCart, product}) => {
  const { img, name, seller, ratings, price } = product;
  return (
    <div className="w-72 h-[510px] border border-[#d1d8dd] rounded-xl relative">
      <img className="object-cover w-72 h-72 rounded-xl p-1" src={img} alt="" />
      <div className="p-2">
        <p className="text-xl">{name}</p>
        <p>Price: ${price}</p>
        <p className="text-sm mt-7">Manufacturer: {seller}</p>
        <p className="text-sm">Ratings: {ratings}</p>
      </div>
      <button onClick={()=>handleAddToCart(product)} className="flex items-center justify-center space-x-2 w-full h-max bg-[#FFE0B3] rounded-b-lg absolute bottom-0 p-3 hover:bg-[#eeb259]">
        <p>Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;