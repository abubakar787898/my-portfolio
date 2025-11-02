import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { projects } from '../data/projects'

type FilterType = 'all' | 'laravel' | 'react' | 'mern' | 'nextjs'

const Projects = () => {
  const [filter, setFilter] = useState<FilterType>('all')
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const filters: FilterType[] = ['all', 'laravel', 'react', 'mern', 'nextjs']

  const filteredProjects = projects.filter(
    (project) => filter === 'all' || project.category === filter
  )

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
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-cyan mx-auto mt-4"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filterType) => (
            <motion.button
              key={filterType}
              onClick={() => setFilter(filterType)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === filterType
                  ? 'bg-secondary text-primary-dark'
                  : 'bg-primary-light/10 text-accent hover:bg-primary-light/20 border border-secondary/20'
              }`}
            >
              {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card group relative overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg bg-primary-light/10">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = 'https://via.placeholder.com/600x400?text=' + project.name
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">{project.longDescription}</p>
                  </div>
                </div>

                {/* Project Stats */}
                {project.stats && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-secondary">
                        {project.stats.value}
                      </span>
                      <span className="text-accent">{project.stats.label}</span>
                    </div>
                  </div>
                )}

                {/* Project Info */}
                <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-accent mb-4">{project.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="text-sm text-accent flex items-start gap-2">
                        <span className="text-secondary mt-1">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded border border-secondary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-secondary text-primary-dark rounded-lg font-medium hover:bg-secondary-light transition-colors"
                    >
                      <FaExternalLinkAlt /> View Live
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border border-secondary text-secondary rounded-lg font-medium hover:bg-secondary/10 transition-colors"
                    >
                      <FaGithub /> Code
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects

