import Link from 'next/link';

export default function CardItem({ card }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img
          src="https://via.placeholder.com/150"
          alt={card.name}
          className="card-img-top"
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title fw-semibold">{card.name}</h5>
            <p className="card-text small text-muted">
              {card.description.length > 100
                ? card.description.slice(0, 100) + '...'
                : card.description}
            </p>
          </div>
          <div className="mt-2">
            <p className="mb-1 fw-bold text-success">
              ${(card.price / 100).toFixed(2)}
            </p>
            {card.discontinued && (
              <span className="badge bg-danger mb-2">Discontinued</span>
            )}
            <Link href={`/cards/${card.id}`} className="btn btn-sm btn-outline-primary w-100">
              View Card
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
