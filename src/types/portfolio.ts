export type ProjectCategory = 
  | "All Projects"
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
  keyCapabilities: string[]; // Business outcomes & features (NO developer language jargon)
  features: string[];
  previewImage: string;
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
