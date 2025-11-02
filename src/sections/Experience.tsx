import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { experiences } from '../data/experience'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section
      id="experience"
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
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-cyan mx-auto mt-4"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary/30 transform md:-translate-x-0.5"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.6,
                      type: 'spring',
                      stiffness: 100,
                    },
                  },
                }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-primary-dark z-10"></div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="card"
                  >
                    {/* Company Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-xl text-secondary font-semibold mb-2">
                          {exp.company}
                        </h4>
                      </div>
                    </div>

                    {/* Location and Date */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-accent">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-secondary" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-secondary" />
                        {exp.startDate} - {exp.endDate}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((responsibility, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-accent"
                        >
                          <span className="text-secondary mt-1">▹</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary/20 text-secondary text-xs rounded-full border border-secondary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="pt-4 border-t border-secondary/20">
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((achievement) => (
                            <span
                              key={achievement}
                              className="px-3 py-1 bg-secondary/30 text-secondary text-xs rounded-full font-semibold"
                            >
                              ⭐ {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience

