import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logoSvg from '../assets/logo.svg'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer__top"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={logoSvg} alt="Edakkalathur Construction" className="footer__logo-img" />
            </div>
            <p className="footer__description">
              From foundation to finishing — we build with passion. Proudly serving 
              Mundur, Thrissur, and surrounding areas with quality construction services 
              built on trust and commitment.
            </p>
          </div>

          <div className="footer__nav">
            <h4 className="footer__nav-title">Quick Links</h4>
            <Link to="/" className="footer__nav-link">Home</Link>
            <a href="/#services" className="footer__nav-link">Services</a>
            <a href="/#about" className="footer__nav-link">About Us</a>
            <a href="/#testimonials" className="footer__nav-link">Testimonials</a>
            <Link to="/contact" className="footer__nav-link">Contact</Link>
          </div>

          <div className="footer__nav">
            <h4 className="footer__nav-title">Services</h4>
            <span className="footer__nav-link">Plan & Design</span>
            <span className="footer__nav-link">Plan Approval</span>
            <span className="footer__nav-link">Construction Work</span>
            <span className="footer__nav-link">Electrical Work</span>
            <span className="footer__nav-link">Plumbing Work</span>
          </div>

          <div className="footer__nav">
            <h4 className="footer__nav-title">Contact Info</h4>
            <span className="footer__nav-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="8.5" cy="7" r="4"/>
              </svg>
              Dhibin E.S — Founder & CEO
            </span>
            <span className="footer__nav-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              9249726798
            </span>
            <span className="footer__nav-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Mundur, Thrissur, Kerala 680546
            </span>
          </div>
        </motion.div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Edakkalathur Construction. All rights reserved.</p>
          <p className="footer__tagline">From Foundation to Finishing — We Build with Passion</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
