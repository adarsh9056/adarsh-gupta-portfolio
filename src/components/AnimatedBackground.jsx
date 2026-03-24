import { motion } from 'framer-motion'

const orbs = [
  { className: 'right-[-15%] top-[8%] h-[min(95vw,520px)] w-[min(95vw,520px)] bg-gradient-to-br from-sky-400/25 to-cyan-400/10', delay: 0 },
  { className: 'left-[-20%] bottom-[0%] h-[min(90vw,480px)] w-[min(90vw,480px)] bg-gradient-to-tr from-violet-600/20 to-fuchsia-500/10', delay: 0.35 },
  { className: 'left-[35%] top-[45%] h-72 w-72 bg-emerald-400/12', delay: 0.7 },
  { className: 'right-[20%] bottom-[30%] h-48 w-48 bg-amber-400/10', delay: 1 },
]

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(56,189,248,0.14),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_100%,rgba(139,92,246,0.08),transparent)]" />
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${o.className}`}
          animate={{
            y: [0, -24, 0],
            x: [0, i % 2 === 0 ? 16 : -12, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 16 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: o.delay,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(10,25,47,0.4)_50%,#0a192f_95%)]" />
    </div>
  )
}
