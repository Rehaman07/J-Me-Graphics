import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, Sparkles, CheckCircle } from 'lucide-react'

export default function Testimonials() {
  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'CEO & Founder, Verve Apparel',
      avatar: 'SJ',
      rating: 5,
      quote: "J'Me Graphics completely transformed our Meta ad creatives. Their graphic design quality combined with PPC targeting pushed our ROAS from 2.1x to 6.2x in under 60 days!",
      tag: 'E-Commerce Growth'
    },
    {
      name: 'David Vance',
      role: 'Marketing Lead, Neo-Tech SaaS',
      avatar: 'DV',
      rating: 5,
      quote: "The organic SEO engine and landing page design built by J'Me Graphics brought us over 400 qualified B2B leads monthly. Unbelievable ROI for a startup agency!",
      tag: 'SaaS Lead Gen'
    },
    {
      name: 'Elena Rostova',
      role: 'Head of Brand, Aura Financial',
      avatar: 'ER',
      rating: 5,
      quote: "Fast, incredibly creative, and deeply analytical. The 3 leaf philosophy of J'Me Graphics really shows—they master visual graphics, SEO, and paid performance effortlessly.",
      tag: 'Fintech Branding'
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-green">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Wall of Client Hype</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Trusted by <span className="text-gradient-green">Ambitious Startups</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Hear directly from founders and growth marketers who scaled their revenues with J'Me Graphics.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel rounded-3xl p-8 border border-white/10 flex flex-col justify-between relative group hover:border-white/20 transition-all"
            >
              <div>
                {/* Stars & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-400 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                    {rev.tag}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-brand-orange/30 mb-4" />

                <p className="text-slate-300 text-base leading-relaxed italic mb-8">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-orange to-brand-blue flex items-center justify-center font-heading font-extrabold text-white text-base">
                  {rev.avatar}
                </div>
                <div>
                  <div className="font-heading font-bold text-white text-base flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                  </div>
                  <div className="text-xs text-slate-400">{rev.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
