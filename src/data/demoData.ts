// Detailed realistic demonstration data for all 12 Master Prompt website demos

// 1. HAVENSTONE PROPERTIES (Property Management & Real Estate)
// Palette: Charcoal (#171A21), Ivory (#F7F6F2), Muted Gold (#C5A059)
export const havenstoneData = {
  stats: [
    { label: "Properties Under Management", value: "120+" },
    { label: "Portfolio Occupancy Rate", value: "98.6%" },
    { label: "On-Time Rental Remittance", value: "99.8%" },
    { label: "Diaspora Property Owners", value: "185+" }
  ],
  services: [
    { 
      id: "vetting",
      title: "Tenant Screening & Vetting", 
      desc: "Rigorous background, employment history, and credit assessment ensuring exemplary tenancy standards." 
    },
    { 
      id: "remittance",
      title: "Automated Rent Collection & Remittance", 
      desc: "Seamless M-Pesa paybill and wire reconciliation with automated monthly remittance directly to your bank." 
    },
    { 
      id: "maintenance",
      title: "24/7 Facility Maintenance & Audits", 
      desc: "Vetted master tradesmen, photographic repair logs, and routine quarterly preventive inspections." 
    },
    { 
      id: "advisory",
      title: "Asset Valuation & Yield Optimization", 
      desc: "Data-backed rental yield analysis, lease contract enforcement, and property refurbishment advisory." 
    }
  ],
  properties: [
    { 
      id: "hp-1", 
      title: "The Sovereign Penthouse — Riverside", 
      type: "4 Bedroom Penthouse", 
      location: "Riverside Drive, Nairobi", 
      price: "KES 180,000 / mo", 
      beds: 4, 
      baths: 4.5, 
      sqft: "3,850 sq ft", 
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", 
      tag: "Premium Executive", 
      status: "Available for Immediate Tenancy",
      amenities: ["Private Rooftop Terrace", "Heated Swimming Pool", "Full Backup Generator", "Biometric Access Control"]
    },
    { 
      id: "hp-2", 
      title: "The Arches Courtyard Villa", 
      type: "5 Bedroom Townhouse", 
      location: "Lavington Green, Nairobi", 
      price: "KES 240,000 / mo", 
      beds: 5, 
      baths: 5, 
      sqft: "4,600 sq ft", 
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80", 
      tag: "Diplomatic Zone", 
      status: "Viewing by Appointment",
      amenities: ["Private Manicured Garden", "Ensuite Staff Quarters", "Perimeter Electric Fence", "Solar Water Heating"]
    },
    { 
      id: "hp-3", 
      title: "Havenstone Heights Residence", 
      type: "2 Bedroom Luxury Suite", 
      location: "Kilimani, Nairobi", 
      price: "KES 95,000 / mo", 
      beds: 2, 
      baths: 2, 
      sqft: "1,450 sq ft", 
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80", 
      tag: "Furnished Option", 
      status: "Available for Immediate Tenancy",
      amenities: ["High-Speed Fiber Ready", "Equipped Modern Gym", "Borehole Water Supply", "Dedicated Basement Parking"]
    },
    { 
      id: "hp-4", 
      title: "Westlands Executive Residence", 
      type: "3 Bedroom Master Ensuite", 
      location: "Westlands, Nairobi", 
      price: "KES 140,000 / mo", 
      beds: 3, 
      baths: 3, 
      sqft: "2,200 sq ft", 
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", 
      tag: "Business District", 
      status: "Under Offer",
      amenities: ["Executive Boardroom", "High-Speed Elevators", "CCTV Surveillance", "Intercom System"]
    }
  ]
};

// 2. IRONWOOD CONSTRUCTION GROUP (Construction & Engineering)
// Palette: Graphite (#1E2229), Warm White (#F7F6F2), Burnt Orange (#EA580C)
export const ironwoodData = {
  metrics: [
    { label: "Completed Civil & Commercial Projects", value: "48+" },
    { label: "Contract Value Executed", value: "KES 3.8B+" },
    { label: "Safe Work Hours Without LTI", value: "1.4M" },
    { label: "NCA Category 1 Contractor", value: "Certified" }
  ],
  services: [
    { 
      title: "Structural Commercial High-Rise", 
      desc: "Turnkey multi-storey engineering with post-tensioned reinforced concrete, structural steel frames, and facade installation." 
    },
    { 
      title: "Civil Infrastructure & Highways", 
      desc: "High-spec asphalt surfacing, stormwater containment, culvert civil engineering, and bridge abutments." 
    },
    { 
      title: "Industrial Logistics & Heavy Warehousing", 
      desc: "Large-span portal frames, superflat laser-screeded concrete slabs, and cold storage industrial facilities." 
    },
    { 
      title: "Project Management & EPC Contracting", 
      desc: "Rigorous cost planning, procurement lifecycle oversight, BIM 3D modeling, and statutory compliance." 
    }
  ],
  projects: [
    { 
      id: "iw-1",
      title: "Apex Financial Centre", 
      sector: "Commercial High-Rise", 
      value: "KES 920M", 
      duration: "18 Months", 
      year: "2025", 
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      description: "14-storey Grade-A commercial headquarters featuring seismic-resistant concrete frame and curtain wall glazing."
    },
    { 
      id: "iw-2",
      title: "Redhill Ridge Luxury Enclave", 
      sector: "Residential Civil Works", 
      value: "KES 540M", 
      duration: "14 Months", 
      year: "2024", 
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
      description: "Gated estate civil works including 2.4km paved access roads, drainage civil engineering, and 22 structural luxury residences."
    },
    { 
      id: "iw-3",
      title: "Mombasa Cold Chain Logistics Hub", 
      sector: "Industrial Logistics", 
      value: "KES 380M", 
      duration: "11 Months", 
      year: "2026", 
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      description: "High-bay temperature-controlled storage facility with heavy-duty post-tensioned slabs and insulated panelling."
    }
  ],
  safetyPrinciples: [
    "Zero-Harm target across all sites with mandatory daily toolbox talks",
    "ISO 9001 quality management & ISO 45001 occupational safety compliance",
    "Heavy plant machinery inspected weekly with certified telematics logs",
    "Comprehensive environmental mitigation and soil erosion control"
  ]
};

// 3. THE ALDER HOUSE HOTEL (Hotel & Hospitality)
// Palette: Warm Neutrals (#F5F2EB), Forest Green (#1E3A2F), Muted Brass (#C29B38)
export const alderHouseData = {
  tagline: "A tranquil sanctuary combining coastal elegance, artisanal gastronomy, and secluded luxury.",
  rooms: [
    { 
      id: "suite-deluxe", 
      name: "The Garden Pavilion Suite", 
      ratePerNight: 240, 
      capacity: "2 Guests", 
      bed: "1 California King Bed", 
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80", 
      amenities: ["Private Veranda & Plunge Pool", "Rain Shower & Soaking Tub", "Complimentary Artisanal Breakfast", "High-Speed Wi-Fi & Nespresso Bar"],
      desc: "Set amid fragrant tropical flora with handcrafted teak furnishings and an intimate outdoor stone bath."
    },
    { 
      id: "suite-ocean", 
      name: "Oceanfront Horizon Suite", 
      ratePerNight: 380, 
      capacity: "2 - 3 Guests", 
      bed: "1 King Bed + Daybed", 
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80", 
      amenities: ["Unobstructed Coral Sea Vistas", "Direct Beach Pathway Access", "Dedicated 24/7 Butler Concierge", "Sunset Cocktail Hour Included"],
      desc: "Floor-to-ceiling glass doors open directly toward the ocean breeze, with an expansive private sun terrace."
    },
    { 
      id: "suite-residence", 
      name: "The Alder Executive Villa", 
      ratePerNight: 650, 
      capacity: "Up to 6 Guests", 
      bed: "3 Master King Suites", 
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80", 
      amenities: ["Full Chef's Kitchen & Private Dining", "Private 15m Infinity Swimming Pool", "Private Chauffeur Airport Transfers", "In-Villa Spa Treatments"],
      desc: "Our signature private estate designed for discerning families or executive retreats seeking secluded prestige."
    }
  ],
  experiences: [
    { title: "Dhow Sunset Sailing", desc: "Private wooden dhow excursions along the coastline with sommelier champagne pairings." },
    { title: "Coral Reef Snorkeling & Marine Safari", desc: "Guided marine exploration with our resident marine biologist." },
    { title: "Bespoke Organic Botanical Spa", desc: "Therapeutic massage rituals utilizing cold-pressed African botanicals and baobab oils." },
    { title: "Chef's Catch Coastal Dining", desc: "Wood-fired ocean catch prepared tableside with farm-harvested herbs." }
  ]
};

// 4. EMBER & OLIVE (Restaurant & Café)
// Palette: Deep Olive (#283618), Cream (#FEFAE0), Warm Terracotta (#BC6C25)
export const emberOliveData = {
  hours: "Tuesday – Sunday: 11:30 AM – 10:30 PM | Closed Mondays",
  address: "14 Forest Green Lane, Karen, Nairobi",
  menu: [
    { 
      category: "Small Plates & Starters",
      items: [
        { name: "Wood-Fired Burrata & Charred Peaches", price: "KES 1,350", desc: "Hand-tied burrata, spiced acacia honey, fresh garden basil, grilled sourdough.", tag: "Vegetarian" },
        { name: "Wild Mushroom & Truffle Arancini", price: "KES 1,200", desc: "Crispy saffron risotto spheres, smoked provolone, roasted garlic black truffle emulsion.", tag: "House Favorite" },
        { name: "Highland Beef Tartare", price: "KES 1,600", desc: "Hand-cut grass-fed fillet, cured egg yolk, caperberries, crispy bone marrow brioche.", tag: "Signature" }
      ]
    },
    { 
      category: "Wood-Fired Hearth & Mains",
      items: [
        { name: "Aged Mara Ribeye Steak (350g)", price: "KES 3,400", desc: "Charcoal-seared grass-fed beef, bone marrow jus, roasted garlic pomme puree, charred broccolini.", tag: "Gluten-Free" },
        { name: "Swahili Coconut Red Snapper", price: "KES 2,750", desc: "Line-caught Indian Ocean fillet, saffron-infused coconut reduction, aromatic turmeric rice, charred lime.", tag: "Signature" },
        { name: "Slow-Braised Karoo Lamb Shank", price: "KES 2,900", desc: "14-hour reduction, creamy parmesan polenta, gremolata, glazed heritage carrots.", tag: "Chef Recommendation" },
        { name: "Charred Eggplant & Romanesco Ragu", price: "KES 1,950", desc: "Hearth-roasted heirloom vegetables, san marzano tomato reduction, almond ricotta, hand-pulled tagliatelle.", tag: "Plant-Based" }
      ]
    },
    { 
      category: "Dolce & Cellar Pairings",
      items: [
        { name: "Ember Dark Chocolate Torta", price: "KES 950", desc: "70% single-origin cacao cake, smoked sea salt flakes, Madagascar bourbon vanilla gelato.", tag: "Dessert" },
        { name: "Artisanal Smoked Old Fashioned", price: "KES 1,200", desc: "Woodford Reserve bourbon, roasted Kenyan peaberry infusion, charred orange oils.", tag: "Cocktail" }
      ]
    }
  ]
};

// 5. NORTHSTAR ADVISORY (Consulting & Professional Services)
// Palette: Deep Navy (#0B192C), White (#FFFFFF), Restrained Blue Accents (#008DDA)
export const northstarData = {
  practices: [
    { 
      title: "Market Expansion & Regional Scale", 
      desc: "Regulatory feasibility, distribution infrastructure design, and strategic M&A across high-growth East & Central African economies." 
    },
    { 
      title: "Corporate Finance & Capital Structuring", 
      desc: "Institutional financial modeling, debt syndication, private equity investor readiness, and pre-deal due diligence." 
    },
    { 
      title: "Digital Operations & Systems Architecture", 
      desc: "Process re-engineering, ERP migration roadmaps, cloud data governance, and automated revenue reconciliation." 
    }
  ],
  caseStudies: [
    { 
      client: "Regional Fintech Remittance Platform", 
      impact: "+185% Transaction Volume in 9 Months", 
      summary: "Restructured cross-border regulatory compliance, unit economics, and bank clearing partnerships across 4 East African territories." 
    },
    { 
      client: "East Africa FMCG & Cold Chain Distributor", 
      impact: "KES 160M Operational Cost Optimization", 
      summary: "Engineered automated dispatch scheduling, inventory forecasting algorithms, and supplier renegotiation framework." 
    }
  ],
  partners: [
    { 
      name: "Marcus Vance, MBA", 
      role: "Senior Managing Partner", 
      experience: "Ex-tier 1 strategy principal with 18 years directing cross-border corporate transformations." 
    },
    { 
      name: "Dr. Catherine W. Muraya, CFA", 
      role: "Head of Corporate Finance", 
      experience: "Specialist in infrastructure finance, sovereign bonds, and institutional private equity." 
    }
  ]
};

// 6. WILLOWCARE MEDICAL CENTRE (Clinics & Healthcare)
// Palette: White (#FFFFFF), Soft Blue (#EBF4F6), Healthcare Teal (#088395)
export const willowCareData = {
  hours: "Monday – Saturday: 7:30 AM – 8:00 PM | Sunday: 9:00 AM – 4:00 PM | Emergency Triage: 24/7",
  emergencyContact: "+254 706 059 826",
  departments: [
    { name: "Comprehensive Family Medicine", desc: "Preventative wellness checks, chronic hypertension/diabetes management, and acute care." },
    { name: "Pediatrics & Child Immunization", desc: "Growth monitoring, developmental evaluations, and scheduled immunization programs." },
    { name: "Preventive Dental & Orthodontics", desc: "Digital dental imaging, painless restorative therapy, prophylaxis, and cosmetic alignments." },
    { name: "On-Site Diagnostic Imaging & Lab", desc: "Same-day hematology, biochemistry, digital X-ray, and 4D ultrasound scans." }
  ],
  practitioners: [
    { name: "Dr. Evelyn M. Nduta, MBChB, MMed", role: "Consultant Physician & Internist", experience: "15 Years Experience", availability: "Mon – Thu" },
    { name: "Dr. Brian O. Kiprono, BDS", role: "Head of Restorative Dentistry", experience: "12 Years Experience", availability: "Tue – Sat" },
    { name: "Dr. Grace Achieng, MBChB, Pediatrics", role: "Consultant Pediatric Specialist", experience: "10 Years Experience", availability: "Mon – Fri" }
  ]
};

// 7. AURA LIVING / LUXECART BOUTIQUE (Retail & E-commerce)
export const auraLivingData = {
  categories: ["All Curations", "Handbags & Leather", "Footwear", "Timepieces", "Outerwear"],
  products: [
    { id: "al-1", name: "Artisanal Saddle Leather Tote", category: "Handbags & Leather", price: 185, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80", tag: "Handcrafted", rating: 4.9, stock: "In Stock" },
    { id: "al-2", name: "Chelsea Goodyear-Welted Boots", category: "Footwear", price: 220, image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=600&q=80", tag: "Italian Calfskin", rating: 4.8, stock: "Limited Stock" },
    { id: "al-3", name: "Minimalist Automatic Chronograph", category: "Timepieces", price: 310, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80", tag: "Sapphire Crystal", rating: 5.0, stock: "In Stock" },
    { id: "al-4", name: "Merino Wool Double-Breasted Coat", category: "Outerwear", price: 360, image: "https://images.unsplash.com/photo-1539533018447-63fcce667823?auto=format&fit=crop&w=600&q=80", tag: "Pure Merino", rating: 4.9, stock: "In Stock" },
    { id: "al-5", name: "Vegetable-Tanned Bifold Wallet", category: "Handbags & Leather", price: 85, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80", tag: "Full-Grain", rating: 4.7, stock: "In Stock" }
  ]
};

// 8. OAKRIDGE ACADEMY (Schools & Education)
export const oakridgeData = {
  programs: [
    { id: "p-stem", title: "Advanced STEM & Computer Science", grades: "Secondary Level (Years 9 - 13)", desc: "Hands-on robotics, computational algorithms, and certified laboratory physics." },
    { id: "p-arts", title: "Global Humanities & Social Impact", grades: "Secondary Level", desc: "Debate, international relations, comparative literature, and civic leadership." },
    { id: "p-exec", title: "Creative Arts, Design & Media Lab", grades: "All Levels", desc: "Digital media production, fine art, architectural drawing, and sound engineering." }
  ],
  stats: [
    { label: "University Placement Rate", value: "99.2%" },
    { label: "Average Class Size", value: "16 Students" },
    { label: "International Faculty", value: "45%" },
    { label: "Accredited IB & Cambridge", value: "Tier 1" }
  ]
};

// 9. LUMINA SPA & WELLNESS (Beauty, Salons & Wellness)
export const luminaSpaData = {
  treatments: [
    { title: "African Botanical Detox Massage (90 mins)", price: "KES 7,500", desc: "Warm baobab and eucalyptus oils infused with marula butter to release deep muscular tension." },
    { title: "Radiance Rose Quartz Facial (60 mins)", price: "KES 6,200", desc: "Micro-exfoliation, hyaluronic hydration infusion, and soothing lymphatic crystal drainage." },
    { title: "Hydrotherapy Mineral Salt Soak & Scrub (45 mins)", price: "KES 4,800", desc: "Dead Sea mineral salts combined with organic citrus zest in a private whirlpool chamber." },
    { title: "Couples Sanctuary Ritual (120 mins)", price: "KES 14,000", desc: "Full-body hot basalt stone therapy, private herbal steam room, and organic champagne service." }
  ],
  amenities: ["Herbal Eucalyptus Steam Rooms", "Finnish Cedar Wood Dry Sauna", "Quiet Relaxation Garden & Tea Bar", "Private Hydrotherapy Jacuzzis"]
};

// 10. SWIFTMOVE LOGISTICS (Logistics & Transport)
export const swiftMoveData = {
  services: [
    { title: "High-Capacity Container Haulage", desc: "Daily scheduled flatbed and skeletal trucks between Mombasa Port, Nairobi ICD, and regional hubs." },
    { title: "Cross-Border Bonded Transit", desc: "Automated customs documentation and bonded transit corridors to Uganda, Rwanda, South Sudan, and DRC." },
    { title: "Metropolitan Express Courier", desc: "GPS-dispatched commercial vans and motorcycles for same-day scheduled parcel handovers." }
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

// 11. SAFARIVISTA EXPEDITIONS (Travel & Tourism)
export const safariVistaData = {
  safaris: [
    { 
      id: "sv-1", 
      title: "4-Day Maasai Mara Great Migration Spectacle", 
      duration: "4 Days / 3 Nights", 
      price: "$850 per traveler", 
      group: "Small Group or Private",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      highlights: ["Big Five wildlife game drives with certified naturalist guide", "Luxury riverfront tented camp along Talek River", "Optional dawn hot-air balloon flight over the savannah plains", "Gourmet bush breakfast & private 4x4 Land Cruiser"]
    },
    { 
      id: "sv-2", 
      title: "7-Day Amboseli Elephants & Diani Coral Coast", 
      duration: "7 Days / 6 Nights", 
      price: "$1,480 per traveler", 
      group: "Private 4x4 Land Cruiser",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
      highlights: ["Magnificent Mt. Kilimanjaro backdrop elephant herds", "Scenic Tsavo West volcanic lava flows & Mzima Springs", "3 days secluded relaxation on white sand beaches of Diani", "Domestic flight transfers included"]
    }
  ]
};

// 12. HOPEPATH COMMUNITY FOUNDATION (Nonprofits & Community Organizations)
export const hopePathData = {
  mission: "Empowering underserved communities through scalable digital education, clean water infrastructure, and adolescent healthcare.",
  pillars: [
    { title: "Clean Solar-Powered Boreholes", count: "34 Installed", desc: "Providing reliable, fluorosis-free drinking water to over 65,000 rural residents." },
    { title: "Digital Village Learning Hubs", count: "18 Centers", desc: "Equipping rural youth with computer literacy, coding foundations, and internet access." },
    { title: "Maternal & Child Health Clinics", count: "42,000+ Screenings", desc: "Mobile clinic vans offering prenatal nutrition, sonograms, and child immunizations." }
  ],
  financialTransparency: "89% of all contributions go directly toward on-the-ground project execution, audited annually by certified independent accountants."
};

// Compatibility & Legacy Demo Support
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

export const sparkleProData = {
  treatments: luminaSpaData.treatments,
  amenities: luminaSpaData.amenities,
  packages: [
    { name: "Residential Deep Clean", price: "From KES 7,500", scope: "1 - 3 Bedroom homes", bullets: ["Deep scrub of kitchens & sanitization", "Bathroom descaling & tile grout steam clean", "Interior windows, frames & skirting boards", "Eco-friendly non-toxic supplies provided"] },
    { name: "Post-Construction Clean", price: "From KES 14,000", scope: "Newly built / renovated", bullets: ["Paint splatter, cement residue & dust removal", "Heavy industrial HEPA vacuuming", "Sanitization of cabinets, fixtures & fittings", "Move-in certified inspection guarantee"] },
    { name: "Commercial & Office Retainer", price: "From KES 25,000 / mo", scope: "Corporate spaces", bullets: ["Daily or bi-weekly scheduled cleaning", "Restroom hygiene supply restocking", "Carpet steam extraction quarterly", "Uniformed, vetted & insured crew"] }
  ],
  serviceAreas: ["Kilimani", "Westlands", "Karen", "Lavington", "Kitisuru", "Runda", "Ruaka", "Gigiri", "South B & C"]
};

export const eduBridgeData = {
  ...oakridgeData,
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

export const havenData = havenstoneData;
export const buildStrongData = ironwoodData;
export const serenityData = alderHouseData;
export const greenForkData = emberOliveData;
export const apexData = northstarData;
export const cityCareData = willowCareData;
export const luxeCartData = auraLivingData;
