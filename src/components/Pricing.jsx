import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Sparkles, Zap, ArrowRight, ShieldCheck } from 'lucide-react'

export default function Pricing({ onOpenAudit }) {
  const [billingType, setBillingType] = useState('monthly') // 'monthly' | 'sprint'

  const plans = [
    {
      name: 'Startup Rocket',
      description: 'Ideal for early-stage startups needing rapid visual branding and first paid traffic traction.',
      priceMonthly: 14999,
      priceSprint: 24999,
      badge: 'Core Essentials',
      accent: 'border-white/10',
      btnBg: 'bg-white/10 text-white hover:bg-white/20',
      features: [
        '10 Custom High-Convert Ad Creatives / mo',
        'Foundational Technical & On-Page SEO',
        '1 Paid Ad Channel (Meta or Google)',
        'Social Media Graphic Banners & Icons',
        'Bi-Weekly Strategy & ROI Reports'
      ]
    },
    {
      name: 'Scale Acceleration',
      description: 'Our flagship growth engine. Complete synchronized graphic design, SEO, and multi-channel ads.',
      priceMonthly: 34999,
      priceSprint: 49999,
      badge: '🔥 Most Popular',
      popular: true,
      accent: 'border-brand-orange/50 shadow-2xl shadow-brand-orange/10',
      btnBg: 'bg-gradient-to-r from-brand-orange to-brand-blue text-white shadow-lg hover:scale-105',
      features: [
        'Unlimited Graphic Design Requests',
        'Complete Organic SEO & Content Engine',
        'Meta + Google PPC Campaigns',
        'High-Converting Landing Page UI Design',
        'Dedicated Creative Manager & Slack Channel',
        'Weekly Transparent ROI Dashboard'
      ]
    },
    {
      name: 'Enterprise Dominance',
      description: 'Aggressive omnichannel growth for high-scale brands demanding market leadership.',
      priceMonthly: 74999,
      priceSprint: 99999,
      badge: 'Full Omnichannel',
      accent: 'border-brand-green/40',
      btnBg: 'bg-brand-green text-black font-extrabold hover:bg-brand-green/90',
      features: [
        'Dedicated Creative & Growth Pod (3 Specialists)',
        'Full Motion Graphics & Animated Video Assets',
        'Omnichannel Ads (Meta, Google, TikTok, LinkedIn)',
        'Conversion Funnel Architecture & CRO',
        'Daily Real-Time ROI Analytics',
        'Guaranteed Growth SLA Benchmark'
      ]
    }
  ]

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-brand-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-orange">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Growth Pricing</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Flexible Packages for <span className="text-gradient-orange">Every Stage</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            No long-term lock-in contracts. Transparent monthly retainers or high-impact 30-day growth sprints.
          </p>

          {/* Toggle Switch */}
          <div className="pt-6 flex items-center justify-center">
            <div className="bg-white/5 p-1 rounded-full border border-white/10 flex items-center gap-1">
              <button
                onClick={() => setBillingType('monthly')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  billingType === 'monthly'
                    ? 'bg-brand-orange text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly Retainer
              </button>
              <button
                onClick={() => setBillingType('sprint')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  billingType === 'sprint'
                    ? 'bg-brand-orange text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                30-Day Growth Sprint
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const price = billingType === 'monthly' ? plan.priceMonthly : plan.priceSprint
            return (
              <motion.div
                key={plan.name}
                whileHover={{ y: -6 }}
                className={`glass-panel rounded-3xl p-8 border ${plan.accent} flex flex-col justify-between relative overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-brand-orange to-brand-orange/80 text-white text-[11px] font-extrabold uppercase px-4 py-1.5 rounded-bl-2xl">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs font-extrabold text-slate-300 mb-4">
                    {plan.badge}
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">{plan.description}</p>

                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
                      ₹{price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-slate-400 text-sm font-semibold">
                      /{billingType === 'monthly' ? 'mo' : 'sprint'}
                    </span>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-white/10 mb-8">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                        <Check className="w-4 h-4 text-brand-green shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenAudit}
                  className={`w-full py-4 rounded-2xl font-heading font-bold text-sm transition-all flex items-center justify-center gap-2 ${plan.btnBg}`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-green" />
          <span>100% Satisfaction Guarantee & Transparent Weekly Performance Metrics</span>
        </div>

      </div>
    </section>
  )
}
