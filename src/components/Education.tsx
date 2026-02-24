import { motion } from 'framer-motion'
import { education } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export const Education: React.FC = () => {
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
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-primary relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
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
            Education
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-text-muted text-center mb-16 max-w-2xl mx-auto"
          >
            Continuous learning and academic excellence in Computer Science and Software
            Engineering.
          </motion.p>

          {/* Education cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass-card group cursor-pointer"
              >
                <div className="text-5xl mb-4">{edu.icon}</div>

                <h3 className="text-xl font-bold text-accent-cyan mb-2">{edu.degree}</h3>

                <p className="text-lg text-text-primary font-semibold mb-1">{edu.school}</p>

                <div className="flex items-center justify-between text-sm text-text-muted">
                  <span>{edu.location}</span>
                  <span className="text-accent-gold">{edu.period}</span>
                </div>

                <div className="mt-4 pt-4 border-t border-glass-border group-hover:border-accent-cyan transition-colors">
                  <p className="text-xs text-text-muted">
                    Specializing in distributed systems, cloud architecture, and full-stack
                    development
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications hint */}
          <motion.div variants={itemVariants} className="mt-16 glass-card text-center p-8">
            <p className="text-accent-gold mb-2">📚 Continuous Learning</p>
            <p className="text-text-muted text-sm">
              AWS Certified • Kubernetes Certified • Industry-recognized certifications in Cloud
              Architecture and DevOps
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
