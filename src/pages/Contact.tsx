import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

// EmailJS configuration — replace these with your IDs from https://emailjs.com
const EMAILJS_SERVICE_ID = 'service_ybhmydc'
const EMAILJS_TEMPLATE_ID = 'template_5p4y3wa'
const EMAILJS_PUBLIC_KEY = 'nVDhH5gP-6AFY0PK6'

interface SelectOption { value: string; label: string }
interface CustomSelectProps {
  id: string
  label: string
  placeholder: string
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  required?: boolean
}

function CustomSelect({ id, label, placeholder, options, value, onChange, required }: CustomSelectProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const selected = options.find(o => o.value === value)

  return (
    <div className="contact-form__group">
      <label className="contact-form__label" htmlFor={id}>{label}{required && ' *'}</label>
      <div className={`cf-select${open ? ' cf-select--open' : ''}`} ref={ref}>
        <button
          id={id}
          type="button"
          className={`cf-select__trigger${!selected ? ' cf-select__trigger--placeholder' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span>{selected ? selected.label : placeholder}</span>
          <svg className="cf-select__chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
        {open && (
          <ul className="cf-select__panel" role="listbox">
            {options.map(opt => (
              <li
                key={opt.value}
                role="option"
                aria-selected={opt.value === value}
                className={`cf-select__option${opt.value === value ? ' cf-select__option--selected' : ''}`}
                onClick={() => { onChange(opt.value); setOpen(false) }}
              >
                <span>{opt.label}</span>
                {opt.value === value && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    projectType: '', budget: '', location: '', message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: form.name,
        email: form.email || 'Not provided',
        phone: form.phone,
        projectType: form.projectType,
        budget: form.budget || 'Not specified',
        location: form.location,
        message: form.message || 'No message provided',
      }, EMAILJS_PUBLIC_KEY)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-form__card contact-form__success">
        <div className="contact-form__success-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <h2 className="contact-form__success-title">Thank You!</h2>
        <p className="contact-form__success-text">We've received your enquiry and will get back to you within 24 hours.</p>
        <button className="btn btn--primary" onClick={() => setStatus('idle')}>Send Another Enquiry</button>
      </div>
    )
  }

  return (
    <form className="contact-form__card" onSubmit={handleSubmit} noValidate>
      <h2 className="contact-form__title">Send Us an Enquiry</h2>
      <p className="contact-form__subtitle">Fill in your details and we'll get back to you within 24 hours.</p>

      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div className="contact-form__row">
        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="cf-name">Full Name *</label>
          <input
            id="cf-name"
            className="contact-form__input"
            type="text"
            name="name"
            placeholder="e.g. Rahul Menon"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="cf-phone">Phone Number *</label>
          <input
            id="cf-phone"
            className="contact-form__input"
            type="tel"
            name="phone"
            placeholder="e.g. 9876543210"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="contact-form__group">
        <label className="contact-form__label" htmlFor="cf-email">Email Address</label>
        <input
          id="cf-email"
          className="contact-form__input"
          type="email"
          name="email"
          placeholder="e.g. rahul@email.com"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="contact-form__row">
        <CustomSelect
          id="cf-project-type"
          label="Project Type"
          placeholder="Select project type"
          required
          value={form.projectType}
          onChange={v => setForm(p => ({ ...p, projectType: v }))}
          options={[
            { value: 'residential', label: 'Residential Construction' },
            { value: 'commercial',  label: 'Commercial Construction' },
            { value: 'renovation',  label: 'Renovation / Remodelling' },
            { value: 'interior',    label: 'Interior Works' },
            { value: 'compound',    label: 'Compound Wall / Fencing' },
            { value: 'other',       label: 'Other' },
          ]}
        />
        <CustomSelect
          id="cf-budget"
          label="Estimated Budget"
          placeholder="Select budget range"
          value={form.budget}
          onChange={v => setForm(p => ({ ...p, budget: v }))}
          options={[
            { value: 'below-10L', label: 'Below ₹10 Lakhs' },
            { value: '10L-25L',   label: '₹10 – ₹25 Lakhs' },
            { value: '25L-50L',   label: '₹25 – ₹50 Lakhs' },
            { value: '50L-1Cr',   label: '₹50 Lakhs – ₹1 Crore' },
            { value: 'above-1Cr', label: 'Above ₹1 Crore' },
          ]}
        />
      </div>

      <div className="contact-form__group">
        <label className="contact-form__label" htmlFor="cf-location">Project Location *</label>
        <input
          id="cf-location"
          className="contact-form__input"
          type="text"
          name="location"
          placeholder="e.g. Thrissur, Kerala"
          value={form.location}
          onChange={handleChange}
          required
        />
      </div>

      <div className="contact-form__group">
        <label className="contact-form__label" htmlFor="cf-message">Message / Requirements</label>
        <textarea
          id="cf-message"
          className="contact-form__input contact-form__textarea"
          name="message"
          placeholder="Tell us about your project, requirements, timeline, etc."
          value={form.message}
          onChange={handleChange}
          rows={4}
        />
      </div>

      <button
        type="submit"
        className="btn btn--primary contact-form__submit"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <svg className="contact-form__spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
            </svg>
            Sending…
          </>
        ) : (
          <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Send Enquiry
          </>
        )}
      </button>

      {status === 'error' && (
        <p className="contact-form__error">
          ⚠️ Something went wrong. Please try again or call us directly.
        </p>
      )}

      <div className="contact-form__quick-links">
        <a href="tel:+919249726798" className="contact-form__quick-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          Call: 9249726798
        </a>
        <a href="https://wa.me/919249726798?text=Hi%2C%20I%27m%20interested%20in%20your%20construction%20services." target="_blank" rel="noopener noreferrer" className="contact-form__quick-link contact-form__quick-link--wa">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp Us
        </a>
      </div>
    </form>
  )
}

function Contact() {
  return (
    <motion.main
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="contact-hero__bg"></div>
        <div className="container contact-hero__content">
          <motion.span
            className="hero__label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.span>
          <motion.h1
            className="contact-hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's Build Something<br />
            <span className="hero__title-accent">Together</span>
          </motion.h1>
          <motion.p
            className="contact-hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project in mind? Reach out to us and get a free consultation.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section contact-content">
        <div className="container">
          <div className="contact__grid">
            {/* Contact Info */}
            <motion.div
              className="contact__info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div className="contact-info-card" variants={fadeInUp} transition={{ duration: 0.5 }}>
                <div className="contact-info-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="contact-info-card__title">Phone</h3>
                  <p className="contact-info-card__text">
                    <a href="tel:+919249726798">9249726798</a>
                  </p>
                  <p className="contact-info-card__sub">Dhibin E.S — Founder & CEO</p>
                </div>
              </motion.div>

              <motion.div className="contact-info-card" variants={fadeInUp} transition={{ duration: 0.5 }}>
                <div className="contact-info-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h3 className="contact-info-card__title">Address</h3>
                  <p className="contact-info-card__text">
                    Edakkalathur Construction, P.O,<br />
                    Mundur, Thrissur, Kerala 680546
                  </p>
                  <p className="contact-info-card__sub">Proudly serving Mundur and surrounding areas</p>
                </div>
              </motion.div>

              <motion.div className="contact-info-card" variants={fadeInUp} transition={{ duration: 0.5 }}>
                <div className="contact-info-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <h3 className="contact-info-card__title">Working Hours</h3>
                  <p className="contact-info-card__text">
                    Monday - Saturday<br />
                    10:00 AM - 5:00 PM
                  </p>
                  <p className="contact-info-card__sub">Sunday - Closed</p>
                </div>
              </motion.div>

              {/* Map Embed */}
              <motion.div
                className="contact__map"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <iframe
                  title="Edakkalathur Construction Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.8314486402164!2d76.15779810000001!3d10.5923479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ebf4daa5a4c5%3A0xabaf27ea6c6be808!2sEdakkalathur%20Construction!5e0!3m2!1sen!2sin!4v1785327411867!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </motion.div>
            </motion.div>

            {/* Enquiry Form */}
            <motion.div
              className="contact__form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default Contact
