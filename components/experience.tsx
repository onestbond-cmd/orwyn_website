"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const demoMessages = [
  { role: "orwyn", content: "Hey... how are you feeling today?" },
  { role: "user", content: "Honestly? I don't know. Kind of empty." },
  { role: "orwyn", content: "Empty... like something's missing, or more like you're just... numb?" },
  { role: "user", content: "Numb, I think. Nothing feels exciting anymore." },
  { role: "orwyn", content: "That's a hard place to be. When did things start feeling this way?" }
]

function TypingIndicator() {
  return (
    <div className="flex gap-1 px-4 py-2">
      <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 animate-bounce [animation-delay:0ms]" />
      <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 animate-bounce [animation-delay:150ms]" />
      <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 animate-bounce [animation-delay:300ms]" />
    </div>
  )
}

function Message({ message, index }: { message: typeof demoMessages[0], index: number }) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (message.role === "orwyn") {
      // Typewriter effect for Orwyn messages - slower, more thoughtful
      let i = 0
      const interval = setInterval(() => {
        setDisplayedText(message.content.slice(0, i + 1))
        i++
        if (i >= message.content.length) {
          clearInterval(interval)
          setIsComplete(true)
        }
      }, 35) // Slow typing for reflective feel
      return () => clearInterval(interval)
    } else {
      setDisplayedText(message.content)
      setIsComplete(true)
    }
  }, [message])

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[85%] md:max-w-[75%] px-5 py-3.5 rounded-2xl ${
          message.role === "user"
            ? "bg-foreground/[0.06] text-foreground/90"
            : "bg-gradient-to-br from-glow-purple/[0.08] to-glow-blue/[0.08] border border-glow-purple/10"
        }`}
      >
        <p className="leading-relaxed text-[15px]">
          {displayedText}
          {!isComplete && message.role === "orwyn" && (
            <span className="inline-block w-0.5 h-4 bg-foreground/40 ml-0.5 animate-pulse" />
          )}
        </p>
      </div>
    </motion.div>
  )
}

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [visibleMessages, setVisibleMessages] = useState<number>(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (!isInView) return

    const showMessages = async () => {
      for (let i = 0; i < demoMessages.length; i++) {
        // Wait before showing each message
        await new Promise(resolve => setTimeout(resolve, i === 0 ? 800 : 2200))
        
        if (demoMessages[i].role === "orwyn") {
          setIsTyping(true)
          await new Promise(resolve => setTimeout(resolve, 1500)) // Thoughtful pause before typing
          setIsTyping(false)
        }
        setVisibleMessages(i + 1)
      }
    }

    showMessages()
  }, [isInView])

  return (
    <section ref={ref} id="experience" className="py-40 px-6 relative overflow-hidden">
      {/* Layered ambient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-glow-purple/22" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-glow-blue/22" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-glow-purple/80 text-xs tracking-[0.4em] uppercase mb-8 font-medium"
          >
            Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl md:text-5xl font-extralight tracking-tight mb-5"
          >
            Feel the difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground/60 text-lg max-w-md mx-auto"
          >
            Watch how a conversation with Orwyn unfolds
          </motion.p>
        </motion.div>

        {/* Demo chat interface */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative rounded-3xl bg-background/60 backdrop-blur-md border border-border/30 overflow-hidden"
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-glow-purple/[0.02] to-transparent pointer-events-none" />
          
          {/* Chat header */}
          <div className="px-6 py-5 border-b border-border/20 flex items-center justify-between relative">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-glow-purple/70" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-glow-purple/50 animate-ping" />
              </div>
              <span className="text-sm text-muted-foreground/50 font-light">Orwyn is present</span>
            </div>
          </div>

          {/* Messages area */}
          <div className="p-6 md:p-10 min-h-[420px] space-y-6">
            {demoMessages.slice(0, visibleMessages).map((message, index) => (
              <Message key={index} message={message} index={index} />
            ))}

            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="rounded-2xl bg-gradient-to-br from-glow-purple/[0.08] to-glow-blue/[0.08] border border-glow-purple/10">
                  <TypingIndicator />
                </div>
              </motion.div>
            )}
          </div>

          {/* Input area - decorative */}
          <div className="px-6 py-5 border-t border-border/20">
            <div className="flex items-center gap-4 bg-card/30 rounded-2xl px-5 py-3.5 border border-border/10">
              <span className="flex-1 text-muted-foreground/30 text-[15px]">
                Share what&apos;s on your mind...
              </span>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-glow-purple/30 to-glow-blue/30 flex items-center justify-center">
                <svg className="w-4 h-4 text-foreground/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
