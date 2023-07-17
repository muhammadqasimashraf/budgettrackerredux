import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import userData from "../credentials";
import ErrorMessage from "../components/ErrorMessage";
import "../../src/App.css";
import { loginAction } from "../actions/UserActions";
import { logoutAction } from "../actions/UserActions";

const Login = () => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);
  console.log("userState Email is ", userState.email);

  // const navigateToDashboard = () => {
  //   // 👇️ navigate to /contacts
  //   navigate("/dashboard");
  // };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event, values) => {
    event.preventDefault();
    console.log(event);
    // console.log(values);
    console.log(user);
    const newuser = userData.find(
      (elem) =>
        elem.email === user.email && elem.password.toString() === user.password
    );
    console.log(newuser);
    if (newuser) {
      // Dispatch the login action
      dispatch(loginAction(newuser));
      //  setErrorMessage("");
      console.log("The user is logged in ");
      navigate("/dashboard");
    } else {
      //  setErrorMessage("Invalid email or password");
      setErrorMessage("Invalid Eamil or UserName!");
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
            {errorMessage && (
              <div className="error text-danger"> {errorMessage} </div>
            )}
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
