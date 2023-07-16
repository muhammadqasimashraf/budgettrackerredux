import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import "../../src/App.css";
import { userAction } from "../actions/UserActions";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);
  console.log("userStae", userState);

  // const navigateToDashboard = () => {
  //   // 👇️ navigate to /contacts
  //   navigate("/dashboard");
  // };
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveData = (email) => {
    dispatch(userAction.setEmail(email));
  };

  const handleSubmit = (event, values) => {
    console.log(event);
    console.log(values);
    // event.preventDefault();
    // // Perform login logic here
    // console.log("Email:", email);
    // // console.log("Password:", password);
    // saveData(email);
    // dispatch(userAction(() => setPassword(password)));
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
                name="email"
                onChange={(e) => {
                  //  console.log("e in email", e);
                  onInputChange(e);
                }}
                className="shadow-none"
              />
            </Form.Group>
            <Form.Group className="d-flex flex-column align-items-start mt-3 ">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                name="password"
                onChange={(e) => onInputChange(e)}
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
