"use client"

import { useState, useCallback, useEffect } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

function ClientPortal({ 
  open, 
  children 
}: { 
  open: boolean
  children: React.ReactNode 
}) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted || !open) return null
  
  return createPortal(children, document.body)
}

interface WaitlistFormProps {
  mode: "modal" | "inline"
  onClose?: () => void
}

export function WaitlistForm({ 
  mode, 
  onClose 
}: WaitlistFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.get('EMAIL'),
          fname: data.get('FNAME'),
        }),
      })
      const json = await res.json()

      if (json.success) {
        setStatus('success')
        form.reset()
        if (typeof window !== 'undefined' && (window as any).gtag) {
          ;(window as any).gtag('event', 'waitlist_signup', {
            event_category: 'engagement',
            event_label: 'Waitlist Form',
          })
        }
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const formContent = (
    <div className={`
      ${mode === 'modal' 
        ? 'bg-[#111111] border border-white/10 rounded-2xl p-8 w-full max-w-md mx-auto shadow-2xl shadow-black/60' 
        : 'w-full max-w-md mx-auto'
      }
    `}>
      {mode === 'modal' && (
        <div className="flex items-center 
          justify-between mb-6">
          <div>
            <p className="text-xs tracking-[0.2em] 
              uppercase text-foreground/40 mb-1">
              Early Access
            </p>
            <h3 className="text-xl font-medium 
              text-foreground">
              Join the Orwyn Waitlist
            </h3>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center 
                justify-center rounded-full 
                border border-white/10 
                text-foreground/40 
                hover:text-foreground 
                hover:border-white/30 
                transition-all duration-200"
              >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {status === 'success' ? (
        <div className="text-center py-8">
          <div className="w-12 h-12 rounded-full 
            bg-emerald-500/10 border border-emerald-500/20 
            flex items-center justify-center 
            mx-auto mb-4">
            <span className="text-emerald-400 
              text-xl">✓</span>
          </div>
          <p className="text-foreground font-medium 
            mb-2">
            You're on the list.
          </p>
          <p className="text-foreground/50 text-sm">
            We'll reach out the moment Orwyn launches.
          </p>
          {mode === 'modal' && onClose && (
            <button
              onClick={onClose}
              className="mt-6 text-sm 
                text-foreground/40 
                hover:text-foreground/60 
                transition-colors"
            >
              Close
            </button>
          )}
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit} 
          className="space-y-3"
        >
          <div>
            <input
              type="text"
              name="FNAME"
              placeholder="First name"
              className="w-full bg-white/5 border 
                border-white/10 rounded-xl px-4 py-3 
                text-foreground text-sm
                placeholder:text-foreground/30
                focus:outline-none 
                focus:border-white/30
                focus:bg-white/8
                transition-all duration-200"
            />
          </div>
          <div>
            <input
              type="email"
              name="EMAIL"
              required
              placeholder="Email address"
              className="w-full bg-white/5 border 
                border-white/10 rounded-xl px-4 py-3 
                text-foreground text-sm
                placeholder:text-foreground/30
                focus:outline-none 
                focus:border-white/30
                focus:bg-white/8
                transition-all duration-200"
            />
          </div>

          {status === 'error' && (
            <p className="text-red-400 text-xs 
              text-center">
              Something went wrong. Try again or email 
              contact@onestbond.com
            </p>
          )}

          <label className="flex items-start gap-2 text-xs text-foreground/50 pt-1">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-0.5 accent-foreground"
            />
            <span>
              I agree to receive email updates about Orwyn's launch. See our{" "}
              <a href="/privacy" className="underline underline-offset-2 hover:text-foreground/70">
                Privacy Policy
              </a>.
            </span>
          </label>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-3.5 bg-foreground 
              text-background font-medium text-sm
              rounded-xl hover:bg-foreground/90 
              transition-all duration-300 
              disabled:opacity-50 
              disabled:cursor-not-allowed
              mt-2"
          >
            {status === 'sending' 
              ? 'Joining...' 
              : 'Get early access'}
          </button>

          <p className="text-foreground/25 text-xs 
            text-center pt-1">
            No spam. Just a launch notification.
          </p>
        </form>
      )}
    </div>
  )

  if (mode === 'inline') {
    return formContent
  }

  return formContent
}

export function WaitlistModal({ 
  className 
}: { 
  className?: string 
}) {
  const [open, setOpen] = useState(false)

  const handleOpen = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      setOpen(true)
    },
    []
  )

  return (
    <>
      <button
        onClick={handleOpen}
        className={className ?? "group relative px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 bg-foreground text-background hover:bg-foreground/90 hover:shadow-2xl hover:shadow-foreground/20 flex items-center gap-2 w-full sm:w-auto justify-center"}
      >
        Join the waitlist
      </button>

      <ClientPortal open={open}>
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setOpen(false)}
                style={{ 
                  position: 'fixed',
                  inset: 0,
                  background: 'rgba(0,0,0,0.75)',
                  backdropFilter: 'blur(4px)',
                  zIndex: 9998,
                }}
              />
              <div
                style={{
                  position: 'fixed',
                  inset: 0,
                  zIndex: 9999,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1rem',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ 
                    duration: 0.3, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  style={{ width: '100%', maxWidth: '28rem' }}
                  onClick={e => e.stopPropagation()}
                >
                  <WaitlistForm
                    mode="modal"
                    onClose={() => setOpen(false)}
                  />
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </ClientPortal>
    </>
  )
}
