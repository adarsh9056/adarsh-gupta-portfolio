import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'
import { ABOUT } from '../data/content'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:px-8">
      <SectionTitle index="01">About Me</SectionTitle>
      <motion.div
        className="mb-6 flex items-center gap-6 border-b border-zinc-800 px-4 py-3 font-mono text-xs text-zinc-400"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
      >
        <span className="text-zinc-100">Home</span>
        <span className="text-zinc-200">About</span>
        <span>Resume</span>
        <span>Portfolio</span>
      </motion.div>
      <div className="grid overflow-hidden border border-zinc-800 bg-zinc-950/70 md:grid-cols-[1fr_1.1fr]">
        <motion.div
          className="space-y-6 p-8 text-zinc-400 leading-relaxed md:p-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-300">About</p>
            <p className="mt-2 text-sm text-zinc-500">{ABOUT.paragraphs[0]}</p>
          </div>
          {ABOUT.paragraphs.slice(1).map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
          <div className="pt-6 text-sm text-zinc-500">
            <p>Graphic Era Deemed University</p>
            <p>B.Tech (2022 - 2026)</p>
          </div>
        </motion.div>
        <motion.div
          className="relative min-h-[360px] md:min-h-[500px]"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.01 }}
        >
          <img
            src="/profile-photo.png"
            alt="Adarsh Gupta portrait"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,0.62)_0%,rgba(9,9,11,0.08)_55%)]" />
          <div className="absolute bottom-6 left-6 font-mono text-xs text-zinc-200">
            <p>Adarsh Gupta</p>
            <p className="mt-1 text-zinc-400">Software Engineer</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
