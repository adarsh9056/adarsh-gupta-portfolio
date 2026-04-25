import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SectionTitle } from './SectionTitle'
import { PROJECTS, PROJECT_FILTERS } from '../data/content'
import { useGitHubRepos } from '../hooks/useGitHubRepos'

export function Projects() {
  const [filter, setFilter] = useState('all')
  const { repos, findRepoUrl } = useGitHubRepos()

  function categoryFromLanguage(language) {
    const lang = (language || '').toLowerCase()
    if (lang.includes('python')) return 'ml'
    if (lang.includes('java') || lang.includes('c')) return 'systems'
    if (lang.includes('javascript') || lang.includes('typescript') || lang.includes('html') || lang.includes('css')) {
      return 'web'
    }
    return 'tools'
  }

  function repoNameFromUrl(url) {
    if (!url) return ''
    const name = url.split('/').pop() || ''
    return name.toLowerCase()
  }

  const allProjects = useMemo(() => {
    const existingRepoNames = new Set(
      PROJECTS.map((project) => repoNameFromUrl(project.github)).filter(Boolean),
    )

    const githubOnlyProjects = repos
      .filter((repo) => !existingRepoNames.has(repo.name.toLowerCase()))
      .map((repo) => ({
        id: `github-${repo.name.toLowerCase()}`,
        title: repo.name.replace(/[-_]/g, ' '),
        description: repo.description || 'Project sourced from my GitHub profile.',
        tech: [repo.language || 'Code'],
        category: categoryFromLanguage(repo.language),
        github: repo.htmlUrl,
        live: repo.homepage || null,
        liveLabel: 'Live Demo',
      }))

    return [...PROJECTS, ...githubOnlyProjects]
  }, [repos])

  const filtered = useMemo(() => {
    if (filter === 'all') return allProjects
    return allProjects.filter((p) => p.category === filter)
  }, [filter, allProjects])

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
                ? 'bg-gradient-to-r from-zinc-700 to-zinc-500 text-white shadow-lg shadow-black/40'
                : 'border border-zinc-700 text-zinc-400 hover:border-zinc-500/60 hover:text-zinc-200'
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
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/55 p-6 shadow-lg shadow-black/20 backdrop-blur-sm transition hover:border-zinc-500/60 hover:shadow-black/40"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-zinc-300/8 via-transparent to-zinc-600/15 opacity-0 transition group-hover:opacity-100" />
                <div className="relative mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-zinc-100 transition-colors group-hover:text-zinc-200">
                    {project.title}
                  </h3>
                  <span className="shrink-0 rounded bg-zinc-950 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-300 ring-1 ring-white/10">
                    {project.category}
                  </span>
                </div>
                <p className="relative mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <div className="relative mb-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-zinc-950/90 px-2 py-1 font-mono text-xs text-zinc-300 ring-1 ring-zinc-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="relative mt-auto flex flex-wrap gap-4 border-t border-zinc-800 pt-4">
                  {showGithubPlaceholder ? (
                    <span className="inline-flex items-center gap-2 text-sm text-zinc-400">
                      <FaGithub className="h-4 w-4 shrink-0" />
                      Add your link here — GitHub
                    </span>
                  ) : (
                    <a
                      href={ghUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-zinc-200 transition hover:text-white"
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
                      className="inline-flex items-center gap-2 text-sm text-zinc-200 transition hover:text-white"
                    >
                      <FaExternalLinkAlt className="h-3.5 w-3.5 shrink-0" />
                      {project.liveLabel || 'Live'}
                    </a>
                  ) : null}
                  {showLivePlaceholder ? (
                    <span className="inline-flex items-center gap-2 text-sm text-zinc-400">
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
