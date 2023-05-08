/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './TShirt.css'

const TShirt = ({ tshirt, handleAddToCart }) => {
    const { _id, name, price, picture } = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;