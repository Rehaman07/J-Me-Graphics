import React from 'react'
import { motion } from 'framer-motion'
import { Search, Compass, Rocket, TrendingUp, Sparkles, Check } from 'lucide-react'

export default function ProcessTimeline() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Growth Audit',
      subtitle: 'Deep-dive into brand DNA',
      icon: Search,
      color: 'brand-green',
      glow: 'glow-green',
      description: 'We analyze your target market, past campaign data, organic search positioning, and competitor strategies to pinpoint exact growth leaks.'
    },
    {
      num: '02',
      title: 'Graphic & Creative Sprint',
      subtitle: 'Designing conversion assets',
      icon: Compass,
      color: 'brand-orange',
      glow: 'glow-orange',
      description: 'Our design team crafts high-click graphic ads, landing page visual layouts, and content hooks engineered to grab immediate scroll attention.'
    },
    {
      num: '03',
      title: 'Omnichannel Growth Launch',
      subtitle: 'Deploying SEO & PPC Funnels',
      icon: Rocket,
      color: 'brand-blue',
      glow: 'glow-blue',
      description: 'We ignite your campaigns across Google, Meta, TikTok, and search engines with real-time tracking pixels and retargeting sequences.'
    },
    {
      num: '04',
      title: 'Scale & Maximize ROAS',
      subtitle: 'Continuous AI optimization',
      icon: TrendingUp,
      color: 'brand-green',
      glow: 'glow-green',
      description: 'We relentlessly test ad creative variations, scale winning audience segments, and deliver weekly transparent ROI metric dashboards.'
    }
  ]

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-brand-dark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-blue">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The J'Me Growth Playbook</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Our 4-Step <span className="text-gradient-blue">Success Process</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            A battle-tested methodology designed to move your brand from baseline impressions to high-margin revenue fast.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-panel rounded-3xl p-6 border border-white/10 relative group hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-extrabold text-3xl text-slate-600 group-hover:text-white transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    {step.subtitle}
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6 flex items-center gap-2 text-xs font-semibold text-brand-green">
                  <Check className="w-4 h-4" />
                  <span>Guaranteed Execution</span>
                </div>
              </motion.div>
            )
          })}

        </div>

      </div>
    </section>
  )
}
