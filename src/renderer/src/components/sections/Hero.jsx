import { motion } from 'framer-motion'
import { ArrowRight, Download, MapPin, Sparkles } from 'lucide-react'
import { siteConfig } from '../../utils/config'
import { socials, techStack } from '../../utils/data'
import { staggerContainer, fadeUp } from '../../utils/animations'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import Marquee from '../ui/Marquee'
import ProfileMark from '../ui/ProfileMark'
import { PhoneMock, DesktopMock, WebMock } from '../ui/DeviceMock'
import RoleRotator from '../ui/RoleRotator'

const { owner } = siteConfig

/** Platforms I build for — device mockups fully visible around the avatar. */
const platforms = [
  { label: 'Desktop', Mock: DesktopMock, size: 'w-28', pos: '-top-6 -right-6', delay: 0 },
  {
    label: 'Mobile',
    Mock: PhoneMock,
    size: 'w-14',
    pos: 'top-1/2 -right-12 -translate-y-1/2',
    delay: 0.7
  },
  { label: 'Web', Mock: WebMock, size: 'w-28', pos: '-bottom-6 -left-6', delay: 1.4 }
]

/** Reversed copy so the second marquee row scrolls the opposite way. */
const reversedStack = [...techStack].reverse()

/** Premium skill chip with a brand-tinted icon. */
function renderSkillChip(tech) {
  const Icon = tech.icon
  const tint = tech.color ?? 'var(--primary)'
  return (
    <div className="glass-card group/chip flex items-center gap-2.5 rounded-full py-2 pl-2 pr-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60">
      <span
        className="flex size-9 items-center justify-center rounded-full transition-transform duration-300 group-hover/chip:scale-110"
        style={{ backgroundColor: `color-mix(in srgb, ${tint} 16%, transparent)` }}
      >
        <Icon className="size-5" style={{ color: tech.color ?? 'var(--text)' }} />
      </span>
      <span className="text-sm font-semibold whitespace-nowrap text-content">{tech.name}</span>
    </div>
  )
}

function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  // Open the resume in the browser and trigger a download (works in the
  // desktop app via Electron's external-link handler and in the web build).
  const handleResume = () => {
    if (owner.resumeUrl) window.open(owner.resumeUrl, '_blank', 'noopener,noreferrer')
    if (owner.resumeDownloadUrl)
      window.open(owner.resumeDownloadUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-24 pb-12">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: copy */}
          <motion.div variants={staggerContainer(0.12)} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2">
              <Badge dot>{owner.available ? 'Available for work' : 'Currently building'}</Badge>
              <Badge>Immediate Joiner</Badge>
              <Badge>Hybrid</Badge>
              <Badge>Work From Home</Badge>
              <Badge>Open to Relocate</Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-3xl font-bold leading-tight tracking-tight text-content sm:text-4xl md:text-5xl"
            >
              Hi, I&apos;m <span className="text-gradient">{owner.name}</span>.
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="mt-2 flex flex-wrap items-center gap-x-2 text-lg font-semibold text-content sm:text-xl md:text-2xl"
            >
              <span className="text-muted">I&apos;m a</span>
              <RoleRotator roles={siteConfig.roles} />
            </motion.div>

            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg text-muted">
              {owner.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex items-center gap-2 text-sm text-muted"
            >
              <MapPin className="size-4 text-primary" />
              {owner.location}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" onClick={() => go('projects')} iconRight={ArrowRight}>
                View my work
              </Button>
              <Button size="lg" variant="outline" onClick={handleResume} icon={Download}>
                Resume
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  whileHover={{ y: -3 }}
                  className="flex size-11 items-center justify-center rounded-xl border border-border text-muted transition-colors hover:border-primary hover:text-primary"
                >
                  <s.icon className="size-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: animated avatar orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-first mx-auto aspect-square w-full max-w-60 sm:max-w-xs lg:order-0 lg:max-w-sm"
          >
            {/* Circle 1 — outer rotating dashed ring */}
            <div className="animate-spin-slow absolute inset-0 rounded-full border-2 border-dashed border-primary/40" />
            {/* Circle 2 — inner solid ring */}
            <div className="absolute inset-5 rounded-full border border-secondary/40" />
            {/* Soft themed glow */}
            <div className="absolute inset-7 rounded-full bg-linear-to-br from-primary/30 via-secondary/20 to-accent/30 blur-2xl" />

            {/* Platforms I build for — fully visible around the avatar */}
            {platforms.map((p) => (
              <motion.div
                key={p.label}
                className={`absolute z-20 ${p.pos} ${p.size}`}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4 + p.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: p.delay
                }}
              >
                <p.Mock />
              </motion.div>
            ))}

            {/* Profile photo inside the inner circle */}
            <div className="glass animate-float absolute inset-8 z-10 overflow-hidden rounded-full">
              <ProfileMark
                className="h-full w-full"
                imgClass="object-cover object-[50%_30%]"
                textClassName="text-8xl"
              />
            </div>

            {/* floating stat chips */}
            <motion.div
              className="glass absolute -left-4 top-6 z-20 flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-content"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles className="size-4 text-primary" /> 2+ yrs
            </motion.div>
            <motion.div
              className="glass absolute -bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-xl px-3 py-2 text-sm font-medium text-content"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              6+ projects
            </motion.div>
          </motion.div>
        </div>

        {/* Tech marquee — professional skill chips with brand icons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.5 }}
          className="mt-12 space-y-3"
        >
          <Marquee items={techStack} renderItem={renderSkillChip} />
          <Marquee items={reversedStack} renderItem={renderSkillChip} reverse />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
