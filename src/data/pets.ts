export type PetData = {
  id: string;
  name: string;
  scientificName: string;
  imageUrl: string;
  quickSummary: string;
  lifespan: string;
  setupCost: 'Low' | 'Medium' | 'High' | 'Very High';
  experienceLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  interactionLevel: 'Low' | 'Medium' | 'High';
  pros: string[];
  cons: string[];
  careRequirements: {
    housing: string;
    diet: string;
    healthAndMaintenance: string;
  };
  lifestyleSuitability: string;
  reputableSources: { name: string; url: string }[];
};

export const petsData: PetData[] = [
  {
    id: 'gerbil',
    name: 'Gerbil',
    scientificName: 'Meriones unguiculatus',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gerbil.JPG?width=1200',
    quickSummary: 'Curious, social, and active burrowers that are excellent for observation.',
    lifespan: '2 - 4 years',
    setupCost: 'Low',
    experienceLevel: 'Beginner',
    interactionLevel: 'Medium',
    pros: [
      'Virtually odorless due to being desert animals (produce very little urine)',
      'Active intermittently throughout the day and night (diurnal/nocturnal mix)',
      'Fascinating to watch them build complex tunnel systems',
      'Generally docile and rarely bite if handled correctly'
    ],
    cons: [
      'Must be kept in same-sex pairs or small groups (highly social)',
      'Fast and skittish; can be tricky for very young children to hold',
      'Fragile tails can deglove (lose skin) if grabbed',
      'Heavy chewers; plastic accessories will be destroyed'
    ],
    careRequirements: {
      housing: 'Minimum 20-gallon long glass aquarium with a secure mesh wire lid. Require 8+ inches of safe bedding (aspen or paper-based) for burrowing. Wire cages are unsuitable.',
      diet: 'High-quality commercial gerbil seed and pellet mix. Supplemental fresh vegetables in very small amounts. Constant access to fresh water.',
      healthAndMaintenance: 'Need a sand bath (never dust) a few times a week to keep their coats clean. Spot clean weekly, full enclosure clean every 3-4 weeks.'
    },
    lifestyleSuitability: "Perfect for busy households needing a low-maintenance pet that is fun to watch but doesn't require hours of out-of-cage physical interaction.",
    reputableSources: [
      { name: 'American Gerbil Society (AGS)', url: 'https://www.agsgerbils.org/' },
      { name: 'RSPCA UK - Gerbils', url: 'https://www.rspca.org.uk/adviceandwelfare/pets/rodents/gerbils' }
    ]
  },
  {
    id: 'snake',
    name: 'Pet Snake (Corn/Ball Python)',
    scientificName: 'Pantherophis guttatus / Python regius',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/CornSnake.jpg?width=1200',
    quickSummary: 'Quiet, cleanly, and low-maintenance reptiles that require specific environmental conditions.',
    lifespan: '15 - 20+ years',
    setupCost: 'Medium',
    experienceLevel: 'Beginner',
    interactionLevel: 'Low',
    pros: [
      'Extremely low feeding frequency (once every 1-2 weeks)',
      'No noise and generally hypoallergenic',
      'Do not require daily attention or social interaction',
      'Can be comfortably handled and are generally docile (especially common pet breeds)'
    ],
    cons: [
      'Must feed whole prey (frozen/thawed mice or rats), which some find squeamish',
      'Require strict temperature and humidity gradients to survive',
      'Escape artists; enclosures must be extremely secure',
      'Long lifespan is a serious long-term commitment'
    ],
    careRequirements: {
      housing: 'Appropriately sized terrarium (e.g., 4x2x2 feet or 120-gallon for adults). Must have a hot side with a thermostat-controlled heat source, a cool side, and hiding spots on both ends.',
      diet: 'Obligate carnivores. Fed appropriately sized frozen (thawed) rodents. Fresh water in a bowl large enough to soak in.',
      healthAndMaintenance: 'Daily monitoring of temperature and humidity gauges. Spot cleaning feces/urates as needed. Full substrate change every few months.'
    },
    lifestyleSuitability: 'Great for people who work long hours or travel occasionally (over weekends), as they do not suffer separation anxiety and eat infrequently.',
    reputableSources: [
      { name: 'ReptiFiles - Corn Snake Care', url: 'https://reptifiles.com/corn-snake-care-guide/' },
      { name: 'RSPCA UK - Snakes', url: 'https://www.rspca.org.uk/adviceandwelfare/pets/other/snakes' }
    ]
  },
  {
    id: 'bearded-dragon',
    name: 'Bearded Dragon',
    scientificName: 'Pogona vitticeps',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bartagame_%28fcm%29.jpg?width=1200',
    quickSummary: 'Docile, "dog-like" reptiles that enjoy human interaction but have high setup requirements.',
    lifespan: '10 - 15 years',
    setupCost: 'High',
    experienceLevel: 'Beginner',
    interactionLevel: 'High',
    pros: [
      'Very docile and tolerate or even seek handling',
      'Awake during the day (diurnal)',
      'Fascinating behaviors (arm waving, head bobbing)',
      'Typically sturdy and robust compared to smaller lizards'
    ],
    cons: [
      'High initial setup cost for proper enclosure and lighting',
      'Diet requires keeping live insects (crickets, roaches, worms)',
      'UVB bulbs must be replaced every 6 months regardless of if they emit visible light',
      'Requires daily fresh salad preparation'
    ],
    careRequirements: {
      housing: 'Minimum 120-gallon (4x2x2 feet) front-opening enclosure for an adult. Requires a basking heat bulb and a high-quality tube UVB light (e.g., Arcadia T5) spanning 1/2 the tank.',
      diet: 'Omnivores. Juveniles need 80% live insects / 20% greens. Adults need 80% leafy greens (collards, mustard greens) / 20% live insects. Calcium and vitamin supplements required.',
      healthAndMaintenance: 'Daily spot cleaning, daily food/water replacement. Regular veterinary checkups for parasites (fecal exams) are highly recommended.'
    },
    lifestyleSuitability: 'Excellent for older children and adults willing to invest initially in the right gear and who are comfortable handling live insects. Highly interactive.',
    reputableSources: [
      { name: 'ReptiFiles - Bearded Dragon', url: 'https://reptifiles.com/bearded-dragon-care/' },
      { name: 'The Bearded Dragon Foundation', url: 'https://www.beardeddragon.org/' }
    ]
  },
  {
    id: 'rabbit',
    name: 'Rabbit',
    scientificName: 'Oryctolagus cuniculus',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Oryctolagus_cuniculus_-_euqirneto_-_419737670_%28cropped%29.jpeg?width=1200',
    quickSummary: 'Intelligent, social, and affectionate mammals that require much more space than traditionally thought.',
    lifespan: '8 - 12+ years',
    setupCost: 'Medium',
    experienceLevel: 'Intermediate',
    interactionLevel: 'High',
    pros: [
      'Can be litter-box trained similarly to cats',
      'Very affectionate, playful, and form strong bonds with owners',
      'Crepuscular, meaning they are most active at dawn and dusk (aligns well with 9-5 workers)',
      'Many rescue organizations have wonderful adult rabbits available'
    ],
    cons: [
      'Cannot be caged 24/7; require significant exercise space',
      'Extremely destructive chewers; will destroy electrical cords, baseboards, and furniture if not rabbit-proofed',
      'Require specialized exotic veterinarians that can be expensive',
      'Can be startled easily and have fragile spines if dropped'
    ],
    careRequirements: {
      housing: 'An exercise pen (x-pen) or a fully "bunny-proofed" free-roam room. Small commercial pet store cages are unethically small. Need a large litter box with paper bedding.',
      diet: '80% unlimited high-quality grass hay (Timothy or Orchard), 10% fresh rabbit-safe greens, 5% high-quality pellets, and 5% treats.',
      healthAndMaintenance: 'Nail clipping every 4-6 weeks. Regular brushing to prevent GI stasis from ingesting hair. Spaying/neutering is mandatory for health and behavioral reasons.'
    },
    lifestyleSuitability: 'Best for people who view them more like cats or dogs rather than "caged pets". Require home modification (cable hiding) and time for daily floor-level interaction.',
    reputableSources: [
      { name: 'House Rabbit Society', url: 'https://rabbit.org/' },
      { name: 'RSPCA - Rabbits', url: 'https://www.rspca.org.uk/adviceandwelfare/pets/rabbits' }
    ]
  },
  {
    id: 'tortoise',
    name: 'Tortoise (e.g. Russian)',
    scientificName: 'Testudo horsfieldii',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Testudo_horsfieldii%3B_Baikonur_001.jpg?width=1200',
    quickSummary: 'Fascinating, long-lived reptiles that require dedicated environmental space.',
    lifespan: '50 - 100+ years',
    setupCost: 'High',
    experienceLevel: 'Intermediate',
    interactionLevel: 'Low',
    pros: [
      'Gentle, quiet, and peaceful animals',
      'Strictly herbivorous (no insects or meat needed)',
      'Do not require lots of physical affection',
      'Outdoor enclosures can be beautifully landscaped'
    ],
    cons: [
      'Will likely outlive you; requires a generational care plan',
      'Need immense amounts of space; most indoor tanks are far too small',
      'Complex lighting (UVB/Heat) and dietary calcium requirements to prevent shell deformities',
      'Can dig under fences if kept outdoors unsupervised'
    ],
    careRequirements: {
      housing: 'Indoor "tortoise table" (minimum 4x8 feet for small species) or secure outdoor predator-proof enclosure. Need deep soil-based substrate for digging.',
      diet: 'High-fiber, low-protein weeds, grasses, and specific greens. Fruit should be avoided in arid species (like Russians). Calcium supplementation is critical.',
      healthAndMaintenance: 'Needs proper humidity to prevent shell pyramiding (especially in hatchlings). Regular outdoor sunlight exposure is highly beneficial.'
    },
    lifestyleSuitability: 'For home-owners or those with stable living situations with space for large enclosures. You must be prepared to write them into your will.',
    reputableSources: [
      { name: 'The Tortoise Table', url: 'https://www.thetortoisetable.org.uk/' },
      { name: 'Tortoise Trust', url: 'https://www.tortoisetrust.org/' }
    ]
  },
  {
    id: 'chinchilla',
    name: 'Chinchilla',
    scientificName: 'Chinchilla lanigera',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chinchilla_lanigera_%28Wroclaw_zoo%29-2.JPG?width=1200',
    quickSummary: 'Acrobatic, incredibly soft rodents that require strict temperature controls.',
    lifespan: '10 - 20 years',
    setupCost: 'High',
    experienceLevel: 'Intermediate',
    interactionLevel: 'Medium',
    pros: [
      'Exceptionally soft fur (densest of any land mammal)',
      'Relatively odorless if cage is kept clean',
      'Very entertaining to watch them jump and navigate vertical space',
      'Long lifespan for a small rodent'
    ],
    cons: [
      'Prone to fatal heatstroke; AC is mandatory in summer (must stay under 75°F / 24°C)',
      'Dust baths create a fine layer of dust on everything in the room',
      'Mostly nocturnal/crepuscular; can be noisy at night',
      'Skittish and generally do not like being cuddled or held tightly'
    ],
    careRequirements: {
      housing: 'Tall, multi-level cage (like a Ferret Nation cage). Solid floors required (no wire bottom) to prevent foot injuries. Safe wood ledges (kiln-dried pine/apple) for jumping. No plastic allowed as they will ingest it.',
      diet: 'Strict diet of high-quality timothy hay and specific chinchilla pellets. No sugary treats or high-water vegetables, which cause fatal bloat.',
      healthAndMaintenance: 'Must have a chinchilla dust bath 2-3 times a week (never use water). Teeth grow continuously and require constant wooden chew toys.'
    },
    lifestyleSuitability: 'Best for quiet adults or older children who enjoy observing pets rather than cuddling them, and who live in climate-controlled environments.',
    reputableSources: [
      { name: 'Chinchilla Rescue', url: 'https://chinchillarescue.org/' },
      { name: 'RSPCA - Chinchillas', url: 'https://www.rspca.org.uk/adviceandwelfare/pets/rodents/chinchillas' }
    ]
  },
  {
    id: 'ferret',
    name: 'Ferret',
    scientificName: 'Mustela putorius furo',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ferret_2008.png?width=1200',
    quickSummary: 'High-energy, intensely playful obligate carnivores that act like perpetual kittens.',
    lifespan: '6 - 10 years',
    setupCost: 'High',
    experienceLevel: 'Advanced',
    interactionLevel: 'High',
    pros: [
      'Incredibly playful, goofy, and entertaining',
      'Sleep very deeply (up to 18 hours a day) and are active when awake',
      'Can be litter or puppy-pad trained in their cage',
      'Highly social and bond strongly with owners'
    ],
    cons: [
      'Distinctive musky odor that cannot be fully eliminated (bathing makes it worse)',
      'High incidence of serious medical issues (adrenal disease, insulinoma, cancers)',
      'Nip heavily when young and require bite-inhibition training',
      'Require intense ferret-proofing in the home (they steal objects and get stuck in recliners/appliances)'
    ],
    careRequirements: {
      housing: 'Large multi-level wire cage (e.g., Ferret Nation) with solid flooring, hammocks, and sleeping sacks. Need 4+ hours of supervised out-of-cage playtime daily.',
      diet: 'Strict obligate carnivores. Need high-protein, high-fat, low-carb diet. High-quality ferret kibble or balanced raw diet. Zero sugar, fruit, or plant matter.',
      healthAndMaintenance: 'Annual vet visits for rabies/distemper vaccines. Highly susceptible to diseases requiring expensive medical care or surgery later in life.'
    },
    lifestyleSuitability: "Only for committed owners with a high budget for exotic vets, who have the time to supervise 4 hours of intense daily play, and who aren't bothered by pet odors.",
    reputableSources: [
      { name: 'American Ferret Association', url: 'https://www.ferret.org/' },
      { name: 'Veterinary Partner - Ferrets', url: 'https://veterinarypartner.vin.com/' }
    ]
  },
  {
    id: 'degu',
    name: 'Degu',
    scientificName: 'Octodon degus',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Octodon_degus_-Heidelberg_Zoo%2C_Germany-8a.jpg?width=1200',
    quickSummary: 'Highly intelligent and social diurnal rodents with strict dietary requirements.',
    lifespan: '6 - 8 years',
    setupCost: 'Medium',
    experienceLevel: 'Intermediate',
    interactionLevel: 'Medium',
    pros: [
      'Awake during the day (diurnal), making them great for observation',
      'Extremely social and communicate with varied vocalizations (chirps, warbles)',
      'Smart and can learn to recognize their owners',
      'Less skittish than gerbils or hamsters once tamed'
    ],
    cons: [
      'Extremely prone to diabetes; dietary mistakes can be fatal',
      'Must be kept in pairs or groups; a lone degu will become depressed',
      'Major chewers; need vast amounts of safe wood to destroy',
      'Need an extra-large all-metal cage due to chewing abilities'
    ],
    careRequirements: {
      housing: 'Large all-metal cage (similar to a chinchilla setup) with solid metal pans. Large, solid-surface exercise wheel. Hammocks and safe wood branches.',
      diet: 'High-quality degu/chinchilla pellets, unlimited grass hay, and specific forage. ABSOLUTELY NO SUGAR (no fruit, no sweet treats like yogurt drops).',
      healthAndMaintenance: 'Require a dust/sand bath similar to chinchillas to maintain their coat. Regular tooth checks by an exotic vet, as dental disease is common.'
    },
    lifestyleSuitability: 'Great for attentive owners who want a diurnal rodent capable of forming a bond, but who are disciplined enough to adhere strictly to a sugar-free, low-carb diet.',
    reputableSources: [
      { name: 'RSPCA - Degus', url: 'https://www.rspca.org.uk/adviceandwelfare/pets/rodents/degus' },
      { name: 'PDSA - Degu Care', url: 'https://www.pdsa.org.uk/pet-help-and-advice/looking-after-your-pet/small-pets/degus' }
    ]
  }
];
