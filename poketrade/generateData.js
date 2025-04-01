const fs = require('fs');
const fetch = require('node-fetch');
require('dotenv').config();

const API_URL = 'https://api.pokemontcg.io/v2/cards?pageSize=50';
const API_KEY = process.env.NEXT_PUBLIC_POKEMON_API_KEY;

const headers = {
  'X-Api-Key': API_KEY
};

const getRandomPrice = () => Math.floor(Math.random() * 2000) + 300;
const getRandomDiscontinued = () => Math.random() < 0.1;

fetch(API_URL, { headers })
  .then(res => res.json())
  .then(json => {
    const rawCards = json.data;

    const products = [];
    const categorySet = new Set();

    rawCards.forEach((card, index) => {
      const cardId = card.id || `card-${index + 1}`;
      const name = card.name || 'Unknown Pokémon';
      const description =
        card.flavorText ||
        (card.rules ? card.rules.join(' ') : '') ||
        (card.attacks ? card.attacks.map(a => a.text).join(' ') : '') ||
        'No description available.';
      const categories = (card.types || ['Unknown']).map(type =>
        type.toLowerCase()
      );

      categories.forEach(cat => categorySet.add(cat));

      products.push({
        id: cardId,
        name,
        description,
        price: getRandomPrice(),
        discontinued: getRandomDiscontinued(),
        categories
      });
    });

    const productsOutput =
      `const products = ${JSON.stringify(products, null, 2)};\n\nexport default products;\n`;
    fs.writeFileSync('./src/products.js', productsOutput);

    const categoriesArray = Array.from(categorySet).map((cat, idx) => ({
      id: `c${idx + 1}`,
      description: cat[0].toUpperCase() + cat.slice(1)
    }));
    const categoriesOutput =
      `const categories = ${JSON.stringify(categoriesArray, null, 2)};\n\nexport default categories;\n`;
    fs.writeFileSync('./src/categories.js', categoriesOutput);

    console.log('✅ products.js and categories.js created in src/');
  })
  .catch(err => console.error('❌ Error fetching card data:', err));
