import React from 'react';
import requestLogo from '../../../images/requestLogo.png'
import './RequestAppointment.css'

const RequestAppointment = () => {
    return (
        <div className='request-appointment-sec p-5 mt-5'>
            <div className='mx-4'>
                <h1 className='request-title text-white'>Request your appointment and <br /> start your smile makeover!</h1>
                <button className='request-btn'>Request Appointment</button>
            </div>
            <div>
                <img src={requestLogo} alt="" />
            </div>
        </div>
    );
};

export default RequestAppointment;