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

const DoctorsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DoctorItem = styled.li`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const DoctorDetail = styled.div`
  flex: 1;
  margin-right: 10px;
`;

function DoctorManagement() {
  const [doctors, setDoctors] = useState([]);
  const [newDoctor, setNewDoctor] = useState({
    name: "",
    specialties: [],
    availability: [],
    appointmentRate: "",
  });

  const fetchDoctors = () => {
    // Fetch the list of doctors from the API
    axios.get("http://localhost:8080/Doctor").then((response) => {
      setDoctors(response.data);
    });
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleAddDoctor = () => {
    if (
      newDoctor.name &&
      newDoctor.specialties.length > 0 &&
      newDoctor.availability.length > 0 &&
      newDoctor.appointmentRate
    ) {
      // Send a POST request to add a new doctor
      axios
        .post("http://localhost:8080/Doctor", newDoctor)
        .then((response) => {
          fetchDoctors(); // Refresh the doctor list
          setNewDoctor({
            name: "",
            specialties: [],
            availability: [],
            appointmentRate: "",
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <Container>
      <Header>Doctor Management</Header>
      <Section>
        <h3>Add/Edit Doctors</h3>
        <Input
          type="text"
          placeholder="Doctor Name"
          value={newDoctor.name}
          onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Specialties (comma-separated)"
          value={newDoctor.specialties}
          onChange={(e) =>
            setNewDoctor({
              ...newDoctor,
              specialties: e.target.value.split(","),
            })
          }
        />
        <Input
          type="text"
          placeholder="Availability (comma-separated)"
          value={newDoctor.availability}
          onChange={(e) =>
            setNewDoctor({
              ...newDoctor,
              availability: e.target.value.split(","),
            })
          }
        />
        <Input
          type="text"
          placeholder="Appointment Rate"
          value={newDoctor.appointmentRate}
          onChange={(e) =>
            setNewDoctor({ ...newDoctor, appointmentRate: e.target.value })
          }
        />
        <Button onClick={handleAddDoctor}>Add Doctor</Button>
      </Section>
      <Section>
        <h3>Doctors List</h3>
        <DoctorsList>
          {doctors.map((doctor) => (
            <DoctorItem key={doctor.id}>
              <DoctorDetail>
                <strong>Name:</strong> {doctor.name}
              </DoctorDetail>
              <DoctorDetail>
                <strong>Specialties:</strong> {doctor.specialties.join(", ")}
              </DoctorDetail>
              <DoctorDetail>
                <strong>Availability:</strong> {doctor.availability.join(", ")}
              </DoctorDetail>
              <DoctorDetail>
                <strong>Rate:</strong> {doctor.appointmentRate}
              </DoctorDetail>
            </DoctorItem>
          ))}
        </DoctorsList>
      </Section>
    </Container>
  );
}

export default DoctorManagement;
