import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'
import { EXPERIENCE } from '../data/content'

const softwareSkills = [
  { name: 'JavaScript / TypeScript', level: 90 },
  { name: 'React + Vite', level: 88 },
  { name: 'Node.js / Express', level: 86 },
  { name: 'Java / Spring Boot', level: 78 },
  { name: 'Python / ML Tooling', level: 74 },
]

const capabilities = [
  'Full-stack web architecture',
  'REST and GraphQL APIs',
  'Authentication and RBAC',
  'Cloud deployment pipelines',
  'Scalable system design',
  'AI-assisted product features',
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 md:px-8">
      <SectionTitle index="02">Resume Snapshot</SectionTitle>
      <div className="border border-zinc-800 bg-zinc-950/70 p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.45 }}
          >
            <h3 className="mb-6 border-b border-zinc-700 pb-2 font-mono text-sm uppercase tracking-wider text-zinc-200">
              Software Skills
            </h3>
            <ul className="space-y-4">
              {softwareSkills.map((skill) => (
                <li key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-xs text-zinc-400">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-zinc-800">
                    <motion.div
                      className="h-full bg-zinc-300"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.65 }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.45, delay: 0.06 }}
          >
            <h3 className="mb-6 border-b border-zinc-700 pb-2 font-mono text-sm uppercase tracking-wider text-zinc-200">
              Experience
            </h3>
            <ul className="space-y-5">
              {EXPERIENCE.map((job) => (
                <li key={`${job.company}-${job.period}`} className="border-l border-zinc-700 pl-4">
                  <p className="font-semibold text-zinc-100">{job.role}</p>
                  <p className="mt-1 text-sm text-zinc-400">{job.company}</p>
                  <p className="mt-1 font-mono text-xs text-zinc-500">{job.period}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <h3 className="mb-6 border-b border-zinc-700 pb-2 font-mono text-sm uppercase tracking-wider text-zinc-200">
              What I Can Do
            </h3>
            <ul className="space-y-3 text-sm text-zinc-300">
              {capabilities.map((item) => (
                <li key={item} className="border-b border-zinc-800 pb-2 last:border-b-0">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
