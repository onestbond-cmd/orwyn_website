"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { MessageCircle, Sparkles } from "lucide-react"
import dynamic from "next/dynamic"

const WaitlistModal = dynamic(
  () => import("@/components/waitlist-form").then((m) => m.WaitlistModal),
  {
    ssr: false,
    loading: () => (
      <button className="group relative px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 bg-foreground text-background hover:bg-foreground/90 hover:shadow-2xl hover:shadow-foreground/20 flex items-center gap-2 w-full sm:w-auto justify-center">
        Join the waitlist
      </button>
    )
  }
)

const humanPrompts = [
  "I had a hard day today...",
  "Why do I feel this way?",
  "I wish someone understood",
  "Sometimes I just need to talk",
  "I feel like myself again"
]

// Beautiful gradient text component
function GradientText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`bg-gradient-to-r from-foreground via-foreground/95 to-foreground/85 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
    layoutEffect: false
  } as any)
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const text = humanPrompts[currentTextIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < text.length) {
          setDisplayText(text.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2500)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(text.slice(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % humanPrompts.length)
        }
      }
    }, isDeleting ? 40 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTextIndex])

  return (
    <section 
      ref={ref} 
      id="main-content"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20"
    >
      {/* Enhanced background with better brightness */}
      <div className="absolute inset-0">
        {/* Warm, gentle blobs with improved visibility */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.12, 0.18, 0.12]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-emotion-hope/20"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-emotion-calm/20"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.08, 1],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-[50%_50%_45%_55%/45%_55%_50%_50%] bg-emotion-love/20"
        />
      </div>

      {/* Subtle grain for warmth */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Badge - Beautiful styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-foreground/[0.04] border border-foreground/[0.08] backdrop-blur-sm text-sm text-foreground/80 shadow-lg shadow-foreground/[0.02]">
            <Sparkles className="w-4 h-4 text-emotion-hope" />
            A companion for your inner world
          </span>
        </motion.div>
        
        {/* Main Headline - static for fast LCP, no fade-in on the LCP element */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
          <span className="block text-foreground/95">
            Sometimes you just need
          </span>
          <span className="block mt-2 sm:mt-4">
            <span className="text-foreground/95">someone who{" "}</span>
            <span className="bg-gradient-to-r from-emotion-hope via-emotion-joy to-emotion-love bg-clip-text text-transparent drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 30px rgba(167, 243, 208, 0.3))' }}>
              listens.
            </span>
          </span>
        </h1>

        {/* Human conversation prompt - Enhanced visibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 sm:mt-14"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-foreground/[0.03] border border-foreground/[0.08] backdrop-blur-md shadow-xl shadow-foreground/[0.02]">
            <MessageCircle className="w-5 h-5 text-emotion-hope/80" />
            <span className="text-foreground/80 text-base sm:text-lg font-medium tracking-wide">
              &ldquo;{displayText}&rdquo;
              <span className="animate-pulse ml-1 text-emotion-hope">|</span>
            </span>
          </div>
        </motion.div>

        {/* Description - Beautiful text styling */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-8 text-foreground/65 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed font-light"
        >
          <span className="text-foreground/90 font-normal">Orwyn</span> is here when you need it. No judgment. No advice. 
          Just a space to be heard and understand yourself better.
        </motion.p>

        {/* CTA Buttons - Enhanced visibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <WaitlistModal />
          <a 
            href="#how-it-works"
            className="group px-8 py-4 rounded-xl font-medium text-base transition-all duration-300 border border-foreground/15 hover:border-foreground/30 hover:bg-foreground/[0.03] text-foreground/80 hover:text-foreground w-full sm:w-auto text-center"
          >
            Learn how it works
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-12 flex items-center justify-center gap-8 text-foreground/50 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-glow-purple/40 to-glow-blue/40 border-2 border-background shadow-sm"
                />
              ))}
            </div>
            <span className="text-foreground/60">Early access open</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-foreground/20" />
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emotion-hope shadow-[0_0_8px_rgba(167,243,208,0.6)]" />
            <span className="text-foreground/60">Private & secure</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - Enhanced */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 sm:bottom-12 flex flex-col items-center gap-3"
      >
        <span className="text-xs text-foreground/40 uppercase tracking-wider">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
