import { useEffect, useState } from 'react'
import { SITE } from '../data/content'

/**
 * Fetches public repos from GitHub API for the portfolio owner.
 * Used to surface live GitHub links and repo counts (Brittany-style “building” section).
 */
export function useGitHubRepos() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    const url = `https://api.github.com/users/${SITE.githubUsername}/repos?per_page=100&sort=updated`

    fetch(url, { headers: { Accept: 'application/vnd.github+json' } })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!cancelled && Array.isArray(data)) {
          setRepos(
            data
              .filter((r) => !r.fork)
              .map((r) => ({
                name: r.name,
                htmlUrl: r.html_url,
                description: r.description,
                homepage: r.homepage || null,
                language: r.language,
                pushedAt: r.pushed_at,
              })),
          )
        }
      })
      .catch((e) => {
        if (!cancelled) setError(e.message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  /** @param {string} repoName */
  function findRepoUrl(repoName) {
    const lower = repoName.toLowerCase()
    const hit = repos.find((r) => r.name.toLowerCase() === lower)
    return hit?.htmlUrl ?? null
  }

  return { repos, loading, error, findRepoUrl }
}
