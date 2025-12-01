'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* AFD Header Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Image src="/afd-logo.png" alt="Adapt Flow Deliver" width={64} height={64} className="h-16 w-auto" priority />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-300 hover:text-primary-400 transition-colors font-medium">About</a>
              <a href="#services" className="text-slate-300 hover:text-primary-400 transition-colors font-medium">Services</a>
              <a href="#rebecca" className="text-slate-300 hover:text-primary-400 transition-colors font-medium">Rebecca</a>
              <a href="#contact" className="text-slate-300 hover:text-primary-400 transition-colors font-medium">Contact</a>
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
                <a
                  href="#about"
                  className="text-slate-300 hover:text-primary-400 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-slate-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-slate-300 hover:text-primary-400 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-slate-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#rebecca"
                  className="text-slate-300 hover:text-primary-400 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-slate-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Rebecca
                </a>
                <a
                  href="#contact"
                  className="text-slate-300 hover:text-primary-400 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-slate-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - DARK with V4 Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-slate-900 via-[#0a0e1a] to-primary-950">
        {/* V4 Spotlight Orbs */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary-500/15 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="space-y-8 animate-fade-in-up">
            <p className="text-sm md:text-base text-primary-300 uppercase tracking-widest font-semibold">
              Delivery Optimisation Experts
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-50 tracking-tight leading-none text-glow-primary">
              Adapt Flow Deliver
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-primary-300 font-medium max-w-4xl mx-auto">
              We strengthen what works, and streamline what slows you down.
            </p>
            <div className="space-y-4 pt-4">
              <p className="text-xl md:text-2xl text-slate-300 font-light max-w-6xl mx-auto">
                End-to-end delivery. Product capability uplift. Clear, scalable ways of working.
              </p>
              <p className="text-xl md:text-2xl text-slate-300 font-light max-w-6xl mx-auto">
                Clear operating models. Confident teams. Predictable, customer-centred value delivery.
              </p>
              <p className="text-lg text-slate-400 max-w-5xl mx-auto">
                We help organisations design and embed simple, scalable, customer-centric delivery and product systems.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center text-lg px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg shadow-glow-primary hover:scale-105 transition-all font-semibold"
              >
                Get in Touch
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center text-lg px-8 py-4 border-2 border-primary-400 text-primary-400 hover:bg-primary-400/10 rounded-lg transition-all font-semibold"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-300/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section - WHITE with Loveable Glass Cards */}
      <section id="about" className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Who We Are
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full" />
          </div>

          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>Adapt Flow Deliver supports organisations as they move from complex, reactive ways of working to clear, predictable and value-focused operating models.</p>

            {/* Option 2: White with left accent bar */}
            <div className="bg-white p-8 my-8 border-l-8 border-primary-500 border border-slate-200 shadow-xl rounded-lg">
              <p className="text-xl font-semibold text-slate-900 mb-6">Our belief is simple:</p>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <span className="text-primary-600 mr-3 text-2xl font-bold group-hover:scale-110 transition-transform">→</span>
                  <span className="text-slate-800">When people understand how the system works, capability grows.</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-secondary-600 mr-3 text-2xl font-bold group-hover:scale-110 transition-transform">→</span>
                  <span className="text-slate-800">When capability grows, value flows.</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-primary-600 mr-3 text-2xl font-bold group-hover:scale-110 transition-transform">→</span>
                  <span className="text-slate-800">When value flows, customers win.</span>
                </li>
              </ul>
            </div>

            <p>We blend strategy, operating model design, product management capability, and modern delivery practices to uplift performance across the entire organisation from leadership to teams on the ground.</p>
            <p className="text-center text-slate-600 italic pt-4">
              Founded by Rebecca Forrest, we work across aviation, financial services, global energy, engineering, data, product, digital and publishing organisations, across the UK, Europe, the Middle East and Asia Pacific.
            </p>

            {/* Option 3: Glassmorphism with subtle border */}
            <div className="bg-slate-50/80 backdrop-blur-sm p-8 mt-12 border border-primary-300/60 shadow-lg rounded-xl">
              <p className="text-sm text-primary-600 uppercase tracking-widest font-semibold mb-4">Testimonial from Richard Patterson - Interim Director of Product - Ops and Engineering</p>
              <p className="text-base text-slate-700 leading-relaxed">
                Rebecca worked with me at British Airways as a Interim Head of Ops and Engineering Data and Integrations and was pivotal in driving forward our Product ways of working. She quickly became a trusted partner to the team, combining a deep breadth of knowledge and experience with a genuinely approachable style.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mt-4">
                Rebecca helped us shape and embed new ways of working that have had a lasting positive impact. She was always willing to listen, challenge constructively and supporting people at all levels through the change. I wouldn&apos;t hesitate to work with her again or to recommend her for any role that requires strong leadership, collaboration and transformation skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - VERY DARK with Loveable Glass */}
      <section id="services" className="relative py-32 bg-gradient-to-br from-[#020305] via-[#050810] to-[#020305] bg-noise overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-500/15 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-sm md:text-base text-secondary-300 uppercase tracking-widest font-semibold mb-4">
              Services
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
              What We Do
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-secondary-400 to-primary-400 mx-auto rounded-full" />
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mt-6">
              Supporting organisations through transformation, capability building and value delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Strategy → Operating Model Alignment",
                desc: "Translating strategic and product goals into practical, scalable ways of working that teams can confidently deliver against.",
                color: "primary"
              },
              {
                num: "02",
                title: "End-to-End Delivery & Product Transformation",
                desc: "From idea to customer value, we simplify systems, improve flow and remove friction. We help product and delivery teams work with clarity, alignment and predictable outcomes.",
                color: "secondary"
              },
              {
                num: "03",
                title: "Capability Uplift Across Teams & Leadership",
                desc: "Building capability is at the centre of everything we do, skills, mindset, alignment and confidence.",
                note: "(Flow-based delivery and Kanban are areas of deep specialist expertise.)",
                color: "primary"
              },
              {
                num: "04",
                title: "Customer- & Product-Centric Ways of Working",
                desc: "Helping teams prioritise what truly delivers customer and commercial value through clear demand shaping, simple prioritisation and better decision-making.",
                color: "secondary"
              },
              {
                num: "05",
                title: "Flow, Data & Insight-Driven Delivery",
                desc: "Turning data into visibility: cycle time, throughput, blockers, forecast accuracy, risk signals. We explain insights in plain English so leaders and product teams can make better decisions.",
                color: "primary"
              },
              {
                num: "06",
                title: "Collaboration & Cross-Team Alignment",
                desc: "Creating smooth coordination across departments, reducing noise, clarifying ownership and giving everyone visibility of how value moves through the organisation.",
                color: "secondary"
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className={`glass-strong p-8 rounded-xl border-2 hover:scale-105 transition-all duration-300 group cursor-pointer ${
                  service.color === 'primary'
                    ? 'border-primary-400/60 hover:border-primary-300 hover:shadow-glow-primary'
                    : 'border-secondary-400/60 hover:border-secondary-300 hover:shadow-glow-secondary'
                }`}
              >
                <div className={`text-4xl font-bold mb-4 ${
                  service.color === 'primary' ? 'text-primary-300' : 'text-secondary-300'
                }`}>
                  {service.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-300 transition-all">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-2">
                  {service.desc}
                </p>
                {service.note && (
                  <p className="text-sm text-slate-400 italic mt-4">
                    {service.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People Development Section - LIGHT */}
      <section className="relative py-32 bg-gradient-to-br from-slate-50 via-primary-50 to-slate-100 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-sm md:text-base text-primary-600 uppercase tracking-widest font-semibold mb-4">
              At the Heart of Everything
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              People Development
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-2xl text-slate-900 leading-relaxed text-center font-light">
              Capability is built through people, not processes.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed text-center">
              Our coaching and development work focuses on building confidence, clarity and skill at every level.
            </p>

            <div className="bg-white/90 backdrop-blur-sm p-10 rounded-xl border-2 border-primary-200 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 pt-6">
                <div className="space-y-3">
                  {[
                    "Leadership coaching and capability uplift",
                    "Product and delivery team development",
                    "Kanban and flow-based delivery training"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start group">
                      <span className="text-primary-600 mr-3 text-xl group-hover:scale-110 transition-transform">→</span>
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    "Operating model and delivery practice uplift",
                    "Building confidence through clarity and coaching",
                    "Creating sustainable learning cultures"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start group">
                      <span className="text-secondary-600 mr-3 text-xl group-hover:scale-110 transition-transform">→</span>
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed italic pt-6 mt-6 border-t border-primary-200">
                We strengthen what already works — and remove the barriers that prevent teams from growing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rebecca Section - DARK with Loveable Glass */}
      <section id="rebecca" className="relative py-32 bg-gradient-to-br from-slate-900 via-[#0a0e1a] to-slate-900 bg-noise overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-80 h-80 bg-primary-500/15 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-sm md:text-base text-primary-300 uppercase tracking-widest font-semibold mb-4">
              Founder
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6">
              Rebecca Forrest
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto rounded-full" />
          </div>

          <div className="glass-strong p-10 md:p-12 rounded-xl border-2 border-primary/30 shadow-elevated">
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Rebecca is a delivery and product transformation lead who specialises in simplifying complex environments, uplifting capability and helping organisations become more customer-centric and value-focused.
              </p>
              <p>
                She blends strategy, product thinking, operating model design and practical delivery experience to help teams understand their system, improve flow and build confidence in how work moves from idea to customer.
              </p>
              <p>
                Rebecca partners with{" "}
                <a href="https://www.adaptavis.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-400 hover:text-primary-300 transition-colors underline decoration-primary-400/30 hover:decoration-primary-300">
                  Adaptavis
                </a>{" "}
                and{" "}
                <a href="https://www.flowency.co.uk" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-400 hover:text-primary-300 transition-colors underline decoration-primary-400/30 hover:decoration-primary-300">
                  Flowency
                </a>{" "}
                on large-scale transformation, capability-building and flow-maturity programmes. She supports organisations that want clearer delivery, stronger alignment and more predictable value outcomes.
              </p>

              <div className="glass p-6 rounded-xl mt-8 border border-primary/20">
                <p className="font-semibold text-slate-100 mb-4">Her work spans:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Aviation",
                    "Financial services",
                    "Global energy",
                    "Engineering",
                    "Data",
                    "Product",
                    "Digital",
                    "Publishing"
                  ].map((industry, idx) => (
                    <div key={idx} className="flex items-center group">
                      <span className="text-primary-400 mr-2 group-hover:scale-110 transition-transform">•</span>
                      <span className="text-slate-300">{industry}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-slate-400">
                  Across the UK, Europe, the Middle East and Asia Pacific.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - LIGHT */}
      <section id="contact" className="relative py-32 bg-gradient-to-br from-slate-50 to-primary-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-10 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-sm md:text-base text-secondary-600 uppercase tracking-widest font-semibold mb-4">
              Get in Touch
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Let&apos;s Talk
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-secondary-500 to-primary-500 mx-auto rounded-full" />
            <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto mt-6">
              Ready to simplify delivery, build capability, and create lasting value? Get in touch to discuss how we can help.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl border-2 border-primary-200 shadow-lg max-w-2xl mx-auto">
            <p className="text-slate-700 text-center text-lg">
              Contact form integration coming soon. In the meantime, reach out via email or LinkedIn.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/95 border-t border-slate-800 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Adapt Flow Deliver Consultancy Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
