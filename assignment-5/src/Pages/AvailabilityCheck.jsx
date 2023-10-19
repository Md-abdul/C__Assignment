import React, { useState, useEffect } from "react";
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

const Section = styled.div`
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

const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Status = styled.p`
  margin-top: 10px;
`;

function AvailabilityCheck() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availabilityStatus, setAvailabilityStatus] = useState("");

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch the list of doctors from the API when the component mounts
    axios.get("http://localhost:8080/Doctor").then((response) => {
      setDoctors(response.data);
    });
  }, []);

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const checkAvailability = (e) => {
    e.preventDefault();
    if (selectedDoctor && selectedDate) {
      // Find the selected doctor in the list of doctors
      const doctor = doctors.find((doc) => doc.name === selectedDoctor);

      if (doctor) {
        // Check if the selected date is in the doctor's availability
        if (doctor.availability.includes(selectedDate)) {
          setAvailabilityStatus(
            `Doctor ${selectedDoctor} is available on ${selectedDate}.`
          );
        } else {
          setAvailabilityStatus(
            `Doctor ${selectedDoctor} is not available on ${selectedDate}.`
          );
        }
      } else {
        setAvailabilityStatus("Doctor not found.");
      }
    } else {
      setAvailabilityStatus("Please select a doctor and a date.");
    }
  };

  return (
    <Container>
      <Header>Availability Check</Header>
      <Section>
        <form>
          <Label>Select Doctor:</Label>
          <Select value={selectedDoctor} onChange={handleDoctorChange}>
            <option value="">Select a doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.name}>
                {doctor.name}
              </option>
            ))}
          </Select>
          <Label>Select Date:</Label>
          <Input type="date" value={selectedDate} onChange={handleDateChange} />
          <Button onClick={checkAvailability}>Check Availability</Button>
        </form>
      </Section>
      <Section>
        <Status>{availabilityStatus}</Status>
      </Section>
    </Container>
  );
}

export default AvailabilityCheck;
