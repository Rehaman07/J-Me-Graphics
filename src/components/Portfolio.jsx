import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, ExternalLink, ArrowRight, Eye, TrendingUp, Layers, Check } from 'lucide-react'

export default function Portfolio({ onOpenAudit }) {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      category: 'brand',
      title: 'Aura Fintech Brand Identity',
      client: 'Aura Financial',
      metric: '+480% Brand Awareness',
      tag: 'Brand Architecture & Design',
      color: 'from-brand-green/20 to-emerald-900/40',
      borderColor: 'border-brand-green/30',
      badgeBg: 'bg-brand-green/20 text-brand-green',
      svgVisual: (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
          <rect width="400" height="240" fill="#0D131F" />
          <circle cx="200" cy="120" r="80" fill="none" stroke="#10B981" strokeWidth="4" opacity="0.6" />
          <circle cx="200" cy="120" r="50" fill="none" stroke="#34D399" strokeWidth="2" />
          <text x="200" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="bold" fontFamily="sans-serif">
            AURA FINTECH
          </text>
        </svg>
      )
    },
    {
      id: 2,
      category: 'ads',
      title: 'Verve E-Commerce Meta Ad Funnel',
      client: 'Verve Apparel',
      metric: '6.2x ROAS Scaling',
      tag: 'Paid Performance Funnel',
      color: 'from-brand-orange/20 to-orange-900/40',
      borderColor: 'border-brand-orange/30',
      badgeBg: 'bg-brand-orange/20 text-brand-orange',
      svgVisual: (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
          <rect width="400" height="240" fill="#140D09" />
          <path d="M 50 180 Q 150 140 250 80 T 350 40" fill="none" stroke="#FF6B00" strokeWidth="6" />
          <circle cx="350" cy="40" r="10" fill="#FF6B00" />
          <text x="200" y="210" textAnchor="middle" fill="#FF8C38" fontSize="14" fontWeight="bold">
            VERVE AD REVENUE BOOST
          </text>
        </svg>
      )
    },
    {
      id: 3,
      category: 'web',
      title: 'Neo-Tech SaaS Web Experience',
      client: 'Neo-Tech Inc',
      metric: '42.8% Conversion Rate',
      tag: 'UI/UX & Interactive Web',
      color: 'from-brand-blue/20 to-blue-900/40',
      borderColor: 'border-brand-blue/30',
      badgeBg: 'bg-brand-blue/20 text-brand-blue',
      svgVisual: (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
          <rect width="400" height="240" fill="#090E1A" />
          <rect x="50" y="40" width="300" height="160" rx="12" fill="none" stroke="#2563EB" strokeWidth="3" />
          <line x1="50" y1="80" x2="350" y2="80" stroke="#2563EB" strokeWidth="2" />
          <circle cx="75" cy="60" r="5" fill="#FF4D4D" />
          <circle cx="95" cy="60" r="5" fill="#FFB800" />
          <circle cx="115" cy="60" r="5" fill="#00E676" />
        </svg>
      )
    },
    {
      id: 4,
      category: 'seo',
      title: 'Metra Organic Content Engine',
      client: 'Metra Media',
      metric: '1.2M Organic Visitors',
      tag: 'SEO & Viral Reach',
      color: 'from-emerald-900/30 to-brand-green/20',
      borderColor: 'border-brand-green/30',
      badgeBg: 'bg-brand-green/20 text-brand-green',
      svgVisual: (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
          <rect width="400" height="240" fill="#0B1511" />
          <path d="M 40 200 L 120 150 L 200 170 L 280 80 L 360 40" fill="none" stroke="#10B981" strokeWidth="4" />
          <circle cx="360" cy="40" r="8" fill="#10B981" />
        </svg>
      )
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-orange">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Case Studies & Graphics</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Our Graphic Lab & <span className="text-gradient-orange">Growth Showcase</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Take a look at how J'Me Graphics elevates brands with custom visual architecture and high-converting marketing campaigns.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'brand', label: 'Brand Identity' },
            { id: 'ads', label: 'Paid Ad Creatives' },
            { id: 'web', label: 'Web Experiences' },
            { id: 'seo', label: 'Organic SEO' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                filter === item.id
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`glass-panel rounded-3xl overflow-hidden border ${project.borderColor} group hover:border-white/30 transition-all`}
              >
                {/* Visual Area */}
                <div className={`h-56 relative overflow-hidden bg-gradient-to-tr ${project.color} flex items-center justify-center`}>
                  {project.svgVisual}
                  
                  {/* Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-extrabold ${project.badgeBg}`}>
                    {project.metric}
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-6 space-y-4">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {project.tag} • {project.client}
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h3>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={onOpenAudit}
                      className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-brand-orange transition-colors"
                    >
                      <span>View Campaign Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <span className="text-xs text-slate-500 font-semibold">Verified Client Result</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
