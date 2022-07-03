import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../SocialLogIn/SocialLogin';
// import Tostify from '../Tostify';
import 'react-toastify/dist/ReactToastify.css';
import './LogIn.css'

const LogIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const from = location.state?.from?.pathname || "/";

    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleLogIn = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate])

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger text-center'>Error: {error?.message}</p>
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('Enter Your Email First')
        }
    }
    return (
        <div>
            <div className='w-50 mx-auto px-3 py-4  my-3 border border-4 rounded-3'>
                <h1 className='text-success text-center'>Please Log In</h1>
                <Form onSubmit={handleLogIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} name='password' type="password" placeholder="Password" />
                    </Form.Group>

                    {
                        errorElement
                    }
                    <Button variant="primary" type="submit">
                        Log in
                    </Button>
                    <Button onClick={handleResetPassword} variant="link">Forget Password?</Button>
                    <ToastContainer />
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