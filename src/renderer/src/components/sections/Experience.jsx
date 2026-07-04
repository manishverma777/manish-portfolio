import { motion } from 'framer-motion'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import { experience } from '../../utils/data'
import { staggerContainer, fadeUp, viewportOnce } from '../../utils/animations'

function Experience() {
  return (
    <Section id="experience" className="bg-bg-soft">
      <SectionHeading
        eyebrow="Experience"
        title="My professional journey"
        subtitle="Roles where I've grown, led and shipped meaningful work."
      />

      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative mx-auto mt-10 max-w-3xl"
      >
        {/* vertical line */}
        <div className="absolute left-4 top-2 h-full w-px bg-border sm:left-1/2" />

        {experience.map((item, i) => (
          <motion.div
            key={item.company}
            variants={fadeUp}
            className={`relative mb-10 pl-12 sm:w-1/2 sm:pl-0 ${
              i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:ml-auto sm:pl-12'
            }`}
          >
            {/* node */}
            <span
              className={`glow absolute left-2.5 top-2 size-3.5 rounded-full bg-primary ring-4 ring-bg-soft sm:left-auto ${
                i % 2 === 0 ? 'sm:-right-1.5' : 'sm:-left-1.5'
              }`}
            />
            <div className="glass-card rounded-2xl p-6 transition-colors hover:border-primary/60">
              <span className="text-sm font-medium text-primary">{item.period}</span>
              <h3 className="mt-1 text-lg font-semibold text-content">{item.role}</h3>
              <p className="text-sm font-medium text-muted">
                {item.company}
                {item.location && <span className="text-muted/80"> · {item.location}</span>}
              </p>
              <p className="mt-3 text-sm text-muted">{item.description}</p>
              <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? 'sm:justify-end' : ''}`}>
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

export default Experience
