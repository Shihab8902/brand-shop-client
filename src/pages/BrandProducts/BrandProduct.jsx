import React from 'react'
import ReactStars from "react-rating-stars-component";
import { useNavigate } from 'react-router-dom';

const BrandProduct = ({ product }) => {
    const { photo, name, brand, type, price, rating, _id } = product;

    const ratingInt = parseFloat(rating);

    const navigate = useNavigate();

    return <div className='border-2 rounded-lg pb-7 p-5'>
        <img className='w-full block h-[300px]' src={photo} alt="Image unavailable" />
        <div>
            <h3 className='text-center font-semibold text-xl'>{name}</h3>
            <div className='flex justify-evenly mt-5'>
                <div>
                    <p className='font-semibold text-lg mb-3' >Brand: <span className='font-normal text-gray-500'>{brand}</span></p>
                    <p className='font-semibold text-lg mb-3'>Price: <span className='font-normal text-gray-500'>${price}</span></p>
                </div>

                <div>
                    <p className='font-semibold text-lg mb-3'>Category: <span className='font-normal text-gray-500'>{type?.length > 6 ? type.slice(0, 6) + "..." : type}</span></p>
                    <div className='flex items-center gap-2'>
                        <ReactStars
                            count={5}
                            value={ratingInt}
                            size={20}
                            edit={false}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="red"
                        />
                        <p className='text-gray-500'>{rating}</p>
                    </div>

                </div>
            </div>

            <div className='mt-2 flex mx-6 justify-between'>
                <button onClick={() => navigate(`/update/${_id}`)} className='bg-red-500 px-3 py-2 rounded text-white font-medium cursor-pointer'>Update</button>
                <button onClick={() => navigate(`/product/${_id}`)} className='bg-green-600 px-3 py-2 rounded text-white font-medium cursor-pointer'>Details</button>
            </div>
        </div>
    </div>
}

export default BrandProduct