import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, viewportOnce } from '../../utils/animations'
import Badge from './Badge'

/**
 * Consistent, animated section heading with eyebrow + title + subtitle.
 */
function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex flex-col ${alignment} gap-4 max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}
    >
      {eyebrow && (
        <motion.div variants={fadeUp}>
          <Badge dot>{eyebrow}</Badge>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-content"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="text-muted text-base sm:text-lg">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}

export default SectionHeading
