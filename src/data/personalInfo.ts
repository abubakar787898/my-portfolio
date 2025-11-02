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
  title: 'Full Stack Developer',
  tagline: 'Building scalable web applications with Laravel, React, and MERN stack',
  email: 'abubakarislam016@gmail.com',
  location: 'Rahim Yar Khan',
  locationFull: 'Rahim Yar Khan, Punjab, Pakistan',
  bio: `I'm a passionate Full Stack Developer with 3.5+ years of experience building scalable web applications. 
        I specialize in Laravel, React, and MERN stack development, creating efficient and user-friendly solutions 
        for businesses across Denmark, Spain, and beyond. My expertise includes designing robust APIs, implementing 
        responsive UIs, and optimizing application performance.`,
  education: {
    degree: 'BSCS',
    institution: 'KFUEIT',
    year: '2021',
  },
  languages: [
    { name: 'English', flag: '🇬🇧', proficiency: 'Fluent' },
    { name: 'Urdu', flag: '🇵🇰', proficiency: 'Native' },
    { name: 'Hindi', flag: '🇮🇳', proficiency: 'Fluent' },
    { name: 'Pashto', flag: '🇦🇫', proficiency: 'Conversational' },
  ],
  socialLinks: {
    github: 'https://github.com/abubakarislam',
    linkedin: 'https://linkedin.com/in/abubakarislam',
    email: 'mailto:abubakarislam016@gmail.com',
  },
}

