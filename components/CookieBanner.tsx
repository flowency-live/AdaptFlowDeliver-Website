'use client'

import { useState, useEffect } from 'react'

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-br from-[#020305] via-[#0a0e1a] to-slate-900 border-t-2 border-primary-500/40 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-center sm:text-left">
          <p className="text-slate-200 text-sm md:text-base">
            We use cookies to enhance your experience on our site. By continuing to browse, you agree to our use of cookies.{' '}
            <a href="/cookie-policy" className="text-primary-400 hover:text-primary-300 underline transition-colors">
              Learn more
            </a>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={declineCookies}
            className="px-6 py-2 text-sm font-semibold text-slate-300 hover:text-white border-2 border-slate-600 hover:border-slate-500 rounded-lg transition-all"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 text-sm font-semibold bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-all shadow-lg shadow-primary-500/30"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
