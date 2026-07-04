import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { siteConfig } from '../../utils/config'
import { socials } from '../../utils/data'
import { fromLeft, fromRight, viewportOnce } from '../../utils/animations'

const { owner, contactRecipient } = siteConfig
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${contactRecipient}`

function Field({ label, type = 'text', textarea = false, ...props }) {
  const base =
    'w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-content placeholder:text-muted outline-none transition-colors focus:border-primary'
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-content">{label}</span>
      {textarea ? (
        <textarea rows={5} className={`${base} resize-none`} {...props} />
      ) : (
        <input type={type} className={base} {...props} />
      )}
    </label>
  )
}

function Contact() {
  // 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    // Honeypot: if a bot filled the hidden field, silently "succeed".
    if (data.get('_honey')) {
      setStatus('success')
      form.reset()
      return
    }

    const name = (data.get('name') || '').toString().trim()
    const email = (data.get('email') || '').toString().trim()
    const subject = (data.get('subject') || '').toString().trim() || 'New message'
    const message = (data.get('message') || '').toString().trim()
    const receivedAt = new Date().toLocaleString('en-IN', {
      dateStyle: 'full',
      timeStyle: 'short'
    })

    const payload = {
      // Meaningful, scannable subject line in the inbox.
      _subject: `📬 New portfolio enquiry from ${name} — ${subject}`,
      // FormSubmit's polished card-style email template.
      _template: 'box',
      _captcha: 'false',
      // Friendly auto-reply sent back to the person who contacted you.
      _autoresponse: `Hi ${name},\n\nThanks for reaching out through my portfolio — your message has been received! I'll get back to you within 1–2 business days.\n\nFor your records, here's what you sent:\n\nSubject: ${subject}\nMessage: ${message}\n\nWarm regards,\n${owner.name}\n${owner.role}`,
      // Nicely-labelled fields (these become the rows in the email).
      Name: name,
      Email: email,
      Subject: subject,
      Message: message,
      'Received at': receivedAt
    }

    setStatus('sending')
    setFeedback('')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      })
      const result = await res.json().catch(() => ({}))

      if (res.ok && (result.success === true || result.success === 'true')) {
        setStatus('success')
        setFeedback("Thanks! Your message is on its way — I'll reply soon.")
        form.reset()
      } else if (/activat/i.test(result.message || '')) {
        // First-ever submission: FormSubmit emailed the owner an activation link.
        setStatus('success')
        setFeedback('Thanks! Your message was received and will be delivered shortly.')
        form.reset()
      } else {
        setStatus('error')
        setFeedback(
          result.message || 'Something went wrong. Please try again or email me directly.'
        )
      }
    } catch {
      setStatus('error')
      setFeedback('Network error. Please check your connection and try again.')
    }

    // Reset the button label back to idle after a short delay.
    setTimeout(() => setStatus((s) => (s === 'success' ? 'idle' : s)), 5000)
  }

  const sending = status === 'sending'
  const buttonIcon = sending
    ? Loader2
    : status === 'success'
      ? CheckCircle2
      : status === 'error'
        ? AlertCircle
        : Send
  const buttonLabel = sending
    ? 'Sending…'
    : status === 'success'
      ? 'Message sent!'
      : status === 'error'
        ? 'Try again'
        : 'Send message'

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something great"
        subtitle="Have a project in mind or just want to say hi? My inbox is always open."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Info */}
        <motion.div
          variants={fromLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="space-y-4"
        >
          <a
            href={`mailto:${owner.email}`}
            className="glass-card flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-primary/60"
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-surface-2 text-primary">
              <Mail className="size-5" />
            </span>
            <span>
              <span className="block text-sm text-muted">Email</span>
              <span className="block font-medium text-content">{owner.email}</span>
            </span>
          </a>
          <div className="glass-card flex items-center gap-4 rounded-2xl p-5">
            <span className="flex size-12 items-center justify-center rounded-xl bg-surface-2 text-primary">
              <MapPin className="size-5" />
            </span>
            <span>
              <span className="block text-sm text-muted">Location</span>
              <span className="block font-medium text-content">{owner.location}</span>
            </span>
          </div>
          <div className="glass-card rounded-2xl p-5">
            <span className="mb-3 block text-sm text-muted">Find me online</span>
            <div className="flex gap-2">
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
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={onSubmit}
          variants={fromRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="glass-card space-y-4 rounded-2xl p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Jane Doe" required />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="jane@company.com"
              required
            />
          </div>
          <Field label="Subject" name="subject" placeholder="Project inquiry" required />
          <Field label="Message" name="message" textarea placeholder="Tell me about it…" required />

          {/* Honeypot field — hidden from humans, catches bots. */}
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <Button
            type="submit"
            size="lg"
            disabled={sending}
            className={`w-full ${sending ? '[&>svg]:animate-spin' : ''}`}
            icon={buttonIcon}
          >
            {buttonLabel}
          </Button>

          {feedback && (
            <p
              role="status"
              className={`text-center text-sm ${
                status === 'error' ? 'text-accent' : 'text-primary'
              }`}
            >
              {feedback}
            </p>
          )}
        </motion.form>
      </div>
    </Section>
  )
}

export default Contact
