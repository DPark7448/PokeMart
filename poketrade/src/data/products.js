const products = [
  {
    "id": "dp3-1",
    "name": "Ampharos",
    "description": "The tip of its tail shines brightly. In the olden days, people sent signals using the tail's light.",
    "image": "https://images.pokemontcg.io/dp3/1.png",
    "price": 460,
    "discontinued": false,
    "categories": [
      "lightning"
    ]
  },
  {
    "id": "ex12-1",
    "name": "Aerodactyl",
    "description": "Does 10 damage plus 10 more damage for each Energy attached to Aerodactyl. During your opponent's next turn, prevent all effects, including damage, done to Aerodactyl by attacks from your opponent's Pokémon-ex.",
    "image": "https://images.pokemontcg.io/ex12/1.png",
    "price": 1472,
    "discontinued": false,
    "categories": [
      "colorless"
    ]
  },
  {
    "id": "mcd19-1",
    "name": "Caterpie",
    "description": "When attacked by bird Pokémon, it resists by releasing a terrifically strong odor from its antennae, but it often becomes their prey.",
    "image": "https://images.pokemontcg.io/mcd19/1.png",
    "price": 1096,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "ex7-1",
    "name": "Azumarill",
    "description": "Flip a coin for each Water Energy attached to Azumarill. This attack does 20 damage plus 20 more damage for each heads.",
    "image": "https://images.pokemontcg.io/ex7/1.png",
    "price": 1063,
    "discontinued": false,
    "categories": [
      "water"
    ]
  },
  {
    "id": "sm9-1",
    "name": "Celebi & Venusaur-GX",
    "description": "TAG TEAM rule: When your TAG TEAM is Knocked Out, your opponent takes 3 Prize cards.",
    "image": "https://images.pokemontcg.io/sm9/1.png",
    "price": 518,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "pl1-2",
    "name": "Blastoise",
    "description": "Does 20 damage plus 10 more damage for each Energy attached to all Pokémon (both yours and your opponent's). Discard 2 Energy attached to Blastoise. Choose 2 of your opponent's Benched Pokémon. This attack does 60 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.) Blastoise can't use Double Launcher during your next turn.",
    "image": "https://images.pokemontcg.io/pl1/2.png",
    "price": 1228,
    "discontinued": false,
    "categories": [
      "water"
    ]
  },
  {
    "id": "ex3-2",
    "name": "Altaria",
    "description": "During your next turn, if any of your current Active Pokémon does damage to any Defending Pokémon, this attack does 40 more damage (before applying Weakness and Resistance). Each Defending Pokémon is now Asleep.",
    "image": "https://images.pokemontcg.io/ex3/2.png",
    "price": 1203,
    "discontinued": false,
    "categories": [
      "colorless"
    ]
  },
  {
    "id": "sm9-2",
    "name": "Weedle",
    "description": "Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head.",
    "image": "https://images.pokemontcg.io/sm9/2.png",
    "price": 1582,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "mcd19-2",
    "name": "Alolan Exeggutor",
    "description": "As it grew taller and taller, it outgrew its reliance on psychic powers, while within it awakened the power of the sleeping dragon.",
    "image": "https://images.pokemontcg.io/mcd19/2.png",
    "price": 1836,
    "discontinued": true,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "xy5-2",
    "name": "Kakuna",
    "description": "While awaiting evolution, it hides from predators under leaves and in nooks of branches.",
    "image": "https://images.pokemontcg.io/xy5/2.png",
    "price": 383,
    "discontinued": true,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "sm12-1",
    "name": "Venusaur & Snivy-GX",
    "description": "TAG TEAM rule: When your TAG TEAM is Knocked Out, your opponent takes 3 Prize cards.",
    "image": "https://images.pokemontcg.io/sm12/1.png",
    "price": 1529,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "si1-1",
    "name": "Mew",
    "description": "This Pokémon's body is covered by fine hairs that can be seen only under a microscope.",
    "image": "https://images.pokemontcg.io/si1/1.png",
    "price": 1803,
    "discontinued": false,
    "categories": [
      "psychic"
    ]
  },
  {
    "id": "sm3-1",
    "name": "Caterpie",
    "description": "When attacked by bird Pokémon, it resists by releasing a terrifically strong odor from its antennae, but it often becomes their prey.",
    "image": "https://images.pokemontcg.io/sm3/1.png",
    "price": 1084,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "pop7-1",
    "name": "Ampharos",
    "description": "The tip of its tail shines brightly. In the olden days, people sent signals using the tail's light.",
    "image": "https://images.pokemontcg.io/pop7/1.png",
    "price": 1362,
    "discontinued": false,
    "categories": [
      "lightning"
    ]
  },
  {
    "id": "bw1-2",
    "name": "Snivy",
    "description": "They photosynthesize by bathing their tails in sunlight. When they are not feeling well, their tails droop.",
    "image": "https://images.pokemontcg.io/bw1/2.png",
    "price": 1644,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "base4-3",
    "name": "Chansey",
    "description": "A rare and elusive Pokémon that is said to bring happiness to those who manage to catch it.",
    "image": "https://images.pokemontcg.io/base4/3.png",
    "price": 1799,
    "discontinued": false,
    "categories": [
      "colorless"
    ]
  },
  {
    "id": "hgss4-3",
    "name": "Celebi",
    "description": "This Pokémon wanders across time. Grass and trees flourish in the forests in which it has appeared.",
    "image": "https://images.pokemontcg.io/hgss4/3.png",
    "price": 1901,
    "discontinued": false,
    "categories": [
      "psychic"
    ]
  },
  {
    "id": "ex7-3",
    "name": "Dark Crobat",
    "description": "This Pokémon is both Grass Darkness type.",
    "image": "https://images.pokemontcg.io/ex7/3.png",
    "price": 1783,
    "discontinued": false,
    "categories": [
      "grass",
      "darkness"
    ]
  },
  {
    "id": "swsh35-2",
    "name": "Weedle",
    "description": "Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies.",
    "image": "https://images.pokemontcg.io/swsh35/2.png",
    "price": 1546,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "xy2-3",
    "name": "Butterfree",
    "description": "It loves the honey of flowers and can locate flower patches that have even tiny amounts of pollen.",
    "image": "https://images.pokemontcg.io/xy2/3.png",
    "price": 2085,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "sm9-3",
    "name": "Weedle",
    "description": "Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head.",
    "image": "https://images.pokemontcg.io/sm9/3.png",
    "price": 1639,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "sm1-2",
    "name": "Metapod",
    "description": "Its shell is filled with its soft innards. It doesn't move much because of the risk it might carelessly spill its innards out.",
    "image": "https://images.pokemontcg.io/sm1/2.png",
    "price": 861,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "mcd19-3",
    "name": "Magmar",
    "description": "When angered, it spouts brilliant fire from all over its body. It doesn't calm down until its opponent has burned to ash.",
    "image": "https://images.pokemontcg.io/mcd19/3.png",
    "price": 497,
    "discontinued": false,
    "categories": [
      "fire"
    ]
  },
  {
    "id": "dp3-3",
    "name": "Charizard",
    "description": "It is said that CHARIZARD's fire burns hotter if it has experienced harsh battles.",
    "image": "https://images.pokemontcg.io/dp3/3.png",
    "price": 1850,
    "discontinued": true,
    "categories": [
      "fire"
    ]
  },
  {
    "id": "base1-1",
    "name": "Alakazam",
    "description": "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000.",
    "image": "https://images.pokemontcg.io/base1/1.png",
    "price": 2183,
    "discontinued": false,
    "categories": [
      "psychic"
    ]
  },
  {
    "id": "ex8-1",
    "name": "Altaria",
    "description": "Does 20 Damage to each Defending Pokémon. ",
    "image": "https://images.pokemontcg.io/ex8/1.png",
    "price": 1102,
    "discontinued": false,
    "categories": [
      "colorless"
    ]
  },
  {
    "id": "pop5-1",
    "name": "Ho-Oh",
    "description": " Discard a Fire Energy attached to Ho-Oh.",
    "image": "https://images.pokemontcg.io/pop5/1.png",
    "price": 1039,
    "discontinued": false,
    "categories": [
      "fire"
    ]
  },
  {
    "id": "xy10-1",
    "name": "Shuckle",
    "description": "It stores Berries inside its shell. To avoid attacks, it hides beneath rocks and remains completely still.",
    "image": "https://images.pokemontcg.io/xy10/1.png",
    "price": 1115,
    "discontinued": true,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "ecard2-H1",
    "name": "Ampharos",
    "description": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If you have any Benched Pokémon and if there are any basic Energy cards attached to Ampharos, take 1 of those Energy cards and attach it to 1 of those Pokémon.",
    "image": "https://images.pokemontcg.io/ecard2/H1.png",
    "price": 1468,
    "discontinued": false,
    "categories": [
      "lightning"
    ]
  },
  {
    "id": "base4-1",
    "name": "Alakazam",
    "description": "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000.",
    "image": "https://images.pokemontcg.io/base4/1.png",
    "price": 2131,
    "discontinued": false,
    "categories": [
      "psychic"
    ]
  },
  {
    "id": "ex11-1",
    "name": "Beedrill δ",
    "description": "This Pokémon is both Grass Metal type.",
    "image": "https://images.pokemontcg.io/ex11/1.png",
    "price": 1943,
    "discontinued": true,
    "categories": [
      "grass",
      "metal"
    ]
  },
  {
    "id": "base3-2",
    "name": "Articuno",
    "description": "A legendary bird Pokémon that is said to appear to doomed people who are lost in icy mountains.",
    "image": "https://images.pokemontcg.io/base3/2.png",
    "price": 1267,
    "discontinued": true,
    "categories": [
      "water"
    ]
  },
  {
    "id": "gym1-2",
    "name": "Brock's Rhydon",
    "description": "Flip a coin. If tails, this attack does nothing.",
    "image": "https://images.pokemontcg.io/gym1/2.png",
    "price": 586,
    "discontinued": false,
    "categories": [
      "fighting"
    ]
  },
  {
    "id": "ex14-1",
    "name": "Banette",
    "description": "If the Defending Pokémon is a Basic Pokémon, that Pokémon is now Confused.",
    "image": "https://images.pokemontcg.io/ex14/1.png",
    "price": 817,
    "discontinued": false,
    "categories": [
      "psychic"
    ]
  },
  {
    "id": "sm115-1",
    "name": "Caterpie",
    "description": "Perhaps because it would like to grow up quickly, it has a voracious appetite, eating a hundred leaves a day.",
    "image": "https://images.pokemontcg.io/sm115/1.png",
    "price": 603,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "col1-1",
    "name": "Clefable",
    "description": "With its acute hearing, it can pick up sounds from far away. It usually hides in quiet places.",
    "image": "https://images.pokemontcg.io/col1/1.png",
    "price": 1797,
    "discontinued": false,
    "categories": [
      "colorless"
    ]
  },
  {
    "id": "ex9-1",
    "name": "Blaziken",
    "description": "The Defending Pokémon is now Burned. If the Defending Pokémon already has any damage counters on it, this attack does 50 damage plus 20 more damage.",
    "image": "https://images.pokemontcg.io/ex9/1.png",
    "price": 1036,
    "discontinued": false,
    "categories": [
      "fire"
    ]
  },
  {
    "id": "bw10-1",
    "name": "Surskit",
    "description": "It appears as if it is skating on water. It draws prey with a sweet scent from the tip of its head.",
    "image": "https://images.pokemontcg.io/bw10/1.png",
    "price": 948,
    "discontinued": true,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "ex9-2",
    "name": "Deoxys",
    "description": "This attack's damage isn't affected by Weakness, Resistance, Poké-Power, Poké-Bodies, or any other effects on the Defending Pokémon.",
    "image": "https://images.pokemontcg.io/ex9/2.png",
    "price": 2210,
    "discontinued": false,
    "categories": [
      "psychic"
    ]
  },
  {
    "id": "ru1-3",
    "name": "Ninetales",
    "description": "No description available.",
    "image": "https://images.pokemontcg.io/ru1/3.png",
    "price": 978,
    "discontinued": true,
    "categories": [
      "fire"
    ]
  },
  {
    "id": "xy5-3",
    "name": "Beedrill",
    "description": "May appear in a swarm. Flies at violent speeds, all the while stabbing with the toxic stinger on its rear.",
    "image": "https://images.pokemontcg.io/xy5/3.png",
    "price": 1938,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "pl3-3",
    "name": "Drifblim FB",
    "description": "Choose 1 of your opponent's Benched Pokémon. This attack does 40 damage to that Pokémon. Apply Weakness and Resistance.",
    "image": "https://images.pokemontcg.io/pl3/3.png",
    "price": 1541,
    "discontinued": false,
    "categories": [
      "psychic"
    ]
  },
  {
    "id": "xy7-2",
    "name": "Gloom",
    "description": "The honey it drools from its mouth smells so atrocious, it can curl noses more than a mile away.",
    "image": "https://images.pokemontcg.io/xy7/2.png",
    "price": 843,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "bw10-2",
    "name": "Masquerain",
    "description": "Its antennae have eye patterns on them. Its four wings enable it to hover and fly in any direction.",
    "image": "https://images.pokemontcg.io/bw10/2.png",
    "price": 625,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "ex12-3",
    "name": "Cradily",
    "description": "Count the number of React Energy cards attached to Cradily and choose up to that number of your opponent's Evolved Pokémon. Remove the highest Stage Evolution card from each of those Pokémon, then have your opponent shuffle those cards into his or her deck. Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) ",
    "image": "https://images.pokemontcg.io/ex12/3.png",
    "price": 2115,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "xy11-2",
    "name": "Tangrowth",
    "description": "Its vines grow so profusely that, in the warm season, you can't even see its eyes.",
    "image": "https://images.pokemontcg.io/xy11/2.png",
    "price": 339,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "ex3-3",
    "name": "Crawdaunt",
    "description": "No description available.",
    "image": "https://images.pokemontcg.io/ex3/3.png",
    "price": 1460,
    "discontinued": false,
    "categories": [
      "water"
    ]
  },
  {
    "id": "dv1-3",
    "name": "Dragonair",
    "description": "If its body takes on an aura, the weather changes instantly. It is said to live in seas and lakes.",
    "image": "https://images.pokemontcg.io/dv1/3.png",
    "price": 1344,
    "discontinued": false,
    "categories": [
      "dragon"
    ]
  },
  {
    "id": "xy4-1",
    "name": "Venonat",
    "description": "Its big eyes are actually clusters of tiny eyes. At night, its kind is drawn by light.",
    "image": "https://images.pokemontcg.io/xy4/1.png",
    "price": 2089,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "bw4-1",
    "name": "Pinsir",
    "description": "It grips prey with its pincers until the prey is torn in half. What it can't tear, it tosses far.",
    "image": "https://images.pokemontcg.io/bw4/1.png",
    "price": 1345,
    "discontinued": false,
    "categories": 
      "grass"
    
  }
];

export default products;
