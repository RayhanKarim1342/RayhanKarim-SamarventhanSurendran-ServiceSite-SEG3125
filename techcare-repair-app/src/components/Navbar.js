import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" className="fixed-top">
      <Navbar.Brand as={Link} to="/">TechCare Repair Services</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/#ourServices">Our Services</Nav.Link>
          <Nav.Link as={Link} to="/#theBest">Why We're The Best</Nav.Link>
          <Nav.Link as={Link} to="/#whatWeRepair">What We Repair</Nav.Link>
        </Nav>
        <Button variant="light" as={Link} to="/book" className="ms-2">Book Repair</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;