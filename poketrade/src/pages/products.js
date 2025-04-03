// src/pages/products.js

//Import useSWR from "swr" for data fetching and caching
import useSWR from "swr";

//Import required UI components from react-bootstrap for layout and styling
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";

//Define a fetcher function that takwes a URL, fetches data from it, and returns the JSON response
const fetcher = (url) => fetch(url).then((res) => res.json());

//export the main React function component for the products page
export default function ProductsPage() {
    //use SWR hook to pass props of data fetching and caching
    //The first argument is the URL to fetch data from and the 2nd is the fetcher function
  const { data: products, error, isLoading } = useSWR("/api/products", fetcher);
//if data is still loaind, return a loading message
  if (isLoading) return <p className="text-center mt-5">Loading...</p>;
  //if error, return error message
  if (error) return <p className="text-danger mt-5">Failed to load products.</p>;

  return (
    //container component from react-bootstrap to wrap the content with proper spacing
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
                <Card.Text><strong>${(p.price / 100).toFixed(2)}</strong></Card.Text>
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
