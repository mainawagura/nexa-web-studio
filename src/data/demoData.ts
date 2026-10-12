// Detailed realistic mock data for all 12 individual website demos

// 1. HAVEN PROPERTY MANAGEMENT DATA
export const havenData = {
  stats: [
    { label: "Properties Managed", value: "85+" },
    { label: "Occupancy Rate", value: "98.2%" },
    { label: "On-Time Rent Collection", value: "99.4%" },
    { label: "Diaspora Landlords", value: "140+" }
  ],
  services: [
    { title: "Tenant Screening & Vetting", desc: "Rigorous background, employment and credit verification to guarantee reliable tenancies." },
    { title: "Automated M-Pesa Rent Collection", desc: "Direct paybill integration with automated SMS receipts and 0% reconcilation leakage." },
    { title: "24/7 Routine & Emergency Repairs", desc: "Vetted plumbers, electricians and technicians with photographic maintenance logs." },
    { title: "Diaspora Monthly Remittance", desc: "Encrypted financial statements and direct international wire to your overseas account." }
  ],
  properties: [
    { id: "h1", name: "Haven Heights Kilimani", type: "2 Bedroom Executive", location: "Kilimani, Nairobi", rent: "KES 75,000 / mo", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80", status: "Available Now" },
    { id: "h2", name: "The Mirage Westlands", type: "1 Bedroom Furnished", location: "Westlands, Nairobi", rent: "KES 60,000 / mo", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80", status: "Available Now" },
    { id: "h3", name: "Ruaka Courtyard Suites", type: "3 Bedroom Master Ensuite", location: "Ruaka, Kiambu", rent: "KES 55,000 / mo", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80", status: "Pending Lease" }
  ]
};

// 2. PRIMENEST REALTY DATA
export const primeNestData = {
  properties: [
    { id: "pn1", title: "The Royal Penthouse", location: "Riverside Drive, Nairobi", price: "KES 48,000,000", beds: 4, baths: 5, sqft: "4,200 sq ft", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80", tag: "Exclusive" },
    { id: "pn2", title: "Lavington Garden Villa", location: "Lavington, Nairobi", price: "KES 72,000,000", beds: 5, baths: 6, sqft: "5,800 sq ft", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80", tag: "Featured" },
    { id: "pn3", title: "Karen Contemporary Estate", location: "Karen, Nairobi", price: "KES 95,000,000", beds: 5, baths: 5, sqft: "6,500 sq ft", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80", tag: "Prime Investment" },
    { id: "pn4", title: "Kileleshwa Sunset Heights", location: "Kileleshwa, Nairobi", price: "KES 24,500,000", beds: 3, baths: 3, sqft: "2,400 sq ft", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80", tag: "New Listing" }
  ],
  agents: [
    { name: "Victoria Mwangi", role: "Principal Broker", phone: "+254 711 000 111", email: "victoria@primenest.co.ke", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" },
    { name: "David Kimathi", role: "Head of Commercial", phone: "+254 722 000 222", email: "david@primenest.co.ke", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80" }
  ]
};

// 3. BUILDSTRONG CONSTRUCTION DATA
export const buildStrongData = {
  services: [
    { title: "Commercial High-Rise", desc: "Turnkey multi-storey structural contracting with reinforced concrete and steel frame design." },
    { title: "Civil Infrastructure & Roads", desc: "Grading, stormwater drainage, tarmac paving, and culvert construction." },
    { title: "Luxury Residential Contracting", desc: "Architectural residences built to exact engineering tolerances and European finishing." },
    { title: "Industrial Warehousing", desc: "Portal frame warehouses, heavy-duty floor slabs, and logistics storage facilities." }
  ],
  projects: [
    { title: "Apex Financial Towers", sector: "Commercial", value: "KES 850M", year: "2025", image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=600&q=80" },
    { title: "Redhill Gated Enclave (18 Villas)", sector: "Residential", value: "KES 420M", year: "2024", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" },
    { title: "Mombasa Cold Storage Hub", sector: "Industrial", value: "KES 310M", year: "2026", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80" }
  ]
};

// 4. SERENITY HOTELS DATA
export const serenityData = {
  rooms: [
    { id: "deluxe", name: "Oceanfront Deluxe Suite", pricePerNight: 220, capacity: "2 Adults", bed: "1 King Bed", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80", perks: ["Private Balcony", "Ocean View", "Complimentary Breakfast", "High-speed Wi-Fi"] },
    { id: "executive", name: "Executive Garden Villa", pricePerNight: 350, capacity: "4 Guests", bed: "2 Queen Beds", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80", perks: ["Plunge Pool", "Garden Terrace", "Butler Service", "Airport Shuttle"] },
    { id: "presidential", name: "The Horizon Penthouse", pricePerNight: 580, capacity: "4 Guests", bed: "2 Master Suites", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80", perks: ["360° Panoramic View", "Chef Dining", "Private Jacuzzi", "VIP Lounge Access"] }
  ],
  amenities: ["Infinity Pool overlooking the Indian Ocean", "Michelin-inspired Coastal Seafood Restaurant", "Zen Organic Spa & Wellness Center", "24-Hour Concierge & Helipad Transfers"]
};

// 5. THE GREEN FORK RESTAURANT DATA
export const greenForkData = {
  menuCategories: ["Starters", "Chef's Mains", "Wood-Fired Grill", "Desserts", "Signature Drinks"],
  items: [
    { name: "Wild Truffle & Mushroom Arancini", cat: "Starters", price: "KES 1,200", desc: "Crispy risotto spheres with smoked scamorza and black truffle aioli.", dietary: "Vegetarian" },
    { name: "Tigoni Farm Beetroot Carpaccio", cat: "Starters", price: "KES 950", desc: "Thinly sliced heirloom beets with goat cheese crumble, toasted walnuts and honey balsamic.", dietary: "Vegetarian / GF" },
    { name: "Grass-Fed Aged Ribeye (350g)", cat: "Wood-Fired Grill", price: "KES 3,200", desc: "Charcoal grilled Mara beef steak with bone marrow jus, roasted garlic mash, and asparagus.", dietary: "Gluten Free" },
    { name: "Pan-Seared Swahili Red Snapper", cat: "Chef's Mains", price: "KES 2,600", desc: "Fresh catch in coconut lime reduction, served with aromatic turmeric saffron rice.", dietary: "Signature" },
    { name: "Slow-Braised Lamb Shank", cat: "Chef's Mains", price: "KES 2,850", desc: "12-hour braised local lamb with parmesan polenta and rosemary reduction.", dietary: "Chef Pick" },
    { name: "Belgian Dark Chocolate Fondant", cat: "Desserts", price: "KES 900", desc: "Molten 70% dark chocolate center with homemade Madagascar vanilla bean gelato.", dietary: "Vegetarian" },
    { name: "Nairobi Smokehouse Old Fashioned", cat: "Signature Drinks", price: "KES 1,100", desc: "Woodford Reserve bourbon infused with roasted Kenyan coffee beans, smoked orange bitters.", dietary: "Craft Cocktail" }
  ]
};

// 6. APEX BUSINESS CONSULTING DATA
export const apexData = {
  practices: [
    { title: "Market Entry & African Expansion", desc: "Commercial feasibility, regulatory compliance, and distribution network design for multinational brands entering East Africa." },
    { title: "Financial Advisory & Due Diligence", desc: "Pre-acquisition audits, capital structuring, debt restructuring, and investor readiness for growing mid-market companies." },
    { title: "Digital Transformation & ERP Roadmaps", desc: "Modernizing legacy manual processes, selecting enterprise software, and migrating to cloud automation." }
  ],
  caseStudies: [
    { client: "Pan-African Fintech Group", impact: "+210% User Acquisition", summary: "Restructured cross-border remittance compliance and operational unit economics across 4 East African territories." },
    { client: "East Africa FMCG Manufacturer", impact: "KES 140M Cost Savings", summary: "Optimized route-to-market logistics, warehouse ERP workflows, and supplier procurement contracts." }
  ],
  team: [
    { name: "Arnold G. Kamau", title: "Managing Partner", background: "Ex-McKinsey Principal with 16 years leading enterprise restructuring." },
    { name: "Brenda Chepkirui", title: "Partner, Corporate Finance", background: "Chartered Financial Analyst (CFA) specializing in private equity." }
  ]
};

// 7. CITYCARE CLINIC DATA
export const cityCareData = {
  departments: [
    { name: "General Medicine & Outpatient", desc: "Preventative checks, acute illness treatment, and chronic disease management." },
    { name: "Pediatrics & Child Wellness", desc: "Immunizations, growth milestones, and pediatric urgent care." },
    { name: "Dental & Oral Surgery", desc: "Preventative cleaning, orthodontics, crowns, and painless extractions." },
    { name: "Advanced Diagnostics & Lab", desc: "Same-day full blood counts, digital radiography, ultrasounds, and lipid profiling." }
  ],
  doctors: [
    { name: "Dr. Angela Mutiso, MD", specialty: "Consultant Physician", experience: "14 Years Experience", hours: "Mon - Thu: 9 AM - 4 PM" },
    { name: "Dr. Patrick Omondi, DDS", specialty: "Lead Dental Surgeon", experience: "11 Years Experience", hours: "Tue - Sat: 10 AM - 5 PM" },
    { name: "Dr. Susan Waweru, MD", specialty: "Pediatric Specialist", experience: "9 Years Experience", hours: "Mon - Fri: 8 AM - 2 PM" }
  ],
  hours: "Monday – Saturday: 7:30 AM – 8:00 PM | Sunday & Public Holidays: 9:00 AM – 5:00 PM | Emergency Pharmacy: 24/7"
};

// 8. SPARKLEPRO SERVICES DATA
export const sparkleProData = {
  packages: [
    { name: "Residential Deep Clean", price: "From KES 7,500", scope: "1 - 3 Bedroom homes", bullets: ["Deep scrub of kitchens & sanitization", "Bathroom descaling & tile grout steam clean", "Interior windows, frames & skirting boards", "Eco-friendly non-toxic supplies provided"] },
    { name: "Post-Construction Clean", price: "From KES 14,000", scope: "Newly built / renovated", bullets: ["Paint splatter, cement residue & dust removal", "Heavy industrial HEPA vacuuming", "Sanitization of cabinets, fixtures & fittings", "Move-in certified inspection guarantee"] },
    { name: "Commercial & Office Retainer", price: "From KES 25,000 / mo", scope: "Corporate spaces", bullets: ["Daily or bi-weekly scheduled cleaning", "Restroom hygiene supply restocking", "Carpet steam extraction quarterly", "Uniformed, vetted & insured crew"] }
  ],
  serviceAreas: ["Kilimani", "Westlands", "Karen", "Lavington", "Kitisuru", "Runda", "Ruaka", "Gigiri", "South B & C"]
};

// 9. EDUBRIDGE ACADEMY DATA
export const eduBridgeData = {
  courses: [
    { id: "c1", title: "Full-Stack Software Engineering", duration: "16 Weeks", format: "Hybrid / Evening", level: "Beginner to Pro", price: "KES 65,000", desc: "Modern web development with React, TypeScript, C# .NET APIs, and SQL Server databases." },
    { id: "c2", title: "Data Analytics & Business Intelligence", duration: "12 Weeks", format: "Online Live", level: "Intermediate", price: "KES 48,000", desc: "Master SQL, Python for data manipulation, PowerBI interactive dashboards, and executive reporting." },
    { id: "c3", title: "Digital Product Management & UX", duration: "10 Weeks", format: "Weekend Bootcamp", level: "All Levels", price: "KES 42,000", desc: "Learn user research, Figma interface design, agile sprint cycles, and product launch strategy." }
  ],
  instructors: [
    { name: "Joseph K. Ndungu", role: "Senior Engineering Lead", company: "Fintech Systems Architect" },
    { name: "Claire Muthoni", role: "Principal Data Scientist", company: "Telecommunications & BI" }
  ]
};

// 10. SAFARIVISTA TOURS DATA
export const safariVistaData = {
  safaris: [
    { id: "s1", title: "4-Day Maasai Mara Great Migration Spectacle", duration: "4 Days / 3 Nights", price: "$850 per person", group: "Small Group or Private", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80", highlights: ["Big Five game drives with experienced naturalist guide", "Luxury tented camp along Talek River", "Optional hot-air balloon sunrise safari over Mara plains", "Full-board gourmet bush dining"] },
    { id: "s2", title: "7-Day Bush & Beach: Amboseli, Tsavo & Diani", duration: "7 Days / 6 Nights", price: "$1,480 per person", group: "Private 4x4 Land Cruiser", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80", highlights: ["Mt. Kilimanjaro backdrop elephant herds in Amboseli", "Red elephants and dramatic volcanic landscapes in Tsavo", "3 days relaxing on white sands of Diani Beach", "All domestic flight and park entry tickets included"] },
    { id: "s3", title: "3-Day Samburu & Ol Pejeta Chimpanzee Sanctuary", duration: "3 Days / 2 Nights", price: "$720 per person", group: "Small Group", image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=600&q=80", highlights: ["Rare northern special species (Grevy's zebra, Reticulated giraffe)", "Last northern white rhinos protection visit", "Cultural Samburu village community interaction"] }
  ]
};

// 11. LUXECART BOUTIQUE DATA
export const luxeCartData = {
  categories: ["All Items", "Footwear", "Handbags", "Timepieces", "Outerwear"],
  products: [
    { id: "p1", name: "Artisanal Saddle Leather Tote", category: "Handbags", price: 180, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80", rating: 4.9, stock: "In Stock" },
    { id: "p2", name: "Handcrafted Chelsea Boots", category: "Footwear", price: 210, image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=600&q=80", rating: 4.8, stock: "Limited Stock" },
    { id: "p3", name: "Minimalist Chronograph Watch", category: "Timepieces", price: 295, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80", rating: 5.0, stock: "In Stock" },
    { id: "p4", name: "Merino Wool Camel Trench Coat", category: "Outerwear", price: 340, image: "https://images.unsplash.com/photo-1539533018447-63fcce667823?auto=format&fit=crop&w=600&q=80", rating: 4.9, stock: "In Stock" },
    { id: "p5", name: "Grain Leather Bifold Wallet", category: "Handbags", price: 75, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80", rating: 4.7, stock: "In Stock" },
    { id: "p6", name: "Aviator Gold-Trim Sunglasses", category: "Timepieces", price: 130, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80", rating: 4.8, stock: "In Stock" }
  ]
};

// 12. SWIFTMOVE LOGISTICS DATA
export const swiftMoveData = {
  services: [
    { title: "Same-Day City Express", desc: "Motorbike and dedicated van parcel delivery across metropolitan Nairobi within 2 hours." },
    { title: "Domestic Freight & Haulage", desc: "Daily scheduled container and dry haulage trucks between Nairobi, Mombasa, Kisumu, Nakuru, and Eldoret." },
    { title: "Cross-Border East Africa Freight", desc: "Bonded road freight clearing and transport to Uganda, Rwanda, Tanzania, and South Sudan." }
  ],
  sampleTrackings: {
    "SWIFT-8921": {
      trackingNumber: "SWIFT-8921",
      origin: "Mombasa Port Container Terminal",
      destination: "Nairobi Inland Depot (ICD)",
      currentStatus: "In Transit — Near Mtito Andei",
      eta: "Today, 5:30 PM",
      weight: "22,400 kg",
      driver: "John K. (Truck KDF 892M)"
    },
    "SWIFT-4012": {
      trackingNumber: "SWIFT-4012",
      origin: "Nairobi Industrial Area",
      destination: "Kampala Central Distribution Hub",
      currentStatus: "Customs Cleared at Malaba Border",
      eta: "Tomorrow, 11:00 AM",
      weight: "14,800 kg",
      driver: "Samuel M. (Truck KCP 412X)"
    }
  }
};
