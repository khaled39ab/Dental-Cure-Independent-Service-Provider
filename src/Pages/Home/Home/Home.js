import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import FeaturesTwo from '../FeaturesTwo/FeaturesTwo';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Features></Features>
            <FeaturesTwo></FeaturesTwo>
        </>
    );
};

export default Home;