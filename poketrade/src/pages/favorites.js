//src/pages/favorites.js
import { useRouter } from "next/router"; //to redirect
import { useAtom } from "jotai";
import { loggedInAtom } from "../store/loginAtom";
import { useEffect, useState } from "react";
import Link from "next/link";
import { set } from "mongoose";
import CardAPIItem from "components/CardAPIItem";
import CardList from "components/CardList";
import Pagination from "components/Pagination";

export default function FavoritesPage() {
  const router = useRouter();
  const [loggedIn] = useAtom(loggedInAtom);
  const [favList, setFavList] = useState([]);
  const [eleList, setEleList] = useState(<>Loading...</>);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentCards, setCurrentCards] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 4;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setStartIndex((page - 1) * cardsPerPage);
    }
  };

  useEffect(() => {
    let len = 0;
    setEleList(<>Loading...</>);
    if (!loggedIn && !localStorage.getItem("token")) {
      router.push("/login");
      return;
    }
    setFavList([]);
    setCurrentCards([]);

    const token = localStorage.getItem("token");
    fetch("/api/user/get/favorites", {
      method: "GET",
      headers: { authorization: token },
    })
      .then((res) => {
        return res.json();
      })
      .then((val) => {
        console.log(startIndex);
        len = Math.ceil(val.favorites.length / cardsPerPage);
        for (
          let i = startIndex, count = 0;
          i < val.favorites.length && count < cardsPerPage;
          i++, count++
        ) {
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

    // loads page after 500 milliseconds to account for loading data via the api
    setTimeout(() => {
      if (currentCards.length === 0) currentCards.push(...favList);
      setTotalPages(len);
      setEleList(<>{<CardList cards={currentCards} useLocal={true} />}</>);
    }, 500);
  }, [router.isReady, currentPage]);
  return (
    <>
      <div className="container mt-4">
        <h1>Favorites</h1>
        {eleList}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}
