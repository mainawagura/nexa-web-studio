export interface WebsitePackage {
  id: string;
  name: string;
  tagline: string;
  priceNote: string;
  popular?: boolean;
  idealFor: string;
  features: string[];
}

export const siteConfig = {
  brandName: "Nexa Web Studio",
  tagline: "Websites That Build Trust and Grow Your Business",
  description: "We build modern, fast, and high-converting business websites tailored for companies in Kenya, diaspora entrepreneurs, and international businesses.",
  
  // =========================================================================
  // CONTACT DETAILS - Replace these with your real details when ready!
  // =========================================================================
  whatsappNumber: "+254700000000", // e.g. +254712345678 (include country code without + when calling wa.me)
  whatsappDisplay: "+254 700 000 000",
  email: "hello@nexawebstudio.com",
  phone: "+254 700 000 000",
  location: "Nairobi, Kenya",
  servingArea: "Serving Kenyan Businesses, Diaspora Owners & Global Clients",

  socials: {
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    github: "https://github.com"
  },

  packages: [
    {
      id: "starter",
      name: "Starter Business Website",
      tagline: "Clean, professional online presence for new ventures & service providers",
      priceNote: "Starting from $300 / KES 40,000",
      idealFor: "Solo consultants, small clinics, local trades, or portfolio showcases",
      features: [
        "Up to 5 custom-designed responsive pages",
        "Mobile-first, lightning-fast React / static architecture",
        "Direct WhatsApp inquiry button & lead capture form",
        "Google Maps, business hours & social media integration",
        "Basic SEO setup & metadata indexing",
        "Domain & high-speed Vercel hosting setup assistance",
        "2 weeks of complimentary launch support"
      ]
    },
    {
      id: "business",
      name: "Growth Business Platform",
      tagline: "High-impact website with interactive features, catalogs & client booking",
      priceNote: "Starting from $650 / KES 85,000",
      popular: true,
      idealFor: "Property managers, real estate agencies, hotels, restaurants & contractors",
      features: [
        "Up to 10 bespoke pages with interactive components",
        "Custom property/product catalogs with live search & filters",
        "Interactive booking, table reservation, or quotation calculators",
        "M-Pesa / payment gateway readiness & Daraja API integration",
        "Content management system (CMS) or easy update dashboard",
        "Complete on-page SEO & social share OpenGraph optimization",
        "4 weeks of complimentary post-launch support"
      ]
    },
    {
      id: "premium",
      name: "Custom Enterprise & E-commerce",
      tagline: "Advanced web systems, full e-commerce, custom portals & API integrations",
      priceNote: "Starting from $1,200 / KES 150,000",
      idealFor: "Diaspora property portals, multi-branch clinics, logistics & online stores",
      features: [
        "Unlimited custom pages & advanced web application workflows",
        "Full e-commerce cart, checkout & inventory or tenant portal",
        "Database integration (SQL Server, PostgreSQL or Firebase)",
        "Automated WhatsApp / SMS / Email transaction receipts",
        "Multi-currency support (KES, USD, GBP, EUR) for diaspora clients",
        "Bank-grade security, audit logs & role-based access",
        "Dedicated ongoing maintenance & priority support retainer"
      ]
    }
  ] as WebsitePackage[],

  // Helper to generate a prefilled WhatsApp link
  getWhatsAppLink: (customMessage?: string, demoName?: string) => {
    const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
    let text = customMessage;
    if (!text) {
      if (demoName) {
        text = `Hello Nexa Web Studio, I was exploring your portfolio and I'm interested in building a website similar to your "${demoName}" demo. Can we discuss?`;
      } else {
        text = `Hello Nexa Web Studio, I'm interested in getting a professional business website developed. Could you share more information?`;
      }
    }
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
  }
};
