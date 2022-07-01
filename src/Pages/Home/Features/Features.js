import React from 'react';
import features1 from '../../../images/Features/features1.svg'
import features2 from '../../../images/Features/features2.svg'
import features3 from '../../../images/Features/features3.svg'
import './Features.css'

const Features = () => {
    return (
        <div className='features-section'>
            <div className='container features-container mt-5'>
                <div className="card p-3 card-container" style={{ width: '18rem' }}>
                    <img src={features1} className="card-img-top py-3" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fs-4 mb-3">Easy Appointment</h5>
                        <p className="card-text pb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card p-3 card-container" style={{ width: '18rem' }}>
                    <img src={features2} className="card-img-top py-3" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fs-4 mb-3">Emergency Service</h5>
                        <p className="card-text pb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card p-3 card-container" style={{ width: '18rem' }}>
                    <img src={features3} className="card-img-top py-3" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fs-4 mb-3">24/7 Service</h5>
                        <p className="card-text pb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;