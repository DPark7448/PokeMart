const products = [
  {
    "id": "hgss4-1",
    "name": "Aggron",
    "description": "You can tell its age by the length of its iron horns. It claims an entire mountain as its territory.",
    "price": 1951,
    "discontinued": false,
    "categories": [
      "metal"
    ]
  },
  {
    "id": "xy5-1",
    "name": "Weedle",
    "description": "Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies.",
    "price": 642,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "pl1-1",
    "name": "Ampharos",
    "description": "Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, the Defending Pokémon is now Paralyzed. Move an Energy card attached to Ampharos to 1 of your Benched Pokémon.",
    "price": 1156,
    "discontinued": false,
    "categories": [
      "lightning"
    ]
  },
  {
    "id": "dp3-1",
    "name": "Ampharos",
    "description": "The tip of its tail shines brightly. In the olden days, people sent signals using the tail's light.",
    "price": 1623,
    "discontinued": false,
    "categories": [
      "lightning"
    ]
  },
  {
    "id": "det1-1",
    "name": "Bulbasaur",
    "description": "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
    "price": 1713,
    "discontinued": true,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "dv1-1",
    "name": "Dratini",
    "description": "It is called the \"Mirage Pokémon\" because so few have seen it. Its shed skin has been found.",
    "price": 1304,
    "discontinued": false,
    "categories": [
      "dragon"
    ]
  },
  {
    "id": "mcd19-1",
    "name": "Caterpie",
    "description": "When attacked by bird Pokémon, it resists by releasing a terrifically strong odor from its antennae, but it often becomes their prey.",
    "price": 1936,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "pl3-1",
    "name": "Absol G",
    "description": "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon. Return all Energy cards attached to Absol G to your hand. The Defending Pokémon is Knocked Out at the end of your opponent's next turn.",
    "price": 1016,
    "discontinued": false,
    "categories": [
      "darkness"
    ]
  },
  {
    "id": "ex12-1",
    "name": "Aerodactyl",
    "description": "Does 10 damage plus 10 more damage for each Energy attached to Aerodactyl. During your opponent's next turn, prevent all effects, including damage, done to Aerodactyl by attacks from your opponent's Pokémon-ex.",
    "price": 1561,
    "discontinued": false,
    "categories": [
      "colorless"
    ]
  },
  {
    "id": "ex3-1",
    "name": "Absol",
    "description": "If the number of cards in your opponent's hand is at least 6, choose a number of cards there, without looking, until your opponent has 5 cards left. Have your opponent discard the cards you chose. If you have more Prize cards left than your opponent, this attack does 20 damage plus 20 more damage.",
    "price": 782,
    "discontinued": false,
    "categories": [
      "darkness"
    ]
  },
  {
    "id": "ru1-1",
    "name": "Venusaur",
    "description": "Remove from Venusaur the number of damage counters equal to the damage you did to the Defending Pokémon.",
    "price": 2077,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "ecard2-H1",
    "name": "Ampharos",
    "description": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If you have any Benched Pokémon and if there are any basic Energy cards attached to Ampharos, take 1 of those Energy cards and attach it to 1 of those Pokémon.",
    "price": 597,
    "discontinued": false,
    "categories": [
      "lightning"
    ]
  },
  {
    "id": "base4-1",
    "name": "Alakazam",
    "description": "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000.",
    "price": 1879,
    "discontinued": false,
    "categories": [
      "psychic"
    ]
  },
  {
    "id": "hgss1-1",
    "name": "Arcanine",
    "description": "This legendary Chinese Pokémon is considered magnificent. Many people are enchanted by its grand mane.",
    "price": 312,
    "discontinued": false,
    "categories": [
      "fire"
    ]
  },
  {
    "id": "ex11-1",
    "name": "Beedrill δ",
    "description": "This Pokémon is both Grass Metal type.",
    "price": 784,
    "discontinued": true,
    "categories": [
      "grass",
      "metal"
    ]
  },
  {
    "id": "ex7-1",
    "name": "Azumarill",
    "description": "Flip a coin for each Water Energy attached to Azumarill. This attack does 20 damage plus 20 more damage for each heads.",
    "price": 1574,
    "discontinued": false,
    "categories": [
      "water"
    ]
  },
  {
    "id": "gym1-1",
    "name": "Blaine's Moltres",
    "description": "Flip a coin. If tails, shuffle Blaine's Moltres and all cards attached to it into your deck (after doing damage).",
    "price": 1549,
    "discontinued": false,
    "categories": [
      "fire"
    ]
  },
  {
    "id": "base3-1",
    "name": "Aerodactyl",
    "description": "A ferocious prehistoric Pokémon that goes for the enemy's throat with its serrated saw-like fangs.",
    "price": 2134,
    "discontinued": false,
    "categories": [
      "fighting"
    ]
  },
  {
    "id": "sm9-1",
    "name": "Celebi & Venusaur-GX",
    "description": "TAG TEAM rule: When your TAG TEAM is Knocked Out, your opponent takes 3 Prize cards.",
    "price": 2038,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "xy2-1",
    "name": "Caterpie",
    "description": "For protection, it releases a horrible stench from the antennae on its head to drive away enemies.",
    "price": 2266,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "pop6-1",
    "name": "Bastiodon",
    "description": "Any frontal attack is repulsed. It is a docile Pokémon that feeds on grass and berries.",
    "price": 891,
    "discontinued": false,
    "categories": [
      "metal"
    ]
  },
  {
    "id": "ecard2-H2",
    "name": "Arcanine",
    "description": "You may discard any number of Fire Energy cards attached to Arcanine when you use this attack. If you do, flip a number of coins equal to the number of Fire Energy cards you discarded. This attack does 30 damage plus 30 more damage for each heads.",
    "price": 2183,
    "discontinued": false,
    "categories": [
      "fire"
    ]
  },
  {
    "id": "hgss4-2",
    "name": "Altaria",
    "description": "It flies gracefully through the sky. Its melodic humming makes you feel like you're in a dream.",
    "price": 2160,
    "discontinued": false,
    "categories": [
      "colorless"
    ]
  },
  {
    "id": "pl1-2",
    "name": "Blastoise",
    "description": "Does 20 damage plus 10 more damage for each Energy attached to all Pokémon (both yours and your opponent's). Discard 2 Energy attached to Blastoise. Choose 2 of your opponent's Benched Pokémon. This attack does 60 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.) Blastoise can't use Double Launcher during your next turn.",
    "price": 874,
    "discontinued": false,
    "categories": [
      "water"
    ]
  },
  {
    "id": "ex3-2",
    "name": "Altaria",
    "description": "During your next turn, if any of your current Active Pokémon does damage to any Defending Pokémon, this attack does 40 more damage (before applying Weakness and Resistance). Each Defending Pokémon is now Asleep.",
    "price": 375,
    "discontinued": false,
    "categories": [
      "colorless"
    ]
  },
  {
    "id": "dp3-2",
    "name": "Blastoise",
    "description": "The jets of water it spouts from the rocket cannons on its shell can punch through thick steel.",
    "price": 1919,
    "discontinued": false,
    "categories": [
      "water"
    ]
  },
  {
    "id": "base3-2",
    "name": "Articuno",
    "description": "A legendary bird Pokémon that is said to appear to doomed people who are lost in icy mountains.",
    "price": 1316,
    "discontinued": false,
    "categories": [
      "water"
    ]
  },
  {
    "id": "pl3-2",
    "name": "Blaziken FB",
    "description": "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. The new Defending Pokémon is now Burned. If your opponent has any Water Pokémon in play, this attack does 30 damage plus 30 more damage.",
    "price": 1618,
    "discontinued": false,
    "categories": [
      "fire"
    ]
  },
  {
    "id": "ex11-2",
    "name": "Crobat δ",
    "description": "This Pokémon is both Grass Metal type.",
    "price": 1977,
    "discontinued": false,
    "categories": [
      "grass",
      "metal"
    ]
  },
  {
    "id": "pop6-2",
    "name": "Lucario",
    "description": "It has the ability to sense the auras of all things. It understands human speech.",
    "price": 724,
    "discontinued": false,
    "categories": [
      "fighting"
    ]
  },
  {
    "id": "xy2-2",
    "name": "Metapod",
    "description": "A steel-hard shell protects its tender body. It quietly endures hardships while awaiting evolution.",
    "price": 1447,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "base4-2",
    "name": "Blastoise",
    "description": "A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles.",
    "price": 1794,
    "discontinued": false,
    "categories": [
      "water"
    ]
  },
  {
    "id": "gym1-2",
    "name": "Brock's Rhydon",
    "description": "Flip a coin. If tails, this attack does nothing.",
    "price": 2232,
    "discontinued": false,
    "categories": [
      "fighting"
    ]
  },
  {
    "id": "hgss1-2",
    "name": "Azumarill",
    "description": "When it plays in water, it rolls up its elongated ears to prevent their insides from getting wet.",
    "price": 814,
    "discontinued": false,
    "categories": [
      "water"
    ]
  },
  {
    "id": "det1-2",
    "name": "Ludicolo",
    "description": "If it hears festive music, all its muscles fill with energy. It can't help breaking out into a dance.",
    "price": 1419,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "sm9-2",
    "name": "Weedle",
    "description": "Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head.",
    "price": 1783,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "ex12-2",
    "name": "Aggron",
    "description": "Does 70 damage minus 10 damage for each damage counter on Aggron. If Aggron has any React Energy cards attached to it, this attack does 70 damage instead. Choose 1 of your opponent's Pokémon. This attack does 60 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) During your next turn, Aggron can't use Bound Crush.",
    "price": 609,
    "discontinued": false,
    "categories": [
      "metal"
    ]
  },
  {
    "id": "ex7-2",
    "name": "Dark Ampharos",
    "description": "This Pokémon is both Lightning Darkness type.",
    "price": 2185,
    "discontinued": false,
    "categories": [
      "lightning",
      "darkness"
    ]
  },
  {
    "id": "ru1-2",
    "name": "Cherrim",
    "description": "No description available.",
    "price": 386,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "mcd19-2",
    "name": "Alolan Exeggutor",
    "description": "As it grew taller and taller, it outgrew its reliance on psychic powers, while within it awakened the power of the sleeping dragon.",
    "price": 1254,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "xy5-2",
    "name": "Kakuna",
    "description": "While awaiting evolution, it hides from predators under leaves and in nooks of branches.",
    "price": 2199,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "xy11-1",
    "name": "Tangela",
    "description": "It tangles any moving thing with its vines. Their subtle shaking is ticklish if you get ensnared.",
    "price": 935,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "ex14-1",
    "name": "Banette",
    "description": "If the Defending Pokémon is a Basic Pokémon, that Pokémon is now Confused.",
    "price": 388,
    "discontinued": false,
    "categories": [
      "psychic"
    ]
  },
  {
    "id": "sm12-1",
    "name": "Venusaur & Snivy-GX",
    "description": "TAG TEAM rule: When your TAG TEAM is Knocked Out, your opponent takes 3 Prize cards.",
    "price": 1393,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "bw1-1",
    "name": "Snivy",
    "description": "They photosynthesize by bathing their tails in sunlight. When they are not feeling well, their tails droop.",
    "price": 770,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "sm115-1",
    "name": "Caterpie",
    "description": "Perhaps because it would like to grow up quickly, it has a voracious appetite, eating a hundred leaves a day.",
    "price": 2217,
    "discontinued": false,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "si1-1",
    "name": "Mew",
    "description": "This Pokémon's body is covered by fine hairs that can be seen only under a microscope.",
    "price": 1614,
    "discontinued": false,
    "categories": [
      "psychic"
    ]
  },
  {
    "id": "dp1-1",
    "name": "Dialga",
    "description": "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity.",
    "price": 1841,
    "discontinued": false,
    "categories": [
      "metal"
    ]
  },
  {
    "id": "sm3-1",
    "name": "Caterpie",
    "description": "When attacked by bird Pokémon, it resists by releasing a terrifically strong odor from its antennae, but it often becomes their prey.",
    "price": 1219,
    "discontinued": true,
    "categories": [
      "grass"
    ]
  },
  {
    "id": "pop7-1",
    "name": "Ampharos",
    "description": "The tip of its tail shines brightly. In the olden days, people sent signals using the tail's light.",
    "price": 1668,
    "discontinued": true,
    "categories": [
      "lightning"
    ]
  }
];

export default products;
