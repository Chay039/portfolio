import { motion } from 'framer-motion'
import { aboutBio, aboutStats, personalInfo } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="visible"
          animate="visible"
        >
          {/* Section title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold display-font mb-16 text-center"
          >
            About Me
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left column - Avatar and stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              {/* Avatar placeholder */}
              <div className="relative w-64 h-64 mb-8">
                <div className="absolute inset-0 rounded-full border-2 border-accent-cyan glow-cyan"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-accent-cyan to-accent-gold opacity-10"></div>
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-4 w-full">
                {aboutStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="glass-card text-center"
                  >
                    <div className="text-2xl font-bold text-accent-cyan mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-text-muted">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right column - Bio */}
            <motion.div variants={itemVariants}>
              <p className="text-lg text-text-muted leading-relaxed mb-6">
                {aboutBio}
              </p>

              <div className="space-y-4">
                <div className="glass-card">
                  <p className="text-accent-gold italic">
                    "{personalInfo.tagline}"
                  </p>
                </div>

                <p className="text-sm text-text-muted">
                  Based in Kansas City, Missouri • Full-time & Contract roles welcome • Available now
                </p>
              </div>

              {/* Quick links */}
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="px-4 py-2 glass-card text-sm text-accent-cyan hover:border-accent-cyan transition-all hover:shadow-glow-cyan">
                  📧 Get in touch
                </button>
                <button className="px-4 py-2 glass-card text-sm text-accent-gold hover:border-accent-gold transition-all">
                  📄 View Resume
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
