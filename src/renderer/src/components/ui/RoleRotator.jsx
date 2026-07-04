import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/**
 * Cycles through a list of words with a modern 3D flip + blur swap
 * (no typewriter). Each role rolls up and out while the next rolls in.
 */
function RoleRotator({ roles, interval = 2200, className = '' }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!roles?.length) return
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), interval)
    return () => clearInterval(id)
  }, [roles, interval])

  return (
    <span className={`relative inline-flex overflow-hidden py-1 perspective-[600px] ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: '110%', opacity: 0, rotateX: -70, filter: 'blur(6px)' }}
          animate={{ y: '0%', opacity: 1, rotateX: 0, filter: 'blur(0px)' }}
          exit={{ y: '-110%', opacity: 0, rotateX: 70, filter: 'blur(6px)' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: '50% 100%' }}
          className="text-gradient inline-block whitespace-nowrap font-bold"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default RoleRotator
