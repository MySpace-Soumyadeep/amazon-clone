import { ListItemAvatar } from '@material-ui/core';
import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/KD/banner_PC.jpg" alt=""/>
            <div>
                <h3>{user ? user.email : ''}</h3>
                <h2 className= "checkout__title">Your Shopping Cart</h2>
                {/* Cart items*/}
                
                {basket.map(item =>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}/>
                ))}

            </div>
            </div>
            <div className='checkout__right'>
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
