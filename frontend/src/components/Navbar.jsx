import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { FaPhoneAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const TopBar = () => {
    return (
        <>
            <div style={{ backgroundColor: '#e0f0ff', padding: '5px 0' }}>
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6}>
                            <small><FaPhoneAlt /> +91 9876543210</small>
                        </Col>
                        <Col xs={12} md={6} className="text-md-end mt-2 mt-md-0">
                            <a href="https://wa.me/917905349414" className="mx-2 text-dark" target="_blank">
                                <FaWhatsapp size={18} />
                            </a>
                            <a href="https://www.instagram.com/_nikhil_singh887?igsh=MXdqYzNzbnc5N3cyZQ==" className="mx-2 text-dark" target="_blank">
                                <FaInstagram size={18} />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Navbar expand="lg" bg="white" className="shadow-sm">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <div>
                            <img src="/public/download.jpeg" alt="image" width={55} height={50} />
                            <strong style={{ fontSize: '1.6rem', color: '#216db9ff' }}>Krishna Library</strong>
                        </div>

                        <div style={{ fontSize: '19px', color: '#2c2b2bff' }}>   “Calm mind.  Focused soul.”</div>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/" style={{ fontSize: '19px' }}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" style={{ fontSize: '19px' }}>About</Nav.Link>
                            <Nav.Link as={Link} to="/contact" style={{ fontSize: '19px' }}>Contact</Nav.Link>
                            <Nav.Link as={Link} to="/login" style={{ fontSize: '19px' }}>Login</Nav.Link>
                            <Nav.Link as={Link} to="/signup" style={{ fontSize: '19px' }}>Signup</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default TopBar;