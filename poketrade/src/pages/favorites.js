//src/pages/favorites.js
import { useRouter } from "next/router"; //to redirect
import { useAtom } from "jotai";
import { loggedInAtom } from "../store/loginAtom";
import { useEffect, useState } from "react";
import Link from "next/link";
import { set } from "mongoose";
import CardAPIItem from "components/CardAPIItem";
import CardList from "components/CardList";

export default function FavoritesPage() {
  const router = useRouter();
  const [loggedIn] = useAtom(loggedInAtom);
  const [favList, setFavList] = useState([]);
  const [eleList, setEleList] = useState(<>Loading...</>);
  useEffect(() => {
    if (!loggedIn && !localStorage.getItem("token")) {
      router.push("/login");
      return;
    }
    setFavList([]);
    const token = localStorage.getItem("token");
    fetch("/api/user/get/favorites", {
      method: "GET",
      headers: { authorization: token },
    })
      .then((res) => {
        return res.json();
      })
      .then((val) => {
        for (let i = 0; i < val.favorites.length && i < 50; i++) {
          fetch(`/api/products/${val.favorites[i].cardId}`)
            .then((res) => {
              return res.json();
            })
            .then((val) => {
              console.log(val);
              if (!favList.find((v) => v.id === val.id)) favList.push(val);
            })
            .catch((err) => console.log("Card error: " + err));
        }
      })
      .catch((err) => console.log("Favorites error" + err));

    // loads page after 3 seconds to account for loading data via the api
    setTimeout(() => {
      console.log(favList);
      setEleList(<>{<CardList cards={favList} useLocal={true} />}</>);
    }, 3000);
  }, [router.isReady]);
  return (
    <>
      <div className="container mt-4">
        <h1>Favorites</h1>
        {eleList}
      </div>
    </>
  );
}
