import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogIn/SocialLogin';
import './LogIn.css'

const LogIn = () => {
    return (
        <div>
            <div className='w-50 mx-auto px-3 py-4  my-3 border border-4 rounded-3'>
                <h1 className='text-success text-center'>Please Log In</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Log in
                    </Button>
                    <Button variant="link">Forget Password?</Button>
                    <hr />
                </Form>
                <div className='create-acc-btn mx-auto'>
                    <Link to={'/register'}>
                        <Button>
                            Create An Account
                        </Button>
                    </Link>
                </div>
                <SocialLogin></SocialLogin>
            </div>
        </div >
    );
};

export default LogIn;