import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" className="fixed-top">
      <div className="ms-4 me-4">
        <Navbar.Brand as={Link} to="/" className="mb-0 text-light fw-bold fs-4">
          TechCare Repair Services
        </Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="ms-auto me-3">
          <Button
            variant="light"
            as={Link}
            to="/"
            className="rounded-pill p-2 fw-bold"
            style={{ fontSize: "0.85rem" }}
          >
            <i class="bi bi-x-circle-fill"></i>
            &nbsp; Cancel
          </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
