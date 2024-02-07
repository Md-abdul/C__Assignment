import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  width: 200px;
  padding: 8px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
  font-weight: bold;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const FormHandler = () => {
  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    age: 0,
    password: "",
  });
  const [formEnter, setFormEnter] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const ageValue = name === "age" ? parseInt(value) : value

    setFormData({ ...formData, [name]: ageValue });

    /*
     const handelChange = (e) => {
     setformData({...formData, [e.target.name]:e.target.value})
      }
     */
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormEnter((prevEnter) => [...prevEnter, formData]);
    console.log(formData)
    setFormData({
      Firstname: "",
      Lastname: "",
      age: 0,
      password: "",
    });
  };

  return (
    <div>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            placeholder="First Name"
            value={formData.Firstname}
            name="Firstname"
            onChange={handleChange}
          />
          <br />
          <FormInput
            type="text"
            placeholder="Last Name"
            value={formData.Lastname}
            name="Lastname"
            onChange={handleChange}
          />
          <br />
          <FormInput
            type="number"
            placeholder="Age"
            value={formData.age}
            name="age"
            onChange={handleChange}
          />
          <br />
          <FormInput
            type="password"
            placeholder="Password"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
          <br />
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </FormContainer>

      <Table>
        <thead>
          <tr>
            <TableHeader>Sr No.</TableHeader>
            <TableHeader>First Name</TableHeader>
            <TableHeader>Last Name</TableHeader>
            <TableHeader>Age</TableHeader>
            <TableHeader>Password</TableHeader>
          </tr>
        </thead>
        <tbody>
          {formEnter.map((el, i) => (
            <tr key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{el.Firstname}</TableCell>
              <TableCell>{el.Lastname}</TableCell>
              <TableCell>{el.age}</TableCell>
              <TableCell>{el.password}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
