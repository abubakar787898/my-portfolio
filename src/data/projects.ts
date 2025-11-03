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
    description: 'Multi-Region Sports Travel Management Platform',
    longDescription: 'A Denmark-based platform for managing sports team travel across 6 regional domains. Built a comprehensive multi-domain system for hotel booking, flight management, and lead generation with digital contract signing workflows for faster onboarding. Ensured scalability, performance, and security across regions with a responsive UI, collaborating with international teams to deliver a high-availability, user-friendly solution.',
    techStack: ['Laravel', 'React', 'Next.js', 'MySQL', 'RESTful APIs'],
    features: [
      'Multi-domain architecture (6 regional domains)',
      'Hotel booking system',
      'Flight management integration',
      'Lead generation platform',
      'Digital contract signing workflows',
      'Scalable multi-region infrastructure',
      'Secure data handling',
    ],
    image: '/images/yaksport.png',
    liveUrl: 'https://yaksport.com',
    category: 'all',
  },
  {
    id: '2',
    name: 'Evarto',
    description: 'Nordic Venue Booking Platform',
    longDescription: 'A Danish event and venue booking marketplace for meetings, conferences, and celebrations. Developed venue management features for hotels and restaurants to list rooms, halls, and services. Improved search, filtering, and booking workflows for a seamless user experience. Implemented a subscription-based model with API-driven billing and payments. Enhanced scalability to expand from Denmark (950+ venues) to Sweden, boosting traffic and revenue.',
    techStack: ['Laravel', 'React', 'MySQL', 'RESTful APIs'],
    features: [
      '950+ venues database',
      'Venue management for hotels & restaurants',
      'Subscription-based model',
      'API-driven billing and payments',
      'Advanced search and filtering',
      'Sweden expansion',
      'Real-time availability',
      'Seamless booking workflows',
    ],
    image: '/images/evarto.png',
    liveUrl: 'https://evarto.dk',
    category: 'laravel',
    stats: {
      label: 'Venues',
      value: '950+',
    },
  },
  {
    id: '3',
    name: 'JURII',
    description: 'All-in-One Digital Management Platform',
    longDescription: 'A full-stack productivity suite built with Next.js and Laravel, serving personal and business users. Integrated email client, cloud drive, and password manager under one platform. Built end-to-end encryption, real-time file/email handling, and scalable API integrations. Focused on speed, privacy, and long-term scalability with a secure backend and modern UI.',
    techStack: ['Next.js', 'Laravel', 'MySQL', 'RESTful APIs'],
    features: [
      'Integrated email client',
      'Cloud drive storage',
      'Password manager',
      'End-to-end encryption',
      'Real-time file/email handling',
      'Scalable API integrations',
      'Secure authentication',
      'Privacy-focused architecture',
    ],
    image: '/images/jurii.png',
    liveUrl: 'https://new-jurii.danzeetech.com/',
    category: 'nextjs',
  },
  {
    id: '4',
    name: 'Tututor.ai',
    description: 'Learning Management Platform',
    longDescription: 'A Spain-based learning management platform designed for schools, teachers, parents, and students. Developed the platform using the MERN stack (MongoDB, Express.js, React.js, Node.js). Built and optimized interactive dashboards for teachers, school administrators, and parents. Implemented secure user authentication, role-based access, and real-time communication features. Worked on API integrations and database management to ensure seamless data flow and scalability, focusing on delivering a responsive, user-friendly, and performance-driven learning experience.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'MERN Stack'],
    features: [
      'Interactive teacher dashboard',
      'School administrator dashboard',
      'Parent portal',
      'Student portal',
      'Role-based access control',
      'Secure user authentication',
      'Real-time communication',
      'Scalable database management',
      'API integrations',
      'Performance-optimized',
    ],
    image: '/images/tututor.png',
    liveUrl: 'https://tututor.ai',
    category: 'mern',
  },
  {
    id: '5',
    name: 'Minder',
    description: 'Step-Based Learning Application',
    longDescription: 'A step-based learning application designed to make structured learning easier for users. Worked on backend development and React-based admin panel, focusing on user progress tracking, course management, and content organization. Developed API connections, data validation, and workflow optimizations to improve scalability and usability for both learners and administrators. Created a smooth and interactive experience where users can learn step-by-step, while admins can easily add, track, and manage learning materials.',
    techStack: ['Laravel', 'React', 'Admin Panel', 'RESTful APIs', 'MySQL'],
    features: [
      'Step-based learning structure',
      'React-based admin panel',
      'User progress tracking',
      'Course management system',
      'Content organization',
      'API integration and connections',
      'Data validation',
      'Workflow optimizations',
      'Scalable architecture',
      'Interactive learning experience',
    ],
    image: '/images/minder.png',
    category: 'react',
  },
  {
    id: '6',
    name: 'Quickbite',
    description: 'SaaS Online Kiosk & Fast Food Ordering Platform',
    longDescription: 'A comprehensive SaaS platform for online kiosk and fast food ordering system. Built with Laravel backend and Next.js frontend, with a React.js admin panel for restaurant management. Enabling restaurants to manage their online ordering, kiosk ordering, and food delivery services. Developed features for order placement, real-time order tracking, payment processing, and restaurant management dashboard. Focused on creating a scalable and user-friendly solution for fast food businesses to streamline their ordering process.',
    techStack: ['Laravel', 'Next.js', 'React.js', 'MySQL', 'RESTful APIs', 'SaaS'],
    features: [
      'Online kiosk ordering system',
      'Fast food ordering platform',
      'React.js admin panel',
      'Order placement and management',
      'Real-time order tracking',
      'Payment processing integration',
      'Restaurant management dashboard',
      'Multi-restaurant support',
      'SaaS architecture',
      'Scalable backend infrastructure',
    ],
    image: '/images/quickbite.png',
    liveUrl: 'https://dzfood.danzeetech.com/',
    category: 'nextjs',
  },
  {
    id: '7',
    name: 'Naim.dk',
    description: 'Online Store with Delivery Management',
    longDescription: 'A comprehensive online store platform built with Laravel backend and React.js frontend, featuring a React.js admin panel for order and delivery management. Developed a sophisticated delivery system that allows customers to order products with specific area-based delivery conditions. Implemented order management, delivery tracking, and area-specific delivery rules to ensure efficient and accurate order fulfillment.',
    techStack: ['Laravel', 'React.js', 'MySQL', 'RESTful APIs', 'Admin Panel'],
    features: [
      'Online store platform',
      'React.js frontend',
      'React.js admin panel',
      'Order management system',
      'Area-based delivery conditions',
      'Delivery tracking',
      'Specific area delivery rules',
      'Product management',
      'Customer order placement',
      'Delivery management dashboard',
    ],
    image: '/images/naim.png',
    liveUrl: 'https://naim.dk',
    category: 'react',
  },
]

