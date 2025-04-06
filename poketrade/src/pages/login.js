// src/pages/login.js
import { Card, Form, Button } from "react-bootstrap";
import { useRouter } from "next/router"; //to redirect
import { useState } from "react"; //to manage state
import jwt from "jsonwebtoken";

export default function Login(props) {
  const router = useRouter(); //hook to access the router object
  const [userName, setUserName] = useState(""); //get the userName from props
  const [password, setPassword] = useState(""); //get the password from props

  const handleSubmit = (e) => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    };
    e.preventDefault();
    fetch("/api/user/login", options)
      .then((res) => {
        if (res.status === 200) {
          const token = jwt.sign(
            { username: userName },
            process.env.NEXT_PUBLIC_SECRET
          );
          console.log(token);
          localStorage.setItem("token", JSON.stringify(token), {
            expiresIn: 3600,
          });
          router.push("/favorites"); //redirect to favorites page
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
          <h2>Login</h2>Enter your login information below:
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br />
        <Button variant="primary" className="pull-right" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
}
