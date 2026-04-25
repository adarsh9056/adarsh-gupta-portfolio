import { motion } from 'framer-motion'

export function SectionTitle({ index, children }) {
  return (
    <motion.h2
      className="mb-10 flex items-center gap-4 text-2xl font-semibold text-zinc-100 md:text-3xl"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <span className="bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text font-mono text-lg tabular-nums text-transparent">
        {index}.
      </span>
      <span className="whitespace-nowrap">{children}</span>
      <div className="hidden min-w-0 flex-1 overflow-hidden sm:block">
        <motion.div
          className="h-px max-w-[240px] origin-left bg-gradient-to-r from-zinc-300/70 via-zinc-500/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        />
      </div>
    </motion.h2>
  )
}
