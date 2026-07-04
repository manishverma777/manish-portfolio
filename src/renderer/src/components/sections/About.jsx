import { motion } from 'framer-motion'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import { stats } from '../../utils/data'
import { siteConfig } from '../../utils/config'
import { staggerContainer, fadeUp, fromLeft, viewportOnce } from '../../utils/animations'

function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About me"
        title="Frontend Developer crafting fast, reliable products"
        subtitle="3 years turning ideas into production-grade web, mobile and desktop applications."
      />

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          variants={fromLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="space-y-5 text-muted"
        >
          <p>
            I&apos;m {siteConfig.owner.name}, a Frontend Developer with 3 years of hands-on
            experience designing and shipping high-performance web, mobile and desktop applications.
            I work primarily across the React ecosystem &mdash; React.js, Next.js, React Native and
            Electron.js &mdash; building responsive, accessible and pixel-perfect user interfaces.
          </p>
          <p>
            I care about clean, maintainable code, reusable component systems, performance and
            smooth micro-interactions. Comfortable across the full MERN stack, I collaborate closely
            with designers and backend engineers to deliver polished features end to end &mdash;
            from the UI down to Node.js, Express and MongoDB APIs.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              'Clean, scalable code',
              'Performance-first',
              'Reusable components',
              'Cross-platform',
              'Team player',
              'Team Lead',
              'Code Review',
              'Client Handling',
              'Performance Optimization',
              'Agile / Scrum',
              'Mentoring',
              'Responsive & Accessible UI'
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-surface-2 px-3.5 py-1.5 text-sm text-content"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <Card className="text-center">
                <s.icon className="mx-auto mb-3 size-7 text-primary" />
                <div className="text-3xl font-bold text-gradient">{s.value}</div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

export default About
