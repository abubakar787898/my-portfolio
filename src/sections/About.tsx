import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaAward } from 'react-icons/fa'
import { personalInfo } from '../data/personalInfo'
import { achievements } from '../data/achievements'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const stats = [
    { label: 'Years Experience', value: '3.5+', icon: '📅' },
    { label: 'Projects Completed', value: '10+', icon: '🚀' },
    { label: 'Tech Stacks', value: 'Multiple', icon: '💻' },
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
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-cyan mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Side - Image and Stats */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Profile Image */}
            <motion.div
              className="relative w-72 h-72 mx-auto lg:mx-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                style={{
                  background: 'linear-gradient(45deg, #64FFDA, #4DD4B8, #64FFDA)',
                  backgroundSize: '200% 200%',
                }}
              >
                <div className="w-full h-full rounded-2xl bg-primary-dark overflow-hidden">
                  <img
                    src="/images/profile.png"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = 'https://via.placeholder.com/300?text=AI'
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  className="card text-center"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-secondary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-accent">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-accent text-lg leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="card"
            >
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 rounded-lg p-3">
                  <FaGraduationCap className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Education</h3>
                  <p className="text-secondary font-medium">
                    {personalInfo.education.degree}
                  </p>
                  <p className="text-accent">{personalInfo.education.institution}</p>
                  <p className="text-accent text-sm">{personalInfo.education.year}</p>
                </div>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                {personalInfo.languages.map((lang) => (
                  <motion.div
                    key={lang.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-3 bg-primary-light/10 rounded-lg"
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <div>
                      <div className="font-medium">{lang.name}</div>
                      <div className="text-sm text-accent">{lang.proficiency}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaAward className="text-secondary" /> Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement) => (
                  <motion.div
                    key={achievement.id}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 p-3 bg-primary-light/10 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium">{achievement.title}</div>
                      <div className="text-sm text-accent">
                        {achievement.organization} • {achievement.year}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

