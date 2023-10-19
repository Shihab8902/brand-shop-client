import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Nav from '../../components/Nav/Nav';
import ReactStars from "react-rating-stars-component";
import Swal from 'sweetalert2';

const ProductsDetails = () => {
    const navigate = useNavigate();

    const product = useLoaderData();
    const { photo, name, brand, type, price, rating, description } = product;
    const ratingInt = parseFloat(rating);



    const handleAddToCart = () => {
        fetch("https://bytesync-server.vercel.app/cart", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(res => {
                if (res.acknowledged) {
                    Swal.fire({
                        title: "Added",
                        text: "Item added to your cart successfully!",
                        icon: "success"
                    })
                }
            })
            .catch(() => {
                Swal.fire({
                    text: 'You have already added the product. Go your cart to checkout.',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Go to cart',
                    denyButtonText: `Go home`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/cart");
                    } else if (result.isDenied) {
                        navigate("/")
                    }
                })
            })
    };


    return <>

        <Nav />

        <div className='container mx-auto my-10 p-5'>
            <img className='w-full block max-h-[700px] md:px-10' src={photo} alt="Image unavailable" />
            <h3 className='mt-5 text-3xl font-semibold'>{name}</h3>
            <ul className='my-5 '>
                <li className='text-xl font-semibold mb-3'>Brand: <span className='text-gray-500 font-normal'>{brand}</span></li>
                <li className='text-xl font-semibold mb-3'>Category: <span className='text-gray-500 font-normal'>{type}</span></li>
                <li className='text-xl font-semibold mb-3'>Price: <span className='text-gray-500 font-normal'>${price}</span></li>
                <li className='text-xl font-semibold mb-3 flex items-center gap-2'>Rating: <span className='text-gray-500'>
                    <ReactStars
                        count={5}
                        value={ratingInt}
                        size={24}
                        edit={false}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="red"
                    />
                </span></li>
            </ul>

            <p className='leading-10 text-lg text-gray-500'>{description}</p>

            <button onClick={handleAddToCart} className='w-full bg-red-500 hover:bg-red-600 mt-10 py-4 text-white font-semibold text-lg rounded-lg'>Add to Cart</button>
        </div>


    </>
}

export default ProductsDetails