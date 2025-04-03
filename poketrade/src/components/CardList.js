import CardItem from './CardItem';

export default function CardList({ cards = [] }) {
  if (!Array.isArray(cards)) return null;

  if (typeof window === 'undefined' && cards.length === 0) {
    return null; 
  }

  if (cards.length === 0) {
    return <p className="text-center text-muted">No cards found.</p>;
  }

  return (
    <div className="row justify-content-center">
      {cards.filter(Boolean).map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
}
