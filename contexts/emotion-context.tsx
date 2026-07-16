"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export type Emotion = {
  name: string
  color: string
  cssVar: string
  glow: string
  description: string
  message: string
  humanTouch: string
}

export const emotions: Emotion[] = [
  {
    name: "Calm",
    color: "bg-emotion-calm",
    cssVar: "var(--emotion-calm)",
    glow: "shadow-[0_0_80px_var(--emotion-calm)]",
    description: "Finding stillness",
    message: "You seem more at peace today. What shifted for you?",
    humanTouch: "Like a quiet morning before anyone else wakes up"
  },
  {
    name: "Sadness",
    color: "bg-emotion-sad",
    cssVar: "var(--emotion-sad)",
    glow: "shadow-[0_0_80px_var(--emotion-sad)]",
    description: "Honoring what hurts",
    message: "It sounds like you're carrying something. I'm here with you.",
    humanTouch: "Sometimes tears are just feelings that needed to come out"
  },
  {
    name: "Anxiety",
    color: "bg-emotion-anxious",
    cssVar: "var(--emotion-anxious)",
    glow: "shadow-[0_0_80px_var(--emotion-anxious)]",
    description: "When thoughts race",
    message: "That restless feeling... let's slow down together.",
    humanTouch: "Your mind is trying to prepare you for something"
  },
  {
    name: "Joy",
    color: "bg-emotion-joy",
    cssVar: "var(--emotion-joy)",
    glow: "shadow-[0_0_80px_var(--emotion-joy)]",
    description: "Moments of light",
    message: "I can feel the warmth in your words. Tell me more.",
    humanTouch: "These moments matter - let yourself feel it fully"
  },
  {
    name: "Anger",
    color: "bg-emotion-anger",
    cssVar: "var(--emotion-anger)",
    glow: "shadow-[0_0_80px_var(--emotion-anger)]",
    description: "When something matters",
    message: "That frustration is telling you something important.",
    humanTouch: "Anger often means something you care about was hurt"
  },
  {
    name: "Hope",
    color: "bg-emotion-hope",
    cssVar: "var(--emotion-hope)",
    glow: "shadow-[0_0_80px_var(--emotion-hope)]",
    description: "Seeing possibility",
    message: "There's something new growing in you. What is it?",
    humanTouch: "Hope is brave - it means you're willing to try again"
  },
  {
    name: "Love",
    color: "bg-emotion-love",
    cssVar: "var(--emotion-love)",
    glow: "shadow-[0_0_80px_var(--emotion-love)]",
    description: "Connection",
    message: "The love you're describing... it's changing you, isn't it?",
    humanTouch: "Love is how we become more ourselves, not less"
  },
  {
    name: "Fear",
    color: "bg-emotion-fear",
    cssVar: "var(--emotion-fear)",
    glow: "shadow-[0_0_80px_var(--emotion-fear)]",
    description: "Facing the unknown",
    message: "What would you do if you knew you'd be okay no matter what?",
    humanTouch: "Fear means you're at the edge of something new"
  }
]

type EmotionContextType = {
  activeEmotion: Emotion
  setActiveEmotion: (emotion: Emotion) => void
}

const EmotionContext = createContext<EmotionContextType | undefined>(undefined)

export function EmotionProvider({ children }: { children: ReactNode }) {
  const [activeEmotion, setActiveEmotion] = useState<Emotion>(emotions[0])

  return (
    <EmotionContext.Provider value={{ activeEmotion, setActiveEmotion }}>
      {children}
    </EmotionContext.Provider>
  )
}

export function useEmotion() {
  const context = useContext(EmotionContext)
  if (!context) {
    throw new Error("useEmotion must be used within an EmotionProvider")
  }
  return context
}
