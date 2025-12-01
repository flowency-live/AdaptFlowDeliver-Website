'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CookiePolicy() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Cookie Policy</h1>
          <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. What Are Cookies?</h2>
              <p className="text-slate-700 leading-relaxed">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Adapt Flow Deliver Consultancy Ltd uses cookies to enhance your experience on our website and to understand how you interact with our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Types of Cookies We Use</h2>

              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-l-primary-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Strictly Necessary Cookies</h3>
                  <p className="text-slate-700 leading-relaxed mb-2">
                    These cookies are essential for the website to function properly. They enable core functionality such as security and accessibility.
                  </p>
                  <p className="text-sm text-slate-600 italic">Examples: Session cookies, cookie consent preferences</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-l-secondary-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Analytics Cookies</h3>
                  <p className="text-slate-700 leading-relaxed mb-2">
                    These cookies help us understand how visitors use our website by collecting anonymous information about page visits, time spent on pages, and navigation patterns.
                  </p>
                  <p className="text-sm text-slate-600 italic">Examples: Google Analytics (if used)</p>
                  <p className="text-sm text-slate-600 mt-2"><strong>You can opt out of these cookies.</strong></p>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-l-primary-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Functional Cookies</h3>
                  <p className="text-slate-700 leading-relaxed mb-2">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                  </p>
                  <p className="text-sm text-slate-600 italic">Examples: Language preferences, calendar booking preferences</p>
                  <p className="text-sm text-slate-600 mt-2"><strong>You can opt out of these cookies.</strong></p>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-l-secondary-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Third-Party Cookies</h3>
                  <p className="text-slate-700 leading-relaxed mb-2">
                    We use third-party services that may set their own cookies:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
                    <li><strong>Cal.com:</strong> For our booking calendar functionality</li>
                    <li><strong>Hosting providers:</strong> For website performance and security</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Specific Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Cookie Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Purpose</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Duration</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-slate-700">cookie-consent</td>
                      <td className="px-4 py-3 text-sm text-slate-700">Stores your cookie consent preferences</td>
                      <td className="px-4 py-3 text-sm text-slate-700">1 year</td>
                      <td className="px-4 py-3 text-sm text-slate-700">Strictly Necessary</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-slate-700">cal.com cookies</td>
                      <td className="px-4 py-3 text-sm text-slate-700">Enable booking calendar functionality</td>
                      <td className="px-4 py-3 text-sm text-slate-700">Session/Persistent</td>
                      <td className="px-4 py-3 text-sm text-slate-700">Functional</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Managing Your Cookie Preferences</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Cookie Banner:</strong> When you first visit our site, you can accept or decline non-essential cookies using our cookie banner.</li>
                <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies. The method varies by browser, so please check your browser&apos;s help menu.</li>
                <li><strong>Opt-Out Tools:</strong> You can opt out of analytics cookies through browser extensions or privacy tools.</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                <strong>Please note:</strong> Blocking strictly necessary cookies may affect website functionality and prevent you from using certain features.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Browser-Specific Cookie Management</h2>
              <div className="bg-primary-50 p-6 rounded-lg">
                <p className="text-slate-700 leading-relaxed mb-4">
                  For instructions on how to manage cookies in your specific browser:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-medium">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-medium">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-medium">Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-medium">Microsoft Edge</a></li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Changes to This Policy</h2>
              <p className="text-slate-700 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. Please check this page regularly for updates.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have questions about our use of cookies, please contact us:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-l-primary-500">
                <p className="text-slate-700"><strong>Adapt Flow Deliver Consultancy Ltd</strong></p>
                <p className="text-slate-700">Email: <a href="mailto:privacy@adaptflowdeliver.com" className="text-primary-600 hover:text-primary-700">privacy@adaptflowdeliver.com</a></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Related Policies</h2>
              <p className="text-slate-700 leading-relaxed">
                For more information about how we handle your data, please see our{' '}
                <Link href="/privacy" className="text-primary-600 hover:text-primary-700 font-medium">Privacy Notice</Link>.
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
