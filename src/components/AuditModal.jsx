import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Check, ArrowRight, Rocket, ShieldCheck, Mail, Building, User } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function AuditModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    goal: 'Omnichannel Growth',
    budget: '$5k - $10k',
    name: '',
    email: '',
    company: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    
    // Trigger celebration confetti explosion
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10B981', '#FF6B00', '#2563EB', '#FFFFFF']
      })
    } catch (err) {
      console.log('Confetti error:', err)
    }
  }

  const resetAndClose = () => {
    setSubmitted(false)
    setStep(1)
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl z-10 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                <div>
                  <div className="text-sm font-heading font-extrabold text-white flex items-center gap-2">
                    <span>J'Me Growth Audit Wizard</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-orange/20 text-brand-orange font-bold">
                      Step {step} of 3
                    </span>
                  </div>
                  <div className="text-xs text-slate-400">Custom 2026 Digital Strategy Assessment</div>
                </div>
              </div>

              {/* Step Progress Bar */}
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mb-8">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-green via-brand-orange to-brand-blue"
                  animate={{ width: `${(step / 3) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <form onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()}>
                {/* STEP 1: GOAL */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-heading font-bold text-white">
                      What is your primary marketing goal?
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        'Omnichannel Growth (SEO + Graphic Design + Paid Ads)',
                        'High-Converting Graphic Design & Brand Visuals',
                        'Meta & Google Paid PPC Campaigns (High ROAS)',
                        'Organic SEO Dominance & Viral Social Reach'
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setFormData({ ...formData, goal: item })}
                          className={`p-4 rounded-2xl border text-left text-sm font-medium transition-all ${
                            formData.goal === item
                              ? 'bg-brand-orange/20 border-brand-orange text-white shadow-lg'
                              : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 2: BUDGET */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-heading font-bold text-white">
                      Select your estimated monthly budget range
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {['<₹25,000 / mo', '₹25,000 - ₹75,000 / mo', '₹75,000 - ₹2,00,000 / mo', '₹2,00,000+ / mo'].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`p-4 rounded-2xl border text-center text-sm font-bold transition-all ${
                            formData.budget === b
                              ? 'bg-brand-green/20 border-brand-green text-brand-green shadow-lg'
                              : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 3: CONTACT */}
                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-heading font-bold text-white">
                      Where should we send your growth audit?
                    </h3>
                    <div className="space-y-3">
                      <div className="relative">
                        <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-orange"
                        />
                      </div>

                      <div className="relative">
                        <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                        <input
                          type="email"
                          required
                          placeholder="Work Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-orange"
                        />
                      </div>

                      <div className="relative">
                        <Building className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                        <input
                          type="text"
                          placeholder="Company Name / Website URL"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-orange"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-8 border-t border-white/10 mt-8">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white"
                    >
                      ← Back
                    </button>
                  ) : (
                    <span />
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-3 rounded-xl font-heading font-bold text-sm text-white bg-brand-orange hover:bg-brand-orange/90 shadow-lg flex items-center gap-2"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-8 py-3 rounded-xl font-heading font-extrabold text-sm text-white bg-gradient-to-r from-brand-green via-brand-orange to-brand-blue shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                    >
                      <Rocket className="w-4 h-4" />
                      <span>Submit & Generate Audit</span>
                    </button>
                  )}
                </div>
              </form>
            </div>
          ) : (
            /* SUBMITTED SUCCESS CARD */
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-brand-green/20 border border-brand-green flex items-center justify-center text-brand-green mx-auto">
                <Check className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-heading font-extrabold text-white">
                🚀 Audit Request Confirmed!
              </h3>

              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you <span className="text-white font-bold">{formData.name}</span>! Our growth strategists are reviewing your project requirements and will deliver your custom marketing breakdown to <span className="text-brand-orange font-bold">{formData.email}</span> within 4 hours.
              </p>

              <button
                onClick={resetAndClose}
                className="px-8 py-3 rounded-full font-heading font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-all"
              >
                Close & Return to Website
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
