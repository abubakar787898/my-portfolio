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
  { id: '1', name: 'JavaScript', icon: 'SiJavascript', proficiency: 95, yearsOfExperience: 5, category: 'frontend' },
  { id: '2', name: 'TypeScript', icon: 'SiTypescript', proficiency: 90, yearsOfExperience: 4, category: 'frontend' },
  { id: '3', name: 'React.js', icon: 'SiReact', proficiency: 95, yearsOfExperience: 5, category: 'frontend' },
  { id: '4', name: 'Next.js', icon: 'SiNextdotjs', proficiency: 88, yearsOfExperience: 3.5, category: 'frontend' },
  { id: '5', name: 'React Native', icon: 'SiReact', proficiency: 85, yearsOfExperience: 2, category: 'frontend' },
  { id: '6', name: 'Android', icon: 'SiAndroid', proficiency: 80, yearsOfExperience: 2, category: 'frontend' },
  { id: '7', name: 'HTML5', icon: 'SiHtml5', proficiency: 98, yearsOfExperience: 5, category: 'frontend' },
  { id: '8', name: 'CSS', icon: 'SiCss3', proficiency: 95, yearsOfExperience: 5, category: 'frontend' },
  { id: '9', name: 'Tailwind CSS', icon: 'SiTailwindcss', proficiency: 92, yearsOfExperience: 3.5, category: 'frontend' },
  { id: '10', name: 'Redux', icon: 'SiRedux', proficiency: 88, yearsOfExperience: 3, category: 'frontend' },
  { id: '11', name: 'RTK Query', icon: 'SiRedux', proficiency: 82, yearsOfExperience: 2, category: 'frontend' },

  // Backend
  { id: '12', name: 'Laravel', icon: 'SiLaravel', proficiency: 95, yearsOfExperience: 5, category: 'backend' },
  { id: '13', name: 'PHP', icon: 'SiPhp', proficiency: 90, yearsOfExperience: 4.5, category: 'backend' },
  { id: '14', name: 'Node.js', icon: 'SiNodedotjs', proficiency: 90, yearsOfExperience: 4, category: 'backend' },
  { id: '15', name: 'Express.js', icon: 'SiExpress', proficiency: 88, yearsOfExperience: 3.5, category: 'backend' },

  // Database
  { id: '16', name: 'MongoDB', icon: 'SiMongodb', proficiency: 90, yearsOfExperience: 3.5, category: 'database' },
  { id: '17', name: 'MySQL', icon: 'SiMysql', proficiency: 92, yearsOfExperience: 5, category: 'database' },

  // Tools
  { id: '18', name: 'Git', icon: 'SiGit', proficiency: 92, yearsOfExperience: 5, category: 'tools' },
  { id: '19', name: 'GitHub', icon: 'SiGithub', proficiency: 95, yearsOfExperience: 5, category: 'tools' },
  { id: '20', name: 'AWS', icon: 'SiAmazon', proficiency: 80, yearsOfExperience: 2, category: 'tools' },
  { id: '21', name: 'CI/CD', icon: 'SiGithubactions', proficiency: 85, yearsOfExperience: 2.5, category: 'tools' },
  { id: '22', name: 'Chrome Extensions', icon: 'SiGooglechrome', proficiency: 90, yearsOfExperience: 1.5, category: 'tools' },
  { id: '23', name: 'Vue.js', icon: 'SiVuedotjs', proficiency: 80, yearsOfExperience: 2, category: 'frontend' },
  { id: '24', name: 'REST APIs', icon: 'FaServer', proficiency: 92, yearsOfExperience: 4, category: 'backend' },
  { id: '25', name: 'Vercel', icon: 'SiVercel', proficiency: 85, yearsOfExperience: 2.5, category: 'tools' },
  { id: '26', name: 'Postman', icon: 'SiPostman', proficiency: 88, yearsOfExperience: 4, category: 'tools' },
  { id: '27', name: 'Payment Gateways', icon: 'FaCreditCard', proficiency: 82, yearsOfExperience: 2, category: 'tools' },
]
