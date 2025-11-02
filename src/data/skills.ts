export interface Skill {
  id: string
  name: string
  icon: string
  proficiency: number
  yearsOfExperience: number
  category: 'frontend' | 'backend' | 'database' | 'tools'
}

export const skills: Skill[] = [
  // Frontend
  { id: '1', name: 'JavaScript', icon: 'SiJavascript', proficiency: 95, yearsOfExperience: 3.5, category: 'frontend' },
  { id: '2', name: 'TypeScript', icon: 'SiTypescript', proficiency: 90, yearsOfExperience: 3, category: 'frontend' },
  { id: '3', name: 'React.js', icon: 'SiReact', proficiency: 95, yearsOfExperience: 3.5, category: 'frontend' },
  { id: '4', name: 'Next.js', icon: 'SiNextdotjs', proficiency: 85, yearsOfExperience: 2, category: 'frontend' },
  { id: '5', name: 'HTML5', icon: 'SiHtml5', proficiency: 98, yearsOfExperience: 3.5, category: 'frontend' },
  { id: '6', name: 'CSS', icon: 'SiCss3', proficiency: 95, yearsOfExperience: 3.5, category: 'frontend' },
  { id: '7', name: 'Tailwind CSS', icon: 'SiTailwindcss', proficiency: 92, yearsOfExperience: 2.5, category: 'frontend' },
  { id: '8', name: 'Redux', icon: 'SiRedux', proficiency: 85, yearsOfExperience: 2, category: 'frontend' },
  { id: '9', name: 'RTK Query', icon: 'SiRedux', proficiency: 80, yearsOfExperience: 1.5, category: 'frontend' },
  
  // Backend
  { id: '10', name: 'Laravel', icon: 'SiLaravel', proficiency: 95, yearsOfExperience: 3.5, category: 'backend' },
  { id: '11', name: 'PHP', icon: 'SiPhp', proficiency: 90, yearsOfExperience: 3.5, category: 'backend' },
  { id: '12', name: 'Node.js', icon: 'SiNodedotjs', proficiency: 88, yearsOfExperience: 2.5, category: 'backend' },
  { id: '13', name: 'Express.js', icon: 'SiExpress', proficiency: 85, yearsOfExperience: 2.5, category: 'backend' },
  
  // Database
  { id: '14', name: 'MongoDB', icon: 'SiMongodb', proficiency: 90, yearsOfExperience: 2.5, category: 'database' },
  { id: '15', name: 'MySQL', icon: 'SiMysql', proficiency: 92, yearsOfExperience: 3.5, category: 'database' },
  
  // Tools
  { id: '16', name: 'Git', icon: 'SiGit', proficiency: 90, yearsOfExperience: 3.5, category: 'tools' },
  { id: '17', name: 'GitHub', icon: 'SiGithub', proficiency: 95, yearsOfExperience: 3.5, category: 'tools' },
]

