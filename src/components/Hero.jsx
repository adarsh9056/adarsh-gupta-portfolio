import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { SITE } from '../data/content'
import { Typewriter } from './Typewriter'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center px-6 pb-16 pt-28 md:px-8 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-32 top-16 h-[min(100vw,28rem)] w-[min(100vw,28rem)] rounded-full bg-gradient-to-br from-sky-500/25 via-cyan-400/15 to-transparent blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -left-32 bottom-10 h-[min(90vw,26rem)] w-[min(90vw,26rem)] rounded-full bg-gradient-to-tr from-violet-600/25 via-fuchsia-500/10 to-transparent blur-3xl"
          animate={{ scale: [1, 1.06, 1], opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </div>

      <motion.div
        className="relative mx-auto w-full max-w-6xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="mb-4 font-mono text-sky-400">
          Hi, my name is
        </motion.p>
        <motion.h1
          variants={item}
          className="mb-3 text-4xl font-bold tracking-tight text-[#ccd6f6] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {SITE.name}.
        </motion.h1>
        <motion.div variants={item} className="mb-6 min-h-[2.5rem] md:min-h-[3.5rem]">
          <p className="text-2xl font-semibold text-slate-400 sm:text-3xl md:text-5xl md:leading-tight">
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              <Typewriter
                phrases={[SITE.title, 'Problem Solver', 'Full Stack Developer']}
              />
            </span>
          </p>
        </motion.div>
        <motion.p
          variants={item}
          className="mb-10 max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl"
        >
          {SITE.tagline}
        </motion.p>

        <motion.div variants={item} className="mb-10 flex flex-wrap items-center gap-3">
          <motion.button
            type="button"
            onClick={() => scrollTo('projects')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-md bg-gradient-to-r from-sky-500 via-sky-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/20 transition hover:brightness-110"
          >
            View Projects
          </motion.button>
          <motion.a
            href={SITE.resumePath}
            download={SITE.resumeDownloadName}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-md border border-cyan-400/40 bg-cyan-500/5 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-400/70 hover:bg-cyan-500/10"
          >
            Download Resume
          </motion.a>
          <motion.button
            type="button"
            onClick={() => scrollTo('contact')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-md border border-[#233554] px-6 py-3 text-sm font-semibold text-[#ccd6f6] transition hover:border-violet-500/50 hover:text-white"
          >
            Contact Me
          </motion.button>
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-5 text-slate-400">
          <motion.a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="transition hover:text-sky-400"
            aria-label="GitHub"
          >
            <FaGithub className="h-7 w-7" />
          </motion.a>
          <motion.a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="transition hover:text-sky-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-7 w-7" />
          </motion.a>
          <motion.a
            href={`mailto:${SITE.email}`}
            whileHover={{ y: -3 }}
            className="transition hover:text-sky-400"
            aria-label="Email"
          >
            <HiOutlineMail className="h-7 w-7" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
