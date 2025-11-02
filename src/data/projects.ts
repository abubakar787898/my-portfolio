export interface Project {
  id: string
  name: string
  description: string
  longDescription: string
  techStack: string[]
  features: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
  category: 'all' | 'laravel' | 'react' | 'mern' | 'nextjs'
  stats?: {
    label: string
    value: string | number
  }
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'YAKSPORT',
    description: 'Multi-Region Sports Travel Platform',
    longDescription: 'A comprehensive sports travel booking platform supporting multiple regions with advanced booking system and digital contract management.',
    techStack: ['Laravel', 'React', 'Next.js', 'MySQL'],
    features: [
      'Multi-domain architecture',
      'Advanced booking system',
      'Digital contract management',
      'Payment integration',
      'Multi-language support',
    ],
    image: '/images/yaksport.jpg',
    liveUrl: 'https://yaksport.com',
    category: 'all',
  },
  {
    id: '2',
    name: 'Evarto',
    description: 'Nordic Venue Booking Platform',
    longDescription: 'A venue booking platform serving the Nordic region with subscription-based model and extensive venue database.',
    techStack: ['Laravel', 'React', 'MySQL'],
    features: [
      '950+ venues database',
      'Subscription model',
      'Advanced search and filters',
      'Sweden expansion',
      'Real-time availability',
    ],
    image: '/images/evarto.jpg',
    liveUrl: 'https://evarto.com',
    category: 'laravel',
    stats: {
      label: 'Venues',
      value: '950+',
    },
  },
  {
    id: '3',
    name: 'JURII',
    description: 'Digital Management Platform',
    longDescription: 'An all-in-one digital management platform with email, cloud drive, and password manager features.',
    techStack: ['Next.js', 'Laravel', 'MySQL'],
    features: [
      'End-to-end encryption',
      'Email management',
      'Cloud drive integration',
      'Password manager',
      'Secure authentication',
    ],
    image: '/images/jurii.jpg',
    liveUrl: 'https://jurii.com',
    category: 'nextjs',
  },
  {
    id: '4',
    name: 'Tututor.ai',
    description: 'Learning Management System',
    longDescription: 'A comprehensive LMS platform with role-based access control and school management features.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    features: [
      'Role-based access control',
      'School management system',
      'Student portal',
      'Teacher dashboard',
      'Real-time notifications',
    ],
    image: '/images/tututor.jpg',
    liveUrl: 'https://tututor.ai',
    category: 'mern',
  },
]

