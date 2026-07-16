"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { EmotionProvider } from "@/contexts/emotion-context"

export default function NotFound() {
  return (
    <EmotionProvider>
      <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-glow-purple/8 opacity-40" />
        </div>
        <Header />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">
              404
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-light tracking-tight mb-6 leading-snug">
              This page doesn&apos;t<br />
              <span className="italic text-foreground/60">exist yet.</span>
            </h1>
            <p className="text-muted-foreground/60 text-lg max-w-md mx-auto leading-relaxed mb-12">
              But you do. Let&apos;s get you back to somewhere real.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="px-8 py-4 rounded-xl font-semibold text-base bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
              >
                Go home
              </Link>
              <Link
                href="/#contact"
                className="px-8 py-4 rounded-xl font-medium text-base border border-foreground/15 hover:border-foreground/30 text-foreground/80 hover:text-foreground transition-all duration-300"
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </EmotionProvider>
  )
}
