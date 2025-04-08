import Link from 'next/link';
import Image from 'next/image';

export default function CardItem({ card }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <Image
          src={card.image || '/placeholder.png'}
          alt={card.name || 'Card image'}
          width={300}
          height={200}
          className="card-img-top"
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title fw-semibold">{card.name}</h5>
            <p className="card-text small text-muted">
              {card.description?.length > 100
                ? card.description.slice(0, 100) + '...'
                : card.description || 'No description available.'}
            </p>
          </div>
          <div className="mt-2">
            <p className="mb-1 fw-bold text-success">
              ${(card.price / 100).toFixed(2)}
            </p>
            {card.discontinued && (
              <span className="badge bg-danger mb-2">Discontinued</span>
            )}
            <Link href={`/cards/${card.id}`} legacyBehavior>
              <a className="btn btn-sm btn-outline-primary w-100">View Card</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
