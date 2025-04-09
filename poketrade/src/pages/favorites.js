//src/pages/favorites.js
import { useRouter } from "next/router"; //to redirect
import { useAtom } from "jotai";
import { loggedInAtom } from "../store/loginAtom";
import { useEffect, useState } from "react";
import Link from "next/link";
import { set } from "mongoose";

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
          fetch(`https://api.pokemontcg.io/v2/cards/${val.favorites[i].cardId}`)
            .then((res) => {
              return res.json();
            })
            .then((val) => {
              favList.push(val);
            })
            .catch((err) => console.log("Card error: " + err));
        }
      })
      .catch((err) => console.log("Favorites error" + err));
    setTimeout(() => {
      console.log(favList);
      setEleList(
        <>
          {favList.map((card) => (
            <>
              <div className="col-md-3 mb-4" key={card.data.id}>
                <div className="card h-100">
                  <img
                    src={
                      card.data.images?.small?.startsWith("http")
                        ? card.data.images.small
                        : "/placeholder.png"
                    }
                    alt={card.data.name || "Pokémon Card"}
                    className="card-img-top"
                    width="100%"
                    height="auto"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{card.data.name}</h5>
                    <p className="text-muted">
                      $
                      {(
                        card.data.cardmarket.prices.averageSellPrice / 100
                      ).toFixed(2)}
                    </p>
                    <Link
                      href={`/cards/${card.data.id}`}
                      className="btn btn-primary"
                    >
                      View Card
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </>
      );
    }, 3000);
  }, []);
  return (
    <>
      <div className="container mt-4">
        <h1>Favorites</h1>
        {eleList}
      </div>
    </>
  );
}
