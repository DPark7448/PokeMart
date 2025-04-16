import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import { useAtom } from "jotai";
import { loggedInAtom } from "store/loginAtom";
import typeColors from "utils/typeColors";

export default function CardItem(props) {
  const card = props.card;
  const hasButton = props.hasButton; 
  const [loggedIn] = useAtom(loggedInAtom);
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  const handleToggle = () => {
    const token = localStorage.getItem("token");
    const method = isFavorite ? "DELETE" : "PUT";

    fetch("/api/user/favorite/" + card.id, {
      method,
      headers: { authorization: token },
    })
      .then((res) => {
        if (res.status === 200) {
          setIsFavorite(!isFavorite);
        }
      })
      .catch((err) => console.log("Favorite toggle error:", err));
  };

  return (
    <div className="col-md-2 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img src={card.image} alt={card.name} />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title fw-semibold">{card.name}</h5>
            <p className="card-text small text-muted">
              {card.description.length > 100
                ? card.description.slice(0, 100) + "..."
                : card.description}
            </p>

            {card.categories &&
              card.categories.map((type, i) => {
                const color = typeColors[type.toLowerCase()] || "secondary";
                return (
                  <span key={i} className={`badge bg-${color} me-2`}>
                    {type}
                  </span>
                );
              })}
          </div>
          <div className="mt-2">
            <p className="mb-1 fw-bold text-success">
              ${(card.price / 100).toFixed(2)}
            </p>
            {card.discontinued && (
              <span className="badge bg-danger mb-2">Discontinued</span>
            )}
            <Link
              href={`/cards/${card.id}`}
              className="btn btn-sm btn-outline-primary w-100"
            >
              View Card
            </Link>

            {loggedIn && hasButton && (
              <button
                className={`btn btn-sm mt-2 w-100 ${
                  isFavorite ? "btn-danger" : "btn-outline-danger"
                }`}
                onClick={handleToggle}
              >
                {isFavorite ? "♥" : "♡"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
