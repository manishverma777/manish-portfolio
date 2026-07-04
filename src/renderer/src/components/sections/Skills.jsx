import { motion } from 'framer-motion'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import ProgressBar from '../ui/ProgressBar'
import { skillGroups } from '../../utils/data'
import { staggerContainer, fadeUp, viewportOnce } from '../../utils/animations'

function Skills() {
  return (
    <Section id="skills" className="bg-bg-soft">
      <SectionHeading
        eyebrow="Skills"
        title="A versatile, modern toolkit"
        subtitle="From pixels to pipelines — the technologies I use to bring products to life."
      />

      {/* Masonry columns keep the cards tightly packed with no wasted space. */}
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-10 gap-5 sm:columns-2 lg:columns-2"
      >
        {skillGroups.map((group) => (
          <motion.div key={group.title} variants={fadeUp} className="mb-5 break-inside-avoid">
            <div className="glass-card rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-lg bg-surface-2 text-primary">
                  <group.icon className="size-5" />
                </span>
                <h3 className="text-base font-semibold text-content">{group.title}</h3>
              </div>
              <div className="space-y-2.5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="font-medium text-content">{skill.name}</span>
                      <span className="text-muted">{skill.level}%</span>
                    </div>
                    <ProgressBar value={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

export default Skills
