# Abubakar Islam - Portfolio Website

A modern, animated portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🎨 Modern, animated UI with Framer Motion
- 📱 Fully responsive design
- ⚡ Optimized performance with Vite
- 🎯 Smooth scroll navigation
- 🌟 Interactive sections: Hero, About, Experience, Projects, Skills, Contact
- 🎭 Glassmorphism effects
- ✨ Parallax scrolling
- 🎪 Typewriter animations
- 📊 Animated progress bars
- 🎨 Custom color scheme and animations

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, AOS
- **Icons**: React Icons
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/      # Reusable components (Navigation, Footer, etc.)
├── sections/       # Page sections (Hero, About, Experience, etc.)
├── data/           # Data files (experience, projects, skills, etc.)
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── assets/         # Static assets (images, etc.)
```

## Customization

### Update Personal Information

Edit `src/data/personalInfo.ts` to update:
- Name, title, tagline
- Contact information
- Social media links
- Education details
- Languages

### Update Experience

Edit `src/data/experience.ts` to add or modify work experience.

### Update Projects

Edit `src/data/projects.ts` to showcase your projects.

### Update Skills

Edit `src/data/skills.ts` to add or modify technical skills.

### Update Profile Image

Place your profile image at:
- `public/images/profile.jpg` (for Hero section - 400x400px recommended)
- The same image will be used in About section (300x300px)

### Update Project Images

Place project images in `public/images/` and update paths in `src/data/projects.ts`.

## Color Scheme

- **Primary**: Deep blue (#0A192F)
- **Secondary**: Cyan/Teal (#64FFDA)
- **Accent**: Light slate (#8892B0)

Customize colors in `tailwind.config.js`.

## Deployment

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Push your code to GitHub
2. Import project in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## Performance Optimization

- Lazy loading for images
- Code splitting with React.lazy
- Optimized animations (60fps)
- Reduced motion support
- SEO meta tags included

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Abubakar Islam. All rights reserved.

## Contact

- Email: abubakarislam016@gmail.com
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

