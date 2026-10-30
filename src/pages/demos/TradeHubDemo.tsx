import React, { useState, useMemo } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { 
  TrendingUp, TrendingDown, ShieldCheck, Zap, Bell, Check, X, 
  ArrowUpRight, ArrowRight, Lock, Copy, CheckCircle2, ChevronRight, 
  Filter, Search, BarChart3, Users, DollarSign, CreditCard, 
  Settings, Clock, Sparkles, MessageSquare, AlertCircle, RefreshCw, 
  ExternalLink, Layers, Award, Radio, Activity, Eye, Sliders, 
  ChevronDown, Phone, Mail, UserCheck
} from 'lucide-react';
import { 
  initialSignals, 
  membershipTiers, 
  platformMetrics, 
  initialSubscribers, 
  monthlyPerformanceHistory, 
  platformFeatures, 
  TradingSignal, 
  MembershipTier, 
  SubscriberRecord 
} from '../../data/tradeHubData';
import { siteConfig } from '../../config/siteConfig';

export const TradeHubDemo: React.FC = () => {
  const { openRequestModal } = useOutletContext<{ openRequestModal: () => void }>();

  // Demo perspective mode: 'public' | 'member' | 'admin'
  const [activeView, setActiveView] = useState<'public' | 'member' | 'admin'>('public');

  // Member Simulation Tier: 'free' | 'premium' | 'vip'
  const [memberTier, setMemberTier] = useState<'free' | 'premium' | 'vip'>('vip');
  const [memberName, setMemberName] = useState<string>("Alex Mwangi");

  // Signals State (allows publishing new signals in Admin mode)
  const [signals, setSignals] = useState<TradingSignal[]>(initialSignals);
  const [selectedAssetFilter, setSelectedAssetFilter] = useState<string>('All');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('All');
  const [searchSignalQuery, setSearchSignalQuery] = useState<string>('');

  // Selected Signal for Detailed Modal
  const [inspectedSignal, setInspectedSignal] = useState<TradingSignal | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Auth / Login Modal for Demo
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  // Upgrade Modal
  const [upgradeModalOpen, setUpgradeModalOpen] = useState<boolean>(false);
  const [upgradeTargetTier, setUpgradeTargetTier] = useState<MembershipTier | null>(null);
  const [checkoutSuccess, setCheckoutSuccess] = useState<boolean>(false);

  // Admin New Signal Form State
  const [adminInstrument, setAdminInstrument] = useState<string>('XAUUSD');
  const [adminDirection, setAdminDirection] = useState<'BUY' | 'SELL'>('BUY');
  const [adminOrderType, setAdminOrderType] = useState<'MARKET EXECUTION' | 'BUY LIMIT' | 'SELL LIMIT'>('MARKET EXECUTION');
  const [adminEntry, setAdminEntry] = useState<string>('2750.00');
  const [adminSL, setAdminSL] = useState<string>('2738.00');
  const [adminTP1, setAdminTP1] = useState<string>('2768.00');
  const [adminTP2, setAdminTP2] = useState<string>('2785.00');
  const [adminTimeframe, setAdminTimeframe] = useState<'M15' | 'H1' | 'H4' | 'D1'>('H1');
  const [adminTier, setAdminTier] = useState<'Free' | 'Premium' | 'VIP'>('VIP');
  const [adminThesis, setAdminThesis] = useState<string>('Bullish order block tap during London session liquidity grab.');
  const [adminSignalPublished, setAdminSignalPublished] = useState<boolean>(false);

  // Admin Subscribers State
  const [subscribers, setSubscribers] = useState<SubscriberRecord[]>(initialSubscribers);
  const [adminSubFilter, setAdminSubFilter] = useState<string>('All');
  const [adminSubSearch, setAdminSubSearch] = useState<string>('');

  // Member Dashboard Active Tab
  const [memberTab, setMemberTab] = useState<'signals' | 'performance' | 'membership' | 'settings'>('signals');

  // Notifications State
  const [notifications, setNotifications] = useState<Array<{ id: string; title: string; time: string; read: boolean }>>([
    { id: '1', title: 'XAUUSD Hit Take Profit 2 (+315 pips banked)', time: '2h ago', read: false },
    { id: '2', title: 'New EURUSD Buy Setup Published', time: '3h ago', read: false },
    { id: '3', title: 'Weekly NY Live Trading Stream starting in 45m', time: '5h ago', read: true }
  ]);
  const [notifDrawerOpen, setNotifDrawerOpen] = useState<boolean>(false);

  // Filtered Signals Calculation
  const filteredSignals = useMemo(() => {
    return signals.filter(sig => {
      const matchesAsset = selectedAssetFilter === 'All' || sig.assetType === selectedAssetFilter;
      const matchesStatus = selectedStatusFilter === 'All' || 
        (selectedStatusFilter === 'ACTIVE' && (sig.status === 'ACTIVE' || sig.status.startsWith('HIT_TP'))) ||
        sig.status === selectedStatusFilter;
      
      const query = searchSignalQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        sig.instrument.toLowerCase().includes(query) ||
        sig.pairDisplay.toLowerCase().includes(query) ||
        sig.direction.toLowerCase().includes(query);

      return matchesAsset && matchesStatus && matchesSearch;
    });
  }, [signals, selectedAssetFilter, selectedStatusFilter, searchSignalQuery]);

  // Check if current member tier has access to a signal
  const canAccessSignal = (signalTier: 'Free' | 'Premium' | 'VIP'): boolean => {
    if (activeView === 'admin') return true;
    if (memberTier === 'vip') return true;
    if (memberTier === 'premium') return signalTier === 'Free' || signalTier === 'Premium';
    return signalTier === 'Free';
  };

  // Copy Signal to Clipboard simulation
  const handleCopySignal = (signal: TradingSignal) => {
    const text = `${signal.direction} ${signal.instrument} @ ${signal.entryPrice} | SL: ${signal.stopLoss} | TP1: ${signal.takeProfit1} | TP2: ${signal.takeProfit2} (${signal.timeframe})`;
    navigator.clipboard?.writeText(text);
    setCopiedId(signal.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Handle Admin Publish
  const handlePublishSignal = (e: React.FormEvent) => {
    e.preventDefault();
    const entry = parseFloat(adminEntry);
    const sl = parseFloat(adminSL);
    const tp1 = parseFloat(adminTP1);
    const tp2 = parseFloat(adminTP2);

    const newSig: TradingSignal = {
      id: `SIG-${Math.floor(8100 + Math.random() * 900)}`,
      instrument: adminInstrument.toUpperCase(),
      pairDisplay: `${adminInstrument} Live Setup`,
      assetType: adminInstrument.includes('USD') && !adminInstrument.includes('BTC') && !adminInstrument.includes('XAU') ? 'Forex' : adminInstrument.includes('XAU') ? 'Commodity' : adminInstrument.includes('BTC') ? 'Crypto' : 'Indices',
      direction: adminDirection,
      orderType: adminOrderType,
      entryPrice: entry,
      stopLoss: sl,
      takeProfit1: tp1,
      takeProfit2: tp2,
      timeframe: adminTimeframe,
      status: 'ACTIVE',
      pipsResult: 0,
      publishedAt: 'Just now',
      tierRequired: adminTier,
      riskReward: '1:2.8',
      thesis: adminThesis,
      confidence: 90
    };

    setSignals([newSig, ...signals]);
    setAdminSignalPublished(true);
    setTimeout(() => setAdminSignalPublished(false), 4000);
  };

  return (
    <div className="bg-[#0B0F19] text-slate-100 font-sans min-h-screen selection:bg-emerald-500 selection:text-slate-950">
      
      {/* ------------------------------------------------------------- */}
      {/* PERSISTENT DEMO ROLE SWITCHER / EVALUATION CONTROLS          */}
      {/* ------------------------------------------------------------- */}
      <div className="bg-[#070A12] border-b border-slate-800/80 px-4 py-2.5 sticky top-10 z-40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          
          {/* Left: Perspective Switcher */}
          <div className="flex items-center gap-1.5 bg-[#111827] p-1 rounded-xl border border-slate-800">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2">Demo View:</span>
            
            <button
              onClick={() => setActiveView('public')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                activeView === 'public'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>Public Website</span>
            </button>

            <button
              onClick={() => setActiveView('member')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                activeView === 'member'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>Member Dashboard</span>
              <span className={`px-1.5 py-0.2 rounded text-[9px] font-black uppercase ${
                memberTier === 'vip' ? 'bg-amber-400 text-slate-950' : memberTier === 'premium' ? 'bg-emerald-300 text-slate-950' : 'bg-slate-700 text-slate-200'
              }`}>
                {memberTier}
              </span>
            </button>

            <button
              onClick={() => setActiveView('admin')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                activeView === 'admin'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>Admin Studio</span>
            </button>
          </div>

          {/* Right: Tier Simulator when in Member View */}
          {activeView === 'member' && (
            <div className="flex items-center gap-2 bg-[#111827] px-3 py-1 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 font-semibold">Simulate Tier Access:</span>
              {(['free', 'premium', 'vip'] as const).map(tier => (
                <button
                  key={tier}
                  onClick={() => setMemberTier(tier)}
                  className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase transition-all ${
                    memberTier === tier
                      ? tier === 'vip' 
                        ? 'bg-amber-400 text-slate-950 shadow-sm' 
                        : tier === 'premium' 
                        ? 'bg-emerald-400 text-slate-950 shadow-sm' 
                        : 'bg-slate-200 text-slate-950'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>
          )}

          {/* Right: Quick CTA to Contact Nexa Web Studio */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="hidden lg:inline text-slate-400 text-[11px]">
              Want a custom trading portal?
            </span>
            <button
              onClick={openRequestModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Request Custom Build</span>
            </button>
          </div>

        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* BRAND TOPBAR NAVIGATION                                       */}
      {/* ------------------------------------------------------------- */}
      <nav className="bg-[#0B0F19]/90 backdrop-blur-md border-b border-slate-800 sticky top-[77px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo & Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-emerald-500/10">
              <Activity className="w-6 h-6 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-white">NEXA TRADEHUB</span>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  PRO SIGNALS
                </span>
              </div>
              <span className="text-[10px] text-slate-400 block -mt-0.5 font-medium tracking-wide">
                Forex & Crypto Membership Platform
              </span>
            </div>
          </div>

          {/* Navigation Links based on active view */}
          {activeView === 'public' ? (
            <div className="hidden md:flex items-center space-x-7 text-xs uppercase tracking-wider font-bold text-slate-300">
              <a href="#overview" className="hover:text-emerald-400 transition-colors">Overview</a>
              <a href="#signals" className="hover:text-emerald-400 transition-colors">Live Signals</a>
              <a href="#performance" className="hover:text-emerald-400 transition-colors">Performance</a>
              <a href="#plans" className="hover:text-emerald-400 transition-colors">Membership Plans</a>
              <a href="#features" className="hover:text-emerald-400 transition-colors">Platform Features</a>
            </div>
          ) : activeView === 'member' ? (
            <div className="flex items-center space-x-2 text-xs font-bold">
              {[
                { id: 'signals', label: 'Trading Signals', icon: <Radio className="w-3.5 h-3.5" /> },
                { id: 'performance', label: 'Analytics & Ledger', icon: <BarChart3 className="w-3.5 h-3.5" /> },
                { id: 'membership', label: 'My Subscription', icon: <CreditCard className="w-3.5 h-3.5" /> },
                { id: 'settings', label: 'Risk Settings', icon: <Sliders className="w-3.5 h-3.5" /> }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setMemberTab(tab.id as any)}
                  className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                    memberTab === tab.id
                      ? 'bg-slate-800 text-emerald-400 border border-slate-700'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span>Admin Studio Mode</span>
              </span>
            </div>
          )}

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {activeView === 'public' ? (
              <>
                <button
                  onClick={() => { setAuthMode('login'); setAuthModalOpen(true); }}
                  className="text-xs font-bold text-slate-300 hover:text-white px-3 py-2"
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setActiveView('member'); setMemberTier('vip'); }}
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-500/20"
                >
                  Enter Member Portal
                </button>
              </>
            ) : activeView === 'member' ? (
              <div className="flex items-center gap-3">
                {/* Notifications trigger */}
                <button
                  onClick={() => setNotifDrawerOpen(!notifDrawerOpen)}
                  className="relative p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                  title="Notifications"
                >
                  <Bell className="w-4 h-4" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                </button>

                {/* Member Profile Avatar Pill */}
                <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-bold text-xs flex items-center justify-center">
                    AM
                  </div>
                  <div className="hidden sm:block text-left text-xs">
                    <p className="font-bold text-white leading-tight">{memberName}</p>
                    <p className="text-[10px] text-emerald-400 font-black uppercase tracking-wider">{memberTier} Member</p>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setActiveView('public')}
                className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold"
              >
                Exit Admin
              </button>
            )}
          </div>

        </div>
      </nav>

      {/* ------------------------------------------------------------- */}
      {/* VIEW 1: PUBLIC TRADING PLATFORM HOMEPAGE                      */}
      {/* ------------------------------------------------------------- */}
      {activeView === 'public' && (
        <main className="space-y-24 pb-24">
          
          {/* Hero Section */}
          <section id="overview" className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-slate-800/80">
            {/* Ambient background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Hero Text */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Precision Forex, Gold & Crypto Intelligence</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                    High-Probability Trading Signals. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                      Automated Membership Platform.
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
                    Designed for forex educators, prop firm candidates, and crypto communities. Deliver instantaneous buy/sell signals with exact stop-loss and take-profit targets, monetize with M-Pesa & card subscriptions, and manage tiered VIP members effortlessly.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-4 items-center">
                    <button
                      onClick={() => setActiveView('member')}
                      className="px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/25 transition-all flex items-center gap-2 group"
                    >
                      <span>Explore Live Member Dashboard</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <a
                      href="#plans"
                      className="px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 transition-all"
                    >
                      View Membership Plans
                    </a>
                  </div>

                  {/* Trust Highlights */}
                  <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {platformMetrics.map((metric, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <p className="text-2xl font-black text-white">{metric.value}</p>
                        <p className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">{metric.label}</p>
                        <p className="text-[10px] text-emerald-400 font-semibold">{metric.change}</p>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Right Interactive Signal Card Preview */}
                <div className="lg:col-span-5 relative">
                  <div className="bg-[#111827] rounded-3xl border border-slate-700/80 p-6 shadow-2xl relative overflow-hidden space-y-5">
                    
                    {/* Top Signal Card Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center font-black text-xs">
                          GOLD
                        </div>
                        <div>
                          <p className="font-extrabold text-sm text-white">XAUUSD — Gold / USD</p>
                          <p className="text-[10px] text-slate-400">Published 2h ago • VIP Masterclass</p>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-wider border border-emerald-500/30 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                        <span>BUY @ 2,742.50</span>
                      </span>
                    </div>

                    {/* Price Levels Grid */}
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                        <p className="text-[10px] text-slate-400 uppercase font-bold">Stop Loss</p>
                        <p className="text-red-400 font-black text-sm mt-0.5">2,731.00</p>
                        <p className="text-[10px] text-slate-500">-115 pips</p>
                      </div>
                      <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                        <p className="text-[10px] text-slate-400 uppercase font-bold">Target 1 (Hit)</p>
                        <p className="text-emerald-400 font-black text-sm mt-0.5">2,758.00</p>
                        <p className="text-[10px] text-emerald-500">+155 pips</p>
                      </div>
                      <div className="bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/40">
                        <p className="text-[10px] text-emerald-300 uppercase font-bold">Target 2 (Hit)</p>
                        <p className="text-emerald-300 font-black text-sm mt-0.5">2,774.00</p>
                        <p className="text-[10px] text-emerald-400 font-black">+315 pips</p>
                      </div>
                    </div>

                    {/* Trade Rationale */}
                    <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                      <span className="font-bold text-amber-400 block mb-1">Institutional Setup Thesis:</span>
                      Asian low liquidity sweep with London fix volume surge. Stop moved to break-even; runner position open towards 2,795.
                    </div>

                    {/* Quick Interactive Button */}
                    <button
                      onClick={() => { setActiveView('member'); setMemberTier('vip'); }}
                      className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-1.5"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      <span>View All Active Signals in Dashboard</span>
                    </button>

                    <p className="text-[10px] text-slate-500 text-center">
                      * Sample demonstration data. All trading carries capital risk.
                    </p>

                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Live Signals Preview Stream */}
          <section id="signals" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block">
                  Real-Time Feeds
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  Active Signals Stream
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Demonstration of how members receive instant trade setups across Forex, Gold, and Crypto.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveView('member')}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Open Filterable Terminal</span>
                </button>
              </div>
            </div>

            {/* Signals Grid Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {signals.slice(0, 3).map(sig => (
                <div
                  key={sig.id}
                  className="bg-[#111827] rounded-2xl border border-slate-800 hover:border-slate-700 p-5 shadow-card transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-black text-lg text-white">{sig.instrument}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 uppercase font-bold">
                          {sig.timeframe}
                        </span>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded text-xs font-black uppercase ${
                        sig.direction === 'BUY' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}>
                        {sig.direction}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 line-clamp-2">{sig.thesis}</p>

                    <div className="grid grid-cols-3 gap-1.5 text-center text-[11px] pt-2 border-t border-slate-800">
                      <div className="bg-slate-900 p-2 rounded-lg">
                        <span className="text-slate-500 block text-[9px]">ENTRY</span>
                        <span className="font-bold text-white">{sig.entryPrice}</span>
                      </div>
                      <div className="bg-slate-900 p-2 rounded-lg">
                        <span className="text-slate-500 block text-[9px]">STOP LOSS</span>
                        <span className="font-bold text-red-400">{sig.stopLoss}</span>
                      </div>
                      <div className="bg-slate-900 p-2 rounded-lg">
                        <span className="text-slate-500 block text-[9px]">TAKE PROFIT</span>
                        <span className="font-bold text-emerald-400">{sig.takeProfit1}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400 text-[10px]">{sig.publishedAt}</span>
                    <button
                      onClick={() => { setInspectedSignal(sig); }}
                      className="text-emerald-400 hover:underline font-bold text-xs flex items-center gap-1"
                    >
                      <span>Full Signal Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Membership Plans Section */}
          <section id="plans" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-400">
                Transparent Monetization
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white">
                Tiered Membership Packages
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Empower your community with accessible entry tiers and monetize serious traders with high-value VIP signals. Supports automated M-Pesa STK push, credit cards, and crypto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {membershipTiers.map(tier => (
                <div
                  key={tier.id}
                  className={`bg-[#111827] rounded-3xl p-7 border transition-all flex flex-col justify-between relative shadow-xl ${
                    tier.popular 
                      ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-emerald-500/10' 
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-widest shadow-md">
                      Most Popular Plan
                    </span>
                  )}

                  <div className="space-y-6">
                    <div>
                      <span className={`px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-wider ${tier.colorScheme.badgeBg} ${tier.colorScheme.badgeText}`}>
                        {tier.badge}
                      </span>
                      <h3 className="text-2xl font-black text-white mt-2">{tier.name}</h3>
                      <p className="text-xs text-slate-400 mt-1">{tier.tagline}</p>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-white">{tier.priceDisplay}</span>
                      <span className="text-xs text-slate-400 font-semibold">{tier.billingPeriod}</span>
                    </div>

                    <div className="pt-4 border-t border-slate-800 space-y-2.5 text-xs text-slate-300">
                      {tier.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}

                      {tier.limitations && tier.limitations.map((lim, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-slate-500">
                          <X className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                          <span>{lim}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={() => {
                        setUpgradeTargetTier(tier);
                        setUpgradeModalOpen(true);
                      }}
                      className={`w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-md ${
                        tier.popular
                          ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
                          : 'bg-slate-800 hover:bg-slate-700 text-white'
                      }`}
                    >
                      {tier.ctaText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Platform Features Grid */}
          <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-400">
                Turnkey Architecture
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Built for High-Growth Signal Businesses
              </h2>
              <p className="text-xs text-slate-400">
                Everything required to run a high-ticket trading membership without technical headaches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platformFeatures.map((feat, idx) => (
                <div key={idx} className="bg-[#111827] p-6 rounded-2xl border border-slate-800 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-white text-base">{feat.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final Call to Action */}
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#111827] to-[#162238] rounded-3xl p-8 sm:p-12 border border-slate-700 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="max-w-2xl mx-auto space-y-3">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-wider">
                  Launch Your Trading Hub
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white">
                  Ready to Monetize Your Trading Community?
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Nexa Web Studio crafts custom trading signals platforms with local M-Pesa billing, Discord & Telegram bots, and member gating for Kenyan and international mentors.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={openRequestModal}
                  className="px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all"
                >
                  Request Similar Platform
                </button>
                <a
                  href={siteConfig.getWhatsAppLink("Hello Nexa Web Studio, I am interested in building a trading signals & membership platform like Nexa TradeHub.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Consultation</span>
                </a>
              </div>
            </div>
          </section>

        </main>
      )}

      {/* ------------------------------------------------------------- */}
      {/* VIEW 2: MEMBER DASHBOARD                                      */}
      {/* ------------------------------------------------------------- */}
      {activeView === 'member' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          
          {/* Member Welcome & Stat Strip */}
          <div className="bg-[#111827] rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2.5">
                  <h1 className="text-2xl sm:text-3xl font-black text-white">
                    Welcome back, {memberName}
                  </h1>
                  <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${
                    memberTier === 'vip' ? 'bg-amber-400 text-slate-950' : memberTier === 'premium' ? 'bg-emerald-400 text-slate-950' : 'bg-slate-700 text-slate-200'
                  }`}>
                    {memberTier} PASS
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Active Account: Pro Broker Feed Connected • Subscription Active until 18 Nov 2026
                </p>
              </div>

              {/* Upgrade Quick Button if not VIP */}
              {memberTier !== 'vip' && (
                <button
                  onClick={() => {
                    const vipTier = membershipTiers.find(t => t.id === 'vip')!;
                    setUpgradeTargetTier(vipTier);
                    setUpgradeModalOpen(true);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Upgrade to VIP (Unlock Gold & Scalps)</span>
                </button>
              )}
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-bold">Monthly Return (Pips)</span>
                <p className="text-2xl font-black text-emerald-400 mt-0.5">+3,480</p>
                <span className="text-[10px] text-emerald-500 font-bold">+18.4% on 1% risk</span>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-bold">Accuracy Win Rate</span>
                <p className="text-2xl font-black text-white mt-0.5">86.4%</p>
                <span className="text-[10px] text-slate-400">42 trades won / 49 total</span>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-bold">Active Setups Now</span>
                <p className="text-2xl font-black text-cyan-400 mt-0.5">4</p>
                <span className="text-[10px] text-slate-400">XAUUSD, EURUSD, BTC, NAS</span>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-bold">Risk Model</span>
                <p className="text-2xl font-black text-amber-400 mt-0.5">1 : 2.9</p>
                <span className="text-[10px] text-slate-400">Avg Risk-to-Reward</span>
              </div>
            </div>
          </div>

          {/* TAB 1: SIGNALS STREAM */}
          {memberTab === 'signals' && (
            <div className="space-y-6">
              
              {/* Filter Bar */}
              <div className="bg-[#111827] p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
                
                {/* Asset Class Filter */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="text-slate-500 text-[11px] mr-1">Asset:</span>
                  {['All', 'Forex', 'Commodity', 'Crypto', 'Indices'].map(asset => (
                    <button
                      key={asset}
                      onClick={() => setSelectedAssetFilter(asset)}
                      className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                        selectedAssetFilter === asset
                          ? 'bg-emerald-500 text-slate-950 shadow-sm'
                          : 'bg-slate-900 text-slate-400 hover:text-white'
                      }`}
                    >
                      {asset}
                    </button>
                  ))}
                </div>

                {/* Search Bar */}
                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search pair (e.g. XAUUSD, EUR)..."
                    value={searchSignalQuery}
                    onChange={e => setSearchSignalQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

              </div>

              {/* Signals Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSignals.map(sig => {
                  const accessible = canAccessSignal(sig.tierRequired);

                  return (
                    <div
                      key={sig.id}
                      className={`bg-[#111827] rounded-3xl border transition-all p-6 flex flex-col justify-between space-y-5 relative shadow-card ${
                        accessible 
                          ? 'border-slate-800 hover:border-slate-700' 
                          : 'border-slate-800/60 bg-[#0e1422] opacity-90'
                      }`}
                    >
                      {/* Top Header */}
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-black text-white">{sig.instrument}</span>
                            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-bold">
                              {sig.timeframe}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className={`px-2.5 py-0.5 rounded text-xs font-black uppercase ${
                              sig.direction === 'BUY' 
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                                : 'bg-red-500/20 text-red-400 border border-red-500/30'
                            }`}>
                              {sig.direction}
                            </span>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                              sig.tierRequired === 'VIP' ? 'bg-amber-400/20 text-amber-400' : sig.tierRequired === 'Premium' ? 'bg-emerald-400/20 text-emerald-400' : 'bg-slate-700 text-slate-300'
                            }`}>
                              {sig.tierRequired}
                            </span>
                          </div>
                        </div>

                        {/* Gated or Unlocked Content */}
                        {!accessible ? (
                          /* Locked State for Free/Lower Tiers */
                          <div className="py-6 text-center space-y-3">
                            <div className="w-12 h-12 rounded-full bg-amber-400/10 text-amber-400 mx-auto flex items-center justify-center border border-amber-400/30">
                              <Lock className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="font-extrabold text-sm text-white">{sig.tierRequired} Signal Locked</p>
                              <p className="text-xs text-slate-400 mt-1">
                                High-probability setup available to {sig.tierRequired} subscribers.
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                const target = membershipTiers.find(t => t.name.toLowerCase().includes(sig.tierRequired.toLowerCase())) || membershipTiers[2];
                                setUpgradeTargetTier(target);
                                setUpgradeModalOpen(true);
                              }}
                              className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md"
                            >
                              Upgrade to {sig.tierRequired}
                            </button>
                          </div>
                        ) : (
                          /* Unlocked Signal Content */
                          <div className="pt-4 space-y-4">
                            {/* Status badge & Pips count */}
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-400 text-[11px]">{sig.publishedAt}</span>
                              <span className={`px-2 py-0.5 rounded font-black text-[11px] ${
                                sig.status.includes('HIT') 
                                  ? 'bg-emerald-500/20 text-emerald-300' 
                                  : sig.status === 'ACTIVE' 
                                  ? 'bg-cyan-500/20 text-cyan-300' 
                                  : 'bg-slate-800 text-slate-300'
                              }`}>
                                {sig.status.replace('_', ' ')} {sig.pipsResult > 0 ? `(+${sig.pipsResult} pts)` : ''}
                              </span>
                            </div>

                            {/* Execution Levels */}
                            <div className="grid grid-cols-3 gap-2 text-center text-xs">
                              <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                                <span className="text-[9px] text-slate-500 font-bold block">ENTRY</span>
                                <span className="font-extrabold text-white text-sm">{sig.entryPrice}</span>
                              </div>
                              <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                                <span className="text-[9px] text-slate-500 font-bold block">STOP LOSS</span>
                                <span className="font-extrabold text-red-400 text-sm">{sig.stopLoss}</span>
                              </div>
                              <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                                <span className="text-[9px] text-slate-500 font-bold block">TP1</span>
                                <span className="font-extrabold text-emerald-400 text-sm">{sig.takeProfit1}</span>
                              </div>
                            </div>

                            {/* Trade Thesis */}
                            <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                              {sig.thesis}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Card Footer Actions */}
                      {accessible && (
                        <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                          <button
                            onClick={() => handleCopySignal(sig)}
                            className="flex-1 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                          >
                            {copiedId === sig.id ? (
                              <>
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy Signal</span>
                              </>
                            )}
                          </button>

                          <button
                            onClick={() => setInspectedSignal(sig)}
                            className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold"
                          >
                            Details
                          </button>
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>

            </div>
          )}

          {/* TAB 2: PERFORMANCE & AUDITED HISTORY */}
          {memberTab === 'performance' && (
            <div className="space-y-8">
              
              <div className="bg-[#111827] p-6 rounded-3xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-black text-white">Monthly Verified Performance Ledger</h2>
                    <p className="text-xs text-slate-400">Tracked equity performance across our institutional setups.</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-black">
                    86.4% YTD Win Rate
                  </span>
                </div>

                {/* Historical Ledger Table */}
                <div className="overflow-x-auto pt-2">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-500 uppercase text-[10px] tracking-wider">
                        <th className="py-3 px-3">Month</th>
                        <th className="py-3 px-3">Total Trades</th>
                        <th className="py-3 px-3">Win Rate</th>
                        <th className="py-3 px-3">Profit Factor</th>
                        <th className="py-3 px-3 text-right">Net Pips Banked</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 font-medium">
                      {monthlyPerformanceHistory.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-900/60">
                          <td className="py-3 px-3 font-bold text-white">{row.month}</td>
                          <td className="py-3 px-3 text-slate-400">{row.trades} trades</td>
                          <td className="py-3 px-3 text-emerald-400 font-bold">{row.winRate}</td>
                          <td className="py-3 px-3 text-cyan-400">{row.profitFactor}</td>
                          <td className="py-3 px-3 text-right font-black text-emerald-400">
                            +{row.pips} pips
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: MEMBERSHIP & BILLING */}
          {memberTab === 'membership' && (
            <div className="space-y-6">
              
              <div className="bg-[#111827] p-8 rounded-3xl border border-slate-800 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-black text-emerald-400 tracking-wider">Active Pass</span>
                    <h2 className="text-2xl font-black text-white mt-0.5">
                      {memberTier.toUpperCase()} Membership
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      Billing Method: M-Pesa STK Recurring • Next billing date: 18 Nov 2026
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        const target = memberTier === 'vip' ? membershipTiers[0] : membershipTiers[2];
                        setUpgradeTargetTier(target);
                        setUpgradeModalOpen(true);
                      }}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase"
                    >
                      Change Plan
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
                  <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-slate-500 font-bold block text-[10px] uppercase">Telegram Alerts</span>
                    <p className="font-bold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Connected: @alex_mwangi_fx</span>
                    </p>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-slate-500 font-bold block text-[10px] uppercase">WhatsApp Dispatch</span>
                    <p className="font-bold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Active: +254 712 345 678</span>
                    </p>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-slate-500 font-bold block text-[10px] uppercase">MT4 / MT5 Auto-Copy</span>
                    <p className="font-bold text-amber-400 flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-amber-400" />
                      <span>{memberTier === 'vip' ? 'Enabled (VIP)' : 'Requires VIP Tier'}</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: RISK SETTINGS */}
          {memberTab === 'settings' && (
            <div className="bg-[#111827] p-8 rounded-3xl border border-slate-800 max-w-2xl space-y-6">
              <div>
                <h2 className="text-xl font-black text-white">Risk & Notification Preferences</h2>
                <p className="text-xs text-slate-400 mt-1">Configure your personal lot sizing and alert channels.</p>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Risk Per Trade (% of Account)</label>
                  <select className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none">
                    <option>0.5% (Conservative / Prop Firm Evaluation)</option>
                    <option>1.0% (Standard Institutional Recommended)</option>
                    <option>2.0% (Aggressive Personal Account)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">Default Account Currency</label>
                  <select className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none">
                    <option>USD ($)</option>
                    <option>KSh (Kenyan Shilling)</option>
                    <option>GBP (£)</option>
                    <option>EUR (€)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => alert("Demo settings saved successfully!")}
                    className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          )}

        </main>
      )}

      {/* ------------------------------------------------------------- */}
      {/* VIEW 3: ADMIN STUDIO DEMONSTRATION                            */}
      {/* ------------------------------------------------------------- */}
      {activeView === 'admin' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          
          {/* Admin Header */}
          <div className="bg-[#111827] rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-black text-red-400 tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
                  <span>Head Analyst & Platform Operator Console</span>
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  Nexa TradeHub Admin Studio
                </h1>
                <p className="text-xs text-slate-400 mt-1">
                  Demonstration of how trading mentors manage signals, monitor MRR, and oversee paid subscribers.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveView('public')}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold"
                >
                  Back to Public Site
                </button>
              </div>
            </div>

            {/* Admin Key Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
              <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-bold">Monthly Recurring Revenue</span>
                <p className="text-2xl font-black text-emerald-400 mt-1">KSh 4,820,000</p>
                <span className="text-[10px] text-emerald-500 font-bold">+14.2% vs last month</span>
              </div>

              <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-bold">Total Active Subscribers</span>
                <p className="text-2xl font-black text-white mt-1">1,120</p>
                <span className="text-[10px] text-slate-400">842 VIP • 278 Pro</span>
              </div>

              <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-bold">Free Community Members</span>
                <p className="text-2xl font-black text-cyan-400 mt-1">722</p>
                <span className="text-[10px] text-slate-400">Nurture funnel pool</span>
              </div>

              <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-bold">Signals Broadcast (MTD)</span>
                <p className="text-2xl font-black text-amber-400 mt-1">{signals.length}</p>
                <span className="text-[10px] text-slate-400">86.4% win rate</span>
              </div>
            </div>
          </div>

          {/* Signal Broadcaster & Publisher */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Signal Dispatcher Form */}
            <div className="lg:col-span-5 bg-[#111827] p-6 sm:p-7 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <h2 className="text-lg font-black text-white">Broadcast New Signal</h2>
                </div>
                <span className="text-[10px] text-slate-500">Instant Telegram / WhatsApp Push</span>
              </div>

              {adminSignalPublished && (
                <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Signal broadcasted successfully! Pushed to active subscriber terminals.</span>
                </div>
              )}

              <form onSubmit={handlePublishSignal} className="space-y-3.5 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Instrument</label>
                    <input
                      type="text"
                      required
                      value={adminInstrument}
                      onChange={e => setAdminInstrument(e.target.value)}
                      placeholder="e.g. XAUUSD, GBPUSD"
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Direction</label>
                    <select
                      value={adminDirection}
                      onChange={e => setAdminDirection(e.target.value as any)}
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold"
                    >
                      <option value="BUY">BUY / LONG</option>
                      <option value="SELL">SELL / SHORT</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Entry Price</label>
                    <input
                      type="text"
                      required
                      value={adminEntry}
                      onChange={e => setAdminEntry(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Stop Loss</label>
                    <input
                      type="text"
                      required
                      value={adminSL}
                      onChange={e => setAdminSL(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-red-400 font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Take Profit 1</label>
                    <input
                      type="text"
                      required
                      value={adminTP1}
                      onChange={e => setAdminTP1(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-emerald-400 font-bold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Take Profit 2</label>
                    <input
                      type="text"
                      required
                      value={adminTP2}
                      onChange={e => setAdminTP2(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-emerald-400 font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Timeframe</label>
                    <select
                      value={adminTimeframe}
                      onChange={e => setAdminTimeframe(e.target.value as any)}
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                    >
                      <option value="M15">M15 (Scalp)</option>
                      <option value="H1">H1 (Intraday)</option>
                      <option value="H4">H4 (Swing)</option>
                      <option value="D1">D1 (Daily)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Tier Access</label>
                    <select
                      value={adminTier}
                      onChange={e => setAdminTier(e.target.value as any)}
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold"
                    >
                      <option value="VIP">VIP Only</option>
                      <option value="Premium">Premium + VIP</option>
                      <option value="Free">Public / Free</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">Setup Thesis & Execution Notes</label>
                  <textarea
                    rows={2}
                    value={adminThesis}
                    onChange={e => setAdminThesis(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  Broadcast Live Signal
                </button>
              </form>
            </div>

            {/* Right: Subscribers Roster Table */}
            <div className="lg:col-span-7 bg-[#111827] p-6 sm:p-7 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                <div>
                  <h2 className="text-lg font-black text-white">Subscriber Management</h2>
                  <p className="text-[11px] text-slate-400">Recent member transactions & renewals.</p>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search subscriber..."
                    value={adminSubSearch}
                    onChange={e => setAdminSubSearch(e.target.value)}
                    className="p-1.5 px-3 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-500 uppercase text-[9px] tracking-wider">
                      <th className="py-2.5 px-2">Member</th>
                      <th className="py-2.5 px-2">Plan</th>
                      <th className="py-2.5 px-2">Payment</th>
                      <th className="py-2.5 px-2">Amount</th>
                      <th className="py-2.5 px-2 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 font-medium text-[11px]">
                    {subscribers.map(sub => (
                      <tr key={sub.id} className="hover:bg-slate-900/60">
                        <td className="py-2.5 px-2">
                          <p className="font-bold text-white">{sub.memberName}</p>
                          <p className="text-[9px] text-slate-400">{sub.email}</p>
                        </td>
                        <td className="py-2.5 px-2">
                          <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${
                            sub.plan === 'VIP' ? 'bg-amber-400/20 text-amber-400' : sub.plan === 'Premium' ? 'bg-emerald-400/20 text-emerald-400' : 'bg-slate-800 text-slate-300'
                          }`}>
                            {sub.plan}
                          </span>
                        </td>
                        <td className="py-2.5 px-2 text-slate-300">{sub.paymentMethod}</td>
                        <td className="py-2.5 px-2 font-bold text-white">
                          {sub.amountKsh > 0 ? `KSh ${sub.amountKsh.toLocaleString()}` : 'Free'}
                        </td>
                        <td className="py-2.5 px-2 text-right">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-black uppercase">
                            {sub.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </main>
      )}

      {/* ------------------------------------------------------------- */}
      {/* DETAILED SIGNAL MODAL                                         */}
      {/* ------------------------------------------------------------- */}
      {inspectedSignal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#111827] rounded-3xl max-w-lg w-full border border-slate-700 shadow-2xl overflow-hidden space-y-5 p-6">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="font-black text-xl text-white">{inspectedSignal.instrument}</span>
                <span className="text-xs text-slate-400">({inspectedSignal.pairDisplay})</span>
              </div>
              <button
                onClick={() => setInspectedSignal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className={`px-3 py-1 rounded-full font-black uppercase tracking-wider ${
                inspectedSignal.direction === 'BUY' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-red-500/20 text-red-400 border border-red-500/40'
              }`}>
                {inspectedSignal.direction} {inspectedSignal.orderType}
              </span>
              <span className="text-slate-400 text-[11px]">Timeframe: {inspectedSignal.timeframe}</span>
            </div>

            {/* Price Targets */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-bold">Entry Price</span>
                <p className="font-black text-white text-base mt-0.5">{inspectedSignal.entryPrice}</p>
              </div>

              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-bold">Stop Loss</span>
                <p className="font-black text-red-400 text-base mt-0.5">{inspectedSignal.stopLoss}</p>
              </div>

              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-bold">Target 1</span>
                <p className="font-black text-emerald-400 text-base mt-0.5">{inspectedSignal.takeProfit1}</p>
              </div>
            </div>

            {inspectedSignal.takeProfit2 && (
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-bold">Take Profit 2 (Extended Runner):</span>
                <span className="text-emerald-400 font-black text-sm">{inspectedSignal.takeProfit2}</span>
              </div>
            )}

            {/* Technical Thesis */}
            <div className="space-y-1.5 text-xs text-slate-300 bg-slate-900/40 p-3.5 rounded-xl border border-slate-800">
              <span className="font-bold text-emerald-400 block">Analysis & Execution Thesis:</span>
              <p className="leading-relaxed">{inspectedSignal.thesis}</p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => handleCopySignal(inspectedSignal)}
                className="flex-1 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                {copiedId === inspectedSignal.id ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Copied Execution String!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Setup Parameters</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* UPGRADE / MEMBERSHIP CHECKOUT SIMULATION MODAL                */}
      {/* ------------------------------------------------------------- */}
      {upgradeModalOpen && upgradeTargetTier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#111827] rounded-3xl max-w-md w-full border border-slate-700 shadow-2xl overflow-hidden p-6 space-y-5">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <span className="text-[10px] uppercase font-black text-emerald-400">Membership Upgrade</span>
                <h3 className="text-xl font-black text-white">{upgradeTargetTier.name}</h3>
              </div>
              <button
                onClick={() => { setUpgradeModalOpen(false); setCheckoutSuccess(false); }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {checkoutSuccess ? (
              <div className="py-6 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-black text-white">Membership Activated!</h4>
                <p className="text-xs text-slate-400">
                  You are now upgraded to the <strong>{upgradeTargetTier.name}</strong>. All signals and features are immediately accessible.
                </p>
                <button
                  onClick={() => {
                    setMemberTier(upgradeTargetTier.id as any);
                    setActiveView('member');
                    setUpgradeModalOpen(false);
                    setCheckoutSuccess(false);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs uppercase mt-2"
                >
                  Return to Dashboard
                </button>
              </div>
            ) : (
              <div className="space-y-4 text-xs">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white">{upgradeTargetTier.name}</p>
                    <p className="text-[11px] text-slate-400">{upgradeTargetTier.billingPeriod}</p>
                  </div>
                  <span className="text-xl font-black text-emerald-400">{upgradeTargetTier.priceDisplay}</span>
                </div>

                <div className="space-y-2">
                  <label className="block text-slate-300 font-bold">Select Payment Channel (Demonstration)</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button type="button" className="p-2.5 rounded-xl border border-emerald-500 bg-emerald-500/10 text-emerald-400 font-bold text-center">
                      M-Pesa STK
                    </button>
                    <button type="button" className="p-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 font-bold text-center">
                      Card (Visa)
                    </button>
                    <button type="button" className="p-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 font-bold text-center">
                      USDT TRC20
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">M-Pesa Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+254 712 345 678"
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                  />
                </div>

                <button
                  onClick={() => setCheckoutSuccess(true)}
                  className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md mt-2"
                >
                  Simulate M-Pesa Checkout ({upgradeTargetTier.priceDisplay})
                </button>

                <p className="text-[10px] text-slate-500 text-center">
                  🔒 Interactive demonstration. No actual funds are charged.
                </p>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* NOTIFICATIONS DRAWER                                          */}
      {/* ------------------------------------------------------------- */}
      {notifDrawerOpen && (
        <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-80 bg-[#111827] border-l border-slate-800 shadow-2xl p-6 space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="font-extrabold text-white text-sm">Notifications</span>
            <button onClick={() => setNotifDrawerOpen(false)} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2.5 text-xs">
            {notifications.map(n => (
              <div key={n.id} className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <p className="font-bold text-white">{n.title}</p>
                <p className="text-[10px] text-slate-400">{n.time}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* DISCREET FOOTER & NEXA WEB STUDIO PROMOTION                   */}
      {/* ------------------------------------------------------------- */}
      <footer className="bg-[#070A12] border-t border-slate-800/80 py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Pitch Banner */}
          <div className="bg-[#111827] p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="font-black text-white text-lg sm:text-xl">
                Want a platform like this for your trading business? Contact Nexa Web Studio.
              </h3>
              <p className="text-slate-400 text-xs">
                We engineer bespoke trading signals software, Telegram bots, M-Pesa automated subscription funnels, and member portals.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={siteConfig.getWhatsAppLink("Hello Nexa Web Studio, I want to discuss building a custom trading signals platform like Nexa TradeHub.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all"
              >
                Inquire on WhatsApp
              </a>

              <Link
                to="/portfolio"
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Explore Other Demos
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500">
            <p>
              Platform demonstration developed by Nexa Web Studio.
            </p>
            <p>
              All sample signals and statistics shown are illustrative mock data for demonstration purposes only.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
};
