// Email Field
<Form.Group controlId="formEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control
    type="email" // Sets the input type to email to enable browser-based validation
    placeholder="Enter email" // Provides guidance text in the empty field
    value={email} // Controlled component: binds this input to the email state variable
    onChange={(e) => setEmail(e.target.value)} // Updates the email state variable when the user types
    required // Ensures the field cannot be submitted empty
  />
</Form.Group>

{/* Password Field */}
<Form.Group controlId="formPassword" className="mt-3">
  <Form.Label>Password</Form.Label>
  <Form.Control
    type="password" // Sets the input to password type, masking user input for privacy
    placeholder="Password" // Placeholder to indicate that the field expects a password
    value={password} // Controlled component: binds the input to the password state variable
    onChange={(e) => setPassword(e.target.value)} // Updates the password state variable when the user types
    required // Ensures the field is filled out before submitting the form
  />
</Form.Group>

{/* Submit Button */}
<Button variant="primary" type="submit" className="mt-4">
  Login
</Button>