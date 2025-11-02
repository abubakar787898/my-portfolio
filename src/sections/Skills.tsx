import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '../data/skills'
import * as Icons from 'react-icons/si'
import { IconType } from 'react-icons'

type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools'

// Icon mapping helper
const getIcon = (iconName: string): IconType | null => {
  const iconMap: Record<string, IconType> = {
    SiJavascript: Icons.SiJavascript,
    SiTypescript: Icons.SiTypescript,
    SiReact: Icons.SiReact,
    SiNextdotjs: Icons.SiNextdotjs,
    SiHtml5: Icons.SiHtml5,
    SiCss3: Icons.SiCss3,
    SiTailwindcss: Icons.SiTailwindcss,
    SiRedux: Icons.SiRedux,
    SiLaravel: Icons.SiLaravel,
    SiPhp: Icons.SiPhp,
    SiNodedotjs: Icons.SiNodedotjs,
    SiExpress: Icons.SiExpress,
    SiMongodb: Icons.SiMongodb,
    SiMysql: Icons.SiMysql,
    SiGit: Icons.SiGit,
    SiGithub: Icons.SiGithub,
  }
  return iconMap[iconName] || null
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>('frontend')
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const categories: { id: SkillCategory; label: string }[] = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'Tools' },
  ]

  const filteredSkills = skills.filter((skill) => skill.category === activeTab)

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 90) return 'bg-green-500'
    if (proficiency >= 80) return 'bg-blue-500'
    if (proficiency >= 70) return 'bg-yellow-500'
    return 'bg-orange-500'
  }

  return (
    <section
      id="skills"
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
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-cyan mx-auto mt-4"></div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-secondary text-primary-dark'
                  : 'bg-primary-light/10 text-accent hover:bg-primary-light/20 border border-secondary/20'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => {
            const IconComponent = getIcon(skill.icon)

            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, rotateY: 5 }}
                className="card group relative"
              >
                <div className="flex items-center gap-4 mb-4">
                  {IconComponent && (
                    <div className="bg-primary-light/20 p-3 rounded-lg group-hover:bg-secondary/20 transition-colors">
                      <IconComponent className="text-secondary text-2xl" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {skill.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-accent">
                        {skill.yearsOfExperience} years
                      </span>
                      <span className="text-secondary">•</span>
                      <span className="text-sm text-secondary font-medium">
                        {skill.proficiency}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-2 bg-primary-light/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.proficiency}%` } : {}}
                    transition={{
                      duration: 1,
                      delay: index * 0.1,
                      ease: 'easeOut',
                    }}
                    className={`h-full ${getProficiencyColor(skill.proficiency)} rounded-full`}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

