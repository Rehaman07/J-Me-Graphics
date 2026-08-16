import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Menu, X, ArrowUpRight, CheckCircle2 } from 'lucide-react'

export default function Navbar({ onOpenAudit }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'ROI Calculator', href: '#roi-calculator' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Playbook', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090D]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-brand-orange/50 transition-all duration-300 overflow-hidden">
              <img
                src="/logo.png"
                alt="J'Me Graphics Logo"
                className="w-8 h-8 object-contain transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 via-brand-orange/20 to-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
                J'Me <span className="text-brand-orange">Graphics</span>
              </span>
              <span className="text-[10px] font-medium tracking-widest text-slate-400 uppercase -mt-1">
                Digital Marketing Agency
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white px-4 py-1.5 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-brand-green bg-brand-green/10 border border-brand-green/30 rounded-full px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>Taking Q3/Q4 Clients</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenAudit}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-semibold text-sm text-white bg-gradient-to-r from-brand-orange via-brand-orange to-brand-blue shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40 transition-all duration-300"
            >
              <span>Get Free Growth Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0D0F17]/95 border-b border-white/10 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-white/10 hover:text-white transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenAudit()
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-heading font-bold text-white bg-gradient-to-r from-brand-orange to-brand-blue shadow-lg"
                >
                  <span>Get Free Growth Audit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
