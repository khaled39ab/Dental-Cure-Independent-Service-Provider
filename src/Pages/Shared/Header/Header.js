import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <Navbar sticky='top' className='fs-5 fw-semibold text-white' collapseOnSelect expand="lg" bg="info" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img style={{borderRadius:'8px'}} src={logo} alt="" />
                    <span>Dental Cure</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link href="#memes">Dank memes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;