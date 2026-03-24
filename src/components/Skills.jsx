import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'
import { SKILLS } from '../data/content'

const accentStyles = {
  sky: 'from-sky-500/15 to-transparent ring-sky-500/20 hover:ring-sky-400/40',
  violet: 'from-violet-500/15 to-transparent ring-violet-500/20 hover:ring-violet-400/40',
  emerald: 'from-emerald-500/15 to-transparent ring-emerald-500/20 hover:ring-emerald-400/40',
  cyan: 'from-cyan-500/15 to-transparent ring-cyan-500/20 hover:ring-cyan-400/40',
  amber: 'from-amber-500/15 to-transparent ring-amber-500/20 hover:ring-amber-400/40',
  fuchsia: 'from-fuchsia-500/15 to-transparent ring-fuchsia-500/20 hover:ring-fuchsia-400/40',
}

const labelStyles = {
  sky: 'text-sky-400',
  violet: 'text-violet-400',
  emerald: 'text-emerald-400',
  cyan: 'text-cyan-400',
  amber: 'text-amber-400',
  fuchsia: 'text-fuchsia-400',
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 md:px-8">
      <SectionTitle index="02">Skills</SectionTitle>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((group, i) => {
          const grad = accentStyles[group.accent] ?? accentStyles.sky
          const label = labelStyles[group.accent] ?? 'text-sky-400'
          return (
            <motion.div
              key={group.category}
              className={`rounded-xl border border-[#233554] bg-gradient-to-br ${grad} bg-[#112240]/50 p-6 ring-1 backdrop-blur-sm transition duration-300`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <h3 className={`mb-4 font-mono text-sm ${label}`}>{group.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-[#0a192f]/90 px-2.5 py-1 text-sm text-slate-200 ring-1 ring-white/10"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
