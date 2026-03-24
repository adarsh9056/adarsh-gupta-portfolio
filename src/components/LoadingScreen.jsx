import { motion, AnimatePresence } from 'framer-motion'

export function LoadingScreen({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a192f]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="h-14 w-14 rounded-full border-2 border-transparent bg-gradient-to-br from-sky-400 to-violet-500 p-[2px]"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            >
              <div className="h-full w-full rounded-full bg-[#0a192f]" />
            </motion.div>
            <motion.p
              className="font-mono text-sm tracking-widest text-slate-400"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              Loading portfolio…
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
