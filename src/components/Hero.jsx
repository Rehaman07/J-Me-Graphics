import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, TrendingUp, Sparkles, Zap, ArrowRight, Play, Eye, Target, Award } from 'lucide-react'

export default function Hero({ onOpenAudit }) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Ambient background glow gradients - GPU accelerated */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[280px] bg-gradient-to-r from-brand-green/15 via-brand-orange/15 to-brand-blue/15 blur-[90px] rounded-full pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Startup Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs sm:text-sm font-semibold"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              <span className="text-slate-300">Next-Gen Digital Marketing Startup</span>
              <span className="text-slate-500">|</span>
              <span className="text-brand-orange flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Creative & ROI First
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] text-white"
            >
              We Turn Impressions into{' '}
              <span className="text-gradient-orange underline decoration-brand-orange/40 underline-offset-8">
                Impact
              </span>{' '}
              & Clicks into{' '}
              <span className="text-gradient-green">
                Customers
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0"
            >
              J'Me Graphics is your strategic marketing engine. We combine high-converting graphic visual design, performance ad funnels, and organic viral reach to blow past your revenue goals.
            </motion.p>

            {/* Interactive Metrics Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/5 border border-brand-green/30 backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl bg-brand-green/20 flex items-center justify-center text-brand-green">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-heading font-extrabold text-white">+340%</div>
                  <div className="text-[11px] text-slate-400 font-medium">Avg Client ROI</div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/5 border border-brand-orange/30 backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                  <Eye className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-heading font-extrabold text-white">10M+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Monthly Reach</div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/5 border border-brand-blue/30 backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                  <Target className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-heading font-extrabold text-white">99.2%</div>
                  <div className="text-[11px] text-slate-400 font-medium">Retention Rate</div>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-heading font-bold text-base text-white bg-gradient-to-r from-brand-orange via-brand-orange to-brand-blue shadow-xl shadow-brand-orange/25 hover:shadow-brand-orange/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Launch Your Campaign</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-heading font-semibold text-base text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Explore Services</span>
              </a>
            </motion.div>
          </div>

          {/* Right Floating Interactive Dashboard Visual */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Decorative logo icon background float */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-brand-green/20 rounded-full blur-2xl animate-pulse-glow pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-orange/20 rounded-full blur-2xl animate-pulse-glow pointer-events-none" />

              {/* Glass Card Dashboard */}
              <div className="glass-panel rounded-3xl p-6 border border-white/15 shadow-2xl relative overflow-hidden group">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                    <div>
                      <div className="text-sm font-heading font-bold text-white">J'Me Live Growth Analytics</div>
                      <div className="text-xs text-brand-green flex items-center gap-1 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
                        Campaign Engine Active
                      </div>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-[11px] font-bold text-brand-orange">
                    Q3 Target: 5.2x
                  </div>
                </div>

                {/* Animated Graph Visual */}
                <div className="py-6 space-y-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-medium">Monthly Revenue Generated</div>
                      <div className="text-3xl font-heading font-extrabold text-white mt-1">₹2,84,950</div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center text-xs font-bold text-brand-green bg-brand-green/10 px-2.5 py-1 rounded-lg">
                        +48.6% vs Last Month
                      </span>
                    </div>
                  </div>

                  {/* SVG Animated Chart Line */}
                  <div className="h-32 w-full pt-2 relative">
                    <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#10B981" />
                          <stop offset="50%" stopColor="#FF6B00" />
                          <stop offset="100%" stopColor="#2563EB" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0,80 Q 50,70 100,45 T 200,30 T 300,10 L 300,100 L 0,100 Z"
                        fill="url(#chartGradient)"
                      />
                      <motion.path
                        d="M 0,80 Q 50,70 100,45 T 200,30 T 300,10"
                        fill="none"
                        stroke="url(#lineGrad)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                      <circle cx="300" cy="10" r="6" fill="#2563EB" className="animate-ping" />
                      <circle cx="300" cy="10" r="4" fill="#FFFFFF" />
                    </svg>
                  </div>

                  {/* 3 Pill Mini Stats */}
                  <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-[10px] text-slate-400">CTR Rate</div>
                      <div className="text-sm font-bold text-brand-green">8.42%</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-[10px] text-slate-400">ROAS</div>
                      <div className="text-sm font-bold text-brand-orange">4.8x</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-[10px] text-slate-400">Cost/Lead</div>
                      <div className="text-sm font-bold text-brand-blue">₹249</div>
                    </div>
                  </div>
                </div>

                {/* Bottom live indicator */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>⚡ Graphic Design & Funnels Synchronized</span>
                  <span className="text-white font-medium">Live Feed</span>
                </div>
              </div>

              {/* Floating Leaf Icon Accent Badges */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 bg-brand-dark/90 border border-brand-green/40 p-3 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md"
              >
                <div className="w-8 h-8 rounded-xl bg-brand-green/20 flex items-center justify-center text-brand-green font-bold">
                  🌿
                </div>
                <div>
                  <div className="text-xs font-bold text-white">SEO & Organic</div>
                  <div className="text-[10px] text-brand-green font-medium">Rank #1 Target</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 bg-brand-dark/90 border border-brand-orange/40 p-3 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md"
              >
                <div className="w-8 h-8 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold">
                  🔥
                </div>
                <div>
                  <div className="text-xs font-bold text-white">High-Convert Graphics</div>
                  <div className="text-[10px] text-brand-orange font-medium">100% Custom Design</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Marquee Banner */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Empowering Modern Startups, E-Commerce Brands & Growth Leaders
          </p>
          <div className="overflow-hidden relative w-full">
            <div className="flex space-x-12 whitespace-nowrap animate-marquee">
              {['AURA LABS', 'VERVE E-COMMERCE', 'NEO-TECH SAAS', 'FINIX GLOBAL', 'HYPER-GROWTH', 'METRA MEDIA', 'NEXUS BRAND', 'VORTEX DIGITAL'].map((brand, i) => (
                <div key={i} className="inline-flex items-center gap-3 text-slate-400 font-heading font-extrabold text-lg hover:text-white transition-colors">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-green via-brand-orange to-brand-blue" />
                  <span>{brand}</span>
                </div>
              ))}
              {['AURA LABS', 'VERVE E-COMMERCE', 'NEO-TECH SAAS', 'FINIX GLOBAL', 'HYPER-GROWTH', 'METRA MEDIA', 'NEXUS BRAND', 'VORTEX DIGITAL'].map((brand, i) => (
                <div key={`dup-${i}`} className="inline-flex items-center gap-3 text-slate-400 font-heading font-extrabold text-lg hover:text-white transition-colors">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-green via-brand-orange to-brand-blue" />
                  <span>{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
