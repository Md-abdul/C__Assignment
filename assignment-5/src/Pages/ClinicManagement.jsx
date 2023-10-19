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
  margin-top: 20px;
`;

const Header = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

function ClinicManagement() {
  const [clinics, setClinics] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [newClinicName, setNewClinicName] = useState('');
  const [newDoctorName, setNewDoctorName] = useState('');

  const fetchClinics = () => {
    // Fetch the list of clinics from the API
    axios.get('http://localhost:8080/Clinic').then((response) => {
      setClinics(response.data);
    });
  };

  useEffect(() => {
    fetchClinics();
  }, []);

  const handleAddClinic = () => {
    if (newClinicName) {
      // Send a POST request to add a new clinic
      axios
        .post('http://localhost:8080/Clinic', { name: newClinicName })
        .then((response) => {
          fetchClinics(); // Refresh the clinic list
          setNewClinicName('');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleAddDoctor = () => {
    if (newDoctorName) {
      // Add a new doctor to the list
      setDoctors([...doctors, { id: doctors.length + 1, name: newDoctorName }]);
      setNewDoctorName('');
    }
  };

  return (
    <Container>
      <Header>Clinic Management</Header>
      <Section>
        <h3>Manage Clinics</h3>
        <Input
          type="text"
          placeholder="Clinic Name"
          value={newClinicName}
          onChange={(e) => setNewClinicName(e.target.value)}
        />
        <Button onClick={handleAddClinic}>Add Clinic</Button>
        <List>
          {clinics.map((clinic) => (
            <ListItem key={clinic.id}>{clinic.name}</ListItem>
          ))}
        </List>
      </Section>
      <Section>
        <h3>Manage Doctors</h3>
        <Input
          type="text"
          placeholder="Doctor Name"
          value={newDoctorName}
          onChange={(e) => setNewDoctorName(e.target.value)}
        />
        <Button onClick={handleAddDoctor}>Add Doctor</Button>
        <List>
          {doctors.map((doctor) => (
            <ListItem key={doctor.id}>{doctor.name}</ListItem>
          ))}
        </List>
      </Section>
    </Container>
  );
}

export default ClinicManagement;
