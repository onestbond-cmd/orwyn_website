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
          <div className="absolute top-0 right-1/4 w-full max-w-lg h-[500px] bg-glow-purple/22 rounded-full" />
        </div>
        <Header />
        <article className="max-w-3xl mx-auto px-6 py-20 relative z-10">
          <div className="mb-12">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Heartbreak Science</p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Why Heartbreak Physically Hurts (And What Actually Helps)</h1>
            <p className="text-muted-foreground text-lg">The tightness in your chest isn't dramatic. It's neurological.</p>
          </div>

          <div className="space-y-8 text-foreground/70 leading-relaxed text-base md:text-lg">
            <p>
              Somewhere between the third sleepless night and the moment you catch yourself re-reading old texts, you start to wonder if something is actually wrong with you. Your chest feels tight. Your stomach won't hold food right. You're exhausted in a way sleep doesn't fix. It feels dramatic to call it "pain" — but that's exactly what it is, and there's real science behind why.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">Your brain doesn't fully separate emotional pain from physical pain</h2>
              <p>
                When researchers scanned the brains of people who'd recently been through a breakup while they looked at photos of their ex, they found activation in the secondary somatosensory cortex and dorsal posterior insula — the same regions that process physical pain from things like a burn or a broken bone. Separately, romantic rejection has been shown to activate the anterior cingulate cortex and right ventral prefrontal cortex, again overlapping with physical pain circuitry.
              </p>
              <p>
                This is why "heartbreak" isn't just a metaphor. Your nervous system is registering the loss the way it would register an injury, because to your brain, in a very real sense, it is one.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">It behaves a lot like withdrawal — because it kind of is</h2>
              <p>
                Being in love keeps your brain's reward system busy, releasing dopamine, oxytocin, and serotonin — the same chemistry involved in bonding and pleasure. When that connection is suddenly cut off, your brain reacts the way it would to withdrawal from anything else it had come to rely on: intense craving, low mood, and a kind of restless physical discomfort. On top of that, heartbreak triggers a real stress response — a spike in cortisol that raises your heart rate and blood pressure, and can leave your immune system worse off too.
              </p>
              <p>
                One detail researchers found almost funny: regular acetaminophen (Tylenol) measurably reduces the experience of social pain in lab studies. Emotional and physical pain really do run on overlapping wiring.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">So what actually helps?</h2>
              <p>
                Knowing it's neurological doesn't make it stop hurting, but it does take away the extra layer of "why can't I just get over this" self-judgment — which, ironically, is often what makes healing slower. A few things that consistently help based on what this research points to:
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-foreground/30">
                <li><strong className="text-foreground/90 font-medium">Treat it like recovery, not a mood.</strong> Sleep, food, and movement aren't small things right now — your body is under real physiological stress.</li>
                <li><strong className="text-foreground/90 font-medium">Give the craving somewhere to go.</strong> The urge to check their socials or re-read old messages is your brain looking for its reward hit. Naming that urge out loud, even to yourself, weakens its grip.</li>
                <li><strong className="text-foreground/90 font-medium">Don't isolate the pain.</strong> Talking through what you're feeling, even briefly, has been shown to reduce the intensity of the stress response. It doesn't need to be a big conversation — it needs to happen.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">If you don't want to explain it to anyone yet</h2>
              <p>
                Sometimes you're not ready to unpack this with a friend, or you've already talked their ear off, or it's 2am and no one's awake. That's the space Orwyn exists for — somewhere to put words to what you're feeling, without needing to perform being okay, and without anyone getting tired of hearing about it.
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
