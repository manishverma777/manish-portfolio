import { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { siteConfig } from '../../utils/config'
import ProfileMark from '../ui/ProfileMark'

/** How long the cinematic intro plays, in seconds. */
const DURATION = 5

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
  exit: {
    opacity: 0,
    scale: 1.08,
    filter: 'blur(12px)',
    transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] }
  }
}

const riseIn = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

/**
 * Full-screen, theme-aware cinematic intro shown for {DURATION}s on launch.
 * Calls onDone() when finished so the app can reveal the main page.
 */
function Preloader({ onDone }) {
  const progress = useMotionValue(0)
  const barWidth = useTransform(progress, (v) => `${v}%`)
  const [pct, setPct] = useState(0)
  const letters = [...siteConfig.owner.name]

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: DURATION,
      ease: [0.45, 0, 0.15, 1]
    })
    const unsub = progress.on('change', (v) => setPct(Math.round(v)))
    const timer = setTimeout(() => onDone?.(), DURATION * 1000)
    return () => {
      controls.stop()
      unsub()
      clearTimeout(timer)
    }
  }, [onDone, progress])

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="fixed inset-0 z-100 flex flex-col items-center justify-center overflow-hidden bg-bg"
    >
      {/* Cinematic background: drifting color blobs + grid + vignette */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -left-24 top-1/4 size-136 rounded-full bg-primary/25 blur-3xl" />
        <div
          className="animate-blob absolute -right-20 bottom-1/4 size-120 rounded-full bg-secondary/25 blur-3xl"
          style={{ animationDelay: '3s' }}
        />
        <div
          className="animate-blob absolute left-1/3 top-1/2 size-112 rounded-full bg-accent/20 blur-3xl"
          style={{ animationDelay: '6s' }}
        />
        <div className="grid-bg absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--bg)_85%)]" />
      </div>

      {/* Center stage */}
      <motion.div
        variants={containerVariants}
        className="relative flex flex-col items-center gap-8 px-6"
      >
        {/* Orbiting rings + rotating conic halo + brand mark */}
        <motion.div variants={riseIn} className="relative flex size-44 items-center justify-center">
          <div
            className="animate-spin-slow absolute inset-0 rounded-full opacity-70 blur-md"
            style={{
              background:
                'conic-gradient(from 0deg, var(--primary), var(--secondary), var(--accent), var(--primary))'
            }}
          />
          <div className="absolute inset-1 rounded-full bg-bg" />
          <motion.div
            className="absolute inset-0 rounded-full border border-primary/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
          </motion.div>
          <motion.div
            className="absolute inset-5 rounded-full border border-secondary/40"
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          >
            <span className="absolute -bottom-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-secondary shadow-[0_0_10px_var(--secondary)]" />
          </motion.div>

          <motion.div
            className="absolute inset-2"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: [0.4, 1.12, 1], opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <ProfileMark
              className="h-full w-full"
              imgClass="object-cover object-[50%_30%]"
              textClassName="text-6xl"
            />
          </motion.div>
        </motion.div>

        {/* Brand name — letter-by-letter reveal */}
        <motion.h1
          variants={riseIn}
          className="flex text-3xl font-bold tracking-tight text-content sm:text-4xl"
        >
          {letters.map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.6 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={ch === ' ' ? 'w-2' : ''}
            >
              {ch}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div variants={riseIn} className="flex flex-col items-center gap-2">
          <p className="text-base font-semibold text-content">Software Engineer</p>
          <p className="max-w-xs text-center text-xs text-muted">
            Building fast, scalable web, mobile &amp; desktop applications
          </p>
          <div className="mt-1 flex flex-wrap items-center justify-center gap-2">
            {['React.js', 'Next.js', 'React Native', 'Electron.js', 'Node.js'].map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-surface-2/60 px-2.5 py-1 text-xs font-medium text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Progress bar + counter */}
        <motion.div variants={riseIn} className="mt-2 flex w-64 flex-col items-center gap-2">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
            <motion.div
              style={{ width: barWidth }}
              className="h-full rounded-full bg-linear-to-r from-primary via-secondary to-accent"
            />
          </div>
          <div className="flex w-full items-center justify-between text-xs font-medium text-muted">
            <span className="tracking-widest uppercase">Loading Profile</span>
            <span className="tabular-nums text-content">{pct}%</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Preloader
