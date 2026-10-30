export interface PropertyItem {
  id: string;
  title: string;
  type: 'Apartment' | 'Penthouse' | 'Townhouse' | 'Villa';
  typeDisplay: string;
  location: string;
  neighborhood: 'Kilimani' | 'Westlands' | 'Ruaka' | 'Ruiru' | 'Riverside' | 'Lavington' | 'Kileleshwa' | 'Parklands';
  address: string;
  priceKsh: number;
  priceDisplay: string;
  serviceCharge: string;
  depositTerms: string;
  utilityDeposit: string;
  leaseTerm: string;
  bedrooms: number;
  bathrooms: number;
  sqft: string;
  parkingBays: number;
  status: 'Available Now' | 'Viewing by Appointment' | 'Coming Available Next Month';
  tag: string;
  featured: boolean;
  heroImage: string;
  gallery: string[];
  description: string;
  amenities: string[];
  highlights: string[];
}

export interface LandlordService {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  icon: string;
}

export interface DemoTestimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  propertyDetail: string;
  tag: string;
}

export const propertyCatalog: PropertyItem[] = [
  {
    id: "prop-riverside-01",
    title: "The Sovereign Duplex Penthouse",
    type: "Penthouse",
    typeDisplay: "4 Bedroom Luxury Penthouse",
    location: "Riverside Drive, Nairobi",
    neighborhood: "Riverside",
    address: "Off Riverside Drive, Near German Embassy",
    priceKsh: 240000,
    priceDisplay: "KSh 240,000 / month",
    serviceCharge: "KSh 15,000 / mo (Included in rent)",
    depositTerms: "2 Months Refundable Security Deposit + 1 Month Advance Rent",
    utilityDeposit: "KSh 15,000 (Water sub-meter & dedicated power token)",
    leaseTerm: "12 Months Minimum (Renewable)",
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: "3,850 sq ft",
    parkingBays: 3,
    status: "Available Now",
    tag: "Diplomatic Standard",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "An exceptional duplex penthouse commanding unobstructed tree-lined canopy views over the Riverside sanctuary. Featuring double-height living ceilings, imported hardwood finishes, a wraparound sunset terrace, and full ensuite bedrooms with German sanitary ware.",
    amenities: [
      "Full Standby Backup Generator",
      "High-Yield Reliable Borehole",
      "Solar Water Heating System",
      "Private Rooftop Heated Splash Pool",
      "Biometric Access & Video Intercom",
      "24/7 UN-Approved Security Guards",
      "High-Speed Fiber Ready",
      "Separate Self-Contained DSQ"
    ],
    highlights: [
      "5 minutes to Sarit Centre & Westlands Expressway exit",
      "Quiet diplomatic cul-de-sac with 24-hour motorized patrols",
      "Walk to international dining and riverside offices"
    ]
  },
  {
    id: "prop-westlands-02",
    title: "The Marquis Executive Suite",
    type: "Apartment",
    typeDisplay: "3 Bedroom Executive Apartment",
    location: "Westlands, Nairobi",
    neighborhood: "Westlands",
    address: "Rhapta Road, Westlands",
    priceKsh: 185000,
    priceDisplay: "KSh 185,000 / month",
    serviceCharge: "KSh 12,500 / mo (Included in rent)",
    depositTerms: "2 Months Refundable Security Deposit + 1 Month Advance Rent",
    utilityDeposit: "KSh 10,000 (Electricity token & water sub-meter)",
    leaseTerm: "12 Months Minimum",
    bedrooms: 3,
    bathrooms: 3,
    sqft: "2,400 sq ft",
    parkingBays: 2,
    status: "Available Now",
    tag: "Prime Corporate",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Centrally positioned in the upscale Rhapta Road belt, this modern 3-bedroom residence offers rapid connectivity to Nairobi's corporate hub. Features floor-to-ceiling double-glazed soundproof windows, an open-plan chef's kitchen with quartz surfaces, and a dedicated home office alcove.",
    amenities: [
      "Full Commercial Backup Generator",
      "Borehole with Advanced Filtration",
      "Dual High-Speed Schindler Elevators",
      "Heated Swimming Pool & Residents Lounge",
      "Fully Equipped Technogym Fitness Suite",
      "CCTV Surveillance on All Floors",
      "Perimeter Electric Security Fence",
      "Secure Basement Parking for 2 Cars"
    ],
    highlights: [
      "Walking distance to Westgate & Sarit Centre",
      "Quick 3-minute link to Waiyaki Way & Expressway",
      "Ideal for senior multinational executives and corporate lets"
    ]
  },
  {
    id: "prop-kilimani-03",
    title: "Havenstone Heights Residence",
    type: "Apartment",
    typeDisplay: "2 Bedroom Luxury Apartment",
    location: "Kilimani, Nairobi",
    neighborhood: "Kilimani",
    address: "Off Dennis Pritt Road, Kilimani",
    priceKsh: 95000,
    priceDisplay: "KSh 95,000 / month",
    serviceCharge: "KSh 8,000 / mo (Included in rent)",
    depositTerms: "1.5 Months Refundable Deposit + 1 Month Advance Rent",
    utilityDeposit: "KSh 8,000 (Individual water meter & Kenya Power token)",
    leaseTerm: "12 Months Minimum (Renewable)",
    bedrooms: 2,
    bathrooms: 2,
    sqft: "1,450 sq ft",
    parkingBays: 2,
    status: "Available Now",
    tag: "High Demand",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "A meticulously maintained 2-bedroom home located in a quiet enclave off Dennis Pritt Road. Both bedrooms are ensuite with expansive floor-to-ceiling wardrobes. Enjoys natural ventilation, separate laundry yard, and modern granite kitchen countertops.",
    amenities: [
      "Silent Automatic Backup Generator",
      "High-Pressure Borehole Water Supply",
      "Modern Gymnasium with Changing Rooms",
      "Rooftop Clothes Drying & Social Terrace",
      "Intercom Phone Connected to Gatehouse",
      "High-Speed Internet Fiber Infrastructure",
      "Dedicated Children's Play Corner",
      "24-Hour Uniformed Security Personnel"
    ],
    highlights: [
      "Quick access to Yaya Centre, Adlife Plaza, and Kilimani Primary",
      "Short drive to Nairobi Hospital and Upper Hill business district",
      "Consistently high 98% occupancy asset managed by Havenstone"
    ]
  },
  {
    id: "prop-ruaka-04",
    title: "Silver Oak Contemporary Living",
    type: "Apartment",
    typeDisplay: "2 Bedroom Modern Apartment",
    location: "Ruaka, Kiambu",
    neighborhood: "Ruaka",
    address: "Off Limuru Road, Ruaka Near Two Rivers",
    priceKsh: 75000,
    priceDisplay: "KSh 75,000 / month",
    serviceCharge: "KSh 5,500 / mo (Included in rent)",
    depositTerms: "1 Month Refundable Deposit + 1 Month Advance Rent",
    utilityDeposit: "KSh 5,000 (Prepaid token meter)",
    leaseTerm: "12 Months Renewable",
    bedrooms: 2,
    bathrooms: 2,
    sqft: "1,280 sq ft",
    parkingBays: 1,
    status: "Available Now",
    tag: "Great Value",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502005229762-ee152da7c5d6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Modern, high-efficiency living in Kiambu's fastest-growing residential hub. Ideal for young professionals and couples seeking proximity to UN Gigiri and Two Rivers Mall without premium Westlands rental rates. Features open-plan layout, private balcony, and solar water heating.",
    amenities: [
      "Standby Generator for Common Areas & Lifts",
      "Reliable Treated Borehole Supply",
      "Elevator Access to All Floors",
      "Card-Access Security Turnstile",
      "CCTV Camera Coverage",
      "Solar Water Heating System",
      "Designated Covered Parking",
      "Carefully Vetted Neighbor Community"
    ],
    highlights: [
      "4 minutes to Two Rivers Mall & Rosslyn Riviera",
      "10 minutes via Limuru Road to UN Gigiri & Village Market",
      "Instant connection to the Western Bypass to Westlands"
    ]
  },
  {
    id: "prop-ruiru-05",
    title: "Greenfield Gated Townhouses",
    type: "Townhouse",
    typeDisplay: "4 Bedroom Gated Townhouse with DSQ",
    location: "Ruiru, Kiambu",
    neighborhood: "Ruiru",
    address: "Mugutha / Northlands Corridor, Ruiru",
    priceKsh: 120000,
    priceDisplay: "KSh 120,000 / month",
    serviceCharge: "KSh 7,500 / mo (Estate security, gardening & lighting)",
    depositTerms: "2 Months Refundable Security Deposit + 1 Month Advance Rent",
    utilityDeposit: "KSh 8,000 (Electricity & sub-metered water)",
    leaseTerm: "12 Months Renewable",
    bedrooms: 4,
    bathrooms: 4,
    sqft: "2,900 sq ft",
    parkingBays: 3,
    status: "Viewing by Appointment",
    tag: "Family Favorite",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Set within a master-planned gated community along the expanding Northlands Ruiru corridor. Offers private manicured front and back gardens, spacious family lounge on the first floor, solar water heating, and a self-contained servant quarter. Ideal for growing families.",
    amenities: [
      "Solar Water Heating & Inverter Ready",
      "Community Borehole & Dedicated Overhead Tanks",
      "Private Fenced Garden for Kids & Pets",
      "Perimeter Masonry Wall with Razor Wire & Electric Fence",
      "24/7 Gatehouse Security with Intercom Checks",
      "Dedicated Servant Quarter (DSQ)",
      "Cabro-Paved Internal Driveways",
      "Estate Clubhouse & Jogging Path"
    ],
    highlights: [
      "Easy access to Thika Superhighway & Eastern Bypass",
      "Proximity to Crawford International School & Nova Pioneer",
      "Tranquil suburban ambiance with zero city noise"
    ]
  },
  {
    id: "prop-lavington-06",
    title: "The Orchard Courtyard Villa",
    type: "Villa",
    typeDisplay: "5 Bedroom Standalone Villa with Garden",
    location: "Lavington Green, Nairobi",
    neighborhood: "Lavington",
    address: "Off James Gichuru Road, Lavington",
    priceKsh: 320000,
    priceDisplay: "KSh 320,000 / month",
    serviceCharge: "KSh 20,000 / mo (Private gardening, pool & perimeter)",
    depositTerms: "2 Months Refundable Security Deposit + 1 Month Advance Rent",
    utilityDeposit: "KSh 20,000 (Dedicated meters)",
    leaseTerm: "24 Months Preferred (12 Months Minimum)",
    bedrooms: 5,
    bathrooms: 5.5,
    sqft: "4,800 sq ft",
    parkingBays: 4,
    status: "Viewing by Appointment",
    tag: "Diplomatic Residence",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "A prestigious standalone residence tucked into mature greenery in Lavington Green. Built to diplomatic safety specifications with double security doors, safe haven master wing, expansive entertainment terrace, fireplace, and self-contained 2-room staff quarters.",
    amenities: [
      "Automatic 50kVA Heavy-Duty Generator",
      "Double Borehole Connection & High-Volume Storage",
      "Private Half-Acre Mature Landscaped Lawn",
      "Diplomatic Security Compliance Package",
      "Guard House with Washroom at Gate",
      "Dual Ensuite DSQ Rooms",
      "Solar Water Heating & Pressurized Water Pumps",
      "Covered Portico for 4 Vehicles"
    ],
    highlights: [
      "Walking distance to Lavington Mall & Jaffery Sports Club",
      "Convenient access to Braeburn, Strathmore, and St. Austin's",
      "Diplomatic zone with stringent security protocols"
    ]
  },
  {
    id: "prop-kileleshwa-07",
    title: "Acacia Terraces Family Living",
    type: "Apartment",
    typeDisplay: "3 Bedroom Modern Apartment + DSQ",
    location: "Kileleshwa, Nairobi",
    neighborhood: "Kileleshwa",
    address: "Mandera Road, Kileleshwa",
    priceKsh: 140000,
    priceDisplay: "KSh 140,000 / month",
    serviceCharge: "KSh 10,000 / mo (Included in rent)",
    depositTerms: "1.5 Months Refundable Deposit + 1 Month Advance Rent",
    utilityDeposit: "KSh 10,000 (Direct meters)",
    leaseTerm: "12 Months Minimum",
    bedrooms: 3,
    bathrooms: 3,
    sqft: "2,150 sq ft",
    parkingBays: 2,
    status: "Available Now",
    tag: "Spacious Family",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "An exceptionally proportioned 3-bedroom apartment designed for modern family balance. Features an expansive open lounge leading to a breezy balcony, semi-closed kitchen with fitted pantry, and a well-appointed domestic staff room with private exterior entrance.",
    amenities: [
      "Full Standby Generator",
      "Borehole Water Supply with Water Softener",
      "Two High-Speed Passenger Elevators",
      "Equipped Modern Fitness Gym",
      "Children's Play Zone and Garden Lawn",
      "CCTV Monitoring Across Corridors & Perimeter",
      "Biometric Access at Reception",
      "2 Dedicated Parking Slots Under Cover"
    ],
    highlights: [
      "Quick 5-minute commute to Westlands and Riverside",
      "Quiet residential road with minimal thoroughfare",
      "Close to Quickmart Kileleshwa and Kileleshwa Police Station"
    ]
  },
  {
    id: "prop-parklands-08",
    title: "Forest View Executive Suites",
    type: "Apartment",
    typeDisplay: "2 Bedroom Contemporary Apartment",
    location: "Parklands, Nairobi",
    neighborhood: "Parklands",
    address: "4th Parklands Avenue, Nairobi",
    priceKsh: 85000,
    priceDisplay: "KSh 85,000 / month",
    serviceCharge: "KSh 7,500 / mo (Included in rent)",
    depositTerms: "1 Month Refundable Deposit + 1 Month Advance Rent",
    utilityDeposit: "KSh 8,000 (Direct meters)",
    leaseTerm: "12 Months Minimum",
    bedrooms: 2,
    bathrooms: 2,
    sqft: "1,350 sq ft",
    parkingBays: 1,
    status: "Coming Available Next Month",
    tag: "Karura Proximity",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Serene living right on the edge of Karura Forest. Wake up to fresh forest breezes while being minutes away from Aga Khan University Hospital, City Park, and Westlands. Finished with porcelain tiles, fitted kitchen cabinetry, and private utility balcony.",
    amenities: [
      "Reliable Power Backup Generator",
      "Consistent Borehole Water Storage",
      "Schindler High-Speed Elevator",
      "Modern Community Gym",
      "Manned Security with Boom Barrier",
      "Fiber Internet Ready Infrastructure",
      "Solar Water Heating System",
      "Clean Waste Management Protocols"
    ],
    highlights: [
      "3 minutes to Aga Khan University Hospital",
      "Direct walking access to Karura Forest Gate",
      "Minutes to Diamond Plaza and Westlands shopping belt"
    ]
  }
];

export const landlordServicesData: LandlordService[] = [
  {
    id: "letting",
    title: "Property Letting & Marketing",
    shortDesc: "High-visibility syndication, professional architectural photography, and proactive tenant matching to reduce vacancy downtime.",
    longDesc: "We showcase your property with high-resolution photography, virtual walk-throughs, and targeted syndication across Kenya's top property portals, diaspora networks, and corporate relocation consultants.",
    features: [
      "Professional wide-angle photography & listing copywriting",
      "Placement on major Kenyan portals & social real estate funnels",
      "Corporate relocation & embassy expatriate tenant syndication",
      "Guided agent-accompanied viewings 6 days a week",
      "Realistic market rental valuation to avoid prolonged void periods"
    ],
    icon: "Megaphone"
  },
  {
    id: "screening",
    title: "Tenant Screening & Onboarding",
    shortDesc: "Comprehensive KYC, employment verification, credit reference checks, and legally vetted lease contracts under Kenyan law.",
    longDesc: "A property is only as good as its tenants. We screen every applicant through rigorous background inquiries, certified proof of income, national ID/passport clearance, CRB verification, and previous landlord references.",
    features: [
      "Kenya Credit Reference Bureau (CRB) financial check",
      "Certified 3-month bank statement & salary pay slip verification",
      "Direct contact with former landlords & current employers",
      "Legally compliant tenancy contracts drafted under the Landlord & Tenant Act",
      "Detailed photographic move-in condition inventory signed by both parties"
    ],
    icon: "ShieldCheck"
  },
  {
    id: "collection",
    title: "Rent Collection & Remittance",
    shortDesc: "Automated M-Pesa Paybill & bank transfers with zero reconciliation leakage and disciplined 5th-of-the-month owner remittance.",
    longDesc: "Eliminate late payments and uncomfortable collection conversations. We provide tenants multiple convenient digital payment channels with automated SMS payment reminders and strict enforcement of lease payment covenants.",
    features: [
      "Dedicated M-Pesa Paybill with real-time tenant validation",
      "Direct bank deposits with automated ledger reconciliation",
      "Disciplined net remittance directly to your Kenyan or diaspora account by the 5th",
      "Standardized late payment notifications and legal arrears escalation",
      "Utility bill coordination (water, service charge, and communal levies)"
    ],
    icon: "CreditCard"
  },
  {
    id: "inspections",
    title: "Routine Property Inspections",
    shortDesc: "Scheduled bi-annual physical audits and detailed photographic inspection logs to preserve your asset's structural integrity.",
    longDesc: "Regular physical presence protects your asset from deferred neglect. We conduct structured check-in, scheduled mid-lease, and check-out inspections with comprehensive photographic documentation shared with you.",
    features: [
      "Scheduled bi-annual walkthrough condition audits",
      "Itemized photographic move-in and move-out condition reports",
      "Inspection of plumbing fixtures, water heaters, and electrical distribution",
      "Early detection of dampness, roof leaks, or structural movement",
      "Preventative maintenance schedules before issues become costly repairs"
    ],
    icon: "ClipboardCheck"
  },
  {
    id: "maintenance",
    title: "Repairs & Maintenance Coordination",
    shortDesc: "Vetted licensed contractors, strict owner approval thresholds, emergency response, and itemized receipts with zero markups.",
    longDesc: "Never overpay for emergency repairs. We maintain an audited roster of licensed plumbers, electricians, painters, and HVAC technicians. Work above your pre-agreed budget threshold requires your express approval.",
    features: [
      "24/7 emergency repair dispatch for plumbing and electrical failures",
      "Strict expenditure caps: no repairs above agreed limits without owner authorization",
      "Zero hidden contractor markups — all itemized receipts presented on ledger",
      "Competitive quote procurement from vetted, registered tradespeople",
      "Post-work quality inspection before contractor invoice settlement"
    ],
    icon: "Wrench"
  },
  {
    id: "reporting",
    title: "Financial Accounting & Landlord Portal",
    shortDesc: "Clear monthly remittance statements, rent rolls, expense ledgers, and annual tax-ready summaries accessible online 24/7.",
    longDesc: "Complete financial transparency at your fingertips. Whether you are living in Nairobi, the UK, the US, or the Gulf, log in anytime to inspect your live rent roll, downloaded monthly remittances, and maintenance receipts.",
    features: [
      "Monthly consolidated remittance statements delivered via email & WhatsApp",
      "Audited annual financial summary ready for your KRA tax returns",
      "Digital repository of all signed leases, KYC documents, and repair receipts",
      "Live diaspora dashboard preview for overseas property owners",
      "Dedicated account relationship manager for portfolio consultations"
    ],
    icon: "BarChart3"
  }
];

export const demoTestimonials: DemoTestimonial[] = [
  {
    id: "t-1",
    quote: "Managing a 12-unit apartment block in Kilimani while running my engineering firm was draining my weekends. Havenstone structured our rent collection through automated Paybill, instituted proper entry inspections, and our arrears dropped to zero.",
    author: "David M. Kilonzo",
    role: "Property Owner (12 Residential Units)",
    location: "Kilimani, Nairobi",
    propertyDetail: "Managed Portfolio: 12 Units • Client Since 2022",
    tag: "Illustrative Demo Persona"
  },
  {
    id: "t-2",
    quote: "Living in London, my biggest anxiety was repair deductions without receipts and late remittances. With Havenstone, my rent is remitted on the 5th of every month like clockwork with photographic proof of any maintenance work. Unmatched peace of mind.",
    author: "Grace W. Njeri",
    role: "Diaspora Landlord (UK)",
    location: "London, UK (Properties in Ruaka & Westlands)",
    propertyDetail: "Managed Portfolio: 3 Apartments • Client Since 2021",
    tag: "Illustrative Demo Persona"
  },
  {
    id: "t-3",
    quote: "As an executive tenant, finding a well-managed rental without shady viewing fees was refreshing. When our water heater had an issue, Havenstone dispatched a vetted technician within 3 hours. Professionalism from day one.",
    author: "Marcus Lindqvist",
    role: "Senior Expatriate Tenant",
    location: "Riverside Drive, Nairobi",
    propertyDetail: "Resident at Sovereign Penthouse",
    tag: "Illustrative Demo Persona"
  }
];

export const companyFaq = [
  {
    q: "How quickly are monthly rental proceeds remitted to landlords?",
    a: "Standard remittance is processed by the 5th business day of each month directly to your designated Kenyan bank account or international diaspora wire transfer, accompanied by an itemized remittance statement."
  },
  {
    q: "What fees do you charge for full property management in Kenya?",
    a: "Our standard management fee is typically between 7% and 10% of gross collected rent for residential multi-unit blocks, and 10% for individual residential units, with no charges levied during vacant periods. Tenant placement is typically equivalent to one month's rent for newly secured tenancies."
  },
  {
    q: "Do you guarantee 100% tenant occupancy or guaranteed rental yield?",
    a: "No professional property manager can legally guarantee 100% occupancy or market-defying yields. Instead, we use data-backed market pricing, proactive marketing, and thorough tenant screening to achieve an industry-leading average occupancy of 97%+ across our managed Nairobi and Kiambu portfolios."
  },
  {
    q: "How do you handle maintenance and emergency repairs?",
    a: "We agree on an expenditure authorization threshold (typically KSh 10,000 to KSh 20,000 depending on the property). Minor emergency repairs are resolved immediately to prevent damage, while non-emergency works above the threshold require your direct written approval alongside quotes from vetted tradesmen."
  },
  {
    q: "How do diaspora landlords monitor their Kenyan properties remotely?",
    a: "Diaspora landlords receive digital monthly statements, rent rolls, and photographic maintenance reports. In addition, you have a dedicated account manager available via WhatsApp and Zoom for periodic portfolio reviews."
  }
];
