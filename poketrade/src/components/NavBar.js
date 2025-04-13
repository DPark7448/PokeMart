import { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAtom } from "jotai";

import SearchBar from "./SearchBar";
import { loggedInAtom } from "../store/loginAtom";

export default function NavBar() {
  const [loggedIn] = useAtom(loggedInAtom);
  const [expanded, setExpanded] = useState(true);
  const [favEle, setFavEle] = useState(<></>);

  useEffect(() => {
    if (loggedIn) {
      setFavEle(
        <>
          <Nav className="d-flex gap-2">
            <Link
              href="/favorites"
              className="btn btn-dark btn-sm rounded-pill px-3 py-1"
            >
              Favorites
            </Link>
            <Link
              href="/logout"
              className="btn btn-dark btn-sm rounded-pill px-3 py-1 text-nowrap"
            >
              Log Out
            </Link>
          </Nav>
        </>
      );
    } else {
      setFavEle(
        <>
          <Nav className="d-flex gap-2">
            <Link
              href="/login"
              className="btn btn-outline-dark btn-sm rounded-pill px-3 py-1"
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="btn btn-dark btn-sm rounded-pill px-3 py-1"
            >
              Register
            </Link>
          </Nav>
        </>
      );
    }
  }, [loggedIn]);

  return (
    <Navbar
      expand="xl"
      className="bg-body-tertiary"
      onToggle={(e) => {
        setExpanded(e);
      }}
    >
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="/" className="fw-bold">
          Poké Mart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav bg-body-tertiary">
          <Nav className="d-flex">
            <Nav.Link href="/cards">Card List</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <div
            className="my-3"
            style={{ marginLeft: "10%", marginRight: "20%" }}
          >
            <SearchBar />
          </div>

          {favEle}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
