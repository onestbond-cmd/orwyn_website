"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmotionProvider } from "@/contexts/emotion-context"

const posts = [
  {
    slug: "why-heartbreak-physically-hurts",
    title: "Why Heartbreak Physically Hurts (And What Actually Helps)",
    excerpt: "Your chest tightness and upset stomach after a breakup aren't 'just in your head.' Here's what neuroscience says is actually happening in your brain and body.",
  },
  {
    slug: "psychology-of-closure",
    title: "What Is Closure, Actually? (And Why Most People Never Get It)",
    excerpt: "You keep waiting for the conversation that will make it make sense. Here's what psychology research says about why closure rarely comes the way we expect — and what to do instead.",
  },
  {
    slug: "why-your-20s-feel-so-lonely",
    title: "Why Your 20s Feel So Lonely (Even When You're Surrounded by People)",
    excerpt: "80% of Gen Z say they've felt lonely in the past year. If you feel it too, here's what's actually going on — and why it's not a personal failure.",
  },
]

export default function BlogIndexPage() {
  return (
    <EmotionProvider>
      <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden pt-24">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[500px] bg-glow-blue/22 rounded-full" />
        </div>
        <Header />
        <div className="max-w-3xl mx-auto px-6 py-20 relative z-10">
          <div className="mb-12">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Reflections</p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Notes on heartbreak, closure, and being human</h1>
            <p className="text-muted-foreground text-lg">Things we've learned about the feelings Orwyn was built to sit with.</p>
          </div>

          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block border-t border-border/20 pt-8 group"
              >
                <h2 className="text-xl md:text-2xl font-medium tracking-tight text-foreground group-hover:text-foreground/70 transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-foreground/60 leading-relaxed">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <Footer hideCta={true} />
        </div>
      </main>
    </EmotionProvider>
  )
}
