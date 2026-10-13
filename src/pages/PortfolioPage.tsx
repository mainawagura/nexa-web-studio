import React, { useState, useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Search, ArrowRight, ArrowUpRight, Sparkles, ShieldCheck, X } from 'lucide-react';
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
    <div className="py-12 md:py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-nexa-navy/5 text-nexa-navy border border-nexa-navy/10 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-nexa-lime" />
            <span>Interactive Industry Showcases</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-nexa-navy tracking-tight">
            Explore Our Website Demos
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Discover what is possible for your enterprise. Explore working industry websites, test interactive calculators, menus, and forms, and request a customized version for your business.
          </p>
        </div>

        {/* Search Field & Category Filters */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-card space-y-6">
          
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by industry, capability, or keyword (e.g. quotation, booking, properties, menu)..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-nexa-lime shadow-sm text-slate-800 placeholder-slate-400 transition-all"
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
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === category
                    ? 'bg-nexa-navy text-white shadow-md scale-105'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Active Filter Counter & Quick Reset */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
            <span>
              Showing <strong>{filteredProjects.length}</strong> of {projectsData.length} industry website demonstrations
            </span>
            {(selectedCategory !== "All Projects" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("All Projects");
                  setSearchQuery("");
                }}
                className="text-emerald-700 font-bold hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>

        </div>

        {/* Informational Transparency Ribbon */}
        <div className="bg-slate-900 text-slate-300 p-4 sm:p-5 rounded-2xl flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-nexa-lime shrink-0" />
            <span>
              <strong>Demonstration Standard:</strong> Every project below is a fully functional, clickable website created by Nexa Web Studio to demonstrate our design caliber.
            </span>
          </div>
          <span className="font-bold text-nexa-lime hidden sm:inline">Nexa Web Studio</span>
        </div>

        {/* Responsive Projects Grid: 3 cols desktop, 2 tablets, 1 mobile */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-card hover:shadow-elevated transition-all flex flex-col group"
              >
                {/* Visual Preview Screenshot / Mockup */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={project.previewImage}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80") {
                        target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80";
                      }
                    }}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-white/95 text-slate-900 shadow-sm">
                      {project.categoryDisplay || project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-950/90 text-nexa-lime">
                      Live Showcase
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-xl font-black text-nexa-navy group-hover:text-emerald-800 transition-colors">
                      <Link to={project.route}>{project.name}</Link>
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-1">{project.industry}</p>

                    <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Business Key Capabilities */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.keyCapabilities.map((capability, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-medium flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-nexa-lime"></span>
                          <span>{capability}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dual Actions: "Explore Demo" & "Request a Similar Website" */}
                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      to={project.route}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-nexa-navy hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      <span>Explore Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => openRequestModal(project.name, project.category)}
                      className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-3 rounded-xl border border-slate-200 hover:border-nexa-navy text-slate-700 hover:text-nexa-navy text-xs font-bold transition-colors"
                    >
                      <Sparkles className="w-3 h-3 text-emerald-600" />
                      <span>Request Similar</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-14 rounded-3xl border border-slate-200 text-center space-y-3">
            <h3 className="text-base font-bold text-nexa-navy">No Showcases Matched "{searchQuery}"</h3>
            <p className="text-xs text-slate-500">Try searching for other industries or reset the filters.</p>
            <button
              onClick={() => { setSelectedCategory("All Projects"); setSearchQuery(""); }}
              className="px-5 py-2.5 bg-nexa-navy text-white rounded-xl text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
