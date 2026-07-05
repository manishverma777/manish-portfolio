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
        title="React Native & React.js Developer crafting reliable products"
        subtitle="2 years building mobile and web applications with API integration, payment integration and clean UI."
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
            I&apos;m {siteConfig.owner.name}, a Software Developer with 2 years of hands-on
            experience building React Native mobile apps and React.js web applications. I&apos;ve
            worked on live products including Health Buddy, Petvesta, Chef App, FMO App,
            Construction Web Portal and Car Dekho App.
          </p>
          <p>
            I care about clean, maintainable code, reusable component systems, performance and
            smooth user experiences. I&apos;m comfortable with Redux Toolkit, Material UI, API
            integration, Stripe/payment integration, Android Studio setup, splash screen
            configuration and practical debugging across mobile and web environments.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              'Clean, scalable code',
              'Performance-first',
              'Reusable components',
              'Cross-platform UI',
              'Redux Toolkit',
              'API Integration',
              'Payment Integration',
              'Stripe API',
              'Android Studio',
              'Material UI',
              'Team player',
              'Performance Optimization',
              'Responsive Dashboard UI',
              'Technical Troubleshooting'
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
