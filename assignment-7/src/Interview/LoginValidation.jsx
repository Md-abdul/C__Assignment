import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 50px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
`;

const SubmitButton = styled.input`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

export const LoginValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    const passwordLength = password.length >= 8;
    const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const upperCase = /[A-Z]/.test(password);

    const validationMessage = [];

    if (!passwordLength) {
      validationMessage.push(" -At least 8 characters long");
    }
    if (!specialCharacter) {
      validationMessage.push(" -At least one special character");
    }
    if (!upperCase) {
      validationMessage.push(" -At least one uppercase letter");
    }

    if (validationMessage.length > 0) {
      alert(`Your password is not following the conditions:\n${validationMessage}`);
      return;
    }

    const userInfo = {
      email,
      password,
    };

    try {
      const response = await axios.post(`https://fakestoreapi.com/products`, userInfo);
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    console.log(userInfo);
  };

  return (
    <FormContainer>
        <h1>Signup here</h1>
      <form onSubmit={handleForm}>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br/>
        <SubmitButton type="submit" value="Submit" />
      </form>
    </FormContainer>
  );
};
