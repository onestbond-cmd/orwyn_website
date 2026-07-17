"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmotionProvider } from "@/contexts/emotion-context"
import { WaitlistForm } from "@/components/waitlist-form"

export default function Post() {
  return (
    <EmotionProvider>
      <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden pt-24">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/3 w-full max-w-lg h-[500px] bg-glow-blue/22 rounded-full" />
        </div>
        <Header />
        <article className="max-w-3xl mx-auto px-6 py-20 relative z-10">
          <div className="mb-12">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Heartbreak Science</p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">What Is Closure, Actually? (And Why Most People Never Get It)</h1>
            <p className="text-muted-foreground text-lg">You're not waiting for an answer. You're waiting for your brain to stop asking the question.</p>
          </div>

          <div className="space-y-8 text-foreground/70 leading-relaxed text-base md:text-lg">
            <p>
              "I just need closure" is one of the most common things people say after a relationship ends — and one of the least understood. We treat it like a missing puzzle piece: one conversation, one explanation, one apology, and the ache will finally make sense and stop. Psychology research suggests that's not quite how it works.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">Closure is a brain thing, not a conversation thing</h2>
              <p>
                Researchers who study attachment describe the need for closure not as something missing from the story, but as a sign that your attachment system is struggling to tolerate separation and uncertainty. Our brains are wired to dislike open loops. When we don't understand why something happened, we instinctively build a story to fill the gap — and until that story feels complete, part of us keeps circling back, hoping the next conversation will finally close it.
              </p>
              <p>
                That's why even a genuinely honest explanation from an ex often doesn't bring the relief people expect. The ache was never really about the missing information. It was about the discomfort of not knowing, which a single conversation can rarely fully resolve.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">Why the closure conversation often doesn't come</h2>
              <p>
                If you're waiting on someone else to give you closure, it's worth knowing why that so often doesn't happen. Sometimes the other person genuinely lacks the emotional language to explain themselves clearly. Sometimes withholding an explanation is, whether consciously or not, a way of avoiding accountability. And often, someone has emotionally checked out of a relationship long before it ends — meaning they've already processed the loss internally and don't feel the same unfinished business you do.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">The uncomfortable but freeing part: closure is often a myth</h2>
              <p>
                A lot of psychological writing on this is blunt about it: closure, as most people imagine it, is largely a myth. You don't need a tidy ending to move forward — you need to learn to live alongside an unfinished story. That reframe matters, because it moves the responsibility from "I need them to give me closure" to "I can build my own sense of resolution," which is something entirely within your control.
              </p>
              <p>
                One method researchers point to that actually helps: writing about the loss in a way that doesn't assign blame and instead looks for what you learned or gained, even something small. This kind of reflective writing has been linked to a real reduction in the emotional charge of the memory over time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">A different way to get there</h2>
              <p>
                If you don't have someone to safely think out loud with — or you've said the same three sentences to every friend already and you're tired of hearing yourself repeat it — that's exactly the kind of space Orwyn is built for. Not to tell you what your ex was thinking, but to help you sit with the story you're building for yourself, until it feels like enough.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-12 border-t border-border/20">
            <WaitlistForm mode="inline" />
          </div>
        </article>
        <div className="mt-20">
          <Footer hideCta={true} />
        </div>
      </main>
    </EmotionProvider>
  )
}
