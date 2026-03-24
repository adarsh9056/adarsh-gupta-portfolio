import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'
import { EXPERIENCE } from '../data/content'

export function Experience({ sectionIndex = '03' }) {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 md:px-8">
      <SectionTitle index={sectionIndex}>Experience</SectionTitle>
      <div className="relative border-l border-[#233554] pl-8 md:pl-10">
        {EXPERIENCE.map((job, i) => (
          <motion.article
            key={`${job.company}-${job.period}`}
            className="relative mb-14 last:mb-0 rounded-xl border border-transparent bg-[#112240]/30 p-5 transition hover:border-sky-500/20 hover:bg-[#112240]/60"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ x: 4 }}
          >
            <span className="absolute -left-[33px] top-8 h-3 w-3 rounded-full border-2 border-sky-400 bg-[#0a192f] shadow-[0_0_12px_rgba(56,189,248,0.5)] md:-left-[41px]" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-[#ccd6f6]">{job.role}</h3>
              <span className="font-mono text-sm text-sky-400/80">{job.period}</span>
            </div>
            <p className="mt-1 font-mono text-sm text-slate-400">{job.company}</p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-slate-400">
              {job.bullets.map((b) => (
                <li key={b.slice(0, 40)} className="leading-relaxed">
                  {b}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
