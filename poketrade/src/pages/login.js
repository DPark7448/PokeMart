// Import React and the useState hook for managing component state
import React, { useState } from 'react';
// Import the Profile component to be shown after login
import Profile from '../components/Profile';

// Define the Login component as a functional component
function Login() {
    // Declare a state variable for the username with an initial empty string
    const [username, setUsername] = useState("");
    // Declare a state variable to control whether the Profile component should be shown
    const [showProfile, setShowProfile] = useState(false);
    const [user, setUser] = useState("null");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async() => {
      try{
        const response = await fetch('http://localhost:3000/api/login', {
          email: username,
          password: password,
      });
    const loggedInUser = response.sata;
    localStorage.setItem("user", JSON.stringify(loggedInUser));
      setUser(loggedInUser);
      setShowProfile(true);
      setError("");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };
    // Render the login form and handle user interactions
    return (
    <div style={{ padding: '2rem' }}>
      <h2>Login</h2>

      {/* Input field for the email/username */}
      <input
      type="text"
      placeholder="Email..."
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />

      {/* Input field for the password */}
      <input
      type="password"
      placeholder="Password..."
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      {/* Button to trigger the login process */}
      <button onClick={handleLogin}>Login</button>

      {/* Display error message if login fails */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Show the Profile component if the user is successfully logged in */}
      {showProfile && <Profile user={user} />}
    </div>
    );
}

export default Login;