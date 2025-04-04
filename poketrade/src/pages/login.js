// src/pages/login.js
import { Card, Form, Button } from "react-bootstrap";
import { useRouter } from "next/router"; //to redirect
import { useState } from "react"; //to manage state

export default function Login(props) {
  const router = useRouter(); //hook to access the router object 
  const [userName, setUserName] = useState(""); //get the userName from props
  const [password, setPassword] = useState(""); //get the password from props
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    router.push("/favorites"); //redirect to favorites page
  };

  return (
    <>
      <Card bg="light">
        <Card.Body><h2>Login</h2>Enter your login information below:</Card.Body>
      </Card>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>User:</Form.Label><Form.Control type="text" id="userName" name="userName" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Password:</Form.Label><Form.Control type="password" id="password" name="password" />
        </Form.Group>
        <br />
        <Button variant="primary" className="pull-right" type="submit">Login</Button>
      </Form>
    </>
  );
}