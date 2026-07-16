"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Is this therapy?",
    answer: "No, Orwyn is not therapy and should not be used as a replacement for professional mental health care. Orwyn is an AI companion designed for self-reflection and emotional awareness. If you're experiencing serious mental health challenges, please seek help from a qualified professional."
  },
  {
    question: "How is Orwyn different from ChatGPT?",
    answer: "ChatGPT is designed to provide answers and information. Orwyn is designed to reflect. We don't give advice or solve problems - we help you understand your own thoughts and emotions by reflecting them back to you in a thoughtful, human way."
  },
  {
    question: "Does Orwyn store my data?",
    answer: "Your privacy is sacred to us. We store only what's necessary to maintain conversation context and provide personalized reflections. Your conversations are encrypted and never shared with third parties. You can delete your data at any time."
  },
  {
    question: "Is it safe to share personal things?",
    answer: "Orwyn is designed to be a safe space. We don't judge, we don't give unsolicited advice, and we don't share your information. However, if you're in crisis or experiencing thoughts of self-harm, please reach out to a mental health professional or crisis helpline immediately."
  },
  {
    question: "How does Orwyn remember things about me?",
    answer: "Orwyn uses your conversation history to understand your emotional patterns and provide more meaningful reflections over time. This memory helps Orwyn become a more attuned companion, but you're always in control and can reset this memory whenever you want."
  }
]

function FaqItem({ faq, index, isOpen, onToggle }: { 
  faq: typeof faqs[0]
  index: number
  isOpen: boolean
  onToggle: () => void 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-border/30 last:border-none"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span 
          id={`faq-question-${index}`}
          className="text-lg font-medium pr-8 group-hover:text-glow-purple transition-colors duration-300"
        >
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-muted-foreground leading-relaxed pr-12">
          {faq.answer}
        </p>
      </motion.div>
    </motion.div>
  )
}

export function Faq() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section ref={ref} id="faq" className="py-32 px-6 relative">
      <div className="absolute left-0 top-1/3 w-[300px] h-[400px] rounded-full bg-glow-purple/22" />

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">
            Questions
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">
            Frequently asked
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 px-8"
        >
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>


      </div>
    </section>
  )
}
