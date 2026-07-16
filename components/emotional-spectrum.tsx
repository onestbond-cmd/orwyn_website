"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback } from "react"
import { useEmotion, emotions } from "@/contexts/emotion-context"

export function EmotionalSpectrum() {
  const { activeEmotion, setActiveEmotion } = useEmotion()
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)

  // Auto-cycle through emotions every 5 seconds
  useEffect(() => {
    if (isPaused) return
    
    const cycleDuration = 5000 // 5 seconds per emotion
    const intervalDuration = 50 // Update progress every 50ms
    const steps = cycleDuration / intervalDuration
    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      setProgress((currentStep / steps) * 100)
      
      if (currentStep >= steps) {
        currentStep = 0
        setProgress(0)
        // Find next emotion index
        const currentIndex = emotions.findIndex(e => e.name === activeEmotion.name)
        const nextIndex = (currentIndex + 1) % emotions.length
        setActiveEmotion(emotions[nextIndex])
      }
    }, intervalDuration)

    return () => clearInterval(interval)
  }, [activeEmotion, isPaused, setActiveEmotion])

  // Reset progress when emotion changes manually
  const handleEmotionClick = useCallback((emotion: typeof emotions[0], index: number) => {
    setProgress(0)
    setActiveEmotion(emotion)
    // Brief pause on manual selection
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 3000)
  }, [setActiveEmotion])

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-foreground/50 text-sm tracking-[0.3em] uppercase mb-4">
            Every color of you
          </p>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-balance text-foreground/95">
            Orwyn sees all your emotions
          </h2>
          <p className="mt-6 text-foreground/60 max-w-xl mx-auto text-pretty">
            Not to fix them. To understand them. Every feeling is a message from yourself to yourself.
          </p>
        </motion.div>

        {/* Emotional orbs grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
          {emotions.map((emotion, index) => {
            const isActive = activeEmotion.name === emotion.name
            const isNext = (() => {
              const currentIndex = emotions.findIndex(e => e.name === activeEmotion.name)
              const nextIndex = (currentIndex + 1) % emotions.length
              return index === nextIndex && !isPaused
            })()

            return (
              <motion.button
                key={emotion.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => handleEmotionClick(emotion, index)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className={`group relative flex flex-col items-center gap-3 p-4 md:p-5 rounded-2xl transition-all duration-500 min-w-[60px] ${
                  isActive 
                    ? "bg-foreground/[0.06] border border-foreground/10" 
                    : "hover:bg-foreground/[0.03] border border-transparent"
                }`}
              >
                {/* Emotion orb */}
                <div className="relative">
                  <motion.div 
                    animate={{
                      scale: isActive ? 1.15 : 1,
                      boxShadow: isActive
                        ? `0 0 60px ${emotion.cssVar}, 0 0 100px ${emotion.cssVar}`
                        : `0 0 0px transparent`
                    }}
                    transition={{ duration: 0.5 }}
                    className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full ${emotion.color} opacity-80`}
                  >
                    <div className={`absolute inset-0 rounded-full ${emotion.color} blur-md opacity-50`} />
                  </motion.div>
                  
                  {/* Progress ring for active emotion */}
                  {isActive && !isPaused && (
                    <svg className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="28"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-foreground/10"
                      />
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="28"
                        fill="none"
                        stroke={emotion.cssVar}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray={176}
                        strokeDashoffset={176 - (176 * progress) / 100}
                        initial={{ strokeDashoffset: 176 }}
                        animate={{ strokeDashoffset: 176 - (176 * progress) / 100 }}
                        transition={{ duration: 0.1, ease: "linear" }}
                      />
                    </svg>
                  )}

                  {/* Next indicator */}
                  {isNext && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className={`w-full h-full rounded-full ${emotion.color} opacity-20`} />
                    </motion.div>
                  )}
                </div>
                
                <span className={`text-xs md:text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? "text-foreground" 
                    : "text-foreground/50 group-hover:text-foreground/70"
                }`}>
                  {emotion.name}
                </span>
              </motion.button>
            )
          })}
        </div>

        {/* Active emotion display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEmotion.name}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl mx-auto"
          >
            <motion.div 
              className="relative p-8 md:p-12 rounded-3xl bg-foreground/[0.03] backdrop-blur-xl border border-foreground/5"
              animate={{
                boxShadow: `0 0 80px ${activeEmotion.cssVar}30, 0 25px 50px -12px rgba(0,0,0,0.3)`
              }}
              transition={{ duration: 0.8 }}
            >
              {/* Emotional gradient border effect */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-30 pointer-events-none overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${activeEmotion.cssVar}40 0%, transparent 40%, transparent 60%, ${activeEmotion.cssVar}40 100%)`,
                }}
              />
              
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-foreground/10 rounded-tl-xl" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-foreground/10 rounded-tr-xl" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-foreground/10 rounded-bl-xl" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-foreground/10 rounded-br-xl" />
              
              <div className="flex items-start gap-5 relative z-10">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-4 h-4 rounded-full ${activeEmotion.color} shrink-0 mt-1`} 
                  style={{ boxShadow: `0 0 20px ${activeEmotion.cssVar}` }}
                />
                <div className="flex-1">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-foreground/60 text-sm tracking-[0.2em] uppercase mb-4"
                  >
                    {activeEmotion.description}
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-foreground/90 text-xl md:text-2xl font-light leading-relaxed italic"
                  >
                    &ldquo;{activeEmotion.message}&rdquo;
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-2 mt-6"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
                    <p className="text-foreground/60 text-sm">
                      How Orwyn responds to {activeEmotion.name.toLowerCase()}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Progress bar at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <p className="text-foreground/60 text-sm text-center">
            {isPaused ? "Auto-play paused" : "Auto-cycling through emotions"}
          </p>
          <div className="flex items-center gap-1.5">
            {emotions.map((emotion, index) => {
              const isActive = activeEmotion.name === emotion.name
              return (
                <motion.div
                  key={emotion.name}
                  className="h-1 rounded-full transition-all duration-500"
                  style={{
                    width: isActive ? "32px" : "8px",
                    backgroundColor: isActive ? emotion.cssVar : "rgba(255,255,255,0.1)",
                    boxShadow: isActive ? `0 0 10px ${emotion.cssVar}` : "none"
                  }}
                />
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
