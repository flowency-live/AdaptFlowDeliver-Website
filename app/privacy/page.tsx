'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-300 hover:text-primary-400 transition-colors font-medium">Home</Link>
              <Link href="/#about" className="text-slate-300 hover:text-primary-400 transition-colors font-medium">About</Link>
              <Link href="/#services" className="text-slate-300 hover:text-primary-400 transition-colors font-medium">Services</Link>
              <Link href="/#contact" className="text-slate-300 hover:text-primary-400 transition-colors font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Privacy Notice</h1>
          <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Adapt Flow Deliver Consultancy Ltd (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Notice explains how we collect, use, and protect your personal information when you use our website or engage with our services.
              </p>
              <p className="text-slate-700 leading-relaxed">
                We are registered in the United Kingdom and comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
              <p className="text-slate-700 leading-relaxed mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and organization name when you contact us or book a consultation.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, pages visited, and time spent on pages.</li>
                <li><strong>Cookies:</strong> Small data files stored on your device. See our Cookie Policy for more details.</li>
                <li><strong>Communications:</strong> Records of correspondence when you contact us via email, forms, or other channels.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-slate-700 leading-relaxed mb-4">We use your personal information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>To respond to your enquiries and provide requested information</li>
                <li>To deliver our consultancy services and manage client relationships</li>
                <li>To improve our website and services</li>
                <li>To send relevant communications (with your consent)</li>
                <li>To comply with legal obligations</li>
                <li>To protect our legitimate business interests</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Legal Basis for Processing</h2>
              <p className="text-slate-700 leading-relaxed mb-4">We process your personal data based on:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Consent:</strong> Where you have given explicit consent (e.g., subscribing to communications)</li>
                <li><strong>Contract:</strong> Where processing is necessary to fulfill our contractual obligations</li>
                <li><strong>Legitimate Interests:</strong> Where we have a legitimate business interest (e.g., improving our services)</li>
                <li><strong>Legal Obligation:</strong> Where we must comply with legal requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Sharing and Disclosure</h2>
              <p className="text-slate-700 leading-relaxed mb-4">We do not sell your personal information. We may share your data with:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Service Providers:</strong> Third-party providers who help us operate our website and deliver services (e.g., hosting providers, email services, calendar booking systems)</li>
                <li><strong>Professional Partners:</strong> Where you engage us through our partnerships with Adaptavis or Flowency</li>
                <li><strong>Legal Authorities:</strong> Where required by law or to protect our legal rights</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                All third-party processors are contractually bound to protect your data and use it only for specified purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Retention</h2>
              <p className="text-slate-700 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this notice, or as required by law. Typically, we retain client data for 7 years after the end of our engagement to comply with legal and accounting requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Rights</h2>
              <p className="text-slate-700 leading-relaxed mb-4">Under UK GDPR, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal obligations)</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation of how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another organization</li>
                <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where we rely on consent</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the details below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Security</h2>
              <p className="text-slate-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. International Transfers</h2>
              <p className="text-slate-700 leading-relaxed">
                Where we use service providers based outside the UK, we ensure appropriate safeguards are in place, such as standard contractual clauses approved by the UK Information Commissioner&apos;s Office (ICO).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Changes to This Notice</h2>
              <p className="text-slate-700 leading-relaxed">
                We may update this Privacy Notice from time to time. We will notify you of significant changes by posting the updated notice on our website with a new &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Us</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Notice or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-l-primary-500">
                <p className="text-slate-700"><strong>Adapt Flow Deliver Consultancy Ltd</strong></p>
                <p className="text-slate-700">Email: <a href="mailto:privacy@adaptflowdeliver.com" className="text-primary-600 hover:text-primary-700">privacy@adaptflowdeliver.com</a></p>
              </div>
              <p className="text-slate-700 leading-relaxed mt-4">
                You also have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO) if you believe we have not handled your data appropriately. Visit <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">ico.org.uk</a> for more information.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
