import React, { useEffect, useState } from 'react'
import Nav from '../../components/Nav/Nav'
import { useLoaderData, useParams } from 'react-router-dom'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import BrandProduct from './BrandProduct';

const BrandProducts = () => {

    const [sliders, setSliders] = useState([]);


    const loadedProducts = useLoaderData();
    const brand = useParams();
    const brandName = brand.name;

    const selectedProducts = loadedProducts?.filter(product => product.brand.toLowerCase() === brandName);
    const selectedSlider = sliders?.find(slider => slider.brand === brandName);

    //Load advertisement images
    useEffect(() => {
        fetch("https://bytesync-server.vercel.app/sliders")
            .then(res => res.json())
            .then(res => setSliders(res))
            .catch(error => console.log(error))
    }, [])


    console.log(selectedProducts)


    return <>

        <Nav />

        <div className='container mx-auto'>
            {
                selectedSlider && <Carousel className='mt-5 lg:mt-0 px-3'
                    infiniteLoop={true}
                    autoPlay={true}
                    showThumbs={false}
                >
                    <div className='md:h-[400px] lg:h-[480px]'>
                        <img className='block h-full rounded-xl  z-10' src={selectedSlider.slider1} alt="Image unavailable" />
                    </div>
                    <div className='md:h-[400px] lg:h-[480px]'>
                        <img className='block rounded-xl h-full ' src={selectedSlider.slider2} alt="Image unavailable" />

                    </div>
                    <div className='md:h-[400px] lg:h-[480px]'>
                        <img className='block rounded-xl h-full' src={selectedSlider.slider3} alt="Image unavailable" />
                    </div>
                </Carousel >
            }
        </div>


        {
            selectedProducts.length > 0 ? <div className='grid md:grid-cols-2 lg:grid-cols-3 container mx-auto my-20'>
                {
                    selectedProducts.map(product => <BrandProduct key={product._id} product={product} />)
                }
            </div>
                :
                <p>No data found</p>
        }


    </>
}

export default BrandProducts