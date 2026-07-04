import { cn } from '../../utils/cn'

/** Small pill label. */
function Badge({ children, className = '', dot = false }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium text-muted',
        className
      )}
    >
      {dot && <span className="size-1.5 rounded-full bg-primary" />}
      {children}
    </span>
  )
}

export default Badge
