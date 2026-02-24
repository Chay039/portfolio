import { motion } from 'framer-motion'
import { experiences } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ArrowRight } from 'lucide-react'

export const Experience: React.FC = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Section title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold display-font mb-4 text-center"
          >
            Experience
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-text-muted text-center mb-16 max-w-2xl mx-auto"
          >
            My professional journey building scalable systems and leading technical initiatives
            across Fortune 500 companies.
          </motion.p>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-cyan via-accent-gold to-transparent md:transform md:-translate-x-1/2"></div>

            {/* Experience entries */}
            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative md:flex md:${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} md:gap-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 w-4 h-4 bg-accent-cyan rounded-full md:left-1/2 md:transform md:-translate-x-2 glow-cyan"></div>

                  {/* Card */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 glass-card hover:shadow-glow-cyan`}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-accent-cyan">{exp.role}</h3>
                      <span className="text-xs text-text-muted bg-dark-primary px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <p className="font-semibold text-text-primary">{exp.company}</p>
                      <span className="text-text-muted text-sm">• {exp.location}</span>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2 mb-4">
                      {exp.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2">
                          <ArrowRight size={16} className="text-accent-gold mt-1 flex-shrink-0" />
                          <p className="text-sm text-text-muted">{highlight}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs px-2 py-1 rounded border border-accent-gold text-accent-gold bg-accent-gold bg-opacity-5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
