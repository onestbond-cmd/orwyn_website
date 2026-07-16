"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('orwyn-cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000)
      return () => clearTimeout(timer)
    }
    if (consent === 'accepted') {
      loadAnalytics()
    }
  }, [])

  function loadAnalytics() {
    if (typeof window === 'undefined') return
    const w = window as any
    if (w.gtag) return
    const script = document.createElement('script')
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-DW3HM94309'
    script.async = true
    document.head.appendChild(script)
    script.onload = () => {
      w.dataLayer = w.dataLayer || []
      function gtag(...args: any[]) {
        w.dataLayer.push(args)
      }
      w.gtag = gtag
      gtag('js', new Date())
      gtag('config', 'G-DW3HM94309')
    }
  }

  function handleAccept() {
    localStorage.setItem('orwyn-cookie-consent', 'accepted')
    setShow(false)
    loadAnalytics()
  }

  function handleDecline() {
    localStorage.setItem('orwyn-cookie-consent', 'declined')
    setShow(false)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9997] w-[calc(100%-3rem)] max-w-xl"
        >
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/60 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground mb-1">
                We use cookies
              </p>
              <p className="text-xs text-foreground/50 leading-relaxed">
                We use analytics cookies to understand how you use Orwyn and improve the experience. No personal data is sold.{" "}
                <a
                  href="/privacy"
                  className="text-foreground/70 underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={handleDecline}
                className="flex-1 sm:flex-none px-4 py-2 text-xs font-medium text-foreground/50 border border-white/10 rounded-xl hover:border-white/20 hover:text-foreground/70 transition-all duration-200"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-none px-4 py-2 text-xs font-medium bg-foreground text-background rounded-xl hover:bg-foreground/90 transition-all duration-200"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
