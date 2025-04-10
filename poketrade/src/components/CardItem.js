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
    <>
      <Col key={p.id} md={3} className="mb-4">
        <Card className="h-100">
          <Card.Img variant="top" src={p.image} alt={p.name} />
          <Card.Body>
            <Card.Title>{p.name}</Card.Title>
            <Card.Text style={{ fontSize: "12px" }}>{p.description}</Card.Text>
            <Card.Text>
              <strong>${(p.price / 100).toFixed(2)}</strong>
            </Card.Text>
            {p.discontinued && (
              <Card.Text className="text-danger">Discontinued</Card.Text>
            )}
            {hasButton && (
              <Link href={`/cards/${p.id}`} className="btn btn-primary">
                View Card
              </Link>
            )}
          </Card.Body>
        </Card>
      </Col>
    </>
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
