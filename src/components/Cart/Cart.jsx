import React from "react";

const Cart = ({cart}) => {
  let total = 0;
  let shipping =0;
  let quantity = 0;
  for(const product of cart){
    quantity += product.quantity;
    total += product.price*product.quantity;
    shipping += product.shipping;
  }
  const tax = parseFloat((total*0.05).toFixed(2));
  const subTotal = total + shipping + tax;
  return (
    <div className="sticky top-0">
      <div className="flex items-center justify-center text-2xl">
        <h1 className="font-bold">Order Summary</h1>
      </div>
      <div className="mt-8">
        <p>Selected items: {quantity}</p>
        <p>Total price: ${total}</p>
        <p>Shipping: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h3 className="font-bold">Sub Total: ${subTotal}</h3>
      </div>
    </div>
  );
};

export default Cart;
