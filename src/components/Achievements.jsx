import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'
import { ACHIEVEMENTS } from '../data/content'

export function Achievements({ sectionIndex = '05' }) {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-24 md:px-8">
      <SectionTitle index={sectionIndex}>Achievements</SectionTitle>
      <ul className="space-y-6">
        {ACHIEVEMENTS.map((a, i) => (
          <motion.li
            key={a.title}
            className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-zinc-100">{a.title}</h3>
              <span className="font-mono text-sm text-zinc-300/90">{a.detail}</span>
            </div>
            <p className="mt-2 text-zinc-400">{a.description}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
