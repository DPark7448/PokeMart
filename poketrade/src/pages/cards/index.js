import { useState, useEffect } from 'react';
import CardList from '../../components/CardList';
import Pagination from '../../components/Pagination';
import Sidebar from '../../components/Sidebar';
import products from '../../data/products';

export default function CardsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ categories: [], maxPrice: 2500 });
  const [filteredCards, setFilteredCards] = useState(products);

  const cardsPerPage = 30;

  useEffect(() => {
    const { categories, maxPrice } = filters;

    let filtered = products.filter((card) => card.price <= maxPrice);

    if (categories.length > 0) {
      filtered = filtered.filter((card) =>
        card.categories.some((cat) =>
          categories.includes(cat.toLowerCase())
        )
      );
    }

    setFilteredCards(filtered);
    setCurrentPage(1);
  }, [filters]);

  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = filteredCards.slice(startIndex, startIndex + cardsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4 text-center fw-bold">All Pokémon Cards</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-auto">
          <Sidebar onFilterChange={setFilters} />
        </div>
        <div className="col">
          <CardList cards={currentCards} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
