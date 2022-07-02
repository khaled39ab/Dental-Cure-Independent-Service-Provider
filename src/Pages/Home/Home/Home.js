import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import RequestAppointment from '../RequestAppointment/RequestAppointment';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Features></Features>
            <RequestAppointment></RequestAppointment>
        </>
    );
};

export default Home;