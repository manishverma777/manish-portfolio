import { cn } from '../../utils/cn'

/**
 * Full-width section wrapper with an anchor id + consistent spacing.
 */
function Section({ id, className = '', children, container = true }) {
  return (
    <section id={id} className={cn('relative w-full scroll-mt-20 py-12 sm:py-16', className)}>
      {container ? (
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
      ) : (
        children
      )}
    </section>
  )
}

export default Section
