import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logoSvg from '../assets/logo.svg'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="navbar__container container">
        <Link to="/" className="navbar__logo">
          <img src={logoSvg} alt="Edakkalathur Construction" className="navbar__logo-img" />
        </Link>

        <div className="navbar__links">
          <Link to="/" className={`navbar__link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <a href="/#services" className="navbar__link">Services</a>
          <a href="/#about" className="navbar__link">About</a>
          <a href="/#testimonials" className="navbar__link">Testimonials</a>
          <Link to="/contact" className={`navbar__link navbar__link--cta ${location.pathname === '/contact' ? 'active' : ''}`}>
            Contact Us
          </Link>
        </div>

        <button
          className={`navbar__hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" className="navbar__mobile-link">Home</Link>
            <a href="/#services" className="navbar__mobile-link">Services</a>
            <a href="/#about" className="navbar__mobile-link">About</a>
            <a href="/#testimonials" className="navbar__mobile-link">Testimonials</a>
            <Link to="/contact" className="navbar__mobile-link navbar__mobile-link--cta">Contact Us</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
