import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import { useAtom } from "jotai";
import { loggedInAtom } from "store/loginAtom";

export default function CardItem(props) {
  const p = props.card;
  const hasButton = props.hasButton;
  const [loggedIn] = useAtom(loggedInAtom);
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  const handleToggle = () => {
    const token = localStorage.getItem("token");
    switch (isFavorite) {
      case true:
        fetch("/api/user/favorite/" + p.id, {
          method: "DELETE",
          headers: { authorization: token },
        })
          .then(async (res) => {
            if (res.status === 200) {
              setIsFavorite(false);
            }
          })
          .catch((err) => console.log(err));
        break;
      default:
        fetch("/api/user/favorite/" + p.id, {
          method: "PUT",
          headers: { authorization: token },
        })
          .then(async (res) => {
            if (res.status === 200) {
              setIsFavorite(true);
            }
          })
          .catch((err) => console.log(err));
        break;
    }
  };
return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img
          //img place holder
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title fw-semibold">{card.name}</h5>
            <p className="card-text small text-muted">
              {card.description.length > 100
                ? card.description.slice(0, 100) + '...'
                : card.description}
            </p>

            {card.categories && card.categories.map((type, i) => {
              const color = typeColors[type.toLowerCase()] || 'secondary';
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
            <Link href={`/cards/${card.id}`} className="btn btn-sm btn-outline-primary w-100">
              View Card
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// {
//   hasButton && (
//     <Col>
//       <Link href={`/cards/${p.id}`} className="btn btn-primary">
//         View Card
//       </Link>
//       {loggedIn && (
//         <button
//           className={`btn btn-sm ${
//             isFavorite ? "btn-danger" : "btn-outline-danger"
//           } ms-2 pb-2`}
//           onClick={handleToggle}
//         >
//           {isFavorite ? "♥" : "♡"}
//         </button>
//       )}
//     </Col>
//   );
// }
