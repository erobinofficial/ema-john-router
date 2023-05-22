import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import { useLoaderData } from "react-router-dom";

const Shop = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find(product => product.id === id);
      if (addedProduct) {
        addedProduct.quantity = storedCart[id];
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  // handle add to cart
  const handleAddToCart = (selectedProduct) => {
    // console.log(selectedProduct);
    let newCart = [];
    const exist = cart.find(product => product.id === selectedProduct.id);
    if (!exist) {
        selectedProduct.quantity = 1;
        newCart = [...cart, selectedProduct];      
    }
    else {
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      exist.quantity += 1;
      newCart = [...rest, selectedProduct];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };


  return (
    <div className="grid grid-cols-5">
      <div className="col-span-4 grid grid-cols-3 gap-y-5 m-16 ml-48">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="bg-[#FFE0B3] col-end-6 p-6">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
