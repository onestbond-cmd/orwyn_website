"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const conversations = [
  {
    user: "I feel lost lately",
    orwyn: "Hmm... lag raha hai tum thoda disconnected feel kar rahe ho. Kuch time se sab thoda off lag raha hai?"
  },
  {
    user: "I don't know what I want anymore",
    orwyn: "That's a heavy feeling... like everything that used to matter just... doesn't? When did this start feeling different?"
  },
  {
    user: "Everyone seems to have their life together except me",
    orwyn: "It sounds like you're comparing your inside to everyone else's outside. What would 'together' look like for you?"
  }
]

function TypingIndicator() {
  return (
    <div className="flex gap-1.5 py-2">
      <span className="w-2 h-2 rounded-full bg-glow-purple/60 animate-bounce [animation-delay:0ms]" />
      <span className="w-2 h-2 rounded-full bg-glow-purple/60 animate-bounce [animation-delay:150ms]" />
      <span className="w-2 h-2 rounded-full bg-glow-purple/60 animate-bounce [animation-delay:300ms]" />
    </div>
  )
}

function ChatMessage({ message, isUser, delay }: { message: string; isUser: boolean; delay: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isTyping, setIsTyping] = useState(!isUser)

  useEffect(() => {
    const showTimer = setTimeout(() => {
      if (!isUser) {
        setIsTyping(true)
        const typeTimer = setTimeout(() => {
          setIsTyping(false)
          setIsVisible(true)
        }, 1200)
        return () => clearTimeout(typeTimer)
      } else {
        setIsVisible(true)
      }
    }, delay)
    return () => clearTimeout(showTimer)
  }, [delay, isUser])

  if (!isVisible && !isTyping) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[85%] px-5 py-3 rounded-2xl ${
          isUser
            ? "bg-foreground/10 text-foreground"
            : "bg-gradient-to-br from-glow-purple/10 to-glow-blue/10 border border-glow-purple/20 text-foreground/90"
        }`}
      >
        {isTyping ? <TypingIndicator /> : <p className="leading-relaxed">{message}</p>}
      </div>
    </motion.div>
  )
}

export function ChatSamples() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeConvo, setActiveConvo] = useState(0)
  const [key, setKey] = useState(0)

  const handleConvoChange = (index: number) => {
    setActiveConvo(index)
    setKey(prev => prev + 1)
  }

  return (
    <section ref={ref} className="py-32 px-6 relative">
      {/* Background elements */}
      <div className="absolute right-1/4 top-0 w-[400px] h-[400px] rounded-full bg-glow-purple/22" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-glow-purple text-sm tracking-[0.3em] uppercase mb-6 font-medium">
            How Orwyn Responds
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">
            Conversations that heal
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            See how Orwyn reflects your thoughts with empathy and understanding
          </p>
        </motion.div>

        {/* Conversation selector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 mb-8"
        >
          {conversations.map((_, index) => (
            <button
              key={index}
              onClick={() => handleConvoChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeConvo === index
                  ? "bg-glow-purple w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </motion.div>

        {/* Chat preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 p-8 md:p-12 overflow-hidden"
        >
          {/* Glassmorphism effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-glow-purple/5 via-transparent to-glow-blue/5" />
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-glow-purple/35" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-glow-blue/35" />

          <div className="relative space-y-6" key={key}>
            <ChatMessage
              message={conversations[activeConvo].user}
              isUser={true}
              delay={0}
            />
            <ChatMessage
              message={conversations[activeConvo].orwyn}
              isUser={false}
              delay={800}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
