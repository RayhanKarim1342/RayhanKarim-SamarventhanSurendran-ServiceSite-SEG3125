import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppointmentForm from '../components/AppointmentForm';
import Calendar from '../components/Calendar';

const Book = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Book an Appointment</h1>
      <Row>
        <Col md={6}>
          <Calendar />
        </Col>
        <Col md={6}>
          <AppointmentForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Book;