import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'
import { ABOUT } from '../data/content'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:px-8">
      <SectionTitle index="01">About Me</SectionTitle>
      <div className="grid gap-10 md:grid-cols-[1fr_280px] md:items-start">
        <motion.div
          className="space-y-4 text-slate-400 leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {ABOUT.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </motion.div>
        <motion.div
          className="relative mx-auto w-full max-w-[280px]"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -6 }}
        >
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-sky-500/40 via-violet-500/30 to-emerald-500/25 opacity-75 blur-sm" />
          <div className="relative overflow-hidden rounded-xl border border-[#233554] bg-[#112240]/90 p-8 shadow-xl shadow-sky-950/30 backdrop-blur-sm">
            <div className="font-mono text-sm text-sky-400">Graphic Era Deemed University</div>
            <div className="mt-2 text-[#ccd6f6]">B.Tech · 2022–2026</div>
            <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-slate-400">
              <li>DSA &amp; Web Development</li>
              <li>200+ LeetCode</li>
              <li>Full-stack &amp; Cloud basics</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
