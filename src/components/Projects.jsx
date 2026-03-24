import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SectionTitle } from './SectionTitle'
import { PROJECTS, PROJECT_FILTERS } from '../data/content'
import { useGitHubRepos } from '../hooks/useGitHubRepos'

export function Projects() {
  const [filter, setFilter] = useState('all')
  const { findRepoUrl } = useGitHubRepos()

  const filtered = useMemo(() => {
    if (filter === 'all') return PROJECTS
    return PROJECTS.filter((p) => p.category === filter)
  }, [filter])

  function resolvedGithubUrl(project) {
    if (project.github) return project.github
    const tryNames = ['ezeagro', 'EzeAgro', 'eze-agro']
    for (const name of tryNames) {
      const url = findRepoUrl(name)
      if (url) return url
    }
    return null
  }

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 md:px-8">
      <SectionTitle index="04">Projects</SectionTitle>

      <motion.div
        className="mb-10 flex flex-wrap gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {PROJECT_FILTERS.map((f) => (
          <motion.button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className={`rounded-full px-4 py-2 font-mono text-xs transition ${
              filter === f.id
                ? 'bg-gradient-to-r from-sky-500 to-violet-600 text-white shadow-lg shadow-violet-900/40'
                : 'border border-[#233554] text-slate-400 hover:border-cyan-500/30 hover:text-cyan-200'
            }`}
          >
            {f.label}
          </motion.button>
        ))}
      </motion.div>

      <motion.div layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, idx) => {
            const ghUrl = resolvedGithubUrl(project)
            const showGithubPlaceholder = project.githubPlaceholder && !ghUrl
            const showLive = project.live && !project.livePlaceholder
            const showLivePlaceholder = project.livePlaceholder && !project.live

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                whileHover={{ y: -6 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#233554] bg-[#112240]/55 p-6 shadow-lg shadow-black/20 backdrop-blur-sm transition hover:border-sky-400/35 hover:shadow-sky-950/40"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-violet-600/10 opacity-0 transition group-hover:opacity-100" />
                <div className="relative mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-[#ccd6f6] transition-colors group-hover:text-sky-300">
                    {project.title}
                  </h3>
                  <span className="shrink-0 rounded bg-[#0a192f] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-violet-300/90 ring-1 ring-white/10">
                    {project.category}
                  </span>
                </div>
                <p className="relative mb-4 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <div className="relative mb-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-[#0a192f]/90 px-2 py-1 font-mono text-xs text-cyan-200/90 ring-1 ring-cyan-500/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="relative mt-auto flex flex-wrap gap-4 border-t border-[#233554] pt-4">
                  {showGithubPlaceholder ? (
                    <span className="inline-flex items-center gap-2 text-sm text-amber-400/90">
                      <FaGithub className="h-4 w-4 shrink-0" />
                      Add your link here — GitHub
                    </span>
                  ) : (
                    <a
                      href={ghUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-sky-400 transition hover:text-sky-300"
                    >
                      <FaGithub className="h-4 w-4 shrink-0" />
                      {project.githubLabel || 'GitHub'}
                    </a>
                  )}
                  {showLive ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-violet-300 transition hover:text-violet-200"
                    >
                      <FaExternalLinkAlt className="h-3.5 w-3.5 shrink-0" />
                      {project.liveLabel || 'Live'}
                    </a>
                  ) : null}
                  {showLivePlaceholder ? (
                    <span className="inline-flex items-center gap-2 text-sm text-amber-400/90">
                      <FaExternalLinkAlt className="h-3.5 w-3.5 shrink-0" />
                      Add your link here — Live
                    </span>
                  ) : null}
                </div>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
