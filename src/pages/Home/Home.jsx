import React from 'react'
import Banner from '../../components/Banner/Banner'
import Brands from '../../components/Brands/Brands'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return <>

        <section>
            <Banner />
            <Brands />
            <NewsLetter />
            <Contact />
            <Footer />
        </section>


    </>
}

export default Home