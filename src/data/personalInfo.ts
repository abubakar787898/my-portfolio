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
  title: 'Full Stack Web Developer',
  tagline: 'Full Stack Web Developer with 4+ years of experience in building scalable and high-performance web applications. Skilled in Laravel (and Laravel APIs), React.js, Next.js, and Express.js, with hands-on expertise in the MERN stack (1.5 year).',
  email: 'abubakarislam016@gmail.com',
  location: 'Rahim Yar Khan',
  locationFull: 'Rahim Yar Khan, Punjab, Pakistan',
  bio: `I'm a passionate Full Stack Web Developer with 4+ years of experience building scalable and high-performance web applications. 
        I specialize in Laravel (and Laravel APIs), React.js, Next.js, and Express.js, with hands-on expertise in the MERN stack (1.5 year). 
        Strong focus on creating efficient, user-friendly, and secure solutions while continuously expanding skills in modern frameworks and best practices. 
        I've worked on projects across Denmark and Spain, creating solutions for multi-domain platforms, booking systems, and learning management platforms.`,
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
  resumeUrl: '/abubakar%20islam%20cv%20full%20stack%20web%20developer.pdf',
}

