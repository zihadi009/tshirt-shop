/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h2>Product Summary</h2>
            {
                cart.map(tshirt => <h3>{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></h3>)
            }
        </div>
    );
};

export default Cart;