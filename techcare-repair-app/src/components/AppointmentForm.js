import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Form, Modal } from 'react-bootstrap';

const AppointmentForm = forwardRef(({ selectedDate, onFormValid }, ref) => {
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const valid =
      !!selectedDate &&
      time.trim() !== '' &&
      name.trim() !== '' &&
      phone.trim() !== '' &&
      email.trim() !== '' &&
      description.trim() !== '';
    onFormValid && onFormValid(valid);
  }, [selectedDate, time, name, phone, email, description, onFormValid]);

  useImperativeHandle(ref, () => ({
    submit: () => {
      setShowModal(true);
    }
  }));

  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
  };

  const resetForm = () => {
    setTime('');
    setName('');
    setPhone('');
    setEmail('');
    setDescription('');
  };

  function formatTime(time24) {
    if (!time24) return '';
    const [hourStr, minute] = time24.split(':');
    let hour = parseInt(hourStr, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${ampm}`;
  }

  return (
    <div className="appointment-form">
      <h1 className="text-center mb-4">Tell us about yourself</h1>
      <Form>
        <Form.Group controlId="formTime">
          <Form.Label>What time works for you?</Form.Label>
          <Form.Control
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Detailed Description of the Issue</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment Booked</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You have successfully booked your appointment
          {selectedDate && (
            <>
              <br />
              <strong>Date:</strong> {selectedDate.toLocaleDateString()}
              <br />
              <strong>Time:</strong> {formatTime(time)}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
});

export default AppointmentForm;