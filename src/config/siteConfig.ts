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
      name: "Starter Website",
      tagline: "Clean, professional online presence for emerging ventures & local services",
      priceNote: "Request a Quote",
      idealFor: "Solo consultants, local trades, or essential portfolio showcases",
      features: [
        "Professional homepage with custom branding",
        "Essential business information & service highlights",
        "Direct contact details & WhatsApp lead capture",
        "Mobile-responsive, fast-loading layout",
        "Google Maps & business hours integration",
        "Complimentary launch assistance"
      ]
    },
    {
      id: "business",
      name: "Business Website",
      tagline: "Full-scale corporate website with interactive portfolio & lead generation",
      priceNote: "Request a Quote",
      popular: true,
      idealFor: "Construction contractors, hotels, real estate agencies & restaurants",
      features: [
        "Multiple bespoke pages & structured site navigation",
        "Comprehensive services & completed projects portfolio",
        "Interactive customer inquiry & quote request forms",
        "Solid SEO foundations & Google indexing",
        "High-resolution photo galleries & filters",
        "Social media & WhatsApp Business funnel"
      ]
    },
    {
      id: "premium",
      name: "Premium Website",
      tagline: "Advanced custom functionality, client portals & specialized integrations",
      priceNote: "Request a Quote",
      idealFor: "Property tech portals, resorts with booking engines, multi-branch clinics & e-commerce",
      features: [
        "Custom functionality & dynamic workflows",
        "Advanced integrations (payment readiness, M-Pesa, booking calculators)",
        "More detailed page structures & multi-tier catalogs",
        "Additional bespoke design customization & branding",
        "Role-based client or tenant portals",
        "Priority post-launch maintenance & support"
      ]
    }
  ] as WebsitePackage[],

  // Helper to generate a prefilled WhatsApp link
  getWhatsAppLink: (customMessage?: string, demoName?: string) => {
    const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
    let text = customMessage;
    if (!text) {
      if (demoName) {
        text = `Hello Nexa Web Studio, I viewed your ${demoName} demo and would like a similar website for my business.`;
      } else {
        text = `Hello Nexa Web Studio, I am interested in getting a professional business website developed. Could you share more information?`;
      }
    }
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
  }
};
