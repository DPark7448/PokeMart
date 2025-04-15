// src/pages/register.js
import { Card, Form, Button, Alert } from "react-bootstrap"; // Import Alert
import { useRouter } from "next/router"; //to redirect
import { useState } from "react"; //to manage state
import { registerUser } from "../lib/authenticate";

export default function Register() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      setError("Passwords don't match");
      return;
    }

    try {
      const result = await registerUser(userName, password, confirmPass);
      console.log("why");
      if (result.success) {
        setError(null);
        alert("User successfully created");
        router.push("/login");
      } else if (result.message === "This user already exists") {
        setError("User already exists");
      } else {
        setError(result.message || "Registration failed.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ maxWidth: "400px", width: "100%" }} className="shadow p-4">
        <Card.Body>
          <h3 className="mb-3 text-center">Create Account</h3>
          <p className="text-muted text-center mb-4">
            Register to start using the app
          </p>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setUserName(e.target.value.trim())}
                placeholder="Choose a username"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value.trim())}
                placeholder="Create a password"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setConfirmPass(e.target.value.trim())}
                placeholder="Confirm your password"
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100">
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
