import React, { useState, useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Search, Filter, ArrowRight, Sparkles, ExternalLink, ShieldCheck, X, CheckCircle2 } from 'lucide-react';
import { projectsData, categoriesList } from '../data/projectsData';
import { ProjectCategory } from '../types/portfolio';
import { MainLayoutContext } from '../layouts/MainLayout';

export const PortfolioPage: React.FC = () => {
  const { openRequestModal } = useOutletContext<MainLayoutContext>();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All Projects");
  const [searchQuery, setSearchQuery] = useState("");

  // Instant reactive search and category filtering
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesCategory = 
        selectedCategory === "All Projects" || project.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        project.name.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.industry.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.keyCapabilities.some(c => c.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-12 md:py-20 bg-slate-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-nexa-navy/5 text-nexa-navy border border-nexa-navy/10 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-nexa-teal" />
            <span>Interactive Industry Showcases</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-nexa-navy tracking-tight">
            Explore Our Business Website Demos
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Discover what is possible for your business. Explore our working websites, test their features, and request a custom website tailored specifically for your brand.
          </p>
        </div>

        {/* Search Field & Category Filters */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card space-y-6">
          
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by industry, capability, or keyword (e.g. quotation, booking, properties, menu)..."
              className="w-full pl-12 pr-10 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-nexa-teal shadow-sm text-slate-800 placeholder-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-md text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categoriesList.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-nexa-navy text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Active Filter Counter & Quick Reset */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span>
              Showing <strong>{filteredProjects.length}</strong> of {projectsData.length} industry website models
            </span>
            {(selectedCategory !== "All Projects" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("All Projects");
                  setSearchQuery("");
                }}
                className="text-nexa-teal font-semibold hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>

        </div>

        {/* Executive Client Model Notice */}
        <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 flex items-center justify-between gap-3 text-xs text-teal-800">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-nexa-teal shrink-0" />
            <span>
              <strong>Fully Functional Client Models:</strong> Every website showcased below features real page navigation, interactive forms, calculators, and responsive layouts ready for your brand.
            </span>
          </div>
          <span className="font-semibold text-nexa-teal hidden sm:inline">Nexa Web Studio</span>
        </div>

        {/* Responsive Projects Grid: 3 cols desktop, 2 tablets, 1 mobile */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card hover:shadow-elevated transition-all flex flex-col group"
              >
                {/* Visual Preview Screenshot / Mockup */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={project.previewImage}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 text-slate-800 shadow-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-slate-950/85 text-teal-300 backdrop-blur-sm border border-teal-500/20">
                      Live Showcase
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div>
                    <h3 className="text-lg font-bold text-nexa-navy group-hover:text-nexa-teal transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">{project.industry}</p>
                  </div>

                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed flex-1">
                    {project.shortDescription}
                  </p>

                  {/* Business Key Capabilities (NO code languages) */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.keyCapabilities.map((capability, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium flex items-center gap-1"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-nexa-teal"></span>
                        {capability}
                      </span>
                    ))}
                  </div>

                  {/* Action CTAs: Preview Demo & Request Similar */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      to={project.route}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-nexa-navy hover:bg-nexa-navy-light text-white text-xs font-semibold shadow-sm transition-colors"
                    >
                      <span>Explore Live Site</span>
                      <ArrowRight className="w-3.5 h-3.5 text-nexa-teal" />
                    </Link>

                    <button
                      onClick={() => openRequestModal(project.name, project.category)}
                      className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-lg border border-slate-200 hover:border-nexa-teal text-slate-700 hover:text-nexa-teal text-xs font-semibold transition-colors"
                    >
                      <Sparkles className="w-3 h-3 text-nexa-teal" />
                      <span>Request Similar</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-nexa-navy">No Demos Matched Your Search</h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto">
              We couldn't find any demo matching "{searchQuery}". Try selecting another category or clear the filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All Projects");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-lg bg-nexa-navy text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
