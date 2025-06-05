import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const updateCalendar = () => {
    // Logic to update the calendar view based on currentDate
  };

  const handleDateClick = (day) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(date);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedDate(null);
  };

  return (
    <div className="calendar">
      <div className="header mb-3">
        <Button variant="light" onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}>←</Button>
        <div className="monthYear">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</div>
        <Button variant="light" onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}>→</Button>
      </div>
      <div className="days">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
          <div className="day" key={day}>{day}</div>
        ))}
      </div>
      <div className="dates">
        {/* Logic to render dates based on currentDate */}
        {[...Array(30)].map((_, index) => (
          <div className="date" key={index} onClick={() => handleDateClick(index + 1)}>
            {index + 1}
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment Date Selected</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have selected {selectedDate && selectedDate.toDateString()}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Calendar;