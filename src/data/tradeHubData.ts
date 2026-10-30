export interface TradingSignal {
  id: string;
  instrument: string;
  pairDisplay: string;
  assetType: 'Forex' | 'Commodity' | 'Crypto' | 'Indices';
  direction: 'BUY' | 'SELL';
  orderType: 'MARKET EXECUTION' | 'BUY LIMIT' | 'SELL LIMIT' | 'BUY STOP';
  entryPrice: number;
  stopLoss: number;
  takeProfit1: number;
  takeProfit2: number;
  takeProfit3?: number;
  timeframe: 'M15' | 'H1' | 'H4' | 'D1';
  status: 'ACTIVE' | 'HIT_TP1' | 'HIT_TP2' | 'HIT_TP3' | 'CLOSED_PROFIT' | 'STOPPED_OUT' | 'PENDING';
  pipsResult: number;
  publishedAt: string;
  tierRequired: 'Free' | 'Premium' | 'VIP';
  riskReward: string;
  thesis: string;
  chartImage?: string;
  confidence: number; // percentage
}

export interface MembershipTier {
  id: 'free' | 'premium' | 'vip';
  name: string;
  tagline: string;
  badge: string;
  priceKsh: number;
  priceDisplay: string;
  billingPeriod: string;
  popular?: boolean;
  colorScheme: {
    accent: string;
    border: string;
    badgeBg: string;
    badgeText: string;
  };
  features: string[];
  limitations?: string[];
  ctaText: string;
}

export interface SubscriberRecord {
  id: string;
  memberName: string;
  email: string;
  phone: string;
  plan: 'Free' | 'Premium' | 'VIP';
  amountKsh: number;
  paymentMethod: 'M-Pesa STK' | 'Visa/Mastercard' | 'USDT TRC20';
  status: 'Active' | 'Pending' | 'Expiring Soon';
  joinedDate: string;
  expiryDate: string;
}

export interface PlatformMetric {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  subtext: string;
}

export const initialSignals: TradingSignal[] = [
  {
    id: "SIG-8092",
    instrument: "XAUUSD",
    pairDisplay: "Gold / US Dollar",
    assetType: "Commodity",
    direction: "BUY",
    orderType: "MARKET EXECUTION",
    entryPrice: 2742.50,
    stopLoss: 2731.00,
    takeProfit1: 2758.00,
    takeProfit2: 2774.00,
    takeProfit3: 2795.00,
    timeframe: "H1",
    status: "HIT_TP2",
    pipsResult: 315,
    publishedAt: "2 hours ago",
    tierRequired: "VIP",
    riskReward: "1:2.7",
    thesis: "Institutional liquidity sweep of the Asian session low at 2,738 with immediate 15-minute bullish market structure shift. London fix momentum confirming continuation towards prior week imbalance.",
    chartImage: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80",
    confidence: 92
  },
  {
    id: "SIG-8091",
    instrument: "EURUSD",
    pairDisplay: "Euro / US Dollar",
    assetType: "Forex",
    direction: "BUY",
    orderType: "MARKET EXECUTION",
    entryPrice: 1.08450,
    stopLoss: 1.08150,
    takeProfit1: 1.08850,
    takeProfit2: 1.09250,
    takeProfit3: 1.09650,
    timeframe: "H4",
    status: "ACTIVE",
    pipsResult: 42,
    publishedAt: "3 hours ago",
    tierRequired: "Free",
    riskReward: "1:2.7",
    thesis: "4-hour Bullish Fair Value Gap fill accompanied by bullish RSI divergence. ECB policy commentary priced in; targeting buy-side liquidity resting at 1.0930.",
    chartImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    confidence: 85
  },
  {
    id: "SIG-8090",
    instrument: "GBPUSD",
    pairDisplay: "British Pound / US Dollar",
    assetType: "Forex",
    direction: "SELL",
    orderType: "MARKET EXECUTION",
    entryPrice: 1.29850,
    stopLoss: 1.30250,
    takeProfit1: 1.29250,
    takeProfit2: 1.28600,
    takeProfit3: 1.28000,
    timeframe: "H1",
    status: "HIT_TP1",
    pipsResult: 60,
    publishedAt: "5 hours ago",
    tierRequired: "Premium",
    riskReward: "1:3.1",
    thesis: "Clean rejection off the daily descending trendline and 1.3000 psychological resistance. UK retail sales missed forecasts, accelerating sterling downside.",
    chartImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
    confidence: 88
  },
  {
    id: "SIG-8089",
    instrument: "BTCUSD",
    pairDisplay: "Bitcoin / US Dollar",
    assetType: "Crypto",
    direction: "BUY",
    orderType: "MARKET EXECUTION",
    entryPrice: 68400.00,
    stopLoss: 66900.00,
    takeProfit1: 71200.00,
    takeProfit2: 74500.00,
    takeProfit3: 78000.00,
    timeframe: "D1",
    status: "ACTIVE",
    pipsResult: 1850,
    publishedAt: "Yesterday",
    tierRequired: "VIP",
    riskReward: "1:4.1",
    thesis: "Daily candle breakout above the 6-month symmetrical consolidation triangle. Substantial institutional spot ETF net inflows (+480M USD in 24h) and declining exchange reserves.",
    chartImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    confidence: 94
  },
  {
    id: "SIG-8088",
    instrument: "USDJPY",
    pairDisplay: "US Dollar / Japanese Yen",
    assetType: "Forex",
    direction: "SELL",
    orderType: "SELL LIMIT",
    entryPrice: 153.200,
    stopLoss: 153.750,
    takeProfit1: 152.400,
    takeProfit2: 151.600,
    takeProfit3: 150.800,
    timeframe: "H4",
    status: "CLOSED_PROFIT",
    pipsResult: 80,
    publishedAt: "1 day ago",
    tierRequired: "Premium",
    riskReward: "1:2.9",
    thesis: "Overextended rally testing the BoJ verbal intervention resistance zone. Bearish engulfing pin bar formed at New York close.",
    chartImage: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80",
    confidence: 87
  },
  {
    id: "SIG-8087",
    instrument: "NAS100",
    pairDisplay: "Nasdaq 100 E-Mini",
    assetType: "Indices",
    direction: "BUY",
    orderType: "MARKET EXECUTION",
    entryPrice: 20350.00,
    stopLoss: 20180.00,
    takeProfit1: 20600.00,
    takeProfit2: 20850.00,
    timeframe: "M15",
    status: "HIT_TP1",
    pipsResult: 250,
    publishedAt: "2 days ago",
    tierRequired: "VIP",
    riskReward: "1:2.9",
    thesis: "Opening bell gap-fill into the 15-minute bullish order block. Strong semiconductor earnings pre-market providing risk-on tailwinds.",
    chartImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
    confidence: 90
  }
];

export const membershipTiers: MembershipTier[] = [
  {
    id: "free",
    name: "Free Community",
    tagline: "Experience platform signals and essential daily market commentary",
    badge: "Free Access",
    priceKsh: 0,
    priceDisplay: "KSh 0",
    billingPeriod: "Forever Free",
    popular: false,
    colorScheme: {
      accent: "#94A3B8",
      border: "border-slate-800",
      badgeBg: "bg-slate-800",
      badgeText: "text-slate-300"
    },
    features: [
      "2-3 Weekly Swing Signals (Forex Majors only)",
      "Daily Morning Market Bias & Economic Calendar",
      "Public Telegram Community Chat Access",
      "Standard Lot Size & Risk Management Calculator",
      "Educational Trading Strategy Guides"
    ],
    limitations: [
      "15-minute alert delay on public channels",
      "No Gold (XAUUSD), Indices, or Crypto signals",
      "No direct mentor feedback or 1-on-1 consultations"
    ],
    ctaText: "Get Free Access"
  },
  {
    id: "premium",
    name: "Pro Trader",
    tagline: "Daily high-probability signals across Forex majors, minors & Gold",
    badge: "Most Popular",
    priceKsh: 4999,
    priceDisplay: "KSh 4,999",
    billingPeriod: "/ month",
    popular: true,
    colorScheme: {
      accent: "#10B981",
      border: "border-emerald-500/50",
      badgeBg: "bg-emerald-500/20",
      badgeText: "text-emerald-400"
    },
    features: [
      "8-12 Instant High-Probability Signals Weekly",
      "Full Coverage: Forex Majors + XAUUSD Gold",
      "Real-Time Telegram Bot & Dashboard Push Alerts",
      "Exact Entry, Stop Loss, TP1, TP2 & Trailing SL guidance",
      "Prop Firm Challenge Optimization (FTMO/MFF rules)",
      "Weekly Live NY/London Market Breakdown Zoom Session",
      "Priority WhatsApp & Discord Channel Support"
    ],
    ctaText: "Start Pro Membership"
  },
  {
    id: "vip",
    name: "Elite VIP & Mentorship",
    tagline: "Unrestricted institutional signals, crypto alpha, and personal mentorship",
    badge: "Institutional Tier",
    priceKsh: 9999,
    priceDisplay: "KSh 9,999",
    billingPeriod: "/ month",
    popular: false,
    colorScheme: {
      accent: "#F59E0B",
      border: "border-amber-500/50",
      badgeBg: "bg-amber-500/20",
      badgeText: "text-amber-400"
    },
    features: [
      "Unrestricted Access to ALL Signals (Forex, Gold, Crypto & US Indices)",
      "High-Frequency Scalping Channel (M5 & M15 precision setups)",
      "Automated MT4 / MT5 Copy-Trading Bridge Instructions",
      "Bi-Weekly 1-on-1 Private Portfolio Review via Zoom",
      "Exclusive Crypto Whale Flow & On-Chain Breakout Watchlist",
      "Direct 24/7 WhatsApp Hotline with Head Signal Analyst",
      "Lifetime Access to the Masterclass Video Vault"
    ],
    ctaText: "Upgrade to Elite VIP"
  }
];

export const platformMetrics: PlatformMetric[] = [
  {
    label: "Total Win Rate (Past 12 Mos)",
    value: "86.4%",
    change: "+3.2% vs last quarter",
    isPositive: true,
    subtext: "Based on 482 tracked trades"
  },
  {
    label: "Net Pips Banked (This Month)",
    value: "+3,480",
    change: "+840 pips this week",
    isPositive: true,
    subtext: "Across Forex, Gold & Indices"
  },
  {
    label: "Average Risk-to-Reward",
    value: "1 : 2.9",
    change: "Disciplined capital preservation",
    isPositive: true,
    subtext: "Strict minimum 1:2 on all setups"
  },
  {
    label: "Active Community Members",
    value: "1,842",
    change: "+218 new this month",
    isPositive: true,
    subtext: "Kenya, Diaspora & Global traders"
  }
];

export const initialSubscribers: SubscriberRecord[] = [
  {
    id: "SUB-1082",
    memberName: "Brian K. Kiprop",
    email: "brian.kiprop@example.com",
    phone: "+254 712 345 678",
    plan: "VIP",
    amountKsh: 9999,
    paymentMethod: "M-Pesa STK",
    status: "Active",
    joinedDate: "2026-10-18",
    expiryDate: "2026-11-18"
  },
  {
    id: "SUB-1081",
    memberName: "Sarah N. Muthoni",
    email: "sarah.muthoni@example.com",
    phone: "+254 722 890 123",
    plan: "Premium",
    amountKsh: 4999,
    paymentMethod: "M-Pesa STK",
    status: "Active",
    joinedDate: "2026-10-22",
    expiryDate: "2026-11-22"
  },
  {
    id: "SUB-1080",
    memberName: "Dennis O. Ochieng",
    email: "dennis.o@example.com",
    phone: "+254 733 456 789",
    plan: "VIP",
    amountKsh: 9999,
    paymentMethod: "Visa/Mastercard",
    status: "Active",
    joinedDate: "2026-10-05",
    expiryDate: "2026-11-05"
  },
  {
    id: "SUB-1079",
    memberName: "David G. Karanja",
    email: "karanja.d@example.com",
    phone: "+254 701 234 567",
    plan: "Premium",
    amountKsh: 4999,
    paymentMethod: "M-Pesa STK",
    status: "Active",
    joinedDate: "2026-10-12",
    expiryDate: "2026-11-12"
  },
  {
    id: "SUB-1078",
    memberName: "Grace W. Achieng",
    email: "grace.w@example.com",
    phone: "+254 798 765 432",
    plan: "Free",
    amountKsh: 0,
    paymentMethod: "M-Pesa STK",
    status: "Active",
    joinedDate: "2026-10-25",
    expiryDate: "2027-10-25"
  },
  {
    id: "SUB-1077",
    memberName: "Eng. Victor Maina",
    email: "victor.m@example.com",
    phone: "+44 7700 900123",
    plan: "VIP",
    amountKsh: 9999,
    paymentMethod: "USDT TRC20",
    status: "Active",
    joinedDate: "2026-09-30",
    expiryDate: "2026-10-30"
  }
];

export const monthlyPerformanceHistory = [
  { month: "May 2026", pips: 2680, winRate: "85%", trades: 42, profitFactor: "2.8" },
  { month: "Jun 2026", pips: 3120, winRate: "88%", trades: 48, profitFactor: "3.1" },
  { month: "Jul 2026", pips: 2450, winRate: "82%", trades: 39, profitFactor: "2.6" },
  { month: "Aug 2026", pips: 3890, winRate: "91%", trades: 51, profitFactor: "3.4" },
  { month: "Sep 2026", pips: 2940, winRate: "84%", trades: 44, profitFactor: "2.9" },
  { month: "Oct 2026", pips: 3480, winRate: "86%", trades: 47, profitFactor: "3.2" }
];

export const platformFeatures = [
  {
    title: "Instant Push & Telegram Bot",
    desc: "Subscribers receive trades seconds after publication with entry, exact stop loss, and multi-tier take profit targets.",
    icon: "BellRing"
  },
  {
    title: "M-Pesa STK & Global Payments",
    desc: "Seamless automated local M-Pesa billing alongside Visa, Mastercard, and USDT crypto for diaspora and international traders.",
    icon: "CreditCard"
  },
  {
    title: "Tiered VIP Content Gating",
    desc: "Easily lock high-value Gold, Crypto, or Scalping channels behind VIP paywalls, automatically upgrading paid members.",
    icon: "Lock"
  },
  {
    title: "Transparent Performance Ledger",
    desc: "Every closed trade is permanently archived with win/loss timestamps, verified pips, and risk-reward ratios.",
    icon: "LineChart"
  },
  {
    title: "Prop Firm Challenge Optimization",
    desc: "Signals engineered with strict 1% risk rules compatible with FTMO, FundedNext, and top prop trading firm evaluations.",
    icon: "ShieldCheck"
  },
  {
    title: "Admin Broadcast Studio",
    desc: "Publish a new trade setup in under 30 seconds from your phone or desktop, instantly notifying thousands of members.",
    icon: "Radio"
  }
];
