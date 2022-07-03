import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import CustomLink from '../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar sticky='top' className='fs-5 fw-bold text-info' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">
                    <img style={{ borderRadius: '8px', marginRight: '5px' }} src={logo} alt="" />
                    <span style={{ color: 'green' }}>Dental Cure</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={CustomLink} to="/services">Services</Nav.Link>
                        <Nav.Link as={CustomLink} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={CustomLink} to="/aboutMe">About Me</Nav.Link>
                        {
                            user ?
                                <button className='btn btn-link text-decoration-none fw-bold signOutBtn' onClick={handleSignOut}>Sign Out</button> :
                                <Nav.Link as={CustomLink} to="/login">Log In</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;