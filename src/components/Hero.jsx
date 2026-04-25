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
      className="relative flex min-h-[100svh] flex-col justify-end px-6 pb-16 pt-28 md:px-8 md:pt-32"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,0.88)_0%,rgba(9,9,11,0.66)_40%,rgba(9,9,11,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(9,9,11,0.92)_0%,rgba(9,9,11,0.3)_48%,rgba(9,9,11,0.05)_100%)]" />
      </div>

      <motion.div
        className="relative mx-auto w-full max-w-6xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="mb-4 font-mono text-zinc-300">
          Hi, my name is
        </motion.p>
        <motion.h1
          variants={item}
          className="mb-3 text-4xl font-bold uppercase tracking-tight text-zinc-100 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {SITE.name}.
        </motion.h1>
        <motion.div variants={item} className="mb-5 min-h-[2.5rem] md:min-h-[3.5rem]">
          <p className="text-2xl font-semibold text-zinc-400 sm:text-3xl md:text-5xl md:leading-tight">
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              <Typewriter
                phrases={[SITE.title, 'Problem Solver', 'Full Stack Developer']}
              />
            </span>
          </p>
        </motion.div>
        <motion.p
          variants={item}
          className="mb-10 max-w-xl text-base leading-relaxed text-zinc-300 md:text-lg"
        >
          {SITE.tagline}
        </motion.p>

        <motion.div variants={item} className="mb-10 flex flex-wrap items-center gap-3">
          <motion.button
            type="button"
            onClick={() => scrollTo('projects')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-zinc-300/60 bg-zinc-950/30 px-7 py-2.5 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-950/55"
          >
            View Projects
          </motion.button>
          <motion.a
            href={SITE.resumePath}
            download={SITE.resumeDownloadName}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-zinc-300/60 bg-zinc-950/30 px-7 py-2.5 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-950/55"
          >
            Download Resume
          </motion.a>
          <motion.button
            type="button"
            onClick={() => scrollTo('contact')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-zinc-300/60 bg-zinc-950/30 px-7 py-2.5 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-950/55"
          >
            Contact Me
          </motion.button>
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-5 text-zinc-400">
          <motion.a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="transition hover:text-zinc-200"
            aria-label="GitHub"
          >
            <FaGithub className="h-7 w-7" />
          </motion.a>
          <motion.a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="transition hover:text-zinc-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-7 w-7" />
          </motion.a>
          <motion.a
            href={`mailto:${SITE.email}`}
            whileHover={{ y: -3 }}
            className="transition hover:text-zinc-200"
            aria-label="Email"
          >
            <HiOutlineMail className="h-7 w-7" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
