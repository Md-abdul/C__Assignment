import React, { useState } from "react";
import axios from "axios";

function AppointmentBooking() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [bookingStatus, setBookingStatus] = useState("");

  const doctors = ["Phil Hermonyx", "Phil Hermonyx", "Phil Hermonyx"];
  const availableDates = ["20-10-23", "20-10-23", "20-10-23"];

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
    <div>
      <h2>Appointment Booking</h2>
      <form>
        <label>Select Doctor:</label>
        <select value={selectedDoctor} onChange={handleDoctorChange}>
          <option value="">Select a doctor</option>
          <option value="Phil Hermonyx">Phil Hermonyx</option>
          <option value="Len Don Ayer">Len Don Ayer</option>
          <option value="Fallon Archez">Fallon Archez</option>
          {/* {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name}
            </option>
          ))} */}
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
      </form>
    </div>
  );
}

export default AppointmentBooking;
