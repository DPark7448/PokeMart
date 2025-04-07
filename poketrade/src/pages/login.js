// src/pages/login.js
import { Card, Form, Button } from "react-bootstrap";
import { useRouter } from "next/router"; //to redirect
import { useState } from "react"; //to manage state
import { useAtom } from "jotai";
import { loggedInAtom } from "../store/loginAtom"; //import the atom to manage login state
import { Alert } from "react-bootstrap";
import {favoritesAtom} from "../store/favoritesAtom"; //import the atom to manage favorites state
import { searchHistoryAtom } from "../store/searchHistoryAtom"; //import the atom to manage search history state
import { getFavorites, getHistory } from "../utils/userData"; //import the functions to get favorites and search history
import { authenticateUser } from "../lib/authenticate"; //import function to authenticate user

export default function Login(props) {
  const router = useRouter(); //hook to access the router object
  const [userName, setUserName] = useState(""); //get the userName from props
  const [password, setPassword] = useState(""); //get the password from props
  const [setLoggedIn] = useAtom(loggedInAtom);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [setFavoritesList] = useAtom(favoritesAtom);
const [setSearchHistory] = useAtom(searchHistoryAtom);

//create updateAtoms function to update the favorites and search history atoms (called after successful login)
async function updateAtoms() {
  setFavoritesList(await getFavorites());
  setSearchHistory(await getHistory());
}
  const handleSubmit = async(e) => {
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

    if(!userName || !password){
      setError("Please enter both username and password.");
      setLoading(false);
      return;
    }
    try {
     // const res = await fetch("/api/user/login", options);
     const result = await authenticateUser(userName, password);
     if (result.success) {
      localStorage.setItem("token", result.token);//store token in local storage      
      setLoggedIn(true);
      await updateAtoms(); //call updateAtoms after successful login and update the favorites and search history atoms
      router.push("/favorites"); //redirect to favorites page
        
        // If the API returns 404 indicating the user was not found
      } else if (res.status === 404){
        setError("User not registered. Please register first.")
        setLoading(false);
      }else{
        console.log(await res.text());
        setLoading(false);
        setError("Invalid username or password. Please try again.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Card bg="light" className="m-5 p-2">
        <Card.Body>
          <h2>Login</h2>
          <p>Enter your login information below:</p>
          <br />
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>User:</Form.Label>
              <Form.Control
                type="text"
                id="userName"
                name="userName"
                onChange={(e) => setUserName(e.target.value.trim())}
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
            <Button variant="primary" className="pull-right" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
