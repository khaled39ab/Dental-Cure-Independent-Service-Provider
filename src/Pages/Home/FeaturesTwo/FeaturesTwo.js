import React from 'react';
import requestLogo from '../../../images/requestLogo.png'
import './FeaturesTwo.css'

const FeaturesTwo = () => {
    return (
        <div className='features-two-sec p-5 mt-5'>
            <div className='mx-4'>
                <h1 className='features-two-title text-white'>Request your appointment and <br /> start your smile makeover!</h1>
                <button className='features-two-btn'>Request Appointment</button>
            </div>
            <div>
                <img src={requestLogo} alt="" />
            </div>
        </div>
    );
};

export default FeaturesTwo;