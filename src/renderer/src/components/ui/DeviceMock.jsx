/**
 * Realistic device mockups built purely with Tailwind (no images/network).
 * Dark bezels + a theme-gradient screen, so they read as real devices while
 * still matching the active theme. Sizing is controlled via `className`.
 */

/** iPhone-style phone with dynamic island + app grid. */
export function PhoneMock({ className = '' }) {
  return (
    <div
      className={`relative rounded-[1.15rem] bg-neutral-900 p-0.75 shadow-2xl ring-1 ring-white/15 ${className}`}
    >
      <div className="relative aspect-9/19 w-full overflow-hidden rounded-[0.95rem] bg-linear-to-br from-primary via-secondary to-accent">
        {/* dynamic island */}
        <div className="absolute left-1/2 top-1.5 h-2 w-8 -translate-x-1/2 rounded-full bg-neutral-900" />
        <div className="flex h-full flex-col gap-1.5 px-2 pb-2 pt-6">
          <div className="h-2 w-10 rounded bg-white/85" />
          <div className="h-1.5 w-7 rounded bg-white/50" />
          <div className="mt-1 grid grid-cols-3 gap-1.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-md bg-white/25" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/** Desktop monitor with stand + browser-style screen. */
export function DesktopMock({ className = '' }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="w-full rounded-xl bg-neutral-900 p-1 shadow-2xl ring-1 ring-white/15">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-linear-to-br from-primary via-secondary to-accent">
          <div className="flex gap-1 p-1.5">
            <span className="size-1.5 rounded-full bg-white/75" />
            <span className="size-1.5 rounded-full bg-white/55" />
            <span className="size-1.5 rounded-full bg-white/40" />
          </div>
          <div className="space-y-1.5 px-2">
            <div className="h-1.5 w-10 rounded bg-white/70" />
            <div className="h-1.5 w-7 rounded bg-white/40" />
            <div className="h-1.5 w-9 rounded bg-white/30" />
          </div>
        </div>
      </div>
      <div className="h-2.5 w-2.5 bg-neutral-800" />
      <div className="h-1.5 w-10 rounded-full bg-neutral-700" />
    </div>
  )
}

/** Browser window with traffic-light dots + address bar. */
export function WebMock({ className = '' }) {
  return (
    <div
      className={`overflow-hidden rounded-xl bg-neutral-900 shadow-2xl ring-1 ring-white/15 ${className}`}
    >
      <div className="flex items-center gap-1 bg-neutral-800 px-2 py-1.5">
        <span className="size-1.5 rounded-full bg-red-400" />
        <span className="size-1.5 rounded-full bg-yellow-400" />
        <span className="size-1.5 rounded-full bg-green-400" />
        <span className="ml-1.5 h-2 flex-1 rounded-full bg-neutral-700" />
      </div>
      <div className="space-y-1.5 bg-linear-to-br from-primary via-secondary to-accent p-2.5">
        <div className="h-2 w-3/4 rounded bg-white/75" />
        <div className="h-1.5 w-1/2 rounded bg-white/45" />
        <div className="mt-1 grid grid-cols-3 gap-1.5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-5 rounded-md bg-white/25" />
          ))}
        </div>
      </div>
    </div>
  )
}
