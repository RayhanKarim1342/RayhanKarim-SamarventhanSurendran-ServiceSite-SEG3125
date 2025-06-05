import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WhatWeRepair = () => {
  return (
    <Container className="mt-5 border border-dark-subtle rounded-4 pb-2 shadow-lg" style={{ backgroundColor: 'azure' }}>
      <h1 className="text-center display-6 mb-4 p-4 fw-bold" id="whatWeRepair">
        What We Repair
      </h1>
      <Row className="d-flex justify-content-center">
        <Col md={6}>
          <p>We handle repairs for a wide range of devices, including:</p>
          <ul className="list-unstyled">
            <li>- Desktop PCs & Laptops (Windows & Mac)</li>
            <li>- Smartphones & Tablets</li>
            <li>- Hard Drives & SSDs</li>
            <li>- Graphics Cards & Motherboards</li>
            <li>- Power Supplies, Cooling Systems, and more</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default WhatWeRepair;