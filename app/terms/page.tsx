'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function TermsOfUse() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Terms of Use</h1>
          <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-slate-700 leading-relaxed">
                By accessing and using the Adapt Flow Deliver website (the &quot;Website&quot;), you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our Website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. About Us</h2>
              <p className="text-slate-700 leading-relaxed">
                This Website is operated by Adapt Flow Deliver Consultancy Ltd, a company registered in the United Kingdom. We provide delivery transformation consultancy services to organizations seeking to improve their operating models, delivery practices, and organizational capability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Use of the Website</h2>
              <p className="text-slate-700 leading-relaxed mb-4">You may use this Website for lawful purposes only. You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Use the Website in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any part of the Website</li>
                <li>Interfere with or disrupt the Website or servers</li>
                <li>Use automated systems (bots, scrapers) to access the Website without permission</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Collect or harvest personal information without consent</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property Rights</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Unless otherwise stated, Adapt Flow Deliver Consultancy Ltd owns the intellectual property rights for all content on this Website, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Text, graphics, logos, images, and photographs</li>
                <li>Software, code, and website design</li>
                <li>Trademarks and brand elements</li>
                <li>All other content and materials</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                You may view, download, and print content from this Website for personal, non-commercial use only. You may not reproduce, modify, distribute, or republish any content without our prior written consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Third-Party Links and Services</h2>
              <p className="text-slate-700 leading-relaxed">
                Our Website may contain links to third-party websites or services (including Adaptavis and Flowency partner sites, Cal.com booking system, and others). We are not responsible for the content, privacy policies, or practices of these external sites. Your use of third-party services is at your own risk and subject to their respective terms and conditions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Service Engagement</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Information on this Website about our consultancy services is for general information purposes only and does not constitute a formal offer or contract.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Formal engagement of our services requires a separate written agreement. The terms of any consultancy engagement will be governed by that specific agreement, not by these Website Terms of Use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Disclaimer of Warranties</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                This Website and its content are provided &quot;as is&quot; without warranties of any kind, either express or implied, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Accuracy, completeness, or reliability of information</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement of third-party rights</li>
                <li>Uninterrupted or error-free operation</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                While we strive to keep information accurate and up to date, we make no guarantees about the completeness or accuracy of content on this Website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                To the fullest extent permitted by law, Adapt Flow Deliver Consultancy Ltd shall not be liable for any:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Direct, indirect, incidental, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Damages arising from your use of or inability to use the Website</li>
                <li>Damages resulting from third-party content or services</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                Nothing in these terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Indemnification</h2>
              <p className="text-slate-700 leading-relaxed">
                You agree to indemnify and hold harmless Adapt Flow Deliver Consultancy Ltd, its directors, employees, and partners from any claims, damages, or expenses arising from your use of the Website or violation of these Terms of Use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Privacy and Data Protection</h2>
              <p className="text-slate-700 leading-relaxed">
                Your use of this Website is also governed by our{' '}
                <Link href="/privacy" className="text-primary-600 hover:text-primary-700 font-medium">Privacy Notice</Link>
                {' '}and{' '}
                <Link href="/cookie-policy" className="text-primary-600 hover:text-primary-700 font-medium">Cookie Policy</Link>.
                Please review these documents to understand how we collect and use your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Changes to Terms</h2>
              <p className="text-slate-700 leading-relaxed">
                We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the Website. Your continued use of the Website after changes are posted constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Termination</h2>
              <p className="text-slate-700 leading-relaxed">
                We may terminate or suspend your access to the Website at any time, without notice, for conduct that we believe violates these Terms of Use or is harmful to other users, us, or third parties, or for any other reason.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Governing Law and Jurisdiction</h2>
              <p className="text-slate-700 leading-relaxed">
                These Terms of Use are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms or your use of the Website shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Severability</h2>
              <p className="text-slate-700 leading-relaxed">
                If any provision of these Terms of Use is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Entire Agreement</h2>
              <p className="text-slate-700 leading-relaxed">
                These Terms of Use, together with our Privacy Notice and Cookie Policy, constitute the entire agreement between you and Adapt Flow Deliver Consultancy Ltd regarding your use of this Website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">16. Contact Information</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have questions about these Terms of Use, please contact us:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-l-primary-500">
                <p className="text-slate-700"><strong>Adapt Flow Deliver Consultancy Ltd</strong></p>
                <p className="text-slate-700">Email: <a href="mailto:info@adaptflowdeliver.com" className="text-primary-600 hover:text-primary-700">info@adaptflowdeliver.com</a></p>
              </div>
            </section>

            <div className="bg-primary-50 p-6 rounded-lg border border-primary-200 mt-8">
              <p className="text-sm text-slate-700">
                <strong>Note:</strong> These Terms of Use apply to this Website only. Separate terms and conditions will govern any consultancy services agreement.
              </p>
            </div>
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
