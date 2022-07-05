import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import requestLogo from '../../../images/requestLogo.png'
import 'react-toastify/dist/ReactToastify.css';
import './FeaturesTwo.css'

const FeaturesTwo = () => {
    const navigate = useNavigate();

    const handleRequest = () =>{
        navigate('/login')
        toast('Select a Treatment Then Click to "Appointment"');
    }
    return (
        <div className='features-two-sec p-5 mt-5'>
            <div className='mx-4'>
                <h1 className='features-two-title text-white'>Request your appointment and <br /> start your smile makeover!</h1>
                <button onClick={handleRequest} className='features-two-btn'>Request Appointment</button>
                <ToastContainer></ToastContainer>
            </div>
            <div>
                <img src={requestLogo} alt="" />
            </div>
        </div>
    );
};

export default FeaturesTwo;