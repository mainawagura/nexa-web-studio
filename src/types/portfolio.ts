export type ProjectCategory = 
  | "All Projects"
  | "Property Management & Real Estate"
  | "Construction & Engineering"
  | "Hotels & Hospitality"
  | "Restaurants & Cafés"
  | "Consulting & Professional Services"
  | "Clinics & Healthcare"
  | "Retail & E-commerce"
  | "Schools & Education"
  | "Beauty, Salons & Wellness"
  | "Logistics & Transport"
  | "Travel & Tourism"
  | "Nonprofits & Community Organizations"
  // Legacy short aliases:
  | "Property Management"
  | "Real Estate"
  | "Construction"
  | "Hotels"
  | "Restaurants"
  | "Consultancies"
  | "Clinics"
  | "Small Businesses"
  | "E-commerce"
  | "Education"
  | "Travel and Tourism";

export interface ProjectDemo {
  id: string;
  slug: string;
  name: string;
  category: ProjectCategory;
  categoryDisplay?: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  industry: string;
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
    bgBadge: string;
    textBadge: string;
  };
  keyCapabilities: string[]; // Business outcomes & features
  features: string[];
  previewImage: string;
  mobilePreviewImage?: string;
  route: string;
  featured?: boolean;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  industry: string;
  websiteType: string;
  budgetRange: string;
  projectDescription: string;
  preferredContact: "WhatsApp" | "Email" | "Phone Call";
}
