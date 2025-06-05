import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const testimonials = [
  {
    name: "Hussein Mouftah",
    image: "images/mouftah.png",
    text: "Fast, honest, and reliable. TechCare diagnosed my issue quickly, explained everything clearly, and had me back to work in no time. No upsells, just great service. Highly recommend!",
    role: "A Cherished Customer"
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center display-6 fw-bold">What Our Customers Say</h1>
      <Row className="d-flex justify-content-center">
        {testimonials.map((testimonial, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body className="text-center">
                <Card.Img
                  variant="top"
                  src={testimonial.image}
                  className="rounded-circle img-fluid mb-3"
                  style={{ width: '150px', height: '150px' }}
                  alt={`${testimonial.name} avatar`}
                />
                <Card.Text className="text-muted fw-light mb-4 fs-5">
                  <i className="bi bi-quote" style={{ color: '#1b2f36' }}></i>
                  {testimonial.text}
                </Card.Text>
                <Card.Title className="display-6 mb-0">
                  <strong>{testimonial.name}</strong>
                </Card.Title>
                <Card.Text className="text-muted mb-0 fs-4">{testimonial.role}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Testimonial;