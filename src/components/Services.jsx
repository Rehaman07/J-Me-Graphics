import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Search, Palette, Rocket, CheckCircle2, ArrowRight, BarChart3, Layers, Zap } from 'lucide-react'

export default function Services({ onOpenAudit }) {
  const [activeTab, setActiveTab] = useState(0)

  const pillars = [
    {
      id: 'green',
      leafIcon: '🌿',
      tag: 'Organic & Strategy',
      title: 'SEO & Viral Social Engine',
      accentColor: 'brand-green',
      borderColor: 'border-brand-green/40',
      bgGlow: 'from-brand-green/10 to-transparent',
      textColor: 'text-brand-green',
      icon: Search,
      description: 'Dominating search results and building unstoppable organic brand authority that brings daily high-intent traffic without paid ads.',
      features: [
        'Data-Driven Technical & On-Page SEO',
        'Viral Social Media Reel & Short Strategy',
        'Authority Content Marketing Engine',
        'Local SEO & Multi-Platform Dominance'
      ],
      stat: '+420%',
      statLabel: 'Organic Traffic Lift in 90 Days',
      svgPattern: (
        <svg viewBox="0 0 200 120" className="w-full h-32">
          <path d="M 10 100 Q 50 80 90 40 T 170 10" fill="none" stroke="#10B981" strokeWidth="4" strokeDasharray="6 6" />
          <circle cx="170" cy="10" r="8" fill="#10B981" />
          <rect x="20" y="60" width="30" height="40" rx="4" fill="#10B981" opacity="0.3" />
          <rect x="70" y="40" width="30" height="60" rx="4" fill="#10B981" opacity="0.6" />
          <rect x="120" y="20" width="30" height="80" rx="4" fill="#10B981" opacity="0.9" />
        </svg>
      )
    },
    {
      id: 'orange',
      leafIcon: '🔥',
      tag: 'Creative Visuals',
      title: 'High-Convert Graphic Design',
      accentColor: 'brand-orange',
      borderColor: 'border-brand-orange/40',
      bgGlow: 'from-brand-orange/10 to-transparent',
      textColor: 'text-brand-orange',
      icon: Palette,
      description: 'Visual aesthetics engineered for conversion. We craft bold brand identities, ad creatives, and web experiences that captivate attention.',
      features: [
        'Brand Identity & Logo Architecture',
        'High-Click Ad Creatives (Meta/TikTok/Google)',
        'UI/UX Landing Page & Web Experience',
        'Motion Graphics & Animated SVG Assets'
      ],
      stat: '3.8x',
      statLabel: 'Higher Ad Click-Through Rate',
      svgPattern: (
        <svg viewBox="0 0 200 120" className="w-full h-32">
          <polygon points="30,90 100,20 170,90" fill="none" stroke="#FF6B00" strokeWidth="4" />
          <circle cx="100" cy="20" r="10" fill="#FF6B00" />
          <circle cx="30" cy="90" r="6" fill="#FF6B00" opacity="0.6" />
          <circle cx="170" cy="90" r="6" fill="#FF6B00" opacity="0.6" />
          <path d="M 60 60 L 140 60" stroke="#FF6B00" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      )
    },
    {
      id: 'blue',
      leafIcon: '⚡',
      tag: 'Performance Ads',
      title: 'Paid Campaigns & Lead Gen',
      accentColor: 'brand-blue',
      borderColor: 'border-brand-blue/40',
      bgGlow: 'from-brand-blue/10 to-transparent',
      textColor: 'text-brand-blue',
      icon: Rocket,
      description: 'Precision targeting, retargeting funnels, and data analytics that convert every ad dollar into predictable revenue growth.',
      features: [
        'Meta, TikTok & Google PPC Ads Management',
        'Conversion Funnel Architecture & CRO',
        'A/B Split Testing & Audience Scaling',
        'Real-Time Analytics & ROI Reporting'
      ],
      stat: '5.4x',
      statLabel: 'Average Return On Ad Spend (ROAS)',
      svgPattern: (
        <svg viewBox="0 0 200 120" className="w-full h-32">
          <circle cx="100" cy="60" r="50" fill="none" stroke="#2563EB" strokeWidth="3" opacity="0.4" />
          <circle cx="100" cy="60" r="30" fill="none" stroke="#2563EB" strokeWidth="3" opacity="0.7" />
          <circle cx="100" cy="60" r="10" fill="#2563EB" />
          <path d="M 100 0 L 100 120 M 40 60 L 160 60" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      )
    }
  ]

  const activePillar = pillars[activeTab]

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-orange">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Digital Marketing Pillars</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Designed for <span className="text-gradient-brand">Hyper-Growth</span> Startups
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            We align three foundational pillars of digital growth—Organic Reach, Graphic Design, and Paid Performance—into a seamless growth engine.
          </p>
        </div>

        {/* 3 Pillar Selection Tabs */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            const isSelected = activeTab === idx
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full md:w-1/3 text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                  isSelected
                    ? `bg-white/10 ${pillar.borderColor} shadow-xl backdrop-blur-lg scale-[1.02]`
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{pillar.leafIcon}</div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold tracking-wider">
                      {pillar.tag}
                    </div>
                    <div className="font-heading font-bold text-white text-base sm:text-lg group-hover:text-white">
                      {pillar.title}
                    </div>
                  </div>
                </div>
                <div className={`p-2 rounded-xl bg-white/5 ${isSelected ? pillar.textColor : 'text-slate-400'}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </button>
            )
          })}
        </div>

        {/* Active Pillar Detailed View */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`glass-panel rounded-3xl p-6 sm:p-10 border ${activePillar.borderColor} relative overflow-hidden`}
            >
              {/* Top ambient glow */}
              <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-b ${activePillar.bgGlow} blur-2xl pointer-events-none transform-gpu`} />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Content Left */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 text-xs font-bold text-white">
                    <span>{activePillar.leafIcon}</span>
                    <span>{activePillar.tag}</span>
                  </div>

                  <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                    {activePillar.title}
                  </h3>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {activePillar.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {activePillar.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                        <CheckCircle2 className={`w-5 h-5 ${activePillar.textColor} shrink-0`} />
                        <span className="text-sm font-medium text-slate-200">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      onClick={onOpenAudit}
                      className={`w-full sm:w-auto px-6 py-3.5 rounded-full font-heading font-bold text-sm text-white bg-gradient-to-r from-brand-orange to-brand-blue shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2`}
                    >
                      <span>Deploy This Pillar</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content Right Visual Stat */}
                <div className="lg:col-span-5 bg-white/5 rounded-2xl p-6 border border-white/10 text-center relative overflow-hidden">
                  <div className="text-xs uppercase tracking-widest text-slate-400 font-medium">Proven Impact Metric</div>
                  <div className={`text-6xl font-heading font-extrabold ${activePillar.textColor} my-3`}>
                    {activePillar.stat}
                  </div>
                  <div className="text-sm font-semibold text-slate-200 mb-6">
                    {activePillar.statLabel}
                  </div>

                  {/* SVG Animated Pattern */}
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    {activePillar.svgPattern}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
