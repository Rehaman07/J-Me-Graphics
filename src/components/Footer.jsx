import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, ArrowUpRight, Heart, Sparkles, Send } from 'lucide-react'

export default function Footer({ onOpenAudit }) {
  const [copied, setCopied] = useState(false)
  const email = 'hello@jmegraphics.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="relative bg-brand-dark pt-20 pb-10 border-t border-white/10 overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-gradient-to-t from-brand-orange/10 via-brand-green/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Callout Box */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 text-center mb-16 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-xs font-bold text-brand-orange">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready to Scale Your Brand?</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
              Let's Build Something <span className="text-gradient-orange">Unstoppable</span> Together
            </h2>

            <p className="text-slate-300 text-sm sm:text-base">
              Get in touch with our creative strategy team and claim your free comprehensive growth audit today.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-heading font-extrabold text-sm text-white bg-gradient-to-r from-brand-orange via-brand-orange to-brand-blue shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>Get Free Growth Audit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto px-6 py-4 rounded-full font-heading font-semibold text-sm text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-4 h-4 text-brand-green" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard!' : email}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info Left */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <img src="/logo.png" alt="J'Me Logo" className="w-10 h-10 object-contain" />
              <span className="font-heading font-extrabold text-2xl text-white">
                J'Me <span className="text-brand-orange">Graphics</span>
              </span>
            </a>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              J'Me Graphics is a next-gen digital marketing agency startup. Combining high-converting visual design, performance ads, and organic search dominance.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-brand-green bg-brand-green/10 border border-brand-green/30 w-fit px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>Agency Operational & Taking New Clients</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-heading font-bold text-white text-sm uppercase tracking-wider">Navigation</div>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Core Services</a></li>
              <li><a href="#roi-calculator" className="hover:text-white transition-colors">ROI Calculator</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Graphic Lab</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">4-Step Playbook</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Growth Plans</a></li>
            </ul>
          </div>

          {/* Connect / Social */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-heading font-bold text-white text-sm uppercase tracking-wider">Connect</div>
            <p className="text-xs text-slate-400">Join our weekly newsletter for creative marketing insights:</p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email..."
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange"
              />
              <button className="px-4 py-2.5 rounded-xl bg-brand-orange text-white text-xs font-bold hover:bg-brand-orange/90">
                <Send className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-2 flex items-center gap-3">
              {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map((soc) => (
                <a
                  key={soc}
                  href="#"
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 hover:text-white border border-white/5 transition-all"
                >
                  {soc}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} J'Me Graphics Digital Agency. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with precision for peak performance & ROI</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
