import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CardList from '../components/CardList'; 
import products from '../data/products';

export default function SearchPage() {
  const router = useRouter();
  const { query } = router.query;
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (query) {
      const lowerQuery = query.toLowerCase();
      const results = products.filter(card =>
        card.name.toLowerCase().includes(lowerQuery) ||
        card.description.toLowerCase().includes(lowerQuery)
      );
      setFiltered(results);
    }
  }, [query]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Search Results for: <em>{query}</em></h2>
      <CardList cards={filtered} />
    </div>
  );
}
