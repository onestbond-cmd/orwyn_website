"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { QrCode } from "lucide-react"

// Placeholder screens - you can replace these with actual app screenshots later
const screens = [
  {
    id: 1,
    title: "Daily Reflection",
    emotion: "calm",
    emotionColor: "bg-emotion-calm",
    placeholder: true,
    description: "Start each day with intention"
  },
  {
    id: 2,
    title: "Deep Conversation",
    emotion: "anxious",
    emotionColor: "bg-emotion-anxious",
    placeholder: true,
    description: "Unpack what weighs on you"
  },
  {
    id: 3,
    title: "Emotional Insights",
    emotion: "joy",
    emotionColor: "bg-emotion-joy",
    placeholder: true,
    description: "Patterns you never noticed"
  },
  {
    id: 4,
    title: "Memory Journal",
    emotion: "hope",
    emotionColor: "bg-emotion-hope",
    placeholder: true,
    description: "Your journey, remembered"
  }
]

const sampleChats = [
  {
    id: 1,
    emotion: "sad",
    emotionColor: "bg-emotion-sad",
    user: "I don't know why I feel so empty lately",
    orwyn: "That emptiness... when did you first notice it settling in?",
    timestamp: "2 days ago"
  },
  {
    id: 2,
    emotion: "anxious",
    emotionColor: "bg-emotion-anxious",
    user: "I have this presentation tomorrow and I can't stop overthinking",
    orwyn: "What's the worst version of tomorrow you keep replaying? Sometimes naming it takes away its power.",
    timestamp: "Yesterday"
  },
  {
    id: 3,
    emotion: "joy",
    emotionColor: "bg-emotion-joy",
    user: "I finally told her how I felt and she felt the same way!",
    orwyn: "That courage to be vulnerable... this is who you're becoming. How does it feel to be seen?",
    timestamp: "Today"
  }
]

export function AppShowcase() {
  const [activeScreen, setActiveScreen] = useState(0)

  return (
    <section id="showcase" className="py-32 px-6 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-glow-purple/18" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-muted-foreground/60 text-sm tracking-[0.3em] uppercase mb-4">
            The experience
          </p>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight">
            Designed for depth
          </h2>
          <p className="mt-6 text-muted-foreground/70 max-w-xl mx-auto">
            Every pixel crafted to create a safe space for self-discovery
          </p>
        </motion.div>

        {/* Phone mockups grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* App screens carousel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="flex justify-center">
              {/* Phone frame */}
              <div className="relative w-[min(280px,85vw)] h-[min(580px,175vw)] bg-card rounded-[3rem] border-[8px] border-foreground/10 shadow-2xl shadow-glow-purple/10 overflow-hidden">
                {/* Dynamic notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-background rounded-full z-20" />
                
                {/* Screen content */}
                <div className="absolute inset-0 bg-background">
                  {/* Placeholder screen with emotion color accent */}
                  <motion.div
                    key={activeScreen}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="h-full flex flex-col"
                  >
                    {/* Status bar area */}
                    <div className="h-16" />
                    
                    {/* Screen header */}
                    <div className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${screens[activeScreen].emotionColor} animate-breathe`} />
                        <span className="text-sm text-foreground/80">
                          {screens[activeScreen].title}
                        </span>
                      </div>
                    </div>

                    {/* Placeholder content area */}
                    <div className="flex-1 px-6 py-4">
                      <div className="h-full flex flex-col items-center justify-center border-2 border-dashed border-foreground/20 hover:border-foreground/30 transition-colors duration-300 rounded-2xl relative overflow-hidden group">
                        
                        <div className="relative mb-6">
                          {/* Ambient glow behind scanner */}
                          <div className={`absolute inset-0 scale-150 rounded-full ${screens[activeScreen].emotionColor} opacity-10 blur-xl transition-colors duration-500`} />
                          
                          {/* Scanner box */}
                          <div className="relative p-5 rounded-3xl bg-background/50 border border-foreground/10 backdrop-blur-sm shadow-xl z-10">
                            <QrCode className="w-20 h-20 text-foreground/80" strokeWidth={1.2} />
                            
                            {/* Animated scanner line */}
                            <motion.div 
                              className={`absolute left-4 right-4 h-0.5 ${screens[activeScreen].emotionColor} opacity-70 z-20 shadow-[0_0_8px_rgba(255,255,255,0.5)]`}
                              animate={{ top: ["15%", "85%", "15%"] }}
                              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                            />
                            
                            {/* Scanner corner markers */}
                            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-foreground/40 rounded-tl-sm" />
                            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-foreground/40 rounded-tr-sm" />
                            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-foreground/40 rounded-bl-sm" />
                            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-foreground/40 rounded-br-sm" />
                          </div>
                        </div>

                        <p className="text-foreground/90 font-medium text-sm text-center px-4 tracking-wide">
                          Coming to Play Store
                        </p>
                        <p className="text-muted-foreground/50 text-xs mt-2 text-center px-4 bg-foreground/5 py-1 rounded-full">
                          Launching soon
                        </p>
                      </div>
                    </div>

                    {/* Bottom nav hint */}
                    <div className="h-20 flex items-center justify-center">
                      <div className="w-32 h-1 bg-foreground/20 rounded-full" />
                    </div>
                  </motion.div>
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 opacity-20 ${screens[activeScreen].emotionColor} blur-3xl -z-10`} />
              </div>
            </div>

            {/* Screen selector */}
            <div className="flex justify-center gap-3 mt-8">
              {screens.map((screen, index) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreen(index)}
                  aria-label={`View ${screen.title} screen`}
                  className={`relative flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 -m-1`}
                >
                  <span className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeScreen === index 
                      ? `${screen.emotionColor} scale-125` 
                      : "bg-foreground/20 hover:bg-foreground/30"
                  }`} />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Sample conversations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-light mb-8 text-center lg:text-left">
              Real conversations, real growth
            </h3>
            
            {sampleChats.map((chat, index) => (
              <motion.div
                key={chat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group relative p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-foreground/5 hover:border-foreground/10 transition-all duration-500"
              >
                {/* Emotion indicator */}
                <div className={`absolute top-6 right-6 w-2 h-2 rounded-full ${chat.emotionColor} animate-breathe`} />
                
                {/* User message */}
                <div className="mb-4">
                  <p className="text-foreground/60 text-sm mb-1">You</p>
                  <p className="text-foreground/80 text-sm">
                    &ldquo;{chat.user}&rdquo;
                  </p>
                </div>

                {/* Orwyn response */}
                <div className="pl-4 border-l-2 border-foreground/10">
                  <p className="text-foreground/60 text-sm mb-1">Orwyn</p>
                  <p className="text-foreground/90 text-sm italic leading-relaxed">
                    &ldquo;{chat.orwyn}&rdquo;
                  </p>
                </div>

                {/* Timestamp */}
                <p className="text-muted-foreground/55 text-xs mt-4">
                  {chat.timestamp}
                </p>

                {/* Hover glow */}
                <div className={`absolute inset-0 rounded-2xl ${chat.emotionColor} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 -z-10`} />
              </motion.div>
            ))}

          </motion.div>
        </div>
      </div>
    </section>
  )
}
