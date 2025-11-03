import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiLaravel, SiReact, SiNodedotjs, SiMongodb, SiNextdotjs } from 'react-icons/si'
import { personalInfo } from '../data/personalInfo'
import Typewriter from '../components/Typewriter'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const techIcons = [
    { Icon: SiLaravel, name: 'Laravel', delay: 0 },
    { Icon: SiReact, name: 'React', delay: 0.2 },
    { Icon: SiNodedotjs, name: 'Node.js', delay: 0.4 },
    { Icon: SiMongodb, name: 'MongoDB', delay: 0.6 },
    { Icon: SiNextdotjs, name: 'Next.js', delay: 0.8 },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-secondary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      {/* Parallax Effect */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #64FFDA 0%, transparent 50%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.p
              variants={itemVariants}
              className="text-secondary text-lg md:text-xl mb-4 font-medium"
            >
              Hi, I'm
            </motion.p>
            
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4"
            >
              <span className="text-white">{personalInfo.name.split(' ')[0]}</span>{' '}
              <span className="gradient-text">{personalInfo.name.split(' ')[1]}</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold mb-6"
            >
              <Typewriter text={personalInfo.title} speed={100} />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-accent text-lg md:text-xl mb-8 max-w-2xl"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-secondary"
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6 justify-center lg:justify-start"
            >
              <motion.a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-accent hover:text-secondary transition-colors"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-accent hover:text-secondary transition-colors"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href={personalInfo.socialLinks.email}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-accent hover:text-secondary transition-colors"
              >
                <FaEnvelope size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image with Floating Tech Icons */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center"
          >
            {/* Profile Image Container */}
            <motion.div
              className="relative w-64 h-64 md:w-96 md:h-96 mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Rotating Gradient Border */}
              <motion.div
                className="absolute inset-0 rounded-full p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                style={{
                  background: 'linear-gradient(45deg, #64FFDA, #4DD4B8, #64FFDA)',
                  backgroundSize: '200% 200%',
                }}
              >
                  <div className="w-full h-full rounded-full bg-primary-dark overflow-hidden">
                  <img
                    src="/images/profile.png"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    loading="eager"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = 'https://via.placeholder.com/400?text=AI'
                    }}
                  />
                </div>
              </motion.div>

              {/* Floating Tech Icons */}
              {techIcons.map(({ Icon, name, delay }, index) => {
                const angle = (index * 360) / techIcons.length
                const radius = 180
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius

                return (
                  <motion.div
                    key={name}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: x,
                      y: y,
                    }}
                    transition={{
                      delay: delay,
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                  >
                    <motion.div
                      className="bg-primary-light/20 backdrop-blur-sm rounded-full p-3 border border-secondary/30"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 2 + delay,
                        repeat: Infinity,
                        delay: delay,
                      }}
                    >
                      <Icon className="text-secondary" size={32} />
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-secondary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

