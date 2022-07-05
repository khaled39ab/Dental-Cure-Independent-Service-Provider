import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Appointment from '../../Shared/Appointment/Appointment';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, price, about } = service;
    const navigate = useNavigate();

    const navigateToAppointment = ( id ) =>{
        navigate(`/service/${id}`)
    }
    return (
        <div>
            <div className='service-container'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='text-warning fw-bolder'>{name}</Card.Title>
                        <Card.Subtitle className='my-2 text-info fw-bolder'>{price}</Card.Subtitle>
                        <Card.Text className='service-about'>
                            {about}
                        </Card.Text>
                        <Button onClick={()=>navigateToAppointment( id )} variant="primary">Appointment Now</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Service;