import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa'
import { personalInfo } from '../data/personalInfo'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative bg-primary-dark/50 border-t border-secondary/20">
      {/* Animated Wave Divider */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg
          className="relative block w-full h-12"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#0A192F"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-heading font-bold gradient-text mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-accent text-sm mb-4">{personalInfo.tagline}</p>
            <div className="flex gap-4">
              <motion.a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-accent hover:text-secondary transition-colors"
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-accent hover:text-secondary transition-colors"
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                href={personalInfo.socialLinks.email}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-accent hover:text-secondary transition-colors"
              >
                <FaEnvelope size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-accent hover:text-secondary transition-colors text-sm"
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(item.href)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-accent">
              <li>
                <a
                  href={personalInfo.socialLinks.email}
                  className="hover:text-secondary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>{personalInfo.locationFull}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-accent text-sm text-center md:text-left">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-4 py-2 bg-secondary/20 hover:bg-secondary/30 rounded-lg text-secondary transition-colors"
          >
            <span className="text-sm">Back to Top</span>
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

