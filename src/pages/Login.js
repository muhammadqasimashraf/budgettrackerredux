import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import "../../src/App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);
  console.log("userStae", userState);
  const navigate = useNavigate();
  // const navigateToDashboard = () => {
  //   // 👇️ navigate to /contacts
  //   navigate("/dashboard");
  // };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    if (userState.email === email) {
      navigate("/dashboard");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Card style={{ width: "300px" }}>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="d-flex flex-column align-items-start mt-3 ">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="shadow-none"
              />
            </Form.Group>
            <Form.Group className="d-flex flex-column align-items-start mt-3 ">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="shadow-none"
              />
            </Form.Group>
            <button
              className="mt-2 submitBtn border-none text-white "
              type="submit"
            >
              Login
            </button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
  {
    console.log("Component Renders");
  }
};

export default Login;
