"use client";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function AboutPage() {
  return (
    <>
      <Card
        className={"mx-auto "}
        style={{ maxWidth: "540px", marginTop: "15%" }}
      >
        <Row className={"g-0"}>
          <Col className={"md-4"}>
            <Card.Img
              src="..."
              className={"img-fluid rounded-start"}
              alt="..."
            />
          </Col>
          <Col className={"md-8"}>
            <Card.Body>
              <Card.Title>About Us</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
}
