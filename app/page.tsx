"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { EmotionProvider, useEmotion } from "@/contexts/emotion-context"
import dynamic from 'next/dynamic'

const WhatIsOrwyn = dynamic(
  () => import('@/components/what-is-orwyn').then(m => ({ default: m.WhatIsOrwyn })),
  { loading: () => <div className="min-h-[600px]" />, ssr: false }
)

const EmotionalSpectrum = dynamic(
  () => import('@/components/emotional-spectrum').then(m => ({ default: m.EmotionalSpectrum })),
  { loading: () => <div className="min-h-[700px]" />, ssr: false }
)

const Features = dynamic(
  () => import('@/components/features').then(m => ({ default: m.Features })),
  { loading: () => <div className="min-h-[800px]" />, ssr: false }
)

const AppShowcase = dynamic(
  () => import('@/components/app-showcase').then(m => ({ default: m.AppShowcase })),
  { loading: () => <div className="min-h-[700px]" />, ssr: false }
)

const ChatSamples = dynamic(
  () => import('@/components/chat-samples').then(m => ({ default: m.ChatSamples })),
  { loading: () => <div className="min-h-[600px]" />, ssr: false }
)

const WhyOrwyn = dynamic(
  () => import('@/components/why-orwyn').then(m => ({ default: m.WhyOrwyn })),
  { loading: () => <div className="min-h-[600px]" />, ssr: false }
)

const Psychology = dynamic(
  () => import('@/components/psychology').then(m => ({ default: m.Psychology })),
  { loading: () => <div className="min-h-[700px]" />, ssr: false }
)

const Experience = dynamic(
  () => import('@/components/experience').then(m => ({ default: m.Experience })),
  { loading: () => <div className="min-h-[500px]" />, ssr: false }
)

const Faq = dynamic(
  () => import('@/components/faq').then(m => ({ default: m.Faq })),
  { loading: () => <div className="min-h-[500px]" />, ssr: false }
)

const ContactSection = dynamic(
  () => import('@/components/contact-section').then(m => ({ default: m.ContactSection })),
  { loading: () => <div className="min-h-[400px]" />, ssr: false }
)

const Footer = dynamic(
  () => import('@/components/footer').then(m => ({ default: m.Footer })),
  { loading: () => <div className="min-h-[300px]" />, ssr: false }
)

function PageContent() {
  const { activeEmotion } = useEmotion()

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Full-page emotional background glow */}
      <motion.div
        key={activeEmotion.name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${activeEmotion.cssVar} 0%, transparent 50%)`,
          opacity: 0.15,
        }}
      />
      
      {/* Secondary ambient glow at bottom */}
      <motion.div
        key={`${activeEmotion.name}-bottom`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse 100% 40% at 50% 100%, ${activeEmotion.cssVar} 0%, transparent 40%)`,
          opacity: 0.08,
        }}
      />

      {/* Floating particles matching emotion */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${activeEmotion.name}-${i}`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              y: [0, -100, -200],
              x: [0, (i % 2 === 0 ? 20 : -20), 0]
            }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity, 
              delay: i * 1.5,
              ease: "easeInOut"
            }}
            className={`absolute w-2 h-2 rounded-full ${activeEmotion.color}`}
            style={{
              left: `${15 + i * 15}%`,
              bottom: "10%",
              filter: "blur(1px)"
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Header />
        <Hero />
        <section id="what-is-orwyn">
          <WhatIsOrwyn />
        </section>
        <section id="emotions">
          <EmotionalSpectrum />
        </section>
        <section id="how-it-works">
          <Features />
        </section>
        <section id="app-showcase">
          <AppShowcase />
        </section>
        <ChatSamples />
        <section id="why-orwyn">
          <WhyOrwyn />
        </section>
        <Psychology />
        <section id="experience">
          <Experience />
        </section>
        <section id="faq">
          <Faq />
        </section>
        <ContactSection />
        <Footer hideCta={true} />
      </div>
    </main>
  )
}

export default function Home() {
  return (
    <EmotionProvider>
      <PageContent />
    </EmotionProvider>
  )
}
