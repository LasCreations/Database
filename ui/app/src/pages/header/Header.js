import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import "./Header.css";
import { Link } from 'react-router-dom';
import { Container, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar bg="blue" >
                <Container>
                    <Navbar.Brand href="/">HyperSync DB</Navbar.Brand>
                    <Nav className="ml-auto">
                        <NavDropdown title="ECC" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Courses</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Students
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Upload</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Delete
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/sponsors" className="nav-link">Sponsors</Nav.Link>
                        <Nav.Link as={Link} to="/events" className="nav-link">Events</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;