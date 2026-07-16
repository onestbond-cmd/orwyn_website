"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Instagram, Twitter } from "lucide-react"
import { WaitlistForm } from "@/components/waitlist-form"

const directLinks = [
  {
    name: "Email",
    value: "contact@onestbond.com",
    icon: Mail,
    href: "mailto:contact@onestbond.com",
    color: "group-hover:text-glow-blue"
  },
  {
    name: "Phone",
    value: "+91 87634 95827",
    icon: Phone,
    href: "tel:+918763495827",
    color: "group-hover:text-glow-purple"
  }
]

const socialLinks = [
  {
    name: "X",
    value: "@orwyn_ai",
    icon: Twitter,
    href: "https://x.com/orwyn_ai",
    color: "group-hover:text-foreground"
  },
  {
    name: "Instagram",
    value: "@orwyn.ai",
    icon: Instagram,
    href: "https://www.instagram.com/orwyn_ai",
    color: "group-hover:text-pink-500"
  }
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-glow-blue/18 rounded-[100%] max-w-3xl mx-auto -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground/60 mb-4">
            Early Access
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-6">
            Be the first to<br />
            <span className="italic text-foreground/60">
              feel understood.
            </span>
          </h2>
          <p className="text-muted-foreground/60 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Orwyn is almost ready. Join the waitlist and we'll reach out the moment it launches.
          </p>
          <WaitlistForm mode="inline" />

          <div className="mt-16 pt-12 border-t border-border/20 text-left">
            <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
              
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground/40 mb-6">
                  Direct Contact
                </p>
                <div className="space-y-4">
                  {directLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`group flex items-center gap-4 transition-all duration-300 ${link.color}`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-foreground/5 border border-border/30 flex items-center justify-center group-hover:border-border/60 transition-all duration-300">
                        <link.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground/40 mb-0.5">
                          {link.name}
                        </p>
                        <p className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground/40 mb-6">
                  Follow Us
                </p>
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-4 transition-all duration-300 ${link.color}`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-foreground/5 border border-border/30 flex items-center justify-center group-hover:border-border/60 transition-all duration-300">
                        <link.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground/40 mb-0.5">
                          {link.name}
                        </p>
                        <p className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
