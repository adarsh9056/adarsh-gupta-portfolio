import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { SITE } from '../data/content'
import { useGitHubRepos } from '../hooks/useGitHubRepos'

export function GitHubShowcase() {
  const { repos, loading, error } = useGitHubRepos()
  const top = repos.slice(0, 12)

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-8" aria-label="GitHub repositories">
      <motion.div
        className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm md:p-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45 }}
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
          <h3 className="flex items-center gap-2 font-mono text-sm text-zinc-200">
            <FaGithub className="h-5 w-5" />
            From GitHub
          </h3>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 transition hover:text-zinc-200"
          >
            @{SITE.githubUsername} →
          </a>
        </div>
        {loading && <p className="text-sm text-zinc-500">Fetching public repositories…</p>}
        {error && (
          <p className="text-sm text-zinc-500">
            Could not load GitHub data. Visit{' '}
            <a href={SITE.github} className="text-zinc-200 underline">
              profile
            </a>{' '}
            directly.
          </p>
        )}
        {!loading && !error && top.length === 0 && (
          <p className="text-sm text-zinc-500">No public repositories returned.</p>
        )}
        {!loading && !error && top.length > 0 && (
          <ul className="grid gap-3 sm:grid-cols-2">
            {top.map((r) => (
              <li key={r.name}>
                <a
                  href={r.htmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-white/5 bg-zinc-950/60 px-4 py-3 transition hover:border-zinc-500/50 hover:bg-zinc-950"
                >
                  <span className="font-mono text-sm text-zinc-100">{r.name}</span>
                  {r.language && (
                    <span className="mt-1 block text-xs text-zinc-500">{r.language}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </section>
  )
}
