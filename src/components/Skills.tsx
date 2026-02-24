import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export const Skills: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillChipVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -5,
      boxShadow: '0 0 30px rgba(0, 229, 255, 0.3)',
    },
  }

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-primary relative overflow-hidden">
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
            My Arsenal
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-text-muted text-center mb-16 max-w-2xl mx-auto"
          >
            A comprehensive toolkit built through years of hands-on development across full-stack,
            cloud, and DevOps domains.
          </motion.p>

          {/* Skills by category */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card"
              >
                <h3 className="text-lg font-semibold text-accent-gold mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-accent-gold rounded-full"></span>
                  {skillGroup.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      variants={skillChipVariants}
                      whileHover="hover"
                      className="px-3 py-1.5 text-sm rounded-full border border-accent-cyan text-accent-cyan bg-accent-cyan bg-opacity-5 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Highlighted arsenal statement */}
          <motion.div
            variants={itemVariants}
            className="mt-16 glass-card text-center p-8"
          >
            <p className="text-xl text-accent-cyan mb-4">
              🔧 <span className="font-semibold">Full-Stack Capabilities</span>
            </p>
            <p className="text-text-muted">
              I don't just code in one language or framework—I architect complete systems. From
              database design to cloud deployment, DevOps automation to real-time monitoring, I
              bring 4+ years of diverse experience to every project.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
