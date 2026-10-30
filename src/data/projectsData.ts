import { ProjectDemo, ProjectCategory } from '../types/portfolio';

export const categoriesList: ProjectCategory[] = [
  "All Projects",
  "Property Management & Real Estate",
  "Construction & Engineering",
  "Hotels & Hospitality",
  "Restaurants & Cafés",
  "Consulting & Professional Services",
  "Clinics & Healthcare",
  "Retail & E-commerce",
  "Schools & Education",
  "Beauty, Salons & Wellness",
  "Logistics & Transport",
  "Travel & Tourism",
  "Nonprofits & Community Organizations",
  "Trading & Membership Platforms"
];

export const projectsData: ProjectDemo[] = [
  // 1. PROPERTY MANAGEMENT & REAL ESTATE (Demo 1 from Master Prompt)
  {
    id: "havenstone-properties",
    slug: "property",
    name: "Havenstone Properties",
    category: "Property Management & Real Estate",
    categoryDisplay: "Property Management",
    industry: "Luxury Estates, Rentals & Diaspora Asset Management",
    tagline: "Better Property Management. Better Returns.",
    shortDescription: "A premium editorial property management and rental platform featuring multi-parameter Kenyan property filtering, private viewing booking, landlord quote estimation, and a diaspora owner ledger portal.",
    fullDescription: "Built for premier Kenyan real estate developers, property managers, and diaspora landlords. Delivers effortless property discovery in Nairobi and Kiambu, scheduled viewing appointments, automated Paybill remittance tracking, and remote asset stewardship.",
    colorScheme: {
      primary: "#0A1E17", // Deep Forest Green
      secondary: "#C5A059", // Champagne Gold
      accent: "#15382B",
      bgBadge: "bg-[#0A1E17]/10",
      textBadge: "text-[#0A1E17]"
    },
    keyCapabilities: ["Kenyan Multi-Filter Rental Catalogue", "Private Inspection Booking Flow", "Landlord Quote & Remittance Calculator", "Diaspora Owner Portal Showcase"],
    features: ["Location & Price Filters (KSh)", "High-Resolution Image Galleries", "Viewing Request Flow", "Diaspora Owner Portal Overview"],
    previewImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    mobilePreviewImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=500&q=80",
    route: "/demos/property",
    featured: true
  },

  // 2. CONSTRUCTION & ENGINEERING (Demo 2 from Master Prompt)
  {
    id: "ironwood-construction",
    slug: "construction",
    name: "Ironwood Construction Group",
    category: "Construction & Engineering",
    categoryDisplay: "Construction & Engineering",
    industry: "Heavy Commercial, Civil & Structural Contracting",
    tagline: "Engineered with Precision: Commercial high-rise, civil infrastructure, and heavy plant operations",
    shortDescription: "Industrial-strength corporate platform showcasing completed civil works, heavy plant capacity, execution methodology, safety accreditations, and an interactive quotation RFP builder.",
    fullDescription: "Crafted specifically for general contractors, structural engineering firms, and civil construction consortiums seeking to win high-value institutional and commercial tenders.",
    colorScheme: {
      primary: "#1E2229", // Graphite
      secondary: "#EA580C", // Burnt Orange
      accent: "#F97316",
      bgBadge: "bg-orange-50",
      textBadge: "text-orange-800"
    },
    keyCapabilities: ["Civil Projects Portfolio", "Interactive RFP Quotation Form", "Heavy Plant Capacity Specs", "Safety & ISO 45001 Standards"],
    features: ["Sector Project Filtering", "Tender RFP Submission Flow", "Equipment Fleet Specifications", "Execution Case Studies"],
    previewImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
    mobilePreviewImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80",
    route: "/demos/construction",
    featured: true
  },

  // 3. HOTEL & HOSPITALITY (Demo 3 from Master Prompt)
  {
    id: "alder-house-hotel",
    slug: "hotel",
    name: "The Alder House Hotel",
    category: "Hotels & Hospitality",
    categoryDisplay: "Hotels & Hospitality",
    industry: "Boutique Coastal Sanctuary & Executive Suites",
    tagline: "Secluded coastal elegance, artisanal culinary journeys, and private oceanfront suites",
    shortDescription: "A luxurious hospitality showcase with an interactive suite selector, live night & guest rate calculator, dining and spa experiences, and direct booking inquiry.",
    fullDescription: "Designed for boutique resorts, safari lodges, and luxury executive retreats to capture high-margin direct reservations with rich photography and effortless date selection.",
    colorScheme: {
      primary: "#1E3A2F", // Forest Green
      secondary: "#C29B38", // Muted Brass
      accent: "#D4AF37",
      bgBadge: "bg-emerald-50",
      textBadge: "text-emerald-900"
    },
    keyCapabilities: ["Interactive Stay Calculator", "Suite Virtual Showcase", "Coastal Dining & Spa Booking", "Direct WhatsApp Concierge"],
    features: ["Real-Time Date & Rate Calculator", "Suite Amenities Breakdown", "Curated Experiences Gallery", "Bespoke Reservation Inquiry"],
    previewImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    mobilePreviewImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=500&q=80",
    route: "/demos/hotel",
    featured: true
  },

  // 4. RESTAURANT & CAFÉ (Demo 4 from Master Prompt)
  {
    id: "savanna-table",
    slug: "restaurant",
    name: "Savanna Table",
    category: "Restaurants & Cafés",
    categoryDisplay: "Restaurants & Dining",
    industry: "Contemporary African Cuisine & Botanical Hearth",
    tagline: "A Taste of Kenya, Beautifully Reimagined",
    shortDescription: "A breathtaking editorial restaurant website featuring contemporary Kenyan cuisine, interactive multi-course menu filters, online table booking, and private dining showcases.",
    fullDescription: "Designed for premium Kenyan restaurants, fine-dining bistros, and boutique hospitality spaces. Delivers mouth-watering culinary storytelling, table reservation funnels, and seamless WhatsApp booking workflows.",
    colorScheme: {
      primary: "#1A1715", // Charcoal
      secondary: "#C85A32", // Terracotta
      accent: "#E27651",
      bgBadge: "bg-[#C85A32]/10",
      textBadge: "text-[#C85A32]"
    },
    keyCapabilities: ["Interactive 5-Course Menu Filter", "Online Table Reservation Engine", "Private Dining & Event Showcase", "WhatsApp Host Booking Concierge"],
    features: ["Interactive Seasonal Menu", "Dietary Filter Support (V/GF)", "Table Booking Engine", "Cellar & Cocktail Pairings"],
    previewImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    mobilePreviewImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80",
    route: "/demos/restaurant",
    featured: true
  },

  // 5. CONSULTING & PROFESSIONAL SERVICES (Demo 5 from Master Prompt)
  {
    id: "northstar-advisory",
    slug: "consultancy",
    name: "Northstar Advisory",
    category: "Consulting & Professional Services",
    categoryDisplay: "Corporate Consulting",
    industry: "Cross-Border Corporate Strategy & Capital Structuring",
    tagline: "Strategic advisory for institutional capital, corporate turnaround, and regional market scale",
    shortDescription: "An authoritative corporate consulting platform with verified ROI case studies, practice area deep-dives, partner biographies, and direct strategy call booking.",
    fullDescription: "Tailored for management consultants, investment advisors, and corporate legal practices needing to establish unquestioned authority, display case study metrics, and win executive clients.",
    colorScheme: {
      primary: "#0B192C", // Deep Navy
      secondary: "#008DDA", // Restrained Blue
      accent: "#41C9E2",
      bgBadge: "bg-sky-50",
      textBadge: "text-sky-900"
    },
    keyCapabilities: ["Quantified ROI Case Studies", "Practice Area Deep Dives", "Partner Leadership Bios", "Strategic Discovery Call Booking"],
    features: ["Case Study Impact Metrics", "Practice Area Architecture", "Thought Leadership Insights", "Executive Consultation Booking"],
    previewImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    mobilePreviewImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80",
    route: "/demos/consultancy",
    featured: true
  },

  // 6. CLINICS & HEALTHCARE (Demo 6 from Master Prompt)
  {
    id: "willowcare-clinic",
    slug: "clinic",
    name: "WillowCare Medical Centre",
    category: "Clinics & Healthcare",
    categoryDisplay: "Healthcare & Clinics",
    industry: "Multi-Specialty Outpatient Healthcare & Diagnostics",
    tagline: "Comprehensive family medicine, pediatric wellness, dental surgery, and rapid diagnostics",
    shortDescription: "A reassuring, accessible healthcare portal with department directories, physician profiles, operating hours, and an intuitive online appointment request form.",
    fullDescription: "Created for private medical clinics, dental practices, and diagnostic health centers. Inspires patient trust with doctor credentials, emergency hours, and privacy-conscious appointment workflows.",
    colorScheme: {
      primary: "#088395", // Healthcare Teal
      secondary: "#0A4D68", // Deep Blue
      accent: "#05BFDB",
      bgBadge: "bg-cyan-50",
      textBadge: "text-cyan-900"
    },
    keyCapabilities: ["Medical Departments Directory", "Physician Credential Profiles", "Online Appointment Request", "24/7 Triage & Operating Info"],
    features: ["Departmental Breakdown", "Doctor Profiles & Hours", "Online Appointment Flow", "Emergency & Location Details"],
    previewImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
    mobilePreviewImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=500&q=80",
    route: "/demos/clinic",
    featured: true
  },

  // 7. RETAIL & E-COMMERCE (Master Prompt Industry 7)
  {
    id: "aura-living",
    slug: "ecommerce",
    name: "Aura Living Boutique",
    category: "Retail & E-commerce",
    categoryDisplay: "Retail & E-commerce",
    industry: "Curated Contemporary Apparel, Leathercraft & Lifestyle",
    tagline: "Timeless craftsmanship, sustainably sourced leather goods, and refined lifestyle curations",
    shortDescription: "A high-performance modern e-commerce experience featuring product category filters, interactive shopping cart drawer, dynamic subtotal calculations, and demo checkout.",
    fullDescription: "Built for independent retailers, fashion brands, and lifestyle boutiques looking for smooth product browsing, responsive cart management, and conversion-optimized mobile checkouts.",
    colorScheme: {
      primary: "#171A21",
      secondary: "#C8F169", // Electric Lime Accent
      accent: "#8B9099",
      bgBadge: "bg-slate-100",
      textBadge: "text-slate-900"
    },
    keyCapabilities: ["Interactive Slide-Out Cart", "Category Product Filtering", "Subtotal Calculation Engine", "Mobile-Optimized Demo Checkout"],
    features: ["Interactive Product Drawer", "Category & Price Filters", "Live Subtotal Updates", "Seamless Mobile Shopping Flow"],
    previewImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
    mobilePreviewImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=500&q=80",
    route: "/demos/ecommerce",
    featured: false
  },

  // 8. SCHOOLS & EDUCATION (Master Prompt Industry 8)
  {
    id: "oakridge-academy",
    slug: "education",
    name: "Oakridge Academy",
    category: "Schools & Education",
    categoryDisplay: "Schools & Education",
    industry: "Preparatory & Secondary International Baccalaureate Academy",
    tagline: "Inspiring tomorrow's leaders through inquiry-based STEM, arts, and global citizenship",
    shortDescription: "An inspiring academic institution website featuring curriculum grade overviews, admissions schedules, faculty credentials, and online enrollment application forms.",
    fullDescription: "Engineered for international schools, private academies, and learning institutes to communicate academic excellence, display campus facilities, and streamline student admissions.",
    colorScheme: {
      primary: "#1E3A8A",
      secondary: "#D97706",
      accent: "#F59E0B",
      bgBadge: "bg-indigo-50",
      textBadge: "text-indigo-900"
    },
    keyCapabilities: ["Curriculum Pathway Previews", "Admissions Calendar & Fees", "Faculty Directory Highlights", "Online Application Inquiry"],
    features: ["Curriculum Syllabus Tabs", "Admissions Schedule", "Key Academic Metrics", "Online Application Flow"],
    previewImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80",
    mobilePreviewImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=80",
    route: "/demos/education",
    featured: false
  },

  // 9. BEAUTY, SALONS & WELLNESS (Master Prompt Industry 9)
  {
    id: "lumina-wellness",
    slug: "beauty",
    name: "Lumina Spa & Wellness",
    category: "Beauty, Salons & Wellness",
    categoryDisplay: "Beauty & Wellness",
    industry: "Luxury Holistic Spa, Hydrotherapy & Botanical Aesthetics",
    tagline: "Restorative wellness rituals, botanical skincare, and tranquil hydrotherapy baths",
    shortDescription: "A serene spa and salon website featuring an interactive treatment menu, package durations and pricing, facility photo tours, and an intuitive therapist appointment booking flow.",
    fullDescription: "Designed for luxury spas, aesthetic salons, and wellness retreats to showcase specialized treatments, create a calming digital ambiance, and book client appointments directly.",
    colorScheme: {
      primary: "#334155",
      secondary: "#0D9488",
      accent: "#99F6E4",
      bgBadge: "bg-teal-50",
      textBadge: "text-teal-900"
    },
    keyCapabilities: ["Categorized Treatment Menu", "Online Appointment Booking", "Hydrotherapy Amenities Tour", "Package Gift & Series Inquiries"],
    features: ["Treatment Duration & Pricing", "Amenities Tour", "Therapist Appointment Flow", "WhatsApp Concierge Fast Booking"],
    previewImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    mobilePreviewImage: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=500&q=80",
    route: "/demos/beauty",
    featured: false
  },

  // 10. LOGISTICS & TRANSPORT (Master Prompt Industry 10)
  {
    id: "swiftmove-logistics",
    slug: "logistics",
    name: "SwiftMove Logistics & Freight",
    category: "Logistics & Transport",
    categoryDisplay: "Logistics & Transport",
    industry: "Domestic Haulage, Cross-Border Transit & Express Courier",
    tagline: "Reliable freight forwarding, bonded container haulage, and end-to-end supply chain logistics",
    shortDescription: "A dynamic freight and transport portal with a live sample consignment tracking tool (try `SWIFT-8921` or `SWIFT-4012`), regional route coverage maps, and instant freight quote RFP.",
    fullDescription: "Ideal for shipping lines, container haulers, express parcel couriers, and 3PL warehousing companies looking to provide real-time shipment transparency and capture corporate transport contracts.",
    colorScheme: {
      primary: "#0F172A",
      secondary: "#EA580C",
      accent: "#FB923C",
      bgBadge: "bg-orange-50",
      textBadge: "text-orange-900"
    },
    keyCapabilities: ["Interactive Cargo Tracker Simulator", "Fleet Specification Showcase", "Regional Transit Corridors", "Corporate Haulage Quote RFP"],
    features: ["Live Tracking Simulator", "Fleet Capacity Specifications", "Regional Route Network", "Freight Quote Request"],
    previewImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    mobilePreviewImage: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=500&q=80",
    route: "/demos/logistics",
    featured: false
  },

  // 11. TRAVEL & TOURISM (Master Prompt Industry 11)
  {
    id: "safarivista-expeditions",
    slug: "travel",
    name: "SafariVista Expeditions",
    category: "Travel & Tourism",
    categoryDisplay: "Travel & Tourism",
    industry: "Bespoke Wildlife Safaris, Coastal Escapes & Adventure Holidays",
    tagline: "Unrivalled African wilderness encounters, luxury tented camps, and private naturalist guides",
    shortDescription: "An evocative safari outfitter website featuring multi-day park itineraries, seasonality migration guides, wildlife photography, and custom safari quote builders.",
    fullDescription: "Created for destination management companies, safari operators, and adventure agencies to display detailed day-by-day travel routes, wildlife highlights, and convert traveler inquiries.",
    colorScheme: {
      primary: "#14532D",
      secondary: "#D97706",
      accent: "#84CC16",
      bgBadge: "bg-amber-50",
      textBadge: "text-amber-900"
    },
    keyCapabilities: ["Day-by-Day Itinerary Viewer", "Custom Safari Scope Builder", "Wildlife & Seasonality Guide", "WhatsApp Outfitter Booking"],
    features: ["Multi-Day Itinerary Tabs", "Wildlife Highlights Gallery", "Custom Safari Scope Builder", "Direct Travel Specialist Consultation"],
    previewImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80",
    mobilePreviewImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=500&q=80",
    route: "/demos/travel",
    featured: false
  },

  // 12. NONPROFITS & COMMUNITY ORGANIZATIONS (Master Prompt Industry 12)
  {
    id: "hopepath-foundation",
    slug: "nonprofit",
    name: "HopePath Community Foundation",
    category: "Nonprofits & Community Organizations",
    categoryDisplay: "Nonprofit & Community",
    industry: "Community Empowerment, Solar Water Systems & Adolescent Health",
    tagline: "Sustainable rural water access, digital community hubs, and preventative adolescent clinics",
    shortDescription: "A mission-driven nonprofit platform highlighting verified impact metrics, program reports, community stories, and an illustrative donation pledge and volunteering form.",
    fullDescription: "Built for NGOs, philanthropic foundations, and community social enterprises needing to communicate transparent stewardship, share verified impact stories, and mobilize donor support.",
    colorScheme: {
      primary: "#1E293B",
      secondary: "#0D9488",
      accent: "#C8F169", // Electric Lime Accent
      bgBadge: "bg-teal-50",
      textBadge: "text-teal-900"
    },
    keyCapabilities: ["Audited Impact Metrics", "Active Program Portfolios", "Transparent Stewardship Reports", "Demonstration Pledge & Volunteer Form"],
    features: ["Verified Impact Counters", "Interactive Program Highlights", "Donor Stewardship Transparency", "Sample Pledge & Volunteer Flow"],
    previewImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80",
    mobilePreviewImage: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=500&q=80",
    route: "/demos/nonprofit",
    featured: false
  },

  // 13. TRADING SIGNALS & MEMBERSHIP PLATFORM
  {
    id: "nexa-tradehub",
    slug: "tradehub",
    name: "Nexa TradeHub",
    category: "Trading & Membership Platforms",
    categoryDisplay: "Trading & Membership Platform",
    industry: "Forex, Crypto & Indices Signals and Community Subscriptions",
    tagline: "Trading & Membership Platform",
    shortDescription: "A modern trading signals and membership management platform for forex educators, signal providers and trading communities.",
    fullDescription: "Built for trading educators, signal providers, and financial market mentors. Features real-time signal broadcasting, tiered VIP gating, subscriber analytics, and an integrated member performance dashboard.",
    colorScheme: {
      primary: "#0B0F19",
      secondary: "#10B981", // Emerald Green
      accent: "#38BDF8", // Cyan
      bgBadge: "bg-emerald-950/40",
      textBadge: "text-emerald-400"
    },
    keyCapabilities: ["Real-Time Signal Broadcast", "Tiered VIP Gating (Free/VIP)", "Subscriber MRR Analytics", "Interactive Performance Charts"],
    features: ["Real-time Signal Feed", "Copy-Trade Details (SL/TP)", "Member & Admin Dashboards", "M-Pesa & Card Membership"],
    previewImage: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1000&q=80",
    mobilePreviewImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=500&q=80",
    route: "/demos/tradehub",
    featured: true
  }
];
