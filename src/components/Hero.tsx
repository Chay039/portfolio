import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { personalInfo, typewriterTexts } from '../data/portfolio'

export const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % typewriterTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-text-muted text-sm uppercase tracking-widest mb-6">
            Welcome to my portfolio
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold display-font mb-6 leading-tight glow-text"
        >
          Hi, I'm {personalInfo.name}
        </motion.h1>

        {/* Typewriter effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="h-12 md:h-16 mb-6 flex items-center justify-center"
        >
          <p className="text-2xl md:text-3xl text-accent-cyan font-semibold">
            {typewriterTexts[currentText]}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-text-muted text-lg md:text-xl max-w-3xl mx-auto mb-8"
        >
          4+ years building scalable systems at Nokia & Duracell — from IoT platforms to
          cloud-native APIs.
        </motion.p>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-card text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for new opportunities
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group relative px-8 py-3 bg-accent-cyan text-dark-primary font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-glow-cyan">
            <span className="relative z-10 flex items-center gap-2">
              View My Work <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>
          <button className="px-8 py-3 border-2 border-accent-cyan text-accent-cyan font-semibold rounded-lg hover:bg-accent-cyan hover:text-dark-primary transition-all duration-300 hover:shadow-glow-cyan flex items-center gap-2">
            <Download size={20} /> Download Resume
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-accent-cyan"
        >
          <ArrowDown size={24} />
        </motion.div>
      </div>
    </section>
  )
}
