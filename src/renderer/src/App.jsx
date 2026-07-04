import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useTheme } from './hooks/useTheme'
import AnimatedBackground from './components/ui/AnimatedBackground'
import ScrollProgress from './components/layout/ScrollProgress'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ThemeSwitcher from './components/layout/ThemeSwitcher'
import Preloader from './components/layout/Preloader'
import Home from './pages/Home'

function App() {
  // Applies the active theme + mode to <html> and keeps it persisted.
  useTheme()

  // Cinematic intro shown once on launch.
  const [loading, setLoading] = useState(true)

  // Lock scrolling while the intro is playing.
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatePresence>
        {loading && <Preloader key="preloader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <Home />
      <Footer />
      <ThemeSwitcher />
    </div>
  )
}

export default App
