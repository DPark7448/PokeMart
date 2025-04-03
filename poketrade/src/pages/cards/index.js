import { useState } from 'react';
import CardList from '../../components/CardList';
import Pagination from '../../components/Pagination';
import products from '../../data/products'; 

export default function CardsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 30;

  const totalPages = Math.ceil(products.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = products.slice(startIndex, startIndex + cardsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center fw-bold">All Pokémon Cards</h2>
      <CardList cards={currentCards} /> 
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
