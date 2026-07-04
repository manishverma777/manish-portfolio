import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../utils/animations'

/**
 * Wrapper that fades its children up when scrolled into view.
 */
function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const Comp = motion[as]
  return (
    <Comp
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Comp>
  )
}

export default Reveal
