import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CartItem = ({ product }) => {
  const { price, name, quantity, img } = product;
  return (
    <div className="flex items-center border p-2 mt-4 rounded-lg m-auto">
      <img src={img} alt="Product" className="w-24 rounded-lg mr-4" />
      <div className="flex-grow">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-gray-500">Quantity: {quantity}</p>
        <p className="text-gray-500">Price: {price}</p>
      </div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded">
        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default CartItem;
