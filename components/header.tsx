"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#what-is-orwyn" },
  { label: "Features", href: "/#how-it-works" },
  { label: "App", href: "/#app-showcase" },
  { label: "Why Orwyn", href: "/#why-orwyn" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
      
      // Determine active section (only on home page)
      if (window.location.pathname !== '/') return
      
      let current = "main-content"
      const sections = navItems.map(item => item.href === "/" ? "main-content" : item.href.replace('/', '').slice(1)).filter(Boolean)
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            current = section
            break
          }
        }
      }
      setActiveSection(current)
    }
    
    // Call once to set initial state
    handleScroll()
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    if (window.location.pathname !== '/') {
      window.location.href = href;
      return;
    }
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    const targetId = href.replace('/', '')
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link focus:top-4 focus:left-4 focus:z-[60]">
        Skip to content
      </a>
      
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          hasScrolled 
            ? "bg-background/85 backdrop-blur-xl shadow-lg shadow-foreground/[0.02]" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20" aria-label="Main navigation">
            {/* Logo - Using PNG from public folder */}
            <motion.a 
              href="/" 
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-8 h-8 rounded-xl overflow-hidden shadow-lg shadow-glow-purple/20 group-hover:shadow-glow-purple/40 transition-shadow duration-300">
                <img
                  src="/logo.png"
                  alt="Orwyn by Onestbond"
                  width={32}
                  height={32}
                />
              </div>
              <span className="text-xl font-semibold tracking-tight text-foreground">
                Orwyn
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    activeSection === (item.href === "/" ? "main-content" : item.href.replace('/', '').slice(1))
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-sm font-semibold px-5 py-2.5 bg-foreground text-background rounded-xl hover:bg-foreground/90 transition-all duration-200 shadow-lg shadow-foreground/10 hover:shadow-xl hover:shadow-foreground/15 flex items-center gap-2"
              >
                Get Started
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 text-muted-foreground hover:text-foreground hover:bg-foreground/[0.06] rounded-xl transition-all duration-200"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border/30"
            >
              <div className="px-4 py-6 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                      activeSection === (item.href === "/" ? "main-content" : item.href.replace('/', '').slice(1))
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="h-px bg-border/30 my-4" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
