import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='text-center mt-5'>
            <p><small>&copy;Khaled @<span className='fw-bold'>{year}</span> </small> || All Rights Reserved</p>
        </div>
    );
};

export default Footer;