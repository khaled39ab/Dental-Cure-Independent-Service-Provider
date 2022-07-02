import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const [validated, setValidated] = useState(false);
    return (
        <div className='register-container w-50 p-4 m-4 mx-auto'>
            <h1 className='text-success text-center mb-4'>Want to Registration!</h1>
            <Form noValidate validated={validated}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" as={Col} controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" as={Col} controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                    <Form.Text className="text-muted">
                        Password should minimum 6 character with 1 special character.
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" as={Col} controlId="address.ControlTextarea1">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control
                        required
                        as="textarea" rows={3}
                        placeholder="Address"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Agree with terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>

                <div className='btn-container mt-4'>
                    <Button type="submit">Sign Up</Button>
                    <div className='logIn-sec'>
                        <p>Already have an account?</p>
                        <div>
                            <Link to={'/login'}>
                                <button>Log In</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Register;