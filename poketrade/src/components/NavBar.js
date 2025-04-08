import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { loggedInAtom } from "../store/loginAtom";

export default function NavBar() {
  const [loggedIn] = useAtom(loggedInAtom);
  const [favEle, setFavEle] = useState(<></>);

  useEffect(() => {
    if (loggedIn) {
      setFavEle(
        <>
          <div className="d-flex gap-2">
            <Link
              href="/favorites"
              className="btn btn-dark btn-sm rounded-pill px-3 py-1"
            >
              Favorites
            </Link>
            <Link
              href="/logout"
              className="btn btn-dark btn-sm rounded-pill px-3 py-1"
            >
              Log Out
            </Link>
          </div>
        </>
      );
    } else {
      setFavEle(
        <>
          <div className="d-flex gap-2">
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
          </div>
        </>
      );
    }
  }, [loggedIn]);

  return (
    <nav className="navbar navbar-light bg-light border-bottom py-3">
      <div className="container-fluid d-flex align-items-center justify-content-between position-relative">
        <div className="d-flex align-items-center gap-4 fs-5">
          <Link href="/" className="navbar-brand fw-bold fs-4 mb-0 Text-dark">
            Poke Mart
          </Link>
          <Link href="/cards" className="nav-link px-2">
            Card List
          </Link>
          <Link href="/about" className="nav-link px-2">
            About
          </Link>
          <Link href="/contact" className="nav-link px-2">
            Contact
          </Link>
        </div>

        <div
          className="position-absolute top-50 start-50 translate-middle"
          style={{ minWidth: "300px" }}
        >
          <SearchBar />
        </div>

        {favEle}
      </div>
    </nav>
  );
}
