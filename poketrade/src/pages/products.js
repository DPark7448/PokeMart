import useSWR from "swr";
import { Container, Row, Col, Card } from "react-bootstrap";

// Define a fetcher function that takes a URL, fetches data, and returns the JSON response
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductsPage() {
  // Use SWR hook to fetch and cache the data from the API endpoint.
  const { data: products, error, isLoading } = useSWR("/api/products", fetcher);

  // Display a loading message while data is being fetched
  if (isLoading) return <p className="text-center mt-5">Loading...</p>;
  // Display an error message if fetching fails
  if (error) return <p className="text-danger mt-5">Failed to load products.</p>;

  // Ensure products is an array before mapping over it
  if (!Array.isArray(products)) {
    return <p className="text-center mt-5">No products available.</p>;
  }

  return (
    <Container className="mt-4">
      {/* Page Header */}
      <h1 className="mb-4">Products</h1>
      <Row>
        {products.map((p) => (
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
        ))}
      </Row>
    </Container>
  );
}