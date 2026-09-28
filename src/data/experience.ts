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
    title: 'Software Engineer (Full Stack)',
    location: 'Aarhus, Denmark (Remote)',
    startDate: 'Aug 2024',
    endDate: 'Present',
    responsibilities: [
      'Build and maintain full-stack web applications with Next.js, TypeScript, Node.js/Express and MongoDB, plus Laravel REST APIs with Vue.js admin panels',
      'Ship multi-domain platforms, booking systems and digital management tools — owning database design, API architecture and deployment',
      'Implement secure authentication, role-based access control and subscription billing with third-party payment gateway integrations',
      'Deploy on Vercel and VPS with GitHub-driven CI/CD, keeping a sharp eye on performance, uptime and clean architecture',
    ],
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Laravel', 'Vue.js', 'RESTful APIs'],
    achievements: ['Employee of the Month (2023)', 'Hardworking Employee of the Year (2024)'],
  },
  {
    id: '2',
    company: 'Tututor AI',
    title: 'MERN Stack Developer',
    location: 'Barcelona, Spain',
    startDate: 'Jan 2023',
    endDate: '2024',
    responsibilities: [
      'Developed a Spain-based learning management platform for schools, teachers, parents, and students',
      'Built scalable backend APIs with Node.js/Express and responsive front-end interfaces using React.js',
      'Built the companion React Native mobile app (Android), bringing courses, progress tracking and real-time updates to students and parents on the go',
      'Integrated MongoDB for secure data management and role-based access controls',
      'Built and optimized interactive dashboards for teachers, school administrators, and parents',
      'Implemented secure user authentication, role-based access, and real-time communication features',
    ],
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'MERN Stack', 'Redux', 'React Native', 'Android'],
  },
  {
    id: '3',
    company: 'DanZee Tech',
    title: 'Full Stack Developer',
    location: 'Aarhus, Denmark',
    startDate: 'Aug 2021',
    endDate: '2022',
    responsibilities: [
      'Worked on end-to-end web development using Laravel Blade, PHP, and MySQL',
      'Built dashboards, authentication systems, and APIs, ensuring optimized performance and clean architecture',
      'Handled both frontend and backend development tasks',
      'Designed and implemented database schemas',
      'Created responsive user interfaces with modern CSS frameworks',
    ],
    techStack: ['Laravel', 'PHP', 'Laravel Blade', 'MySQL', 'JavaScript'],
    achievements: ['Best Performer Recognition by NAVTTC'],
  },
]

