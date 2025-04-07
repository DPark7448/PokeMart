import { useRouter } from 'next/router';
import {useState, useEffect} from 'react';

export default function IDPage() {
    const router = useRouter();
    const { id } = router.query;
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      if(id){
    //fetch details for the single card by its ID.
    fetch(`/api/cards/${id}`)
    .then((res) => {
      if(!res.ok){
        throw new Error("Unable to fetch card details.");
      }
      return res.json();
    })
    .then((data) => {
      setCard(data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
  }
}, [id]); //dependency array to re-run the effect when id changes
if(loading){
  return(
      <div className="container mt-4">
        
        <p>Loading card details...</p>
      </div>
    );
  }
  if (error){
    return (
      <div className="container mt-4">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1>Card ID: {id}</h1>
      {card ? (
        <>
        <h2>{card.name}</h2>
        <p>{card.description}</p>
        <p>Price: ${card.price}</p>
        <p>Category: {card.category}</p>
        <p>Rating: {card.rating}</p>
        <p>Stock: {card.stock}</p>
        <p>Image URL: {card.image}</p>
        </>
      ) : (
        <p>No card found with ID: {id}</p>
      )}
    </div>
  );
}