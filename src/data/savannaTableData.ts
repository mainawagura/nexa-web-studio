export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'mains' | 'vegetarian' | 'desserts' | 'drinks';
  categoryDisplay: string;
  priceKsh: number;
  priceDisplay: string;
  description: string;
  image: string;
  dietary: ('GF' | 'DF' | 'V' | 'VG' | 'Signature')[];
  pairing?: string;
  origin?: string;
}

export interface PrivateDiningSpace {
  id: string;
  name: string;
  capacity: string;
  description: string;
  features: string[];
  image: string;
  idealFor: string;
}

export interface RestaurantTestimonial {
  id: string;
  quote: string;
  guestName: string;
  guestRole: string;
  occasion: string;
  date: string;
  tag: string;
}

export const savannaTableMenu: MenuItem[] = [
  // 1. STARTERS
  {
    id: "m-01",
    name: "Charred Kilifi Octopus",
    category: "starters",
    categoryDisplay: "Starters",
    priceKsh: 1950,
    priceDisplay: "KSh 1,950",
    description: "Tender line-caught Kilifi octopus glazed with sweet tamarind and toasted cumin, served over whipped smoked cassava cream with crispy saltbush.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    dietary: ["GF", "DF", "Signature"],
    pairing: "Paired with Swahili Lime Spritz",
    origin: "Kilifi Creek, Coastal Kenya"
  },
  {
    id: "m-02",
    name: "Swahili Coconut Crab Bisque",
    category: "starters",
    categoryDisplay: "Starters",
    priceKsh: 1850,
    priceDisplay: "KSh 1,850",
    description: "Rich reduction of mangrove mud crab simmered in fresh spiced coconut milk, lemongrass, charred ginger, and served with warm mahamri crisps.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    dietary: ["GF", "DF"],
    pairing: "Paired with Cold-Fermented Chenin Blanc",
    origin: "Lamu Archipelago"
  },
  {
    id: "m-03",
    name: "Samburu Beef Tartare with Mursik Pearls",
    category: "starters",
    categoryDisplay: "Starters",
    priceKsh: 2100,
    priceDisplay: "KSh 2,100",
    description: "Hand-chopped Highland prime tenderloin seasoned with cold-pressed moringa oil, shallots, wild capers, and spheres of fermented smoked mursik milk.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    dietary: ["GF", "Signature"],
    pairing: "Paired with Oaked Western Cape Pinotage",
    origin: "Laikipia Plateau"
  },
  {
    id: "m-04",
    name: "Crispy Samosa of Braised Oxtail",
    category: "starters",
    categoryDisplay: "Starters",
    priceKsh: 1650,
    priceDisplay: "KSh 1,650",
    description: "Delicate hand-rolled filo pastry filled with 12-hour braised oxtail in coastal cloves and nutmeg, accompanied by roasted baobab chutney.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    dietary: ["DF"],
    pairing: "Paired with Tusker Craft IPA",
    origin: "Nanyuki Ranches"
  },

  // 2. MAIN COURSES
  {
    id: "m-05",
    name: "Slow-Braised Laikipia Lamb Shank",
    category: "mains",
    categoryDisplay: "Main Courses",
    priceKsh: 3600,
    priceDisplay: "KSh 3,600",
    description: "Grass-fed Highland lamb shank braised in wild rosemary, charred leeks, and roasted bone marrow broth. Served over creamy roasted garlic and sweet potato mash.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    dietary: ["GF", "Signature"],
    pairing: "Paired with Reserve Cabernet Sauvignon",
    origin: "Laikipia Highland Ranches"
  },
  {
    id: "m-06",
    name: "Charcoal-Grilled Highland Angus Ribeye (350g)",
    category: "mains",
    categoryDisplay: "Main Courses",
    priceKsh: 4200,
    priceDisplay: "KSh 4,200",
    description: "28-day dry-aged Kenya Highland Angus beef seared over acacia embers. Accompanied by truffle sukuma purée, blistered cherry tomatoes, and spiced marrow jus.",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    dietary: ["GF", "Signature"],
    pairing: "Paired with Stellenbosch Syrah",
    origin: "Mount Kenya Foothills"
  },
  {
    id: "m-07",
    name: "Pan-Seared Malindi Red Snapper",
    category: "mains",
    categoryDisplay: "Main Courses",
    priceKsh: 3400,
    priceDisplay: "KSh 3,400",
    description: "Crisp skin wild-caught Malindi snapper fillet basted in lemongrass brown butter, served over a fragrant turmeric pilau emulsion and charred okra relish.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    dietary: ["GF"],
    pairing: "Paired with Crisp Coastal Sauvignon Blanc",
    origin: "Malindi Marine Sanctuary"
  },
  {
    id: "m-08",
    name: "Smoked Kuku Paka (Heritage Chicken)",
    category: "mains",
    categoryDisplay: "Main Courses",
    priceKsh: 2950,
    priceDisplay: "KSh 2,950",
    description: "Free-range heritage chicken smoked over olive wood embers, gently simmered in a velvety coconut curry infused with green chilies, toasted coriander, and charred lime.",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    dietary: ["GF", "DF"],
    pairing: "Paired with Barrel-Aged Viognier",
    origin: "Naivasha Heritage Farms"
  },

  // 3. VEGETARIAN & PLANT-BASED
  {
    id: "m-09",
    name: "Roasted Butternut & Matoke Gnocchi",
    category: "vegetarian",
    categoryDisplay: "Vegetarian",
    priceKsh: 2600,
    priceDisplay: "KSh 2,600",
    description: "Handcrafted green banana and roasted squash gnocchi pan-seared in spiced brown butter, crispy sage, toasted pumpkin seed oil, and shaved aged highland pecorino.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    dietary: ["V", "Signature"],
    pairing: "Paired with Lightly Oaked Chardonnay",
    origin: "Meru Highland Organic Cooperatives"
  },
  {
    id: "m-10",
    name: "Wood-Fired Baobab Cauliflower Steak",
    category: "vegetarian",
    categoryDisplay: "Vegetarian",
    priceKsh: 2400,
    priceDisplay: "KSh 2,400",
    description: "Thick-cut organic cauliflower roasted over glowing embers, brushed with tangy baobab glaze, nestled on creamy split pea purée and crunchy dukkah nuts.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    dietary: ["V", "VG", "GF", "DF"],
    pairing: "Paired with Dry Sparkling Brut",
    origin: "Kinangop Organic Gardens"
  },
  {
    id: "m-11",
    name: "Indigenous Millet & Wild Mushroom Risotto",
    category: "vegetarian",
    categoryDisplay: "Vegetarian",
    priceKsh: 2750,
    priceDisplay: "KSh 2,750",
    description: "Pearl millet and highland wild morel mushrooms slow-simmered in rich botanical vegetable broth, finished with lemon thyme and mountain sheep's curd.",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80",
    dietary: ["V", "GF"],
    pairing: "Paired with Elgin Pinot Noir",
    origin: "Aberdare Forest Foothills"
  },

  // 4. DESSERTS
  {
    id: "m-12",
    name: "Smoked Mount Kenya Honey Tart",
    category: "desserts",
    categoryDisplay: "Desserts",
    priceKsh: 1450,
    priceDisplay: "KSh 1,450",
    description: "Crispy macadamia nut crust filled with wild stingless bee honey ganache, sprinkled with sea salt flakes, and crowned with vanilla bean mascarpone.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    dietary: ["V", "Signature"],
    pairing: "Paired with Kenyan Peaberry Espresso",
    origin: "Mount Kenya Apiaries"
  },
  {
    id: "m-13",
    name: "Cardamom & Coastal Mango Mille-Feuille",
    category: "desserts",
    categoryDisplay: "Desserts",
    priceKsh: 1350,
    priceDisplay: "KSh 1,350",
    description: "Caramelized crisp puff pastry layered with fragrant green cardamom diplomat cream and slow-poached Malindi apple mango coulis.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
    dietary: ["V"],
    pairing: "Paired with Spiced Chai Infusion",
    origin: "Coastal Kilifi Orchards"
  },
  {
    id: "m-14",
    name: "Hibiscus (Karkadeh) Poached Pears",
    category: "desserts",
    categoryDisplay: "Desserts",
    priceKsh: 1400,
    priceDisplay: "KSh 1,400",
    description: "Local pears gently poached in ruby-red hibiscus petals, star anise, and cinnamon. Served with house-churned coconut lemongrass sorbet.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    dietary: ["V", "VG", "GF", "DF"],
    pairing: "Paired with Late Harvest Riesling",
    origin: "Rift Valley Orchards"
  },

  // 5. DRINKS & CELLAR
  {
    id: "m-15",
    name: "Mara Sunset Botanist Cocktail",
    category: "drinks",
    categoryDisplay: "Drinks & Cellar",
    priceKsh: 1650,
    priceDisplay: "KSh 1,650",
    description: "Small-batch Kenyan sugarcane rum, steeped hibiscus syrup, freshly squeezed passion fruit, wild baobab reduction, and charred rosemary smoke.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    dietary: ["VG", "GF", "Signature"],
    pairing: "House Signature Aperitif",
    origin: "Savanna Table Mixology Lab"
  },
  {
    id: "m-16",
    name: "The Dawa Reimagined",
    category: "drinks",
    categoryDisplay: "Drinks & Cellar",
    priceKsh: 1500,
    priceDisplay: "KSh 1,500",
    description: "Artisanal Kenyan vodka, crushed local limes, raw highland wildflower honey, and fresh ginger juice swizzled over crushed ice with bee pollen rim.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    dietary: ["GF"],
    pairing: "Kenyan Heritage Classic",
    origin: "Savanna Table Mixology Lab"
  },
  {
    id: "m-17",
    name: "Cold-Brewed Kericho White Tea & Yuzu (Zero Proof)",
    category: "drinks",
    categoryDisplay: "Drinks & Cellar",
    priceKsh: 950,
    priceDisplay: "KSh 950",
    description: "24-hour cold-steeped silver needle white tea leaves from Kericho estates, infused with yuzu citrus, mint leaves, and sparkling mountain spring water.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
    dietary: ["VG", "GF"],
    pairing: "Zero-Proof Botanical Elixir",
    origin: "Kericho Highland Tea Estates"
  }
];

export const privateDiningSpaces: PrivateDiningSpace[] = [
  {
    id: "space-1",
    name: "The Acacia Wine Vault",
    capacity: "Up to 16 Guests Seated",
    description: "Surrounded by climate-controlled racks of 600+ African and international estate wines. Features a single monolithic olive wood banquet table and dedicated sommelier service.",
    features: ["Private Sommelier & Chef", "Dedicated Acoustic Sound System", "Subtle Intimate Lighting", "Custom 7-Course Tasting Menu"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    idealFor: "Executive Board Dinners, Milestone Anniversaries, VIP Hosting"
  },
  {
    id: "space-2",
    name: "The Lantern Garden Pergola",
    capacity: "20 to 60 Guests",
    description: "An enchanting alfresco garden pavilion enclosed by mature indigenous jacarandas, woven terracotta hearth lamps, and a dedicated cocktail bar.",
    features: ["Live Acoustic Music Setup", "Private Outdoor Hearth & Bar", "Weather-Proof Motorized Canopy", "Bespoke Family-Style Feasts"],
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
    idealFor: "Boutique Weddings, Rehearsal Dinners, Corporate Year-End Celebrations"
  },
  {
    id: "space-3",
    name: "The Chef's Hearth Counter",
    capacity: "8 to 12 Guests",
    description: "Front-row seats to the culinary theatre of open-ember cooking, interactive plating discussions with Executive Chef Amani, and paired wines.",
    features: ["Direct Kitchen Line Interaction", "Exclusive Off-Menu Courses", "Storytelling with Every Dish", "Handmade Ceramic Plateware"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    idealFor: "Food Enthusiasts, Intimate Client Entertaining, Culinary Celebrations"
  }
];

export const restaurantTestimonials: RestaurantTestimonial[] = [
  {
    id: "rt-1",
    quote: "Savanna Table has completely elevated African dining in Nairobi. The Kilifi octopus and the Laikipia lamb shank were culinary masterpieces. The ambiance under the acacia lamps made our anniversary unforgettable.",
    guestName: "Caroline & Dr. Mutua",
    guestRole: "Dinner Guests, Karen",
    occasion: "10th Wedding Anniversary",
    date: "September 2026",
    tag: "Illustrative Demo Guest"
  },
  {
    id: "rt-2",
    quote: "We hosted an international board delegation of 14 executives in The Acacia Wine Vault. The 6-course tasting menu paired with South African reserve wines exceeded every expectation. Flawless service.",
    guestName: "Jameson K. Kariuki",
    guestRole: "Managing Director, East Africa PE Fund",
    occasion: "Private Corporate Dinner",
    date: "August 2026",
    tag: "Illustrative Demo Guest"
  },
  {
    id: "rt-3",
    quote: "As a vegetarian in Nairobi, dining out can be repetitive. Here, the Matoke Gnocchi and the Baobab Cauliflower blew my mind. Authentic indigenous ingredients treated with world-class fine-dining respect.",
    guestName: "Fatima Al-Husseini",
    guestRole: "Culinary Writer & Resident",
    occasion: "Weekend Garden Lunch",
    date: "October 2026",
    tag: "Illustrative Demo Guest"
  }
];

export const restaurantAtmosphere = [
  {
    title: "Open Hearth & Ember Pit",
    desc: "Ancient cooking techniques reimagined with indigenous olive and acacia wood.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Main Dining Room",
    desc: "Warm earthen textures, handcrafted brass chandeliers, and organic linen table settings.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Lantern Garden Terrace",
    desc: "Alfresco evening dining nestled under candlelit pergolas and mature greenery.",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Mixology & Botanical Bar",
    desc: "Craft cocktails infused with hand-foraged East African botanicals and spices.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80"
  }
];
