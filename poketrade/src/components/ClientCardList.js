//had to add this due to the randomizer for the index's featured cards.
import dynamic from 'next/dynamic';

const ClientCardList = dynamic(() => import('./CardList'), {
  ssr: false,
});

export default ClientCardList;
