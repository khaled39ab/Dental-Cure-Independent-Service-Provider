import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Appointment.css'

const Appointment = () => {
    const navigate = useNavigate();

    const handleSendMessage = () =>{
        navigate('/');
        toast('Thanks for Your Appointment')
    }

    return (
        <div>
            <div className='container w-50 mt-5 appointment-form'>
                <h1 className='request-title mb-4'>Request Appointment</h1>
                <form onSubmit={handleSendMessage}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Control
                                required
                                name='name'
                                type="text"
                                placeholder="Name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="formBasicEmail">
                            <Form.Control
                                required
                                name='email'
                                type="email"
                                placeholder="Email"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Control
                                required
                                name='phone'
                                type="text"
                                placeholder="Phone No:"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Control
                                required
                                name='subject'
                                type="text"
                                placeholder="Subject"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3 message-area" as={Col} controlId="message.ControlTextarea1">
                        <Form.Control
                            required
                            as="textarea" rows={6}
                            placeholder="Message"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Button className='send-btn px-4 py-2' type="submit">Send Message</Button>
                </form>
            </div>
        </div>
    );
};

export default Appointment;