import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  margin-top: 20px;
`;

const Header = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  label {
    display: block;
    margin-bottom: 10px;
  }

  select,
  input {
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  p {
    margin-top: 10px;
    font-weight: bold;
  }
`;

function AppointmentBooking() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [bookingStatus, setBookingStatus] = useState("");

  const doctors = ["Phil Hermonyx", "Len Don Ayer", "Fallon Archez"];
  const availableDates = ["20-10-23", "20-10-24", "20-10-25"];

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handlePatientNameChange = (event) => {
    setPatientName(event.target.value);
  };

  const handleBookAppointment = (e) => {
    e.preventDefault();
    if (selectedDoctor && selectedDate && patientName) {
      const appointmentData = {
        doctor: selectedDoctor,
        date: selectedDate,
        patient: patientName,
      };

      // Send a POST request to the API endpoint
      axios
        .post("http://localhost:8080/Appointment", appointmentData)
        .then((response) => {
          // Handle success, reset form fields, and show a success message
          setBookingStatus("Appointment booked successfully!");
          setSelectedDoctor("");
          setSelectedDate("");
          setPatientName("");
        })
        .catch((error) => {
          // Handle errors
          setBookingStatus("Error: Unable to book the appointment.");
          console.error(error);
        });
    } else {
      setBookingStatus("Please fill in all fields.");
    }
  };

  return (
    <Container>
      <Header>Appointment Booking</Header>
      <Form>
        <label>Select Doctor:</label>
        <select value={selectedDoctor} onChange={handleDoctorChange}>
          <option value="">Select a doctor</option>
          {doctors.map((doctor) => (
            <option key={doctor} value={doctor}>
              {doctor}
            </option>
          ))}
        </select>
        <label>Select Date:</label>
        <select value={selectedDate} onChange={handleDateChange}>
          <option value="">Select a date</option>
          {availableDates.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
        <label>Patient Name:</label>
        <input
          type="text"
          value={patientName}
          onChange={handlePatientNameChange}
        />
        <button onClick={handleBookAppointment}>Book Appointment</button>
        <p>{bookingStatus}</p>
      </Form>
    </Container>
  );
}

export default AppointmentBooking;
