import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom'
import Nav from '../../components/Nav/Nav';
import Cart from './Cart';

const MyCart = () => {

    const loadedCartItems = useLoaderData();

    const [cartItems, setCartItems] = useState(loadedCartItems);

    return <>

        <Helmet>
            <title>My Cart</title>
        </Helmet>

        <Nav />

        <div className='container mx-auto'>
            {
                cartItems.length > 0 ?
                    <div className='mx-10'>
                        {cartItems.map(cartItem => <Cart key={cartItem._id} setCartItems={setCartItems} cartItem={cartItem} />)}
                    </div>
                    :
                    <p className='text-center my-20 text-gray-400 font-semibold  text-lg lg:text-2xl leading-7 lg:leading-10'>You have no products in your shopping cart at the moment. <br />Try to add some from our wide range of products. <br />Happy shopping!</p>
            }
        </div>




    </>
}

export default MyCart