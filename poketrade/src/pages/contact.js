// src/pages/contact.js
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.surname || !formData.email || !formData.message) {
      setError("Please fill out all fields.");
      return;
    }

     try {
      setSubmitted(true);
      setError(null);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

   

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ maxWidth: "500px", width: "100%" }} className="shadow p-4">
        <Card.Body>
          <h3 className="text-center mb-3">Contact Us</h3>
          <p className="text-muted text-center mb-4">We&apos;d love to hear from you.</p>

          {error && <Alert variant="danger">{error}</Alert>}
          {submitted && <Alert variant="success">Message sent successfully!</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="you@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write your message..."
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="dark" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
