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
    title: 'Full Stack Web Developer',
    location: 'Aarhus, Denmark',
    startDate: 'Aug 2024',
    endDate: 'Present',
    responsibilities: [
      'Developed full-stack web applications using Laravel, React.js, and Next.js',
      'Built and managed admin panels for multiple platforms, enhancing usability and performance',
      'Designed and integrated RESTful APIs to connect backend and frontend systems seamlessly',
      'Worked on projects including multi-domain platforms, booking systems, and digital management tools',
      'Focused on scalability, responsive UI, and secure data handling across all solutions',
    ],
    techStack: ['Laravel', 'React.js', 'Next.js', 'MySQL', 'RESTful APIs', 'TypeScript'],
    achievements: ['Employee of the Month (2023)', 'Hardworking Employer of the Year (2024)'],
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
      'Integrated MongoDB for secure data management and role-based access controls',
      'Built and optimized interactive dashboards for teachers, school administrators, and parents',
      'Implemented secure user authentication, role-based access, and real-time communication features',
      'Worked on API integrations and database management to ensure seamless data flow and scalability',
    ],
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'MERN Stack', 'Redux'],
  },
  {
    id: '3',
    company: 'DanZee Tech',
    title: 'Full Stack Web Developer',
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

