import { Helmet } from 'react-helmet-async'
import { SITE } from '../data/content'

const defaultTitle = `${SITE.name} | Software Engineer & Full Stack Developer`
const defaultDesc = SITE.tagline

export function SEO() {
  const origin = typeof window !== 'undefined' ? window.location.origin : ''

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.name,
    email: SITE.email,
    ...(origin ? { url: origin } : {}),
    sameAs: [SITE.github, SITE.linkedin],
    jobTitle: 'Software Engineer',
    description: defaultDesc,
    knowsAbout: ['React', 'Node.js', 'REST APIs', 'MongoDB', 'System Design'],
  }

  return (
    <Helmet>
      <title>{defaultTitle}</title>
      <meta name="description" content={defaultDesc} />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDesc} />
      {origin ? <link rel="canonical" href={`${origin}/`} /> : null}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}
