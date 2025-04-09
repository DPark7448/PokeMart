import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function CardItem(props) {
  const p = props.card;
  const hasButton = props.hasButton;
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
