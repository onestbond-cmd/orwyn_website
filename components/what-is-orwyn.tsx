"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const principles = [
  {
    title: "It listens like a friend",
    description: "Not the kind of friend who jumps to solutions. The kind who sits with you in silence, asks gentle questions, and helps you hear yourself think."
  },
  {
    title: "It remembers your story",
    description: "Orwyn remembers what matters to you - the dreams you mentioned last month, the fears you shared at 2am, the small wins you celebrated together."
  },
  {
    title: "It grows with you",
    description: "As you change, Orwyn adapts. It notices your patterns, celebrates your progress, and holds space for the version of you that's still becoming."
  }
]

export function WhatIsOrwyn() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="what-is-orwyn" className="py-32 px-6 relative overflow-hidden">
      {/* Soft organic background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-[45%_55%_50%_50%/55%_45%_55%_45%] bg-emotion-hope/20"
        />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-muted-foreground/50 text-sm tracking-wide mb-6"
          >
            What is Orwyn?
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight leading-snug"
          >
            Think of that friend who just
            <br />
            <span className="italic text-foreground/70">gets you.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 text-muted-foreground/60 text-lg max-w-xl mx-auto leading-relaxed font-light"
          >
            The one who doesn&apos;t rush to fix things. Who asks the right questions. 
            Who makes you feel seen. That&apos;s Orwyn.
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
              className="group p-8 rounded-2xl transition-all duration-500 hover:bg-foreground/[0.02]"
            >
              <div className="flex items-start gap-6">
                <div className="w-2 h-2 rounded-full bg-emotion-hope/60 mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl md:text-2xl font-light mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground/60 leading-relaxed text-base md:text-lg font-light">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-foreground/[0.02] border border-foreground/[0.05]">
            <p className="text-xl md:text-2xl text-foreground/70 font-serif italic leading-relaxed">
              &quot;It&apos;s not about having answers.
              <br />
              It&apos;s about being understood.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
