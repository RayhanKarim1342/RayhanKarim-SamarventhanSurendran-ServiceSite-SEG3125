import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  const servicesList = [
    {
      title: 'Hardware Repair',
      description: 'Fixing issues related to hardware components such as screens, keyboards, and more.',
      image: 'images/hardware_repair.png',
    },
    {
      title: 'Software Installation',
      description: 'Installing and configuring software applications to meet your needs.',
      image: 'images/software_installation.png',
    },
    {
      title: 'Data Recovery',
      description: 'Recovering lost or corrupted data from various devices.',
      image: 'images/data_recovery.png',
    },
    {
      title: 'Virus Removal',
      description: 'Removing malware and viruses to ensure your device runs smoothly.',
      image: 'images/virus_removal.png',
    },
  ];

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Our Services</h1>
      <Row>
        {servicesList.map((service, index) => (
          <Col md={6} lg={3} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={service.image} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;