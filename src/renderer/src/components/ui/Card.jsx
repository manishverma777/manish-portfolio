import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

/**
 * Elevated surface card with hover lift + optional spotlight border.
 */
function Card({ className = '', children, hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={cn(
        'glass-card relative rounded-2xl p-6 transition-colors duration-300',
        hover && 'hover:border-primary/60',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card
