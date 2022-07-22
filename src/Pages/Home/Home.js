import React from 'react';
import Navbar from '../Shared/Navbar/Navbar'
import AboutUs from './AboutUs';
import Banner from './Banner';
import FAQ from './FAQ';
import ProductFetures from './ProductFetures';

const Home = () => {
    return (
        <>
            <div className='bg-no-repeat' style={{ backgroundImage: `url("https://i.ibb.co/zxYp4Cw/blue-abstract-layered-stripes-background-1.png")` }}>
                <Navbar />
                <Banner/>
                <ProductFetures/>    
                <AboutUs/>
                <FAQ/>
            </div>

        </>
    );
};

export default Home;