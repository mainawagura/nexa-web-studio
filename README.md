# Nexa Web Studio — Professional Web Development Portfolio & 12 Business Demos

A modern, premium, fully responsive web development portfolio and interactive business website showcase built with **React, TypeScript, Vite, Tailwind CSS, React Router, and Lucide React**.

Designed specifically to attract and convert business owners, African diaspora entrepreneurs, and international clients by allowing them to test and explore realistic sample business websites before requesting a similar website for their business.

---

## 🚀 Quick Start

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or later)
- npm (v9+ or later)

### 2. Local Setup
```bash
# Navigate to the project directory
cd D:\nexa-web-studio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## 🛠️ How to Customize Branding & Contact Details

All developer credentials, phone numbers, WhatsApp message templates, and pricing packages are maintained in a single central file:

👉 **`src/config/siteConfig.ts`**

### Replace WhatsApp Number & Contact Details
Open `src/config/siteConfig.ts` and modify:
```typescript
export const siteConfig = {
  brandName: "Your Studio Name",               // e.g. "Maina Digital Systems"
  whatsappNumber: "+254712345678",             // Your real WhatsApp number (with country code)
  whatsappDisplay: "+254 712 345 678",
  email: "your-email@domain.com",
  location: "Nairobi, Kenya",
  // ...
};
```
Whenever a visitor clicks *"Request Similar Website"* or *"WhatsApp Direct"*, it will immediately generate a prefilled message directly to your personal WhatsApp!

### Adjust Website Package Prices
In `src/config/siteConfig.ts`, update `siteConfig.packages` to customize the deliverables, timelines, and pricing for the Starter, Business, and Premium tiers.

---

## 🌐 The 12 Interactive Business Website Demos

Every demo is accessible via its own dedicated URL and features distinct industry branding, color palettes, and real interactive elements:

| # | Demo Brand | Industry Vertical | Dedicated Routes | Key Interactive Features |
|---|---|---|---|---|
| 1 | **Havenstone Properties** | Property Management & Real Estate | `/demos/property` <br> `/demos/havenstone-properties` | Executive rental listings, tenant maintenance ticket logger, diaspora remittance overview. |
| 2 | **Ironwood Construction Group** | Construction & Engineering | `/demos/construction` <br> `/demos/ironwood-construction` | Commercial & civil infrastructure portfolio, NCA-1 safety compliance, project RFP estimator. |
| 3 | **The Alder House Hotel** | Hotels & Hospitality | `/demos/hotel` <br> `/demos/alder-house-hotel` | Oceanfront boutique sanctuary, live suite selector with total stay calculator, experience curator. |
| 4 | **Ember & Olive** | Restaurants & Cafés | `/demos/restaurant` <br> `/demos/ember-olive` | Artisanal dining, categorized wood-fired hearth menu, dietary tags, table reservation engine. |
| 5 | **Northstar Advisory** | Consulting & Professional Services | `/demos/consultancy` <br> `/demos/northstar-advisory` | Corporate scale practices, quantified case study metrics, managing partner consultation booking. |
| 6 | **WillowCare Medical Centre** | Clinics & Healthcare | `/demos/clinic` <br> `/demos/willowcare-clinic` | Clinical departments, specialist doctor roster, 24/7 emergency notice, appointment triage. |
| 7 | **Aura Living Boutique** | Retail & E-commerce | `/demos/ecommerce` <br> `/demos/aura-living` | Curated lifestyle boutique, category filter, slide-out cart drawer with live quantity adjustments. |
| 8 | **Oakridge Academy** | Schools & Education | `/demos/education` <br> `/demos/oakridge-academy` | Cambridge/IB academic tracks, university placement metrics, campus tour & admissions engine. |
| 9 | **Lumina Spa & Wellness** | Beauty, Salons & Wellness | `/demos/beauty` <br> `/demos/lumina-wellness` | Botanical wellness therapies, hydrotherapy amenities, treatment package duration selector. |
| 10 | **SwiftMove Logistics** | Logistics & Transport | `/demos/logistics` <br> `/demos/swiftmove-logistics` | Cross-border freight corridors, fleet specs, and functional sample cargo tracking simulator (`SWIFT-8921` / `SWIFT-4012`). |
| 11 | **SafariVista Expeditions** | Travel & Tourism | `/demos/travel` <br> `/demos/safarivista-tours` | Bespoke African safari itineraries, migration highlight cards, custom expedition planner. |
| 12 | **HopePath Community Foundation** | Nonprofits & NGOs | `/demos/nonprofit` <br> `/demos/hopepath-foundation` | Clean borehole & digital village pillars, audited 89% programmatic financial transparency meter. |

Every demo contains:
- A discreet top banner explaining it is a portfolio concept demonstration.
- A *"← Back to All Demos"* link returning to the main portfolio.
- A *"Request Similar Website"* CTA that opens the pre-filled consultation modal.

---

## 🚢 Deploying to Vercel in 2 Minutes

This project includes a pre-configured `vercel.json` ensuring single-page application (SPA) routing works out of the box without 404 errors.

### Method A: Deploy via GitHub (Recommended)
1. Initialize a git repository and commit:
   ```bash
   cd D:\nexa-web-studio
   git init
   git add .
   git commit -m "Initial commit of Nexa Web Studio portfolio"
   ```
2. Push the repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/<your-username>/nexa-web-studio.git
   git branch -M main
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
4. Import your repository. Vercel will automatically detect **Vite**, set the build command to `npm run build`, and output directory to `dist`.
5. Click **Deploy**. Your website is live!

### Method B: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally if you haven't already
npm install -g vercel

# Run deployment
cd D:\nexa-web-studio
vercel
```

---

## 📁 Project Architecture

```
D:\nexa-web-studio\
├── index.html                           # SEO & Social OpenGraph configuration
├── package.json                         # Dependencies & npm scripts
├── tailwind.config.js                   # Custom design system (Navy #082B4C, Teal #0D9488)
├── tsconfig.json                        # TypeScript configuration
├── vite.config.ts                       # Vite bundler configuration
├── vercel.json                          # Vercel SPA rewrites & security headers
└── src/
    ├── types/portfolio.ts               # Core TypeScript definitions
    ├── config/siteConfig.ts             # Central contact, WhatsApp & packages configuration
    ├── data/
    │   ├── projectsData.ts              # 12 demo projects metadata & categories
    │   └── demoData.ts                  # Mock data for all 12 business verticals
    ├── layouts/
    │   ├── MainLayout.tsx               # Agency hub layout (Navbar, Footer, Modals)
    │   └── DemoLayout.tsx               # Demo layout with persistent banner & back-links
    ├── components/
    │   ├── common/Navbar.tsx            # Sticky responsive navigation
    │   ├── common/Footer.tsx            # Agency footer & disclaimers
    │   └── inquiry/RequestModal.tsx     # Lead capture modal with WhatsApp generator
    ├── pages/
    │   ├── HomePage.tsx                 # Main agency landing page
    │   ├── PortfolioPage.tsx            # Filterable & searchable 12-demo showcase
    │   ├── PackagesPage.tsx             # Starter, Business, and Premium tiers
    │   ├── AboutPage.tsx                # Developer background & engineering pillars
    │   ├── ContactPage.tsx              # Full inquiry form & direct contact
    │   └── demos/                       # 12 Individual, uniquely styled demos
    ├── App.tsx                          # Router configuration
    └── main.tsx                         # Entry render
```

---

## 📄 License
This portfolio is created for personal and professional client lead generation. All mockup assets are free-to-use photography from Unsplash.
