import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom'
import Nav from '../../components/Nav/Nav';
import Cart from './Cart';
import { UserContext } from '../../firebase/AuthProvider';


const MyCart = () => {
    const { user } = useContext(UserContext);
    const userEmail = user.email.toLowerCase();
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
        fetch("https://bytesync-server.vercel.app/cart")
            .then(res => res.json())
            .then(res => {
                const currentUserItem = res.filter(item => item.user === userEmail);
                setCartItems(currentUserItem);
            })
    }, [])



    return <>

        <Helmet>
            <title>My Cart</title>
        </Helmet>

        <Nav />

        <div className='container mx-auto'>
            {
                cartItems.length > 0 ?
                    <div className='mx-10'>
                        {cartItems.map(cartItem => <Cart key={cartItem._id} cartItem={cartItem} setCartItems={setCartItems} cartItems={cartItems} />)}
                    </div>
                    :
                    <p className='text-center my-20 text-gray-400 font-semibold  text-lg lg:text-2xl leading-7 lg:leading-10'>You have no products in your shopping cart at the moment. <br />Try to add some from our wide range of products. <br />Happy shopping!</p>
            }
        </div>


    </>
}

export default MyCart