import { motion } from 'framer-motion'
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
                    8:00 AM - 6:00 PM
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0!2d76.23!3d10.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDM4JzAuMCJOIDc2wrAxMyc0OC4wIkU!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </motion.div>

            {/* Direct Contact CTA */}
            <motion.div
              className="contact__cta-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="contact__cta-card">
                <h2 className="contact__cta-title">Get In Touch Directly</h2>
                <p className="contact__cta-subtitle">
                  Call us or visit our office for a free consultation about your project.
                </p>
                <a href="tel:+919249726798" className="btn btn--primary contact__call-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Call: 9249726798
                </a>
                <a href="https://wa.me/919249726798?text=Hi%2C%20I%27m%20interested%20in%20your%20construction%20services." target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp contact__call-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
                <p className="contact__cta-founder">
                  <strong>Dhibin E.S</strong> — Founder & CEO
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default Contact
