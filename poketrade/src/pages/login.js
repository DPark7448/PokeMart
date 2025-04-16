// src/pages/login.js
import { Card, Form, Button } from "react-bootstrap";
import { useRouter } from "next/router"; //to redirect
import { useState } from "react"; //to manage state
import { useAtom } from "jotai";
import { loggedInAtom } from "../store/loginAtom"; //import the atom to manage login state
import { Alert } from "react-bootstrap";
import { favoritesAtom } from "../store/favoritesAtom"; //import the atom to manage favorites state
import { searchHistoryAtom } from "../store/searchHistoryAtom"; //import the atom to manage search history state
import { getFavorites, getHistory } from "../utils/userData"; //import the functions to get favorites and search history
import { authenticateUser } from "../lib/authenticate"; //import function to authenticate user

export default function Login() {
  const router = useRouter(); //hook to access the router object
  const [userName, setUserName] = useState(""); //get the userName from props
  const [password, setPassword] = useState(""); //get the password from props
  const [loggedIn, setLoggedIn] = useAtom(loggedInAtom);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [favoritesList, setFavoritesList] = useAtom(favoritesAtom);
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);

  //create updateAtoms function to update the favorites and search history atoms (called after successful login)
  async function updateAtoms() {
    setFavoritesList(await getFavorites());
    setSearchHistory(await getHistory());
  }
  const handleSubmit = async (e) => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    };
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!userName || !password) {
      setError("Please enter both username and password.");
      setLoading(false);
      return;
    }
    try {
      // const res = await fetch("/api/user/login", options)
      const result = await authenticateUser(userName, password);
      if (result.success) {
        localStorage.setItem("token", result.token); //store token in local storage
        setLoggedIn(true);
        await updateAtoms(); //call updateAtoms after successful login and update the favorites and search history atoms
        router.push("/favorites"); //redirect to favorites page

        // If the API returns 404 indicating the user was not found
      } else if (result.status === 404) {
        setError("User not registered. Please register first.");
        setLoading(false);
      } else {
        //console.log(await res.text());
        setLoading(false);
        setError("Invalid username or password. Please try again.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      {/*made login page same as register page */}
      <Card style={{ maxWidth: "400px", width: "100%" }} className="shadow p-4">
        <Card.Body>
          <h3 className="mb-3 text-center">Login</h3>
          <p className="text-muted text-center mb-4">Enter your login information below</p>
          
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                id="userName"
                name="userName"
                placeholder="Enter your username"
                onChange={(e) => setUserName(e.target.value.trim())}
                disabled={loading}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value.trim())}
                disabled={loading}
              />
            </Form.Group>

            <Button variant="primary" className="w-100" type="submit" disabled={loading}>
              {loading ? "Please wait..." : "Login"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
