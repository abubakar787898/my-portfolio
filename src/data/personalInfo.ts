export interface PersonalInfo {
  name: string
  title: string
  tagline: string
  email: string
  location: string
  locationFull: string
  bio: string
  education: {
    degree: string
    institution: string
    year: string
  }
  languages: {
    name: string
    flag: string
    proficiency: string
  }[]
  socialLinks: {
    github: string
    linkedin: string
    email: string
  }
  resumeUrl?: string
}

export const personalInfo: PersonalInfo = {
  name: 'Abubakar Islam',
  title: 'Software Engineer',
  tagline: 'Software Engineer with 5+ years of experience building scalable web & mobile applications — from AI-powered MERN platforms to Chrome extensions. Shipped real products for remote teams in Denmark and Spain.',
  email: 'abubakarislam016@gmail.com',
  location: 'Rahim Yar Khan',
  locationFull: 'Rahim Yar Khan, Punjab, Pakistan',
  bio: `I'm a Software Engineer with 5+ years of experience designing and shipping scalable applications end to end — strong across the stack with React, Next.js and TypeScript on the frontend, Node.js/Express and Laravel on the backend, MongoDB and MySQL underneath, and cross-platform mobile apps in React Native (Android). 
        I've spent the last several years working remotely with product teams in Denmark and Spain, building booking platforms, learning-management systems and digital productivity tools used by real customers. 
        I also build AI-powered tools and browser extensions, and I'm comfortable owning features from database design to deployment with clean, maintainable code that holds up in production.`,
  education: {
    degree: 'Bachelors in Computer Science (BSCS)',
    institution: 'Khwaja Fareed University of Engineering and Information Technology (KFUEIT), Rahim Yar Khan',
    year: 'Aug 2019 - July 2023',
  },
  languages: [
    { name: 'English', flag: '🇬🇧', proficiency: 'Fluent' },
    { name: 'Urdu', flag: '🇵🇰', proficiency: 'Native' },
    { name: 'Hindi', flag: '🇮🇳', proficiency: 'Fluent' },
  ],
  socialLinks: {
    github: 'https://github.com/abubakar787898',
    linkedin: 'https://www.linkedin.com/in/abubakarislam/',
    email: 'mailto:abubakarislam016@gmail.com',
  },
  resumeUrl: '/Abubakar-Islam-Software-Engineer-CV.pdf',
}

