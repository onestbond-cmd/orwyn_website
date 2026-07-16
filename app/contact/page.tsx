"use client"

import { useState } from 'react'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmotionProvider } from "@/contexts/emotion-context"

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const formData = new FormData(e.currentTarget)
    formData.append('access_key', 'YOUR_WEB3FORMS_KEY')
    
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <EmotionProvider>
      <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden pt-24">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[500px] bg-glow-blue/22 rounded-full" />
        </div>
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-light tracking-tight mb-8">Contact Us</h1>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Have questions or just want to say hi? We're building something for people who deserve to be heard, and we want to hear from you.
          </p>
          <div className="bg-card/20 backdrop-blur-xl border border-border/30 rounded-3xl p-8 md:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="subject" value="New message from Orwyn website" />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-glow-purple/40 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-glow-purple/40 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/80">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-glow-purple/40 transition-all"
                  placeholder="How can we help?"
                />
              </div>

              {status === 'success' && (
                <p className="text-sm text-emerald-400 font-medium">
                  Message sent. We'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400 font-medium">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full sm:w-auto px-10 py-4 bg-foreground text-background font-medium rounded-xl hover:bg-foreground/90 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
        <div className="mt-32">
          <Footer />
        </div>
      </main>
    </EmotionProvider>
  )
}
