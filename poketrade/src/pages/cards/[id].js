import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { useAtom } from "jotai";
import products from "../../data/products";
import Link from "next/link";
import { loggedInAtom } from "../../store/loginAtom";
import typeColors from "../../utils/typeColors";

export default function CardDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [loggedIn] = useAtom(loggedInAtom);
  const [favEle, setFavEle] = useState(<></>);
  const card = products.find((c) => c.id === id);

  useEffect(() => {
    if (!id) return;
    const token = localStorage.getItem("token");
    if (token) {
      fetch("/api/user/get/favorites", {
        method: "GET",
        headers: { authorization: token },
      })
        .then((res) => {
          return res.json();
        })
        .then((val) => {
          const fav = val.favorites.find((c) => c.cardId === card.id);
          if (!fav) {
            setFavEle(
              <Button
                className="btn btn-success mx-2"
                onClick={() => {
                  fetch("/api/user/favorite/" + card.id, {
                    method: "PUT",
                    headers: { authorization: token },
                  })
                    .then(async (res) => {
                      if (res.status === 200) {
                        alert("Card successfully added to favorites");
                        router.reload();
                      } else
                        alert("An error has occurred: " + (await res.text()));
                    })
                    .catch((err) => console.log(err));
                }}
              >
                Add To Favorites
              </Button>
            );
          } else {
            setFavEle(
              <Button
                className="btn btn-danger mx-2"
                onClick={() => {
                  fetch("/api/user/favorite/" + card.id, {
                    method: "DELETE",
                    headers: { authorization: token },
                  })
                    .then(async (res) => {
                      if (res.status === 200) {
                        alert("Card successfully removed from favorites");
                        router.reload();
                      } else
                        alert("An error has occurred: " + (await res.text()));
                    })
                    .catch((err) => console.log(err));
                }}
              >
                Remove From Favorites
              </Button>
            );
          }
        })
        .catch((err) => console.log(err));
    }
  }, [router.isReady]);

  if (!card) {
    return (
      <div className="container mt-5">
        <h2 className="text-danger">Card not found</h2>
        <p>
          Try searching again or return to the <Link href="/">homepage</Link>.
        </p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <div className="card shadow">
            <img
              src={card.image || "/placeholder.png"}
              alt={card.name}
              className="card-img-top"
            />
          </div>
        </div>
        <div className="col-md-7">
          <h2 className="fw-bold">{card.name}</h2>
          <p className="text-muted">{card.description}</p>

          <ul className="list-group mb-4">
            <li className="list-group-item">
              <strong>ID:</strong> {card.id}
            </li>
            <li className="list-group-item">
              <strong>Price:</strong> ${(card.price / 100).toFixed(2)}
            </li>
            <li className="list-group-item">
              <strong>Status:</strong>{" "}
              {card.discontinued ? (
                <span className="badge bg-danger">Discontinued</span>
              ) : (
                <span className="badge bg-success">Available</span>
              )}
            </li>
            <li className="list-group-item">
              <strong>Categories:</strong>{" "}
              {card.categories && card.categories.length > 0 ? (
                card.categories.map((cat, i) => {
                  const color = typeColors[cat.toLowerCase()] || "secondary";
                  return (
                    <span key={i} className={`badge bg-${color} me-2`}>
                      {cat}
                    </span>
                  );
                })
              ) : (
                <span className="text-muted">None</span>
              )}
            </li>
          </ul>

          <div className="mt-3">
            {favEle}
            <Link href="/" className="btn btn-outline-dark">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
