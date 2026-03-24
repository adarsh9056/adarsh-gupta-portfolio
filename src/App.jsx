import { useState, useEffect } from 'react'
import { SEO } from './components/SEO'
import { LoadingScreen } from './components/LoadingScreen'
import { AnimatedBackground } from './components/AnimatedBackground'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { GitHubShowcase } from './components/GitHubShowcase'
import { Achievements } from './components/Achievements'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <SEO />
      <AnimatedBackground />
      <LoadingScreen visible={loading} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHubShowcase />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
