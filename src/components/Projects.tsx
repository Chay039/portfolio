import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ExternalLink, Github } from 'lucide-react'

export const Projects: React.FC = () => {
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

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
    hover: {
      y: -8,
      boxShadow: '0 0 40px rgba(0, 229, 255, 0.2)',
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
            className="text-4xl md:text-5xl font-bold display-font mb-4 text-center"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-text-muted text-center mb-16 max-w-2xl mx-auto"
          >
            A selection of projects that showcase my expertise in full-stack development, cloud
            architecture, and DevOps practices.
          </motion.p>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
            {/* Card 1 - Wide */}
            {projects[0] && (
            <motion.div
              variants={projectVariants}
              whileHover="hover"
              className="md:col-span-2 lg:col-span-2 glass-card shimmer-effect group cursor-pointer overflow-hidden"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-gold rounded-lg flex items-center justify-center text-2xl mb-4">
                  ☁️
                </div>
                <h3 className="text-2xl font-bold text-accent-cyan mb-2">
                  {projects[0]?.title}
                </h3>
              </div>

              <p className="text-text-muted text-sm mb-4">{projects[0]?.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {projects[0]?.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 rounded border border-accent-cyan text-accent-cyan bg-accent-cyan bg-opacity-5">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-gold transition-colors text-sm font-semibold">
                  <ExternalLink size={16} /> Live Demo
                </button>
                <button className="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-gold transition-colors text-sm font-semibold">
                  <Github size={16} /> GitHub
                </button>
              </div>
            </motion.div>
            )}

            {/* Card 2 */}
            {projects[1] && (
            <motion.div
              variants={projectVariants}
              whileHover="hover"
              className="glass-card shimmer-effect group cursor-pointer overflow-hidden"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-cyan rounded-lg flex items-center justify-center text-xl mb-4">
                  📊
                </div>
                <h3 className="text-lg font-bold text-accent-cyan mb-2 line-clamp-2">
                  {projects[1]?.title}
                </h3>
              </div>

              <p className="text-text-muted text-sm mb-4 line-clamp-3">{projects[1]?.description}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {projects[1]?.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 rounded border border-accent-gold text-accent-gold bg-accent-gold bg-opacity-5">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="text-accent-gold hover:text-accent-cyan transition-colors text-xs font-semibold">
                View Project →
              </button>
            </motion.div>
            )}

            {/* Card 3 */}
            {projects[2] && (
            <motion.div
              variants={projectVariants}
              whileHover="hover"
              className="glass-card shimmer-effect group cursor-pointer overflow-hidden"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan to-accent-gold rounded-lg flex items-center justify-center text-xl mb-4">
                  🔧
                </div>
                <h3 className="text-lg font-bold text-accent-cyan mb-2 line-clamp-2">
                  {projects[2]?.title}
                </h3>
              </div>

              <p className="text-text-muted text-sm mb-4 line-clamp-3">{projects[2]?.description}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {projects[2]?.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 rounded border border-accent-gold text-accent-gold bg-accent-gold bg-opacity-5">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="text-accent-gold hover:text-accent-cyan transition-colors text-xs font-semibold">
                View Project →
              </button>
            </motion.div>
            )}

            {/* Card 4 - Wide */}
            {projects[3] && (
            <motion.div
              variants={projectVariants}
              whileHover="hover"
              className="md:col-span-2 lg:col-span-2 glass-card shimmer-effect group cursor-pointer overflow-hidden"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-gold to-accent-cyan rounded-lg flex items-center justify-center text-2xl mb-4">
                  🚀
                </div>
                <h3 className="text-2xl font-bold text-accent-gold mb-2">
                  {projects[3]?.title}
                </h3>
              </div>

              <p className="text-text-muted text-sm mb-4">{projects[3]?.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {projects[3]?.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 rounded border border-accent-gold text-accent-gold bg-accent-gold bg-opacity-5">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="inline-flex items-center gap-2 text-accent-gold hover:text-accent-cyan transition-colors text-sm font-semibold">
                  <ExternalLink size={16} /> Live Demo
                </button>
                <button className="inline-flex items-center gap-2 text-accent-gold hover:text-accent-cyan transition-colors text-sm font-semibold">
                  <Github size={16} /> GitHub
                </button>
              </div>
            </motion.div>
            )}
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <button className="px-8 py-3 border-2 border-accent-cyan text-accent-cyan font-semibold rounded-lg hover:bg-accent-cyan hover:text-dark-primary transition-all duration-300">
              View All Projects
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
