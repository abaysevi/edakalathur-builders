import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import dhibinImg from '../assets/dhibin.jpeg'
import './Home.css'

// Project photos
import proj1  from '../assets/projects/project1.jpeg'
import proj2  from '../assets/projects/project2.jpeg'
import proj3  from '../assets/projects/project3.jpeg'
import proj4  from '../assets/projects/project4.jpeg'
import proj5  from '../assets/projects/project5.jpeg'
import proj6  from '../assets/projects/project6.jpeg'
import proj7  from '../assets/projects/project7.jpeg'
import proj8  from '../assets/projects/project8.jpeg'
import proj9  from '../assets/projects/project9.jpeg'
import proj10 from '../assets/projects/project10.jpeg'
import proj11 from '../assets/projects/project11.jpeg'
import proj12 from '../assets/projects/project12.jpeg'
import proj13 from '../assets/projects/project13.jpeg'
import proj14 from '../assets/projects/project14.jpeg'
import proj15 from '../assets/projects/project15.jpeg'
import proj16 from '../assets/projects/project16.jpeg'

// -------------------------------------------------------------------
// Update the 'label' for each photo to describe the project
// -------------------------------------------------------------------
const projectPhotos: { src: string; label: string }[] = [
  { src: proj1,  label: 'Completed Project' },
  { src: proj2,  label: 'Completed Project' },
  { src: proj3,  label: 'Completed Project' },
  { src: proj4,  label: 'Completed Project' },
  { src: proj5,  label: 'Completed Project' },
  { src: proj6,  label: 'Completed Project' },
  { src: proj7,  label: 'Completed Project' },
  { src: proj8,  label: 'Completed Project' },
  { src: proj9,  label: 'Completed Project' },
  { src: proj10, label: 'Completed Project' },
  { src: proj11, label: 'Completed Project' },
  { src: proj12, label: 'Completed Project' },
  { src: proj13, label: 'Completed Project' },
  { src: proj14, label: 'Completed Project' },
  { src: proj15, label: 'Completed Project' },
  { src: proj16, label: 'Completed Project' },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Plan & Design',
    description: 'Complete architectural planning and design services to bring your vision to life with precision and creativity.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4"/>
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18"/>
      </svg>
    ),
    title: 'Plan Approval (All Kinds)',
    description: 'We handle all types of plan approvals and permits, making the bureaucratic process smooth and hassle-free for you.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
    title: 'Construction Work',
    description: 'From foundation to finishing, we handle all types of construction work — residential, commercial, and more.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Electrical Work',
    description: 'Professional electrical installations and wiring solutions that prioritize safety and efficiency.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 12h6M6 8h4"/>
        <path d="M12 2v4l-2 2v6l2 2v6"/>
        <path d="M18 6v12"/>
        <circle cx="18" cy="5" r="1"/>
        <circle cx="18" cy="19" r="1"/>
      </svg>
    ),
    title: 'Plumbing Work',
    description: 'Expert plumbing installations and repairs ensuring efficient water systems throughout your property.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/>
        <path d="M7 12h10"/>
        <path d="M7 8h10"/>
        <path d="M7 16h6"/>
      </svg>
    ),
    title: 'Tile & Granite Work',
    description: 'Premium tiling and granite work for floors, walls, and countertops with flawless finishing.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 8h20"/>
        <path d="M12 4v16"/>
      </svg>
    ),
    title: 'Doors, Windows & Ventilation',
    description: 'Quality doors, windows, and ventilation systems that enhance both aesthetics and airflow in your space.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18"/>
        <path d="M5 21V7l7-4 7 4v14"/>
        <path d="M9 21v-6h6v6"/>
      </svg>
    ),
    title: 'Railing & Stainless Work',
    description: 'Durable and elegant railing and stainless steel fabrication for staircases, balconies, and more.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="1"/>
        <path d="M3 9h18"/>
        <path d="M3 15h18"/>
        <path d="M9 3v18"/>
        <path d="M15 3v18"/>
      </svg>
    ),
    title: 'Gate & Grill Work',
    description: 'Custom-designed gates and grills that provide security with a stylish finish for your property.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Painting Work',
    description: 'Professional interior and exterior painting services with premium paints for a lasting, beautiful finish.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: 'All Finishing Work',
    description: 'Complete finishing services from foundation to final touches — we ensure every detail is perfect.'
  }
]

const testimonials = [
  {
    name: 'Alan Joy',
    text: 'The craftsmanship is simply outstanding. The attention to detail in the custom cabinetry and structural framing shows that they hold themselves to the highest standards. The result is beautiful and built to last.',
    rating: 5
  },
  {
    name: 'Abhi Sasi',
    text: 'Quality of work is the motto of Edakkalathur Construction. So reliable and reasonable.',
    rating: 5
  },
  {
    name: 'Paragon Web-Inc',
    text: 'Excellent experience! The owner, Mr. Dhibin E.S, is very polite and professional. They use high-quality materials and maintain great standards in their work. Highly recommended for anyone looking for reliable and quality construction services.',
    rating: 5
  }
]

function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__overlay"></div>
          <div className="hero__pattern"></div>
        </div>
        <div className="container hero__content">
          <motion.div
            className="hero__text"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span className="hero__label" variants={fadeInUp} transition={{ duration: 0.6 }}>
              Quality &middot; Trust &middot; Commitment &mdash; Guaranteed
            </motion.span>
            <motion.h1 className="hero__title" variants={fadeInUp} transition={{ duration: 0.6 }}>
              We Build<br />
              <span className="hero__title-accent">Your Dreams</span>
            </motion.h1>
            <motion.p className="hero__subtitle" variants={fadeInUp} transition={{ duration: 0.6 }}>
              From concept to completion, we handle everything to turn your dream home into reality. 
              Proudly serving Mundur, Thrissur, and surrounding areas with quality construction 
              services you can trust.
            </motion.p>
            <motion.div className="hero__actions" variants={fadeInUp} transition={{ duration: 0.6 }}>
              <Link to="/contact" className="btn btn--primary">
                Get Free Consultation
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <a href="#services" className="btn btn--outline">
                Our Services
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="hero__image-grid">
              <div className="hero__image-main">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=700&fit=crop"
                  alt="Modern luxury home exterior"
                />
              </div>
              <div className="hero__image-small hero__image-small--top">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&h=300&fit=crop"
                  alt="Modern home interior"
                />
              </div>
              <div className="hero__image-small hero__image-small--bottom">
                <img
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=300&h=300&fit=crop"
                  alt="Construction in progress"
                />
              </div>
              <div className="hero__image-badge">
                <span className="hero__image-badge-number">10+</span>
                <span className="hero__image-badge-text">Years</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services" id="services">
        <div className="container">
          <motion.div
            className="services__header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">What We Do</span>
            <h2 className="section-title">We Handle All Types of Construction Work</h2>
            <p className="section-subtitle">
              From foundation to finishing — comprehensive construction solutions delivered with quality, trust, and commitment.
            </p>
          </motion.div>

          <motion.div
            className="services__grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                className="service-card"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="service-card__icon">{service.icon}</div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about" id="about">
        <div className="container">
          <div className="about__grid">
            <motion.div
              className="about__visual"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="about__image-block">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=750&fit=crop"
                  alt="Construction site with workers"
                  className="about__main-image"
                />
                <div className="about__image-content">
                  <div className="about__experience-badge">
                    <span className="about__experience-number">10+</span>
                    <span className="about__experience-text">Years of<br />Excellence</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="about__text"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-title">From Foundation to Finishing — We Build with Passion</h2>
              <p className="about__description">
                At Edakkalathur Construction, we believe in building stronger relationships with 
                every project. Founded by <strong>Dhibin E.S</strong>, our experienced and skilled team handles everything 
                from concept to completion, turning your dream home into reality.
              </p>
              <p className="about__description">
                Based in Mundur, Thrissur, we proudly serve the surrounding areas with construction 
                services built on quality, trust, and commitment. Customer satisfaction is our priority, 
                and every project we deliver reflects that promise.
              </p>
              <div className="about__features">
                <div className="about__feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green-600)" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span>Experienced & Skilled Team</span>
                </div>
                <div className="about__feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green-600)" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span>Quality Materials & Workmanship</span>
                </div>
                <div className="about__feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green-600)" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span>Timely Completion</span>
                </div>
                <div className="about__feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green-600)" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span>Transparent Pricing</span>
                </div>
                <div className="about__feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green-600)" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span>Customer Satisfaction Priority</span>
                </div>
                <div className="about__feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green-600)" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span>Stronger Relationships</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Gallery Marquee */}
      <section className="projects-marquee-section">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Our Work</span>
          <h2 className="section-title projects-marquee__title">Projects We've Completed</h2>
          <p className="section-subtitle">
            A glimpse of homes, buildings, and spaces we've proudly built across Kerala.
          </p>
        </motion.div>

        <div className="projects-marquee__track-wrapper">
          {/* Pause on hover */}
          <div className="projects-marquee__track">
            {[...projectPhotos, ...projectPhotos].map((p, i) => (
              <div className="projects-marquee__card" key={i}>
                <img src={p.src} alt={p.label} loading="lazy" />
                <div className="projects-marquee__card-label">{p.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials" id="testimonials">
        <div className="container">
          <motion.div
            className="testimonials__header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Trusted by families and businesses across Kerala for quality construction.
            </p>
          </motion.div>

          <motion.div
            className="testimonials__grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                className="testimonial-card"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="testimonial-card__stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--brown-400)" stroke="none">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                    </svg>
                  ))}
                </div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {t.name.charAt(0)}
                  </div>
                  <span className="testimonial-card__name">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta">
        <div className="container">
          <motion.div
            className="cta__content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta__title">Ready to Build Your Dream Home?</h2>
            <p className="cta__subtitle">
              From concept to completion, we handle everything. Get a free consultation today.
            </p>
            <div className="cta__actions">
              <Link to="/contact" className="btn btn--white">
                Start Your Project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <a href="tel:+919249726798" className="btn btn--ghost">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call: 9249726798
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section founder">
        <div className="container">
          <motion.div
            className="founder__content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="founder__image-wrapper">
              <motion.img
                src={dhibinImg}
                alt="Dhibin E.S - Founder & CEO of Edakkalathur Construction"
                className="founder__image"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="founder__text">
              <span className="section-label">Meet Our Founder</span>
              <h2 className="section-title">Dhibin E.S</h2>
              <p className="founder__role">Founder & CEO</p>
              <p className="founder__bio">
                With a passion for building and years of experience in the construction industry, 
                Dhibin E.S founded Edakkalathur Construction with a simple vision — to deliver 
                quality construction that families can trust for generations.
              </p>
              <p className="founder__bio">
                His hands-on approach, commitment to using only the best materials, and dedication 
                to transparent pricing have earned the company a stellar reputation across 
                Mundur, Thrissur, and surrounding areas.
              </p>
              <div className="founder__contact">
                <a href="tel:+919249726798" className="founder__phone">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  9249726798
                </a>
                <a href="https://wa.me/919249726798?text=Hi%2C%20I%27m%20interested%20in%20your%20construction%20services." target="_blank" rel="noopener noreferrer" className="founder__whatsapp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}

export default Home
