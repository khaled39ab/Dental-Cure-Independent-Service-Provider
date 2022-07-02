import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <Navbar sticky='top' className='fs-5 fw-bold text-info' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">
                    <img style={{borderRadius:'8px', marginRight:'5px'}} src={logo} alt="" />
                    <span style={{color:'green'}}>Dental Cure</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#blogs">Blogs</Nav.Link>
                        <Nav.Link href="#aboutMe">About Me</Nav.Link>
                        <Nav.Link href="#login">Log In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;