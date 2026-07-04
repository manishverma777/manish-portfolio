import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

const variants = {
  primary: 'bg-primary text-primary-fg hover:bg-primary-hover glow border border-transparent',
  outline:
    'bg-transparent text-content border border-border hover:border-primary hover:text-primary',
  ghost:
    'bg-transparent text-muted hover:text-content hover:bg-surface-2 border border-transparent',
  soft: 'bg-surface-2 text-content border border-border hover:border-primary'
}

const sizes = {
  sm: 'px-3.5 py-2 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3.5 text-base gap-2.5'
}

/**
 * Animated button. Renders <a> when `href` is set, otherwise <button>.
 */
function Button({
  as,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon: Icon,
  iconRight: IconRight,
  ...props
}) {
  const Comp = motion[as || (href ? 'a' : 'button')]
  return (
    <Comp
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={cn(
        'inline-flex items-center justify-center rounded-xl font-semibold cursor-pointer select-none transition-colors duration-300',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {Icon && <Icon className="size-4.5" />}
      {children}
      {IconRight && <IconRight className="size-4.5" />}
    </Comp>
  )
}

export default Button
