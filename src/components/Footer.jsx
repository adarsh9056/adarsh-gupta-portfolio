import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { SITE } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950/60 py-12 text-center backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:px-8">
        <motion.div
          className="flex items-center gap-6 text-zinc-400"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:-translate-y-0.5 hover:text-zinc-200"
            aria-label="GitHub"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:-translate-y-0.5 hover:text-zinc-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="transition hover:-translate-y-0.5 hover:text-zinc-200"
            aria-label="Email"
          >
            <HiOutlineMail className="h-6 w-6" />
          </a>
        </motion.div>
        <p className="font-mono text-xs text-zinc-500">
          Designed & built by {SITE.name} © {year}
        </p>
      </div>
    </footer>
  )
}
