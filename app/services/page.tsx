'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src="/afd-logo.png" alt="Adapt Flow Deliver" width={64} height={64} className="h-16 w-auto" priority />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-300 hover:text-primary-400 transition-colors font-medium">Home</Link>
              <Link href="/#about" className="text-slate-300 hover:text-primary-400 transition-colors font-medium">About</Link>
              <Link href="/services" className="text-primary-400 transition-colors font-medium">Services</Link>
              <Link href="/#rebecca" className="text-slate-300 hover:text-primary-400 transition-colors font-medium">Rebecca</Link>
              <Link href="/#contact" className="text-slate-300 hover:text-primary-400 transition-colors font-medium">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-700/50">
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-slate-300 hover:text-primary-400 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-slate-800" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link href="/#about" className="text-slate-300 hover:text-primary-400 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-slate-800" onClick={() => setMobileMenuOpen(false)}>
                  About
                </Link>
                <Link href="/services" className="text-primary-400 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-slate-800" onClick={() => setMobileMenuOpen(false)}>
                  Services
                </Link>
                <Link href="/#rebecca" className="text-slate-300 hover:text-primary-400 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-slate-800" onClick={() => setMobileMenuOpen(false)}>
                  Rebecca
                </Link>
                <Link href="/#contact" className="text-slate-300 hover:text-primary-400 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-slate-800" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - DARK */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-slate-900 via-[#0a0e1a] to-primary-950">
        {/* Spotlight Orbs */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary-500/15 rounded-full blur-3xl"></div>

        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="space-y-8 animate-fade-in-up">
            <p className="text-sm md:text-base text-primary-300 uppercase tracking-widest font-semibold" style={{textShadow: '0 2px 10px rgba(0,0,0,0.8)'}}>
              Our Services
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-50 tracking-tight leading-none" style={{textShadow: '0 4px 20px rgba(0,0,0,0.9)'}}>
              What We Do
            </h1>
            <p className="text-xl md:text-2xl text-primary-300 font-medium max-w-4xl mx-auto" style={{textShadow: '0 2px 15px rgba(0,0,0,0.8)'}}>
              We help organisations improve delivery, strengthen capability and build customer-centric ways of working.
            </p>
          </div>
        </div>
      </section>

      {/* Service 1 - WHITE */}
      <section id="service-1" className="relative py-24 bg-white overflow-hidden scroll-mt-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Strategy → Operating Model Alignment
            </h2>
            <p className="text-xl text-slate-700 mb-8">
              For organisations that need clarity on how strategy translates into day-to-day execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl border-2 border-primary-200 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What we deliver:</h3>
              <ul className="space-y-4">
                {[
                  "A clear, scalable operating model",
                  "Practical ways of working aligned to strategic goals",
                  "Defined decision-making and ownership across teams",
                  "A roadmap for embedding and sustaining the model"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <span className="text-primary-600 mr-3 text-2xl font-bold">→</span>
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-slate-200 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">You get:</h3>
              <ul className="space-y-4">
                {[
                  "Operating model design",
                  "Planning and delivery rhythms",
                  "Visual workflows",
                  "Governance & decision-making clarity"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <span className="text-secondary-600 mr-3 text-2xl font-bold">•</span>
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2 - DARK */}
      <section id="service-2" className="relative py-24 bg-gradient-to-br from-[#020305] via-[#050810] to-[#020305] overflow-hidden scroll-mt-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
              End-to-End Delivery & Product Transformation
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              For teams struggling with complexity, unclear priorities or unpredictable delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/80 backdrop-blur-[20px] p-8 rounded-xl border-2 border-secondary-400 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-50 mb-6">What we deliver:</h3>
              <ul className="space-y-4">
                {[
                  "Cleaner systems, smoother flow, fewer bottlenecks",
                  "Clearer prioritisation and alignment",
                  "More predictable product + delivery outcomes"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <span className="text-secondary-400 mr-3 text-2xl font-bold">→</span>
                    <span className="text-slate-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-[20px] p-8 rounded-xl border-2 border-slate-600 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-50 mb-6">You get:</h3>
              <ul className="space-y-4">
                {[
                  "Assessment of current delivery system",
                  "Workflow redesign",
                  "Simplified idea → value flow",
                  "Embedded rituals for predictability",
                  "Coaching for product + delivery teams"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <span className="text-primary-400 mr-3 text-2xl font-bold">•</span>
                    <span className="text-slate-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3 - WHITE */}
      <section id="service-3" className="relative py-24 bg-white overflow-hidden scroll-mt-20">
        <div className="absolute inset-0">
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary-200/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Capability Uplift Across Teams & Leadership
            </h2>
            <p className="text-xl text-slate-700 mb-8">
              For organisations that want confident, capable teams who can deliver without chaos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl border-2 border-primary-200 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What we deliver:</h3>
              <ul className="space-y-4">
                {[
                  "Stronger skills, mindset and alignment",
                  "Increased confidence across teams and leaders",
                  "Embedded modern delivery practices"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <span className="text-primary-600 mr-3 text-2xl font-bold">→</span>
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-slate-200 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">You get:</h3>
              <ul className="space-y-4">
                {[
                  "Team and leadership coaching",
                  "Role clarity",
                  "Skills uplift in product, delivery & decision-making",
                  "Practical tools teams can use immediately"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <span className="text-secondary-600 mr-3 text-2xl font-bold">•</span>
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 italic mt-6 pt-6 border-t border-slate-200">
                (Flow-based delivery and Kanban are areas of deep specialist expertise.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4 - DARK */}
      <section id="service-4" className="relative py-24 bg-gradient-to-br from-[#020305] via-[#050810] to-[#020305] overflow-hidden scroll-mt-20">
        <div className="absolute inset-0">
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-500/15 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
              Customer- & Product-Centric Ways of Working
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              For teams who want to focus on the work that truly drives customer and commercial value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/80 backdrop-blur-[20px] p-8 rounded-xl border-2 border-secondary-400 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-50 mb-6">What we deliver:</h3>
              <ul className="space-y-4">
                {[
                  "Better prioritisation",
                  "Clearer shaping of demand",
                  "Less noise, more value"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <span className="text-secondary-400 mr-3 text-2xl font-bold">→</span>
                    <span className="text-slate-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-[20px] p-8 rounded-xl border-2 border-slate-600 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-50 mb-6">You get:</h3>
              <ul className="space-y-4">
                {[
                  "Demand-shaping frameworks",
                  "Simplified prioritisation",
                  "Product decision-making tools",
                  "Value-based planning"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <span className="text-primary-400 mr-3 text-2xl font-bold">•</span>
                    <span className="text-slate-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 5 - WHITE */}
      <section id="service-5" className="relative py-24 bg-white overflow-hidden scroll-mt-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Flow, Data & Insight-Driven Delivery
            </h2>
            <p className="text-xl text-slate-700 mb-8">
              For organisations who want decisions grounded in real delivery data, not guesswork.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl border-2 border-primary-200 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What we deliver:</h3>
              <ul className="space-y-4">
                {[
                  "Clear visibility of how work flows",
                  "Predictive insights for planning",
                  "Better forecasting and risk awareness"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <span className="text-primary-600 mr-3 text-2xl font-bold">→</span>
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-slate-200 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">You get:</h3>
              <ul className="space-y-4">
                {[
                  "Cycle time & throughput analytics",
                  "Blocker insights",
                  "Predictability metrics",
                  "Plain-English explanation of what the data means",
                  "Actionable recommendations"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <span className="text-secondary-600 mr-3 text-2xl font-bold">•</span>
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 6 - DARK */}
      <section id="service-6" className="relative py-24 bg-gradient-to-br from-[#020305] via-[#050810] to-[#020305] overflow-hidden scroll-mt-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
              Collaboration & Cross-Team Alignment
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              For organisations where work gets stuck between teams, functions or departments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/80 backdrop-blur-[20px] p-8 rounded-xl border-2 border-secondary-400 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-50 mb-6">What we deliver:</h3>
              <ul className="space-y-4">
                {[
                  "Smoother cross-team coordination",
                  "Clear ownership and fewer handoff delays",
                  "A shared understanding of how value moves end to end"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <span className="text-secondary-400 mr-3 text-2xl font-bold">→</span>
                    <span className="text-slate-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-[20px] p-8 rounded-xl border-2 border-slate-600 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-50 mb-6">You get:</h3>
              <ul className="space-y-4">
                {[
                  "Cross-team workflow mapping",
                  "Alignment workshops",
                  "Ownership & responsibility clarity",
                  "Communication & coordination rituals"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <span className="text-primary-400 mr-3 text-2xl font-bold">•</span>
                    <span className="text-slate-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - LIGHT */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-primary-50 to-slate-100 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Delivery?
          </h2>
          <p className="text-xl text-slate-700 mb-10 max-w-3xl mx-auto">
            Let's discuss how we can help your organisation build clearer systems, stronger capability and more predictable value delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center text-lg px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all font-semibold"
            >
              Get in Touch
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center text-lg px-8 py-4 border-2 border-primary-500 text-primary-700 hover:bg-primary-50 rounded-lg transition-all font-semibold"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-[#0a0e1a] to-slate-900 border-t-2 border-primary-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/afd-logo.png"
                alt="Adapt Flow Deliver"
                width={120}
                height={120}
                className="h-20 w-auto opacity-90"
              />
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-400">
                &copy; 2005-{new Date().getFullYear()} Adapt Flow Deliver Consultancy Ltd.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                All rights reserved.
              </p>
            </div>
            <div className="flex justify-center md:justify-end gap-4 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-primary-400 transition-colors">
                Privacy
              </Link>
              <span className="text-slate-600">|</span>
              <Link href="/terms" className="text-slate-400 hover:text-primary-400 transition-colors">
                Terms of Use
              </Link>
              <span className="text-slate-600">|</span>
              <Link href="/cookie-policy" className="text-slate-400 hover:text-primary-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
