import CardItem from "./CardItem";
import CardAPIItem from "./CardAPIItem";

export default function CardList({ cards = [], useLocal = true }) {
  if (!Array.isArray(cards)) return null;

  if (typeof window === "undefined" && cards.length === 0) {
    return null;
  }

  if (cards.length === 0) {
    return <p className="text-center text-muted">No cards found.</p>;
  }

  return (
    <div className="row justify-content-center">
      {useLocal &&
        cards
          .filter(Boolean)
          .map((card) => <CardItem key={card.id} card={card} />)}
      {!useLocal &&
        cards
          .filter(Boolean)
          .map((card) => <CardAPIItem key={card.data.id} card={card} />)}
    </div>
  );
}
