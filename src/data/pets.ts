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
  },
  {
    id: 'schneiders-skink',
    name: "Schneider's Skink",
    scientificName: 'Eumeces schneideri',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Schneiders_skink_001.jpg',
    quickSummary: 'Friendly, active, and colorful lizards that are surprisingly interactive for a reptile.',
    lifespan: '10 - 20 years',
    setupCost: 'Medium',
    experienceLevel: 'Intermediate',
    interactionLevel: 'High',
    pros: [
      'Very docile and usually enjoy being handled',
      'Active during the day (diurnal)',
      'Hardier than many other available skink species',
      'Beautiful orange and gold coloration'
    ],
    cons: [
      'Require an arid setup with a thick layer of substrate for burrowing',
      'Extremely fast when spooked; handling requires care initially',
      'Relies heavily on live insects for their diet',
      'Mostly wild-caught in the pet trade, often requiring immediate parasite treatment'
    ],
    careRequirements: {
      housing: 'A 40-gallon breeder tank minimum. Requires a deep (4-6 inches) specialized sand-soil mix substrate for burrowing hideouts. Needs a basking spot of 95-105°F and a cooler end.',
      diet: 'Primarily insectivores. Feed a variety of gut-loaded live insects (crickets, dubia roaches, mealworms).',
      healthAndMaintenance: 'Needs UVB lighting to process calcium. Dust feeder insects with calcium supplements. Spot clean daily to remove feces and uneaten food.'
    },
    lifestyleSuitability: 'Excellent for people looking for a highly interactive and interesting reptile that is less demanding than a Bearded Dragon but more handleable than many geckos.',
    reputableSources: [
      { name: 'Dubia.com - Schneider’s Skink Care Sheet', url: 'https://dubia.com/blogs/lizard-care/schneider-s-skink-care-sheet' },
      { name: 'ReptileSupply - How to care for a Schneider\'s Skink', url: 'https://reptilesupply.com/blogs/care-sheets/how-to-care-for-your-schneiders-skink' }
    ]
  },
  {
    id: 'fancy-rat',
    name: 'Fancy Rat',
    scientificName: 'Rattus norvegicus domestica',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Lyonblackandwhitehoodedrat.jpg',
    quickSummary: 'Highly intelligent, incredibly social, and affectionate rodents often described as "pocket dogs."',
    lifespan: '2 - 3 years',
    setupCost: 'Low',
    experienceLevel: 'Beginner',
    interactionLevel: 'High',
    pros: [
      'Very affectionate and bond strongly with their owners',
      'Highly intelligent and capable of learning complex tricks',
      'Generally very docile and rarely bite',
      'Relatively cheap to purchase and care for daily'
    ],
    cons: [
      'Heartbreakingly short lifespans (2-3 years)',
      'Extremely prone to respiratory infections and tumors (high vet bills later in life)',
      'Can be odor-heavy if cages are not cleaned meticulously',
      'MUST be kept in pairs or groups; a solitary rat will become depressed'
    ],
    careRequirements: {
      housing: 'A large, multi-level wire cage (e.g., Critter Nation) providing at least 2-2.5 cubic feet per rat. Needs solid flooring, hammocks, ropes, and plenty of climbing enrichment.',
      diet: 'A high-quality lab block (e.g., Oxbow Essentials) should form the core diet, supplemented daily with fresh vegetables, fruits, and occasional proteins (egg, chicken).',
      healthAndMaintenance: 'Must handle gently daily. Cage needs full deep-cleaning weekly with daily spot cleaning. Veterinary care often requires Exotics specialization.'
    },
    lifestyleSuitability: 'Perfect for someone wanting a highly interactive, dog-like pet but in a smaller package. They require significant daily interaction and out-of-cage playtime.',
    reputableSources: [
      { name: 'RSPCA - Pet Rats', url: 'https://www.rspca.org.uk/adviceandwelfare/pets/rodents/rats' },
      { name: 'Blue Cross - Rat Care', url: 'https://www.bluecross.org.uk/advice/rat/caring-for-your-rat' },
      { name: 'AFRMA (American Fancy Rat and Mouse Association)', url: 'https://www.afrma.org/' }
    ]
  },
  {
    id: 'hedgehog',
    name: 'African Pygmy Hedgehog',
    scientificName: 'Atelerix albiventris',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Igel.JPG',
    quickSummary: 'Solitary, nocturnal insectivores that can be prickly but endearing when socialized.',
    lifespan: '4 - 6 years',
    setupCost: 'Medium',
    experienceLevel: 'Intermediate',
    interactionLevel: 'Low',
    pros: [
      'Quiet and mostly active at night',
      'Do not require another hedgehog for company (strictly solitary)',
      'Fascinating defensive behaviors and generally cute appearance',
      'Low daily time commitment compared to a dog or cat'
    ],
    cons: [
      'Require strict temperature control (74-80°F) to prevent fatal hibernation attempts',
      'Can be very defensive and require patience to socialize to handling',
      'Prone to Wobbly Hedgehog Syndrome (neurological disease) and cancers',
      'Suffer from poor eyesight and can be easily startled'
    ],
    careRequirements: {
      housing: 'A large, single-level cage (minimum 4-8 square feet) with solid flooring. Need a high-quality solid-surface exercise wheel (no wire wheels), and a temperature-controlled heating setup (ceramic heat emitter + thermostat).',
      diet: 'High-protein, low-fat kibble (high-quality cat food or specialized hedgehog food) supplemented with live insects like worms.',
      healthAndMaintenance: 'Needs wheel and enclosure spot-cleaned daily as they poop while running. Require occasional nail trimmings and feet baths.'
    },
    lifestyleSuitability: 'Best for night owls who want a unique, solitary pet and can strictly manage room temperatures. Not ideal for loud environments or very young children.',
    reputableSources: [
      { name: 'Hedgehog Welfare Society', url: 'https://www.hedgehogwelfare.org/' },
      { name: 'RSPCA - Hedgehogs', url: 'https://www.rspca.org.uk/adviceandwelfare/pets/other/africanpygmyhedgehogs' }
    ]
  },
  {
    id: 'pigeon',
    name: 'Pigeon (Rock Dove)',
    scientificName: 'Columba livia',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Columba_livia_%28Rock_Dove%2C_wild%29%2C_Duncansby_Head%2C_Caithness%2C_Scotland_1.jpg',
    quickSummary: 'Incredibly gentle, smart, and domestic birds that make surprisingly wonderful indoor pets.',
    lifespan: '10 - 15 years',
    setupCost: 'Low',
    experienceLevel: 'Beginner',
    interactionLevel: 'High',
    pros: [
      'One of the only truly domesticated bird species; deeply bonded to humans',
      'Do not bite hard, very peaceful and docile',
      'Can wear "flyers" (bird diapers) to freely roam the house safely',
      'Quiet cooing instead of loud shrieking like parrots'
    ],
    cons: [
      'Need lots of out-of-cage time and social interaction',
      'Can be messy; constantly shed feather dust',
      'Pigeon-specific veterinary care can be hard to find',
      'Many people have a negative stigma against them'
    ],
    careRequirements: {
      housing: 'A large dog crate or a custom flight cage is ideal, with flat shelves to rest on rather than round perches. Provide supervised free-flight in a safe indoor room.',
      diet: 'A high-quality dove or pigeon seed mix with added grains, legumes, and pigeon grit for digestion. Need deep water dishes to submerge their beaks when drinking.',
      healthAndMaintenance: 'Need a heavy bath dish for bathing. Keep areas clean of dust. Monitor for respiratory issues or crop infections.'
    },
    lifestyleSuitability: 'Perfect for someone wanting a highly affectionate, dog-like bird without the extreme noise or destructive biting of a parrot.',
    reputableSources: [
      { name: 'Palomacy Pigeon & Dove Rescue', url: 'https://www.pigeonrescue.org/' }
    ]
  },
  {
    id: 'budgerigar',
    name: 'Budgerigar (Parakeet)',
    scientificName: 'Melopsittacus undulatus',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Budgerigar-male-strzelecki-qld.jpg',
    quickSummary: 'Small, intelligent, and highly social flock birds with big personalities and chatter.',
    lifespan: '5 - 10 years',
    setupCost: 'Medium',
    experienceLevel: 'Beginner',
    interactionLevel: 'Medium',
    pros: [
      'Can be excellent talkers if trained patiently',
      'Very active, playful, and entertaining to watch',
      'Can bond strongly with owners if handled from a young age',
      'Relatively inexpensive to acquire initially'
    ],
    cons: [
      'Extremely social, highly recommended to keep in pairs if you are away often',
      'Constant chattering and chirping can be annoying to some',
      'Very messy, throwing seed hulls and feathers outside the cage continually',
      'Prone to tumors and frequently hide illnesses until it\'s too late'
    ],
    careRequirements: {
      housing: 'A wide flight cage (rather than tall) to allow horizontal flying. Use natural wood perches of varying diameters. Must have plenty of shreddable toys.',
      diet: 'Should ideally be converted to a high-quality pellet diet supplemented heavily with fresh safe vegetables (chop) and minimal seeds as treats.',
      healthAndMaintenance: 'Daily water and food changes. Need a shallow bath. Toxic fumes (Teflon pans, aerosols) will kill them instantly.'
    },
    lifestyleSuitability: 'Good for lively households wanting active birds. Requires owners willing to tolerate constant noise and daily mess sweeping.',
    reputableSources: [
      { name: 'RSPCA - Budgies', url: 'https://www.rspca.org.uk/adviceandwelfare/pets/birds/budgies' }
    ]
  },
  {
    id: 'guinea-pig',
    name: 'Guinea Pig',
    scientificName: 'Cavia porcellus',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/30/George_the_amazing_guinea_pig.jpg',
    quickSummary: 'Gentle, vocal herbivores that are great for children but need large horizontal spaces.',
    lifespan: '5 - 8 years',
    setupCost: 'Medium',
    experienceLevel: 'Beginner',
    interactionLevel: 'High',
    pros: [
      'Very vocal, "wheeking" for food and attention',
      'Rarely bite and are very docile',
      'Awake largely during the day (diurnal)',
      'Highly interactive and entertaining to hand-feed'
    ],
    cons: [
      'Must be kept in pairs or small herds; they are highly social',
      'Produce a massive amount of poop daily',
      'Very timid initially and requires patience to build trust',
      'Require continuous access to hay, which can trigger human allergies'
    ],
    careRequirements: {
      housing: 'Cannot use standard small pet store cages. Minimum 7.5 to 10.5+ square feet of single-level flat space (like a C&C Cage). Safe bedding (fleece or paper).',
      diet: 'Unlimited high-quality timothy or orchard grass hay. 1/8 cup high-quality plain pellets daily. 1 cup fresh veggies daily (especially bell peppers for Vitamin C). Cannot synthesize their own Vitamin C.',
      healthAndMaintenance: 'Daily spot cleaning required. Need monthly nail trimmings. Health issues to watch include respiratory illnesses and scurvy if diet is poor.'
    },
    lifestyleSuitability: 'Great family pets for those who have horizontal floor/table space to spare and who understand the daily cleaning required.',
    reputableSources: [
      { name: 'Guinea Lynx', url: 'https://www.guinealynx.info/' },
      { name: 'RSPCA - Guinea Pigs', url: 'https://www.rspca.org.uk/adviceandwelfare/pets/rodents/guineapigs' }
    ]
  },
  {
    id: 'fancy-mouse',
    name: 'Fancy Mouse',
    scientificName: 'Mus musculus domestica',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Fancy_Mouse.jpg',
    quickSummary: 'Tiny, busy, and inexpensive pets that are fun to observe but fragile to handle.',
    lifespan: '1 - 2 years',
    setupCost: 'Low',
    experienceLevel: 'Beginner',
    interactionLevel: 'Low',
    pros: [
      'Low cost to acquire and maintain',
      'Fun to watch them climb and explore complex setups',
      'Females can be kept in highly social, entertaining groups',
      'Require minimal space compared to most other pets'
    ],
    cons: [
      'Very short lifespans (often 12-18 months)',
      'Male mice have a very strong, musky odor that is difficult to mask',
      'Very fast and fragile, tough for young children to handle safely',
      'Extremely prone to tumors and respiratory issues'
    ],
    careRequirements: {
      housing: 'A 10 to 20-gallon long glass aquarium with a secure mesh lid. Must have deep bedding for burrowing, climbing toys, and a solid-surface exercise wheel (no wire).',
      diet: 'High-quality commercial mouse blocks/pellets as a base, supplemented lightly with safe seeds, grains, and tiny pieces of veggies.',
      healthAndMaintenance: 'Strict cage cleaning is needed to prevent ammonia buildup from urine, which triggers respiratory disease. Must clean males’ cages more frequently but leave small amounts of scent behind so they don\'t over-mark.'
    },
    lifestyleSuitability: 'An entry-level pet for someone wanting low physical interaction but an engaging observational experience.',
    reputableSources: [
      { name: 'RSPCA - Mice', url: 'https://www.rspca.org.uk/adviceandwelfare/pets/rodents/mice' }
    ]
  },
  {
    id: 'parrot',
    name: 'Parrot (e.g., African Grey)',
    scientificName: 'Psittacus erithacus',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Perroquet_%C3%A0_Yampopo_Beach_-_Douala.jpg',
    quickSummary: 'Exceptionally intelligent, long-lived birds with complex emotional and mental needs.',
    lifespan: '40 - 60+ years',
    setupCost: 'Very High',
    experienceLevel: 'Advanced',
    interactionLevel: 'High',
    pros: [
      'Incredible cognitive abilities; can learn words in context and perform complex tasks',
      'Deeply bond with their owners, often choosing a favorite',
      'Highly engaging and conversational',
      'Fascinating, beautiful, and emotionally complex animals'
    ],
    cons: [
      'Requires a monumental time commitment (hours of daily interaction)',
      'Can be extremely loud, prone to screaming if bored',
      'Can develop destructive behaviors (feather plucking, serious biting) if neglected',
      'Outlive many owners, requiring estate planning'
    ],
    careRequirements: {
      housing: 'A massive, sturdy avian enclosure. Must be given extensive hours of supervised out-of-cage time in a bird-proofed room with foraging stations.',
      diet: 'A diverse, high-quality pellet-based diet combined heavily with fresh vegetable chop, sprouted seeds, and minimal fruit/nuts. Avoid all-seed diets.',
      healthAndMaintenance: 'Need specialized avian vets. Extremely sensitive respiratory systems (no Teflon, candles, incense, perfumes). Require constant intellectual stimulation by rotating diverse toys.'
    },
    lifestyleSuitability: 'Only for deeply committed individuals who are ready to make a lifestyle change to accommodate what is essentially a flying toddler for the next 50 years.',
    reputableSources: [
      { name: 'Lafeber Company - African Grey', url: 'https://lafeber.com/pet-birds/species/african-grey-parrot/' },
      { name: 'World Parrot Trust', url: 'https://www.parrots.org/' }
    ]
  },
  {
    id: 'hamster',
    name: 'Hamster (Syrian)',
    scientificName: 'Mesocricetus auratus',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Golden_hamster_front_1.jpg',
    quickSummary: 'Strictly solitary, nocturnal burrowers that require surprisingly large enclosures.',
    lifespan: '2 - 3 years',
    setupCost: 'Low',
    experienceLevel: 'Beginner',
    interactionLevel: 'Medium',
    pros: [
      'Strictly solitary; you do not need to buy two',
      'Generally easy to tame and handle if approached correctly',
      'Cute, chubby appearance with entertaining cheek-pouching behaviors',
      'Relatively low maintenance and inexpensive'
    ],
    cons: [
      'Fully nocturnal; may not wake up until late into the night',
      'Often sold with unethically small cages; require much larger tanks',
      'Short lifespans',
      'Female Syrians can be notoriously hard to satisfy with cage size and may exhibit stress behaviors'
    ],
    careRequirements: {
      housing: 'Minimum 40-gallon breeder aquarium or 800+ sq in of continuous floor space. Need 6-10+ inches of safe bedding for deep burrowing. Require an appropriately sized 10+ inch upright wheel to prevent back damage.',
      diet: 'High-quality seed mix containing varied grains and proteins, alongside commercial pellets. Occasional fresh veggie treats.',
      healthAndMaintenance: 'Need a sand bath for grooming. Spot clean toilet corners every few days; avoid fully replacing all bedding at once to reduce scent stress.'
    },
    lifestyleSuitability: 'Good for night-owls or older children who can respect the animal’s sleep schedule and interact with them in the evening.',
    reputableSources: [
      { name: 'RSPCA - Hamsters', url: 'https://www.rspca.org.uk/adviceandwelfare/pets/rodents/hamsters' },
      { name: 'California Hamster Association', url: 'https://californiahamsterassociation.com/' }
    ]
  },
  {
    id: 'dog',
    name: 'Dog',
    scientificName: 'Canis lupus familiaris',
    imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    quickSummary: 'Deeply loyal, energetic companions that seamlessly integrate into active family life.',
    lifespan: '10 - 15 years',
    setupCost: 'High',
    experienceLevel: 'Beginner',
    interactionLevel: 'High',
    pros: [
      'Ultimate companions; emotionally supportive and deeply affectionate',
      'Highly trainable and eager to please',
      'Encourage a healthy, active lifestyle for owners',
      'Can travel, hike, and participate in human activities'
    ],
    cons: [
      'High daily time commitment (training, walking, potty breaks)',
      'Can be very expensive (vet care, food, boarding, training)',
      'Require significant lifestyle adjustment (cannot easily leave for spontaneous weekend trips)',
      'Prone to separation anxiety and destructive behavior if under-exercised'
    ],
    careRequirements: {
      housing: 'Indoor living as part of the family. May need a crate for training or a secure fenced yard for exercise. Cannot be left outside permanently.',
      diet: 'High-quality, WSAVA-compliant commercial dog food appropriate for their age, size, and activity level.',
      healthAndMaintenance: 'Daily exercise (walks/play). Regular veterinary care (vaccines, heartworm prevention, dental care). Grooming needs vary vastly by breed.'
    },
    lifestyleSuitability: 'Excellent for active individuals or families with the time and resources to integrate a pet into almost every aspect of their daily routine.',
    reputableSources: [
      { name: 'AKC - Dog Care', url: 'https://www.akc.org/expert-advice/care/' },
      { name: 'ASPCA - Dogs', url: 'https://www.aspca.org/pet-care/dog-care' }
    ]
  },
  {
    id: 'cat',
    name: 'Cat',
    scientificName: 'Felis catus',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    quickSummary: 'Independent but deeply affectionate predators that thrive well in indoor environments.',
    lifespan: '12 - 18+ years',
    setupCost: 'Medium',
    experienceLevel: 'Beginner',
    interactionLevel: 'High',
    pros: [
      'Highly independent; do not need to be taken outside for potty breaks',
      'Very affectionate on their own terms',
      'Excellent for apartment living or smaller spaces',
      'Keep themselves incredibly clean via self-grooming'
    ],
    cons: [
      'Litter boxes require daily scooping and can trap odors if neglected',
      'Naturally need to scratch; can damage furniture if not provided alternatives',
      'Shedding and high-allergen potential for many people',
      'Can wake you up early in the morning for food or play'
    ],
    careRequirements: {
      housing: 'Indoor living highly recommended to keep them and local wildlife safe. Need vertical space (cat trees), scratching posts, and clean, accessible litter boxes (1 per cat + 1).',
      diet: 'Obligate carnivores. High-protein wet/dry commercial cat food. Ensure adequate hydration as they are prone to kidney issues.',
      healthAndMaintenance: 'Annual veterinary checkups, vaccinations, and preventative care. Dental cleanings often required later in life. Daily play sessions to satisfy hunting instincts.'
    },
    lifestyleSuitability: 'Perfect for working professionals, apartment dwellers, or anyone wanting a loving companion without the intense outdoor exercise demands of a dog.',
    reputableSources: [
      { name: 'ASPCA - Cats', url: 'https://www.aspca.org/pet-care/cat-care' },
      { name: 'Cornell Feline Health Center', url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center' }
    ]
  }
];
