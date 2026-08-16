import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, IndianRupee, Users, Target, ArrowRight, TrendingUp, Sparkles } from 'lucide-react'

export default function RoiCalculator({ onOpenAudit }) {
  const [budget, setBudget] = useState(25000)
  const [audience, setAudience] = useState(100000)
  const [goalType, setGoalType] = useState('leads') // 'leads', 'sales', 'awareness'

  // Dynamic calculations in Rupee
  const multiplier = goalType === 'sales' ? 4.8 : goalType === 'leads' ? 4.2 : 3.5
  const projectedRevenue = Math.round(budget * multiplier)
  const projectedImpressions = Math.round((budget / 100) * 1250)
  const projectedConversions = goalType === 'sales' 
    ? Math.round(budget * 0.008) 
    : Math.round(budget * 0.012)

  return (
    <section id="roi-calculator" className="py-24 relative overflow-hidden bg-brand-dark/50">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-blue/10 rounded-full blur-[80px] pointer-events-none transform-gpu" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-green">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Growth Engine</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Calculate Your <span className="text-gradient-green">Estimated ROI</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Adjust the sliders below to see real-time projections of what J'Me Graphics' synchronized visual design and ad funnels can deliver for your business.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Left */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 space-y-8">
            
            {/* Goal Type Selector */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                1. Select Primary Growth Objective
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'leads', label: 'B2B Leads', icon: Users },
                  { id: 'sales', label: 'E-Comm Sales', icon: IndianRupee },
                  { id: 'awareness', label: 'Brand Viral', icon: Target },
                ].map((item) => {
                  const Icon = item.icon
                  const active = goalType === item.id
                  return (
                    <button
                      key={item.id}
                      onClick={() => setGoalType(item.id)}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all flex flex-col items-center gap-2 ${
                        active
                          ? 'bg-brand-green/20 border-brand-green text-brand-green shadow-lg'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Monthly Budget Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  2. Monthly Marketing Budget (₹)
                </label>
                <span className="text-xl font-heading font-extrabold text-white">
                  ₹{budget.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="500000"
                step="5000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-green"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-semibold">
                <span>₹10,000</span>
                <span>₹2,50,000</span>
                <span>₹5,00,000+</span>
              </div>
            </div>

            {/* Target Audience Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  3. Target Audience Size (Monthly Reach)
                </label>
                <span className="text-xl font-heading font-extrabold text-white">
                  {(audience / 1000).toFixed(0)}k Reach
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="1000000"
                step="10000"
                value={audience}
                onChange={(e) => setAudience(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-orange"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-semibold">
                <span>10k</span>
                <span>500k</span>
                <span>1M+</span>
              </div>
            </div>

          </div>

          {/* Results Output Right */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-brand-green/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Live ROI Forecast
                </span>
                <span className="px-3 py-1 rounded-full bg-brand-green/20 border border-brand-green/40 text-xs font-extrabold text-brand-green flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {multiplier.toFixed(1)}x ROAS Target
                </span>
              </div>

              {/* Projected Revenue */}
              <div className="text-center py-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs text-slate-400 uppercase font-semibold">Estimated Monthly Revenue Boost</div>
                <motion.div
                  key={projectedRevenue}
                  initial={{ scale: 0.95, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-4xl sm:text-5xl font-heading font-extrabold text-gradient-green my-2"
                >
                  ₹{projectedRevenue.toLocaleString('en-IN')}
                </motion.div>
                <div className="text-[11px] text-slate-400">Based on J'Me historical client benchmarks</div>
              </div>

              {/* Grid 2 Metric Output */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs text-slate-400">Monthly Impressions</div>
                  <div className="text-2xl font-heading font-extrabold text-white mt-1">
                    {projectedImpressions.toLocaleString('en-IN')}+
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs text-slate-400">High-Intent Leads/Sales</div>
                  <div className="text-2xl font-heading font-extrabold text-brand-orange mt-1">
                    {projectedConversions.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* Lock in CTA */}
              <button
                onClick={onOpenAudit}
                className="w-full py-4 rounded-2xl font-heading font-bold text-base text-white bg-gradient-to-r from-brand-green via-brand-orange to-brand-blue shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Lock In This Growth Strategy</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
