"use client";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function AboutPage() {
  return (
    <>
      <Card
        className={"mx-auto "}
        style={{ maxWidth: "740px", marginTop: "5%" }}
      >
        <Col className={"md-4"}>
          <Card.Img
            src="pikachu_tcg.jpeg"
            className={"rounded-start"}
            alt="..."
          />
        </Col>
        <Col className={"md-8"}>
          <Card.Body>
            <Card.Title>About Us</Card.Title>
            <Card.Subtitle>Cards cards and more cards!</Card.Subtitle>
            <br />
            <Card.Text>
              We at PokeMart provide only the best cards in the world. The site
              is still in construction so we apologize for any Misdreavus bugs
              you experience on the site!
            </Card.Text>
          </Card.Body>
        </Col>
      </Card>
    </>
  );
}
