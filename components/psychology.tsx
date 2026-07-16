"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { WaitlistModal } from "@/components/waitlist-form"

const humanStories = [
  {
    feeling: "When you can't sleep at 3am",
    insight: "and your thoughts won't quiet down",
    description: "Those late nights when everything feels heavy. When you replay conversations. When anxiety whispers. Orwyn is there - not to fix, but to listen. To help you untangle the mess.",
    testimonial: "I used to dread sleepless nights. Now they're when I understand myself best.",
    author: "Sarah, 28"
  },
  {
    feeling: "When nobody seems to get it",
    insight: "and you're tired of explaining",
    description: "Sometimes the people closest to us try to help but miss the mark. They give advice when you need understanding. Orwyn doesn't give advice. It helps you find your own answers.",
    testimonial: "For the first time, I felt truly heard. Not judged. Not fixed. Just heard.",
    author: "James, 34"
  },
  {
    feeling: "When you don't recognize yourself",
    insight: "and wonder where 'you' went",
    description: "Life changes us. Sometimes we lose ourselves in roles - parent, employee, partner. Orwyn helps you reconnect with the person underneath all the labels.",
    testimonial: "Orwyn asked me a simple question and I cried for an hour. I needed that.",
    author: "Maya, 41"
  },
  {
    feeling: "When you're fine but not fine",
    insight: "and can't explain why",
    description: "That strange feeling when everything looks okay on paper but something's off. Orwyn helps you explore the feelings you can't quite name yet.",
    testimonial: "I didn't know what I was feeling until Orwyn helped me see it.",
    author: "David, 26"
  }
]

const realMoments = [
  "The first time someone says 'I understand' and means it",
  "Realizing a pattern you never noticed before",
  "Finally putting words to that feeling",
  "Feeling lighter after getting it all out",
  "Understanding why you react the way you do",
  "Accepting yourself a little more each day"
]

export function Psychology() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeStory, setActiveStory] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % humanStories.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Warm, organic background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-[40%_60%_55%_45%/50%_40%_60%_50%] bg-emotion-calm/20"
        />
        <motion.div
          animate={{ opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-[55%_45%_50%_50%/45%_55%_45%_55%] bg-emotion-hope/20"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight leading-snug">
            We built Orwyn for the moments
            <br />
            <span className="italic text-foreground/70">when you need someone most</span>
          </h2>
        </motion.div>

        {/* Human stories cards */}
        <div className="space-y-6 mb-24">
          {humanStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              onClick={() => setActiveStory(index)}
              className={`group relative p-8 md:p-10 rounded-3xl cursor-pointer transition-all duration-700 ${
                activeStory === index 
                  ? "bg-foreground/[0.03] border border-foreground/[0.08]" 
                  : "hover:bg-foreground/[0.02]"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-serif font-light mb-1">
                    {story.feeling}
                  </h3>
                  <p className="text-foreground/50 text-lg font-light italic mb-4">
                    {story.insight}
                  </p>
                  
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: activeStory === index ? "auto" : 0,
                      opacity: activeStory === index ? 1 : 0
                    }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground/60 leading-relaxed mb-6">
                      {story.description}
                    </p>
                    
                    {/* Testimonial */}
                    <div className="border-l-2 border-emotion-hope/30 pl-5">
                      <p className="text-foreground/70 font-serif italic">
                        &quot;{story.testimonial}&quot;
                      </p>
                      <p className="text-muted-foreground/50 text-sm mt-2">
                        - {story.author}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Indicator */}
                <div className={`hidden md:block w-2 h-2 rounded-full mt-3 transition-colors duration-500 ${
                  activeStory === index ? "bg-emotion-hope" : "bg-foreground/10"
                }`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real moments ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
          className="relative py-10"
        >
          <p className="text-center text-muted-foreground/40 text-sm mb-8 tracking-wide">
            Small moments that change everything
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {realMoments.map((moment, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="px-5 py-2.5 rounded-full bg-foreground/[0.03] border border-foreground/[0.06] text-muted-foreground/60 text-sm font-light"
              >
                {moment}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Final human message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-center mt-20 max-w-2xl mx-auto"
        >
          <p className="text-xl md:text-2xl font-serif font-light text-foreground/80 leading-relaxed">
            You don&apos;t need to have it all figured out.
          </p>
          <p className="text-xl md:text-2xl font-serif font-light text-foreground/60 leading-relaxed mt-3 italic">
            You just need a safe space to start.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-12"
          >
            <div className="flex justify-center mt-8">
              <WaitlistModal />
            </div>
            <p className="text-muted-foreground/60 text-sm mt-5 font-light">
              Free. Private. Always here.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
