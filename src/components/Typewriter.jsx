import { useState, useEffect } from 'react'

const TYPING_MS = 55
const PAUSE_END_MS = 2200
const PAUSE_DELETE_MS = 600

/**
 * Cycles through phrases with type / delete animation (hero subtitle).
 */
export function Typewriter({ phrases }) {
  const [phase, setPhase] = useState('typing')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const current = phrases[phraseIndex % phrases.length] ?? ''

  useEffect(() => {
    if (!current) return undefined

    if (phase === 'typing') {
      if (charIndex >= current.length) {
        const t = setTimeout(() => setPhase('pauseEnd'), PAUSE_END_MS)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setCharIndex((c) => c + 1), TYPING_MS)
      return () => clearTimeout(t)
    }

    if (phase === 'pauseEnd') {
      const t = setTimeout(() => setPhase('deleting'), PAUSE_DELETE_MS)
      return () => clearTimeout(t)
    }

    if (phase === 'deleting') {
      if (charIndex <= 0) {
        const t = setTimeout(() => {
          setPhraseIndex((i) => (i + 1) % phrases.length)
          setPhase('typing')
        }, 200)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setCharIndex((c) => Math.max(0, c - 1)), TYPING_MS / 2)
      return () => clearTimeout(t)
    }

    return undefined
  }, [phase, charIndex, current, phrases.length])

  const visible = current.slice(0, charIndex)

  return (
    <span className="inline-block min-h-[1.2em]">
      {visible}
      <span className="ml-0.5 inline-block h-[1em] w-0.5 translate-y-0.5 animate-pulse bg-zinc-300 align-middle" />
    </span>
  )
}
