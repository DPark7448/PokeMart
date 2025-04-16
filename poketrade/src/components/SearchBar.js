import React, { useRef, useState, useEffect } from "react";
import {
  Button,
  Form,
  InputGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { useRouter } from "next/router";
import { useAtom } from "jotai";

import { loggedInAtom } from "../store/loginAtom";

export default function SearchBar() {
  const searchInputRef = useRef(null);
  const router = useRouter();
  const [loggedIn] = useAtom(loggedInAtom);
  const [hisEle, setHisEle] = useState(<></>);
  const [history, setHistory] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = searchInputRef.current.value.trim();
    if (!value) return;
    
      const search = encodeURIComponent(value);
      const token = localStorage.getItem("token");

      if (!token || !loggedIn) {
        router.push("/login");
        return;
      }
      if (loggedIn) {
        fetch(`/api/user/search/${search}`, {
          method: "PUT",
          headers: { authorization: token },
        }).finally(() => router.push(`/search?query=${search}`));
      } else{
    router.push(`/search?query=${search}`);
      }
  };

  useEffect(() => {
    setHisEle(<></>);
    setHistory([]);
    if (!loggedIn) return;
    const token = localStorage.getItem("token");
    if (!token) return;
    fetch(`/api/user/get/history`, {
      method: "GET",
      headers: { authorization: token },
    })
      .then((res) => {
        return res.json();
      })
      .then((val) => {
        if (history.length > 0) return;
        history.push(...val);
        setHisEle(
          <>
            {history.map((s) => {
              return (
                <Dropdown.Item key={s._id} href={`/search?query=${s.search}`}>
                  {decodeURIComponent(s.search)}
                </Dropdown.Item>
              );
            })}
          </>
        );
      });
  }, [router, loggedIn]);

  return (
    <Form className="d-flex" onSubmit={handleSearch} style={{ width: "400px" }}>
      <InputGroup>
        <Form.Control
          className="form-control"
          type="search"
          placeholder="Search for cards!"
          ref={searchInputRef}
        />
        {loggedIn && (
          <DropdownButton
            variant="outline-secondary"
            title="History"
            className="fs-6"
            align={"end"}
          >
            {hisEle}
          </DropdownButton>
        )}
      </InputGroup>

      <Button
        variant="outline-danger"
        className="btn ms-2 px-3"
        type="button"
        onClick={() => (searchInputRef.current.value = "")}
      >
        Clear
      </Button>
      <Button
        variant="primary"
        className="btn ms-2 px-3"
        type="submit"
      >
        Search
      </Button>

    </Form>
  );
}
