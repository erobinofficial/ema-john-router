import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import CartItem from '../CartOverView/CartItem';

const Orders = () => {
    const {products, initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    return (
        <div className="flex justify-evenly">
            <div className='items-center'>
                {
                    cart.map(product => <CartItem key={product.id} product={product}></CartItem>)
                }
            </div>
            <div className="bg-[#FFE0B3] p-6 h-96 mt-10 rounded-lg">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;