import React from 'react'
import bannerBG from '../../assets/images/bannerBG.png'


const Banner = () => {
    return <div className="hero h-screen ">
        <div className="hero-content flex-col justify-between lg:flex-row-reverse">
            <img src={bannerBG} className="lg:max-w-xl" />
            <div>
                <p className='text-xl font-medium'> --- Special Offer --- </p>
                <h1 className="text-5xl  md:text-7xl  font-semibold my-3">Special <span className='uppercase text-red-600'>Sale</span></h1>
                <p className="py-6 text-gray-500">Don't miss out on this incredible deal! For a short time only, you can enjoy a whopping 50% discount on a wide range of items.</p>
                <button className="bg-red-500 text-white font-medium px-7 py-5 text-lg rounded-md ">Use code SALE50</button>
            </div>
        </div>
    </div>
}

export default Banner