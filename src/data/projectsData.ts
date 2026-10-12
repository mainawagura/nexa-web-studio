import { ProjectDemo, ProjectCategory } from '../types/portfolio';

export const categoriesList: ProjectCategory[] = [
  "All Projects",
  "Property Management",
  "Real Estate",
  "Construction",
  "Hotels",
  "Restaurants",
  "Consultancies",
  "Clinics",
  "Small Businesses",
  "E-commerce",
  "Education",
  "Travel and Tourism"
];

export const projectsData: ProjectDemo[] = [
  {
    id: "haven-property",
    slug: "haven-property-management",
    name: "Haven Property Management",
    category: "Property Management",
    industry: "Property Management & Diaspora Rentals",
    tagline: "Transparent remote management for residential and commercial estates",
    shortDescription: "Complete property management portal with live rental vacancy search, tenant maintenance logging, and diaspora landlord financial reporting.",
    fullDescription: "Designed specifically for property management firms, landlords, and overseas property investors. Features property search with filters, rent collection transparency, landlord onboarding, and direct WhatsApp inquiries.",
    colorScheme: {
      primary: "#082B4C",
      secondary: "#0D9488",
      accent: "#14B8A6",
      bgBadge: "bg-teal-50",
      textBadge: "text-teal-700"
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "M-Pesa Ledger Ready", "Responsive UI"],
    features: ["Property Search & Filters", "Landlord & Tenant Portals", "Rental Yield Highlights", "WhatsApp Quick Inquiries"],
    previewImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    route: "/demos/haven-property-management",
    featured: true
  },
  {
    id: "primenest-realty",
    slug: "primenest-realty",
    name: "PrimeNest Realty",
    category: "Real Estate",
    industry: "Real Estate Agency & Brokerage",
    tagline: "Luxury real estate brokerage and prime investment listings",
    shortDescription: "Modern brokerage showcase featuring high-res property galleries, advanced neighborhood filtering, agent profiles, and home valuation requests.",
    fullDescription: "Tailored for real estate brokers and developers selling premium apartments, suburban villas, and commercial plots. Includes an interactive property finder and property appraisal request form.",
    colorScheme: {
      primary: "#0F172A",
      secondary: "#D97706",
      accent: "#F59E0B",
      bgBadge: "bg-amber-50",
      textBadge: "text-amber-800"
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Interactive Filter", "Gallery Modal"],
    features: ["Price & Location Filters", "High-Res Image Galleries", "Agent Directory", "Property Valuation Form"],
    previewImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    route: "/demos/primenest-realty",
    featured: true
  },
  {
    id: "buildstrong-construction",
    slug: "buildstrong-construction",
    name: "BuildStrong Construction",
    category: "Construction",
    industry: "Commercial & Civil Contracting",
    tagline: "Heavy civil, commercial building and structural contracting",
    shortDescription: "Industrial-grade website demonstrating completed civil projects, safety certifications, plant capabilities, and a structured quotation request system.",
    fullDescription: "Built for general contractors, engineering firms, and civil construction companies. Emphasizes track record, technical equipment, safety compliance, and structured RFP/quote requests.",
    colorScheme: {
      primary: "#0F172A",
      secondary: "#EA580C",
      accent: "#F97316",
      bgBadge: "bg-orange-50",
      textBadge: "text-orange-700"
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Filterable Project Gallery", "RFP Quote Form"],
    features: ["Project Portfolio by Sector", "Equipment & Capabilities", "Execution Process", "Instant Quotation Estimator"],
    previewImage: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80",
    route: "/demos/buildstrong-construction",
    featured: true
  },
  {
    id: "serenity-hotels",
    slug: "serenity-hotels",
    name: "Serenity Hotels & Resorts",
    category: "Hotels",
    industry: "Boutique Hospitality & Luxury Lodges",
    tagline: "Tranquil coastal retreat and boutique executive suites",
    shortDescription: "Sophisticated hospitality platform with interactive check-in/out date selection, guest calculators, room type comparisons, and direct dining reservations.",
    fullDescription: "Ideal for boutique resorts, business hotels, and safari lodges looking to bypass high OTA commissions with direct guest booking inquiries, virtual room tours, and dining packages.",
    colorScheme: {
      primary: "#064E3B",
      secondary: "#B45309",
      accent: "#D97706",
      bgBadge: "bg-emerald-50",
      textBadge: "text-emerald-800"
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Date & Guest Picker", "Room Showcase"],
    features: ["Interactive Date & Guest Selector", "Suites & Amenities Gallery", "Dining & Spa Showcase", "Direct Booking Inquiry"],
    previewImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    route: "/demos/serenity-hotels",
    featured: true
  },
  {
    id: "green-fork-restaurant",
    slug: "green-fork-restaurant",
    name: "The Green Fork Restaurant",
    category: "Restaurants",
    industry: "Artisanal Dining & Farm-to-Table",
    tagline: "Locally sourced organic cuisine & craft culinary experiences",
    shortDescription: "Vibrant dining website featuring an interactive food & cocktail menu with dietary filters, table reservation forms, and online takeout ordering demo.",
    fullDescription: "Engineered for upscale bistros, fine dining venues, and cafes wanting to display seasonal menus with mouth-watering imagery, manage reservations, and accept direct takeout inquiries.",
    colorScheme: {
      primary: "#14532D",
      secondary: "#854D0E",
      accent: "#65A30D",
      bgBadge: "bg-lime-50",
      textBadge: "text-lime-800"
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Interactive Menu Tabs", "Table Reservation Form"],
    features: ["Categorized Food Menu", "Dietary Filter (Vegan/GF)", "Table Reservation Engine", "WhatsApp Orders Direct"],
    previewImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    route: "/demos/green-fork-restaurant",
    featured: true
  },
  {
    id: "apex-consulting",
    slug: "apex-consulting",
    name: "Apex Business Consulting",
    category: "Consultancies",
    industry: "Corporate Advisory & Financial Strategy",
    tagline: "Strategic advisory for high-growth enterprises and market expansion",
    shortDescription: "Authoritative consulting firm website highlighting executive services, industry case study metrics, consultant profiles, and direct discovery call scheduling.",
    fullDescription: "Created for management consultants, accounting firms, and legal advisors who need to convey credibility, highlight verified ROI case studies, and book high-value consultation meetings.",
    colorScheme: {
      primary: "#0F172A",
      secondary: "#0284C7",
      accent: "#38BDF8",
      bgBadge: "bg-sky-50",
      textBadge: "text-sky-800"
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Case Study Modals", "Calendar Booking Form"],
    features: ["Practice Area Deep Dives", "Quantified Case Studies", "Leadership Bios", "Discovery Call Booking"],
    previewImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    route: "/demos/apex-consulting",
    featured: false
  },
  {
    id: "citycare-clinic",
    slug: "citycare-clinic",
    name: "CityCare Medical Clinic",
    category: "Clinics",
    industry: "Family Healthcare & Outpatient Practice",
    tagline: "Comprehensive outpatient healthcare and modern diagnostic services",
    shortDescription: "Clean, reassuring medical website featuring specialty departments, doctor credentials, operating hours, patient FAQs, and online appointment booking.",
    fullDescription: "Tailored for private clinics, dental practices, and diagnostic centers. Gives patients peace of mind with transparent physician qualifications, insurance listings, and easy appointment requests.",
    colorScheme: {
      primary: "#0369A1",
      secondary: "#0D9488",
      accent: "#06B6D4",
      bgBadge: "bg-cyan-50",
      textBadge: "text-cyan-800"
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Department Filter", "Appointment Request Form"],
    features: ["Specialty Departments", "Physician Profiles", "Working Hours & Emergency Lines", "Online Appointment Request"],
    previewImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    route: "/demos/citycare-clinic",
    featured: false
  },
  {
    id: "sparklepro-services",
    slug: "sparklepro-services",
    name: "SparklePro Services",
    category: "Small Businesses",
    industry: "Residential & Commercial Cleaning",
    tagline: "Eco-friendly, certified deep cleaning and facility management",
    shortDescription: "High-converting service business website with instant package comparisons, interactive square-footage pricing estimates, and fast WhatsApp booking.",
    fullDescription: "Perfect for local service businesses like cleaners, landscapers, plumbers, or HVAC technicians wanting to turn visitors into booked jobs with transparent illustrative packages and WhatsApp CTAs.",
    colorScheme: {
      primary: "#1E40AF",
      secondary: "#059669",
      accent: "#3B82F6",
      bgBadge: "bg-blue-50",
      textBadge: "text-blue-800"
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Cost Estimator Calculator", "WhatsApp Direct"],
    features: ["Package Comparison", "Service Area Coverage", "Instant Estimator Tool", "Fast Booking Inquiry"],
    previewImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    route: "/demos/sparklepro-services",
    featured: false
  },
  {
    id: "edubridge-academy",
    slug: "edubridge-academy",
    name: "EduBridge Academy",
    category: "Education",
    industry: "Professional Skills & Career Development",
    tagline: "Industry-aligned certificates and career transition programs",
    shortDescription: "Engaging educational institution platform featuring interactive course syllabus tabs, enrollment deadlines, instructor credentials, and admission applications.",
    fullDescription: "Designed for vocational institutes, code academies, language schools, and training centers looking to attract students with clear curriculum previews, tuition schedules, and admission forms.",
    colorScheme: {
      primary: "#1E3A8A",
      secondary: "#D97706",
      accent: "#F59E0B",
      bgBadge: "bg-indigo-50",
      textBadge: "text-indigo-800"
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Course Tabs", "Admission Application Form"],
    features: ["Course Curriculum Previews", "Instructor Highlights", "Tuition & Schedule Tables", "Admission Inquiry Form"],
    previewImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    route: "/demos/edubridge-academy",
    featured: false
  },
  {
    id: "safarivista-tours",
    slug: "safarivista-tours",
    name: "SafariVista Tours & Expeditions",
    category: "Travel and Tourism",
    industry: "African Safaris & Bespoke Holidays",
    tagline: "Unforgettable wildlife safaris, bush adventures, and beach escapes",
    shortDescription: "Breathtaking tourism platform showcasing multi-day safari itineraries, wildlife photography, package inclusions, and custom tour quote builder.",
    fullDescription: "Tailored for tour operators and safari outfitters. Highlights national park itineraries (Maasai Mara, Serengeti, Diani Coast), accommodation tiers, and customized safari request workflows.",
    colorScheme: {
      primary: "#14532D",
      secondary: "#D97706",
      accent: "#84CC16",
      bgBadge: "bg-amber-50",
      textBadge: "text-amber-900"
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Itinerary Accordions", "Custom Tour Inquiry"],
    features: ["Day-by-Day Itineraries", "Destination Highlights", "Seasonality Guide", "Custom Safari Builder"],
    previewImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    route: "/demos/safarivista-tours",
    featured: true
  },
  {
    id: "luxecart-boutique",
    slug: "luxecart-boutique",
    name: "LuxeCart Boutique",
    category: "E-commerce",
    industry: "Curated Fashion, Footwear & Accessories",
    tagline: "Contemporary lifestyle, artisanal apparel, and premium accessories",
    shortDescription: "High-performance e-commerce store with interactive product filters, interactive cart drawer with quantity updates, subtotal calculations, and demo checkout.",
    fullDescription: "Built for boutique retailers and independent brands. Demonstrates product catalogs with size/color options, persistent shopping cart, and seamless mobile purchasing experience.",
    colorScheme: {
      primary: "#111827",
      secondary: "#D97706",
      accent: "#4B5563",
      bgBadge: "bg-gray-100",
      textBadge: "text-gray-900"
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Interactive Shopping Cart", "Demo Checkout"],
    features: ["Interactive Shopping Cart", "Category & Price Filters", "Product Quick View", "Sample Checkout Flow"],
    previewImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    route: "/demos/luxecart-boutique",
    featured: true
  },
  {
    id: "swiftmove-logistics",
    slug: "swiftmove-logistics",
    name: "SwiftMove Logistics & Freight",
    category: "Small Businesses",
    industry: "Domestic Courier, Haulage & Cross-Border Freight",
    tagline: "Reliable freight forwarding, supply chain logistics, and express parcel delivery",
    shortDescription: "Dynamic freight & logistics website equipped with a functional sample tracking lookup, fleet capacity specs, and freight rate quotation forms.",
    fullDescription: "Ideal for transport operators, express couriers, and cross-border haulers. Features sample shipment tracking (try `SWIFT-8921` or `SWIFT-4012`), route coverage maps, and B2B contract requests.",
    colorScheme: {
      primary: "#0F172A",
      secondary: "#F97316",
      accent: "#FB923C",
      bgBadge: "bg-orange-50",
      textBadge: "text-orange-800"
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Live Tracking Simulator", "Freight Rate Form"],
    features: ["Sample Shipment Tracker", "Fleet Specifications", "Regional Route Coverage", "Instant Rate Request"],
    previewImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    route: "/demos/swiftmove-logistics",
    featured: false
  }
];
