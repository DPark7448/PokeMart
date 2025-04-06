// src/pages/register.js
import { Card, Form, Button } from "react-bootstrap";
import { useRouter } from "next/router"; //to redirect
import { useState } from "react"; //to manage state
import jwt from "jsonwebtoken";

export default function Register(props) {
  const router = useRouter(); //hook to access the router object
  const [userName, setUserName] = useState(""); //get the userName from props
  const [password, setPassword] = useState(""); //get the password from props
  const [confirmPass, setConfirmPass] = useState(""); //get the password from props

  const handleSubmit = (e) => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    };
    e.preventDefault();
    if (password !== confirmPass) {
      alert("Passwords don't match");
      return;
    }
    fetch("/api/user/create", options)
      .then((res) => {
        if (res.status === 200) {
          alert("User successfully created");
          router.push("/login"); //redirect to favorites page
        } else console.log(res.text());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Card bg="light">
        <Card.Body>
          <h2>Register</h2>
        </Card.Body>
      </Card>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>User:</Form.Label>
          <Form.Control
            type="text"
            id="userName"
            name="userName"
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value.trim())}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            onChange={(e) => setConfirmPass(e.target.value.trim())}
          />
        </Form.Group>
        <br />
        <Button variant="primary" className="pull-right" type="submit">
          Register
        </Button>
      </Form>
    </>
  );
}
