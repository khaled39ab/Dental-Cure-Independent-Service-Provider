import React from 'react';
import { useParams } from 'react-router-dom';

const Appointment = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>this is Appointment {id} </h2>
        </div>
    );
};

export default Appointment;