import Head from 'next/head';
import Link from 'next/link';
import products from '../data/products';
import { useAtom } from 'jotai';
import { favoritesAtom } from 'store/favoritesAtom';
import { useEffect, useState } from 'react';

  

export default function Home() {

  const [featured, setFeatured] = useState([]);
  const [favorites, setFavorites] = useAtom(favoritesAtom);
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };
  
  const isFavorite = (id) => favorites.includes(id);

  useEffect(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5).slice(0, 4);
    setFeatured(shuffled);
  }, []);

  return (
    <>
      <Head>
        <title>Poké Mart</title>
        <meta name="description" content="Pokémon cards collection" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
          crossOrigin="anonymous" 
        />
      </Head>
      
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          minHeight: '60vh',
          backgroundColor: '#f8f9fa',
          backgroundImage: 'repeating-linear-gradient(45deg, #f8f9fa, #f8f9fa 20px, #e9ecef 20px, #e9ecef 40px)',
        }}
      >
        <h1 className="display-4 fw-bold text-black">Poke Mart</h1>
        <p className="lead mb-4 text-black">Your #1 Hub For Pokemon Cards</p>
        <Link href="/products" className="btn btn-outline-dark">
        View The Entire Catalogue
        </Link>
      </div>
      {/*featured cards section*/}
      
      <div className="container mt-4">
        <h2 className="mb-4">Featured Pokémon Cards</h2>
        <div className="row">
          {featured.map((card) => (
            <div className="col-md-3 mb-4" key={card.id}>
              <div className="card h-100">
                <img
                   src={card.image?.startsWith('http') ? card.image : '/placeholder.png'}
                   alt={card.name || 'Pokémon Card'}
                   className="card-img-top"
                   width="100%"
                   height="auto"
                />
                <div className="card-body pb-3">
                  <h5 className="card-title">{card.name}</h5>
                  <p className="card-text" style={{ fontSize: '0.9rem' }}>
                    {card.description.length > 100
                      ? card.description.slice(0, 100) + '...'
                      : card.description}
                  </p>
                  <p className="text-muted">
                    ${(card.price / 100).toFixed(2)}
                  </p>
                  <Link href={`/cards/${card.id}`} className="btn btn-primary">
                    View Card
                  </Link>
                  <br /> <br />
                  <button
                  className={`btn btn-sm ${isFavorite(card.id) ? 'btn-danger' : 'btn-outline-danger'} ms-2 pb-2`}
                  onClick={() => toggleFavorite(card.id)}
                  >
                    {isFavorite(card.id) ? '♥' : '♡'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}