// src/pages/register.js
import { Card, Form, Button, Alert } from "react-bootstrap"; // Import Alert
import { useRouter } from "next/router"; //to redirect
import { useState } from "react"; //to manage state
import { registerUser } from "../lib/authenticate";

export default function Register() {
  const router = useRouter(); //hook to access the router object
  const [userName, setUserName] = useState(""); //get the userName from props
  const [password, setPassword] = useState(""); //get the password from props
  const [confirmPass, setConfirmPass] = useState(""); //get the password2 from props
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      setError("Passwords don't match");
      return;
    }
  
    try {
      const result = await registerUser(userName, password, confirmPass);
      if (result.success) {
        setError(null);
        alert("User successfully created");
        router.push("/login");
      } else {
        setError(result.message || "Registration failed.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Card bg="light" className="m-5 p-2">
        <Card.Body>
          <h2>Register</h2>
          <p>Register for an account:</p>
          <br />
          {error && <Alert variant="danger">{error}</Alert>} {/* Use Alert */}
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
        </Card.Body>
      </Card>
    </>
  );
}
