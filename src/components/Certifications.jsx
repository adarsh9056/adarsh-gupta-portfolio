import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { SectionTitle } from './SectionTitle'
import { CERTIFICATIONS } from '../data/content'

export function Certifications({ sectionIndex = '06' }) {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24 md:px-8">
      <SectionTitle index={sectionIndex}>Certifications</SectionTitle>
      <div className="grid gap-6 md:grid-cols-2">
        {CERTIFICATIONS.map((c, i) => (
          <motion.div
            key={c.title}
            className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition hover:border-zinc-500/40"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <h3 className="text-lg font-semibold text-zinc-100">{c.title}</h3>
            <p className="mt-1 font-mono text-sm text-zinc-500">{c.issuer}</p>
            <div className="mt-4">
              {c.link ? (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-zinc-200 transition hover:text-white"
                >
                  <FaExternalLinkAlt className="h-3.5 w-3.5" />
                  Verify / Credential
                </a>
              ) : (
                <p className="inline-flex items-center gap-2 text-sm text-zinc-400">
                  <FaExternalLinkAlt className="h-3.5 w-3.5 opacity-70" />
                  Add your link here — certificate URL
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
