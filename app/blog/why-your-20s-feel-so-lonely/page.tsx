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
          <div className="absolute top-0 right-1/3 w-full max-w-lg h-[500px] bg-glow-purple/22 rounded-full" />
        </div>
        <Header />
        <article className="max-w-3xl mx-auto px-6 py-20 relative z-10">
          <div className="mb-12">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Heartbreak Science</p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Why Your 20s Feel So Lonely (Even When You're Surrounded by People)</h1>
            <p className="text-muted-foreground text-lg">It's not just you. It's practically the whole generation.</p>
          </div>

          <div className="space-y-8 text-foreground/70 leading-relaxed text-base md:text-lg">
            <p>
              You can be in a group chat with fifty people, have your notifications constantly lighting up, and still feel like nobody actually knows what's going on with you. If that sounds familiar, you're far from alone in feeling alone — surveys find that around 80% of Gen Z say they've felt lonely in the past year, compared to less than half of baby boomers. Millennials and Gen Z consistently report more disconnection than older generations, even though they're the most digitally "connected" people in history.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">More contact, less connection</h2>
              <p>
                Part of the paradox is that being constantly online isn't the same as being known. Research on Gen Z loneliness points out that this generation is the most connected in history and also the loneliest — the issue isn't quantity of contact, it's quality. You can have a hundred people who'll like your story and zero people you'd call at 2am. Loneliness shows up even among people with plenty of online interaction, because the kind of connection that actually reduces loneliness is different from the kind social media is built to maximize.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">The scaffolding that used to build friendships automatically is gone</h2>
              <p>
                In school, friendships mostly happened to you — same classroom, same lunch table, same routine, every day, for years. Your 20s remove almost all of that structure at once. Expensive housing keeps people moving or living in unstable situations, fewer people join the clubs, teams, and institutions that used to create built-in social circles, and suddenly making a friend requires actual deliberate effort in a way it never did before. Nobody really teaches you how to do that, so it can feel like everyone else somehow knows a trick you missed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">It's tangled up with self-worth too</h2>
              <p>
                Studies on this generation specifically point to low self-esteem, being single, and social anxiety as major contributing factors to the loneliness so many report — and researchers have also found a link between perfectionism and loneliness in Gen Z specifically, where the pressure to appear like you have it together makes it harder to be honestly vulnerable with anyone, which is exactly what real connection requires.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">What to actually do with that</h2>
              <p>
                None of this means the loneliness isn't real or that you're failing at something everyone else figured out. It means the structures that used to make connection automatic have mostly disappeared, and rebuilding it takes real, deliberate effort — small, low-stakes honesty with the people around you, more than big gestures. And on the nights that effort feels like too much, or there's genuinely no one awake to talk to, Orwyn is there as a space to put the feeling into words anyway, without needing anyone else's timing to line up with yours.
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
