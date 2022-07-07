import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../SocialLogIn/SocialLogin';
import './Register.css'

const Register = () => {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    let errorElement;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleRegister = async e => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            setValidated(true)
            return
        }

        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const name = firstName + ' ' + lastName;
        const email = e.target.email.value;
        const password = e.target.password.value;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        navigate('/')
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger text-center'>Error: {error?.message}</p>
    }
    return (
        <div className='register-container w-50 p-4 m-4 mx-auto'>
            <h1 className='text-success text-center mb-4'>Want to Registration!</h1>
            <Form noValidate validated={validated} onSubmit={handleRegister}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            name='firstName'
                            type="text"
                            placeholder="First name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            name='lastName'
                            type="text"
                            placeholder="Last name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" as={Col} controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" as={Col} controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
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
                    <Button type="submit">Register</Button>
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
            {
                errorElement
            }
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;