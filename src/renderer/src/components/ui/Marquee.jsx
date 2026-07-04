/**
 * Infinite, seamless marquee. Duplicates children so the CSS animation
 * can loop by translating -50%. Pass `reverse` to scroll the other way.
 */
function Marquee({ items, renderItem, className = '', reverse = false, gap = 'gap-4' }) {
  const doubled = [...items, ...items]
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      {/* edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-bg to-transparent" />
      <div
        className={`flex w-max animate-marquee ${gap} group-hover:[animation-play-state:paused]`}
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {doubled.map((item, i) => (
          <div key={i} className="shrink-0">
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee
