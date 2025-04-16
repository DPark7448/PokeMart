import Head from "next/head";
import Link from "next/link";
import products from "../data/products";
import { useAtom } from "jotai";
import { favoritesAtom } from "store/favoritesAtom";
import { useMemo } from "react";
import ClientCardList from "../components/ClientCardList";

export default function Home() {
  const [favorites, setFavorites] = useAtom(favoritesAtom);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const isFavorite = (id) => favorites.includes(id);

  const featured = useMemo(() => {
    return [...products].sort(() => Math.random() - 0.5).slice(0, 6);
  }, []);

  return (
    <>
      <Head>
        <title>Poké Mart</title>
        <meta name="description" content="Pokémon cards collection" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          minHeight: "60vh",
          backgroundColor: "#f8f9fa",
          backgroundImage:
            "repeating-linear-gradient(45deg, #f8f9fa, #f8f9fa 20px, #e9ecef 20px, #e9ecef 40px)",
        }}
      >
        <h1 className="display-4 fw-bold text-black">Poké Mart</h1>
        <p className="lead mb-4 text-black">Your #1 Hub For Pokémon Cards</p>
        <Link href="/cards" className="btn btn-outline-dark">
          View The Entire Catalogue
        </Link>
      </div>

      {/* Featured Cards */}
      <div className="container mt-4">
        <h2 className="mb-4">Featured Pokémon Cards</h2>
        <ClientCardList cards={featured} hasButton={true} />
      </div>
    </>
  );
}
