import React from 'react'
import Banner from '../../components/Banner/Banner'
import Brands from '../../components/Brands/Brands'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import { Helmet } from 'react-helmet'
import Nav from '../../components/Nav/Nav'

const Home = () => {
    return <>

        <Helmet>
            <title>ByteSync - home</title>
        </Helmet>

        <section>
            <Nav />
            <Banner />
            <Brands />
            <NewsLetter />
            <Contact />
            <Footer />
        </section>


    </>
}

export default Home