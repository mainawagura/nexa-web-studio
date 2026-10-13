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
  // CONTACT DETAILS
  // =========================================================================
  whatsappNumber: "+254706059826",
  whatsappDisplay: "+254 706 059 826",
  email: "peterwaguraa@gmail.com",
  phone: "+254 706 059 826",
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
      id: "ecommerce",
      name: "Ecommerce Website",
      tagline: "Online storefront with product catalog, digital payments & inventory workflows",
      priceNote: "Request a Quote",
      idealFor: "Retail brands, boutiques, wholesale distributors, and digital product sellers",
      features: [
        "Structured product catalog with categories & search",
        "Mobile shopping cart & streamlined checkout experience",
        "M-Pesa STK Push, card & international payment readiness",
        "Automated order confirmation & WhatsApp notifications",
        "Inventory management & promotional discount engine",
        "Post-launch technical support & hosting guidance"
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
