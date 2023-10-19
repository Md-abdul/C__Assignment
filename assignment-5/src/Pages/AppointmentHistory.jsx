import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  margin-top: 15px;
`;

const Header = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Select = styled.select`
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const HistoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const HistoryItem = styled.li`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

function AppointmentHistory() {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [appointmentHistory, setAppointmentHistory] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch the list of doctors from the /Doctor API when the component mounts
    axios.get("http://localhost:8080/Doctor").then((response) => {
      setDoctors(response.data);
    });
  }, []);

  const handleDoctorChange = (event) => {
    const selectedDoctorName = event.target.value;
    setSelectedDoctor(selectedDoctorName);

    if (selectedDoctorName) {
      // Fetch appointment data for the selected doctor from the /Appointment route
      axios
        .get(`http://localhost:8080/Appointment?doctorName=${selectedDoctorName}`)
        .then((response) => {
          setAppointmentHistory(response.data);
        });
    } else {
      setAppointmentHistory([]); // Reset the appointment history when no doctor is selected
    }
  };

  return (
    <Container>
      <Header>Appointment History</Header>
      <Form>
        <Label>Select Doctor:</Label>
        <Select value={selectedDoctor} onChange={handleDoctorChange}>
          <option value="">Select a doctor</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.name}>
              {doctor.name}
            </option>
          ))}
        </Select>
      </Form>
      <div>
        <h3>Appointment History</h3>
        <HistoryList>
          {appointmentHistory.map((appointment) => (
            <HistoryItem key={appointment.id}>
              <strong>Date:</strong> {appointment.date}, <strong>Patient:</strong> {appointment.patient}
              {/* Add more appointment details as needed */}
            </HistoryItem>
          ))}
        </HistoryList>
      </div>
    </Container>
  );
}

export default AppointmentHistory;
