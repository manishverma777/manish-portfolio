/**
 * Decorative animated background: grid + drifting color blobs.
 * Purely cosmetic, sits behind content (pointer-events: none).
 */
function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-bg/40 to-bg" />
      <div className="animate-blob absolute -top-32 -left-24 size-[38rem] rounded-full bg-primary/20 blur-3xl" />
      <div
        className="animate-blob absolute top-1/3 -right-32 size-[34rem] rounded-full bg-secondary/20 blur-3xl"
        style={{ animationDelay: '4s' }}
      />
      <div
        className="animate-blob absolute -bottom-40 left-1/3 size-[36rem] rounded-full bg-accent/15 blur-3xl"
        style={{ animationDelay: '8s' }}
      />
    </div>
  )
}

export default AnimatedBackground
