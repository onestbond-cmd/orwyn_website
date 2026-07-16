"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const differences = [
  {
    not: "Advice",
    is: "Reflection",
    description: "Orwyn doesn't tell you what to do. It helps you discover your own answers through reflection."
  },
  {
    not: "Dependency",
    is: "Awareness",
    description: "We don't want you to rely on Orwyn. We want you to understand yourself better and grow."
  },
  {
    not: "Fast",
    is: "Thoughtful",
    description: "Quick answers rarely change lives. Deep reflection, patience, and understanding do."
  }
]

export function WhyOrwyn() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="why-orwyn" className="py-40 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/10 via-transparent to-card/10" />
      <div className="absolute right-1/4 top-1/3 w-[500px] h-[500px] rounded-full bg-glow-blue/18" />
      <div className="absolute left-1/3 bottom-1/4 w-[400px] h-[400px] rounded-full bg-glow-purple/18" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-24"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-glow-blue/80 text-xs tracking-[0.4em] uppercase mb-8 font-medium"
          >
            Why Orwyn
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl md:text-5xl font-extralight tracking-tight"
          >
            Different by design
          </motion.h2>
        </motion.div>

        <div className="space-y-6">
          {differences.map((diff, index) => (
            <motion.div
              key={diff.is}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
              className="group relative p-8 md:p-10 rounded-2xl bg-card/20 backdrop-blur-sm border border-border/20 hover:border-glow-purple/20 transition-all duration-700"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-glow-purple/[0.02] to-glow-blue/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center gap-5 md:w-80 shrink-0">
                  <span className="text-muted-foreground/40 line-through text-lg font-light">
                    {diff.not}
                  </span>
                  <svg className="w-5 h-5 text-muted-foreground/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                  <span className="text-xl font-medium bg-gradient-to-r from-glow-purple/90 to-glow-blue/90 bg-clip-text text-transparent">
                    {diff.is}
                  </span>
                </div>
                <p className="text-muted-foreground/60 leading-relaxed text-[15px]">
                  {diff.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-xl h-px bg-gradient-to-r from-transparent via-border/20 to-transparent" />
          </div>
          <p className="relative bg-background text-center py-2 px-8 text-xl md:text-2xl text-muted-foreground/50 italic font-light max-w-2xl mx-auto">
            &quot;Orwyn doesn&apos;t fix you. It helps you see yourself clearly.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
