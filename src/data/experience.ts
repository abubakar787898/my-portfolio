export interface ExperienceItem {
  id: string
  company: string
  title: string
  location: string
  startDate: string
  endDate: string
  responsibilities: string[]
  techStack: string[]
  achievements?: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: '1',
    company: 'DanZee Tech',
    title: 'Full Stack Developer',
    location: 'Denmark',
    startDate: 'Aug 2024',
    endDate: 'Present',
    responsibilities: [
      'Developed and maintained scalable web applications using Laravel and React',
      'Implemented RESTful APIs and integrated third-party services',
      'Collaborated with cross-functional teams to deliver high-quality software',
      'Optimized application performance and ensured responsive design',
      'Mentored junior developers and conducted code reviews',
    ],
    techStack: ['Laravel', 'React', 'Next.js', 'MySQL', 'TypeScript'],
    achievements: ['Employee of the Month'],
  },
  {
    id: '2',
    company: 'Tututor AI',
    title: 'MERN Stack Developer',
    location: 'Spain',
    startDate: 'Jan 2023',
    endDate: '2024',
    responsibilities: [
      'Built Learning Management System with role-based access control',
      'Developed real-time features using WebSockets and Socket.io',
      'Implemented authentication and authorization systems',
      'Created admin dashboard for school management',
      'Integrated payment gateways and email notification systems',
    ],
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux'],
  },
  {
    id: '3',
    company: 'DanZee Tech',
    title: 'Full Stack Developer',
    location: 'Denmark',
    startDate: 'Aug 2021',
    endDate: '2022',
    responsibilities: [
      'Developed full-stack applications using Laravel and React',
      'Designed and implemented database schemas',
      'Created responsive user interfaces with modern CSS frameworks',
      'Participated in Agile development processes',
      'Fixed bugs and improved application stability',
    ],
    techStack: ['Laravel', 'PHP', 'React', 'MySQL', 'JavaScript'],
    achievements: ['Best Performer NAVTTC'],
  },
]

