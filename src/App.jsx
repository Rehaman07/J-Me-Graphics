import React, { useState, useEffect, lazy, Suspense } from 'react'
import Lenis from '@studio-freight/lenis'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import RoiCalculator from './components/RoiCalculator'
import Portfolio from './components/Portfolio'
import ProcessTimeline from './components/ProcessTimeline'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import AuditModal from './components/AuditModal'
import Footer from './components/Footer'

// Lazy-load React Three Fiber Background for lightweight initial paint
const Background3D = lazy(() => import('./components/Background3D'))

export default function App() {
  const [auditModalOpen, setAuditModalOpen] = useState(false)

  // Initialize Lenis Smooth Scrolling - Performance Tuned
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false, // Use native touch momentum on mobile devices to prevent lag
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 relative overflow-x-hidden selection:bg-brand-orange selection:text-white">
      {/* 3D Background - Lazy Loaded */}
      <Suspense fallback={<div className="fixed inset-0 pointer-events-none bg-brand-dark" />}>
        <Background3D />
      </Suspense>

      {/* Main Content Sections */}
      <Navbar onOpenAudit={() => setAuditModalOpen(true)} />

      <main className="relative z-10">
        <Hero onOpenAudit={() => setAuditModalOpen(true)} />
        <Services onOpenAudit={() => setAuditModalOpen(true)} />
        <RoiCalculator onOpenAudit={() => setAuditModalOpen(true)} />
        <Portfolio onOpenAudit={() => setAuditModalOpen(true)} />
        <ProcessTimeline />
        <Testimonials />
        <Pricing onOpenAudit={() => setAuditModalOpen(true)} />
      </main>

      <Footer onOpenAudit={() => setAuditModalOpen(true)} />

      {/* Interactive Audit Wizard Modal */}
      <AuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
      />
    </div>
  )
}
