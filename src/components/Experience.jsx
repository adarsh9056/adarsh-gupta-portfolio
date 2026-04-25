import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'
import { EXPERIENCE } from '../data/content'

export function Experience({ sectionIndex = '03' }) {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 md:px-8">
      <SectionTitle index={sectionIndex}>Experience</SectionTitle>
      <div className="relative border-l border-zinc-800 pl-8 md:pl-10">
        {EXPERIENCE.map((job, i) => (
          <motion.article
            key={`${job.company}-${job.period}`}
            className="relative mb-14 last:mb-0 rounded-xl border border-transparent bg-zinc-900/40 p-5 transition hover:border-zinc-500/35 hover:bg-zinc-900/70"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ x: 4 }}
          >
            <span className="absolute -left-[33px] top-8 h-3 w-3 rounded-full border-2 border-zinc-300 bg-zinc-950 shadow-[0_0_12px_rgba(244,244,245,0.35)] md:-left-[41px]" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-zinc-100">{job.role}</h3>
              <span className="font-mono text-sm text-zinc-300/90">{job.period}</span>
            </div>
            <p className="mt-1 font-mono text-sm text-zinc-400">{job.company}</p>
            {job.certificate ? (
              <a
                href={job.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-mono text-xs text-zinc-300 underline decoration-zinc-500 underline-offset-4 transition hover:text-white"
              >
                [Certificate]
              </a>
            ) : null}
            <ul className="mt-4 list-inside list-disc space-y-2 text-zinc-400">
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
