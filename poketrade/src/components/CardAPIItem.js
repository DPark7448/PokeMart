import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function CardAPIItem(props) {
  const p = props.card.data;
  const isAvailable = props.isAvailable;
  const hasButton = props.hasButton;
  return (
    <>
      <Col key={p.id} md={4} className="mb-4">
        <Card className="h-100">
          <Card.Img variant="top" src={p.images?.small} alt={p.name} />
          <Card.Body>
            <Card.Title>{p.name}</Card.Title>
            <Card.Text>{p.flavorText}</Card.Text>
            <Card.Text>
              <strong>
                ${(p.cardmarket.prices.averageSellPrice / 100).toFixed(2)}
              </strong>
            </Card.Text>
            {isAvailable && (
              <Card.Text className="text-danger">Discontinued</Card.Text>
            )}
          </Card.Body>
          {hasButton && (
            <Link href={`/cards/${p.id}`} className="btn btn-primary">
              View Card
            </Link>
          )}
        </Card>
      </Col>
    </>
  );
}
