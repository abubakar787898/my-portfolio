import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import { personalInfo } from '../data/personalInfo'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setFormStatus('idle')
      }, 5000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 border border-secondary/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-cyan mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-accent mb-8">
                I'm open to opportunities and collaborations. Feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email */}
              <motion.a
                href={personalInfo.socialLinks.email}
                whileHover={{ x: 5 }}
                className="card flex items-center gap-4 group"
              >
                <div className="bg-secondary/20 p-3 rounded-lg group-hover:bg-secondary/30 transition-colors">
                  <FaEnvelope className="text-secondary" size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-accent">Email</div>
                  <div className="text-white group-hover:text-secondary transition-colors">
                    {personalInfo.email}
                  </div>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                whileHover={{ x: 5 }}
                className="card flex items-center gap-4"
              >
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-secondary" size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-accent">Location</div>
                  <div className="text-white">{personalInfo.locationFull}</div>
                </div>
              </motion.div>

              {/* LinkedIn */}
              <motion.a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="card flex items-center gap-4 group"
              >
                <div className="bg-secondary/20 p-3 rounded-lg group-hover:bg-secondary/30 transition-colors">
                  <FaLinkedin className="text-secondary" size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-accent">LinkedIn</div>
                  <div className="text-white group-hover:text-secondary transition-colors">
                    Connect with me
                  </div>
                </div>
              </motion.a>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="card flex items-center gap-4 bg-secondary/10 border-secondary/30"
              >
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <div>
                  <div className="text-sm text-accent">Status</div>
                  <div className="text-white font-medium">Open to opportunities</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="card">
              <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-accent">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-light/10 border border-secondary/20 rounded-lg text-white placeholder-accent focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-accent">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-light/10 border border-secondary/20 rounded-lg text-white placeholder-accent focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-accent">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-primary-light/10 border border-secondary/20 rounded-lg text-white placeholder-accent focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Status Message */}
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg"
                  >
                    <FaCheckCircle /> Message sent successfully!
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg"
                  >
                    <FaTimesCircle /> Something went wrong. Please try again.
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary-dark border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

