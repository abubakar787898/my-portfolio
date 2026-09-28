import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './components/Navigation'
import LoadingScreen from './components/LoadingScreen'
import { useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Lazy load sections for better performance
const Hero = lazy(() => import('./sections/Hero'))
const About = lazy(() => import('./sections/About'))
const Experience = lazy(() => import('./sections/Experience'))
const Projects = lazy(() => import('./sections/Projects'))
const Skills = lazy(() => import('./sections/Skills'))
const Contact = lazy(() => import('./sections/Contact'))
const Footer = lazy(() => import('./components/Footer'))

const SectionLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
  </div>
)

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    })

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-dark relative">
        {/* Ambient gradient orbs */}
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] bg-secondary/15 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -right-40 w-[32rem] h-[32rem] bg-fuchsia-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-48 left-1/4 w-[36rem] h-[36rem] bg-secondary-dark/15 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <Navigation />
          <main>
            <Suspense fallback={<SectionLoader />}>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Contact />
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </Router>
  )
}

export default App

