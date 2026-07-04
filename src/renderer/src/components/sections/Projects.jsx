import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Lock, Download } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import { GithubIcon } from '../ui/BrandIcons'
import { projects } from '../../utils/data'
import { cn } from '../../utils/cn'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'desktop', label: 'Desktop' }
]

function ProjectCard({ project }) {
  const Icon = project.icon
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className={cn(
        'glass-card group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-colors hover:border-primary/60',
        project.featured && 'sm:col-span-2'
      )}
    >
      {/* hover glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="mb-5 flex items-start justify-between">
        <span className="flex size-12 items-center justify-center rounded-xl bg-surface-2 text-primary">
          <Icon className="size-6" />
        </span>
        <div className="flex items-center gap-2">
          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noreferrer"
              aria-label="Source code"
              className="flex size-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-primary hover:text-primary"
            >
              <GithubIcon className="size-4" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label="Live demo"
              className="flex size-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowUpRight className="size-4" />
            </a>
          )}
          {!project.source && !project.live && !project.download && (
            <span className="flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs font-medium text-muted">
              <Lock className="size-3.5" /> Private
            </span>
          )}
        </div>
      </div>

      <h3 className="text-xl font-semibold text-content">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Download button (e.g. the desktop app itself) */}
      {project.download && (
        <a
          href={project.download}
          target="_blank"
          rel="noreferrer"
          className="glow mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-fg transition-colors hover:bg-primary-hover"
        >
          <Download className="size-4" /> Download app
        </a>
      )}
    </motion.article>
  )
}

function Projects() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  const countFor = (key) =>
    key === 'all' ? projects.length : projects.filter((p) => p.category === key).length

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work I'm proud of"
        subtitle="Web, mobile and desktop products I've designed and shipped."
      />

      {/* Filter tabs */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => {
          const active = filter === f.key
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                active ? 'text-primary-fg' : 'text-muted hover:text-content'
              )}
            >
              {active && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 -z-10 rounded-full bg-primary"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              {f.label}
              <span className={cn('ml-1.5 text-xs', active ? 'opacity-80' : 'opacity-60')}>
                {countFor(f.key)}
              </span>
            </button>
          )
        })}
      </div>

      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}

export default Projects
