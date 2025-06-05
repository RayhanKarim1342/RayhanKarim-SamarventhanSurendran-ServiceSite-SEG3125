import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import WhatWeRepair from "../components/WhatWeRepair";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 className="text-center">Welcome to TechCare Repair Services</h1>
            <p className="text-center">
              Fast and reliable service for all your tech needs.
            </p>
          </Col>
        </Row>
        <Services />
        <Testimonial />
        <WhatWeRepair />
      </Container>
    </div>
  );
};

export default Home;
