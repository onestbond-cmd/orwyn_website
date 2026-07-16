"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { WaitlistModal } from "@/components/waitlist-form"

export function Footer({ hideCta = false }: { hideCta?: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer ref={ref} className="relative overflow-hidden">
      {!hideCta && (
        <section className="py-32 px-6 relative">
          {/* Warm organic background */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ opacity: [0.05, 0.08, 0.05] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-[45%_55%_50%_50%/55%_45%_55%_45%] bg-emotion-hope/20"
            />
            <motion.div
              animate={{ opacity: [0.03, 0.06, 0.03] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-[55%_45%_50%_50%/45%_55%_45%_55%] bg-emotion-calm/20"
            />
          </div>

          <div className="max-w-3xl mx-auto text-center relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.5 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mb-6 leading-snug"
              >
                You deserve to be
                <br />
                <span className="italic text-foreground/70">understood.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-muted-foreground/50 text-lg md:text-xl mb-12 font-light max-w-md mx-auto leading-relaxed"
              >
                Start a conversation with Orwyn. It&apos;s free, it&apos;s private,
                and it&apos;s here whenever you need it.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <WaitlistModal />
                <p className="text-muted-foreground/60 text-sm">
                  No account needed
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Footer bottom - warm and human */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
        className="border-t border-foreground/[0.05] py-12 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <span className="text-xl font-serif">Orwyn</span>
              <span className="text-muted-foreground/60 text-sm font-light">
                A safe space to be yourself
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground/60">
              <Link href="/#what-is-orwyn" className="hover:text-foreground/70 transition-colors duration-300">
                About
              </Link>
              <Link href="/privacy" className="hover:text-foreground/70 transition-colors duration-300">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground/70 transition-colors duration-300">
                Terms
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem('orwyn-cookie-consent')
                  window.location.reload()
                }}
                className="hover:text-foreground/70 transition-colors duration-300 text-sm cursor-pointer bg-transparent border-none p-0"
              >
                Cookie Settings
              </button>
              <a href="/#contact" className="hover:text-foreground/70 transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-foreground/[0.03]">
            <p className="text-center text-muted-foreground/50 text-sm font-light">
              Built with care for people who deserve to be heard.
            </p>
            <p className="text-center text-muted-foreground/50 text-xs mt-3">
              © 2026 Onestbond Technologies Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
