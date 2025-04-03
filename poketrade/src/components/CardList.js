import CardItem from './CardItem';

export default function CardList({ cards = [] }) {
  if (cards.length === 0) {
    return <p className="text-center text-muted">No cards found.</p>;
  }

  return (
    <div className="row">
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
}
