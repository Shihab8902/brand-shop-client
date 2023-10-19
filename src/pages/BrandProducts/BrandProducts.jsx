import React, { useEffect, useState } from 'react'
import Nav from '../../components/Nav/Nav'
import { useLoaderData, useParams } from 'react-router-dom'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import BrandProduct from './BrandProduct';
import { Helmet } from 'react-helmet';
import Footer from '../../components/Footer/Footer';

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




    return <>

        <Helmet>
            <title>{brandName}</title>
        </Helmet>

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
            selectedProducts.length > 0 ? <div className='grid md:grid-cols-2 lg:grid-cols-3 container gap-6 mx-auto p-2 md:p-5 lg:p-0 my-20'>
                {
                    selectedProducts.map(product => <BrandProduct key={product._id} product={product} />)
                }
            </div>
                :
                <p className='text-center font-semibold text-gray-400 leading-10 my-20 text-2xl'>Currently, no products are available for this brand. <br /> Please check back later for updates.</p>
        }


        <Footer />


    </>
}

export default BrandProducts