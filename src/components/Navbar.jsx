import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { NAV_LINKS, SITE } from '../data/content'

function scrollTo(id) {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth' })
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#0a192f]/90 shadow-lg shadow-sky-950/20 backdrop-blur-xl supports-backdrop-filter:bg-[#0a192f]/75'
          : 'border-b border-transparent bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('hero')
          }}
          className="font-mono text-sm font-semibold tracking-tight text-[#ccd6f6] transition-colors hover:text-sky-400"
        >
          <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
            AG
          </span>
          <span className="text-slate-500">.</span>
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollTo(link.id)}
                className="rounded px-3 py-2 font-mono text-sm text-slate-400 transition-colors hover:text-sky-400"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href={SITE.resumePath}
              download={SITE.resumeDownloadName}
              className="ml-2 rounded-md bg-gradient-to-r from-sky-500 to-violet-600 px-4 py-2 font-mono text-xs font-medium text-white shadow-md shadow-violet-900/30 transition hover:brightness-110"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-300 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX className="h-7 w-7" /> : <HiMenuAlt3 className="h-7 w-7" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="border-t border-white/5 bg-[#0a192f]/95 backdrop-blur-md md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col px-6 py-4 pb-6">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    className="block w-full py-3 text-left font-mono text-sm text-slate-300"
                    onClick={() => {
                      scrollTo(link.id)
                      setOpen(false)
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={SITE.resumePath}
                  download={SITE.resumeDownloadName}
                  className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-sky-500 to-violet-600 px-4 py-3 text-sm font-medium text-white"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
