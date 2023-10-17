import React, { useEffect, useState } from 'react'
import Brand from './Brand';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Brands = () => {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch("brands.json")
            .then(res => res.json())
            .then(res => setBrands(res))
    }, []);


    useEffect(() => {
        AOS.init({
            duration: 800
        })
    }, [])


    return <div className='container mx-auto mt-10 '>
        <h3 className='text-center font-semibold text-5xl'>Shop with Confidence</h3>
        <p className='text-center my-4 text-gray-500 '>Embrace Quality and Reliability from Trusted Brands</p>

        <div data-aos="fade-up" className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 p-5'>
            {
                brands.map(brand => <Brand key={brand.id} brand={brand} />)
            }
        </div>

    </div>
}

export default Brands