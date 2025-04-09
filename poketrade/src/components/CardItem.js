import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function CardItem(props) {
  const p = props.card;
  console.log(p);
  return (
    <>
      <Col key={p.id} md={4} className="mb-4">
        <Card className="h-100">
          <Card.Img variant="top" src={p.image} alt={p.name} />
          <Card.Body>
            <Card.Title>{p.name}</Card.Title>
            <Card.Text>{p.description}</Card.Text>
            <Card.Text>
              <strong>${(p.price / 100).toFixed(2)}</strong>
            </Card.Text>
            {p.discontinued && (
              <Card.Text className="text-danger">Discontinued</Card.Text>
            )}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
