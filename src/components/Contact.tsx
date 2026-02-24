import { useState } from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Mail, Phone, Linkedin, CheckCircle } from 'lucide-react'

export const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation()
  const [formSubmitted, setFormSubmitted] = useState(false)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
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
            Let's Build Something Great
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-text-muted text-center mb-16 max-w-2xl mx-auto"
          >
            Whether you have a project in mind or just want to say hello, I'm always open to new
            opportunities and collaborations.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Email */}
              <div className="glass-card group hover:shadow-glow-cyan">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent-cyan bg-opacity-10 text-accent-cyan group-hover:bg-opacity-20 transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-accent-cyan mb-1">Email</h3>
                    <p className="text-text-muted">{personalInfo.email}</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="glass-card group hover:shadow-glow-cyan">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent-gold bg-opacity-10 text-accent-gold group-hover:bg-opacity-20 transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-accent-gold mb-1">Phone</h3>
                    <p className="text-text-muted">{personalInfo.phone}</p>
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="glass-card group hover:shadow-glow-cyan">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent-cyan bg-opacity-10 text-accent-cyan group-hover:bg-opacity-20 transition-all">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-accent-cyan mb-1">LinkedIn</h3>
                    <p className="text-text-muted">{personalInfo.linkedin}</p>
                  </div>
                </div>
              </div>

              {/* Availability badge */}
              <div className="glass-card bg-accent-cyan bg-opacity-5 border-accent-cyan">
                <p className="flex items-center gap-2 text-accent-cyan font-semibold">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Open to full-time & contract roles
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="glass-card space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-2 bg-dark-primary border border-glass-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 bg-dark-primary border border-glass-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-text-primary mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      className="w-full px-4 py-2 bg-dark-primary border border-glass-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-dark-primary border border-glass-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-accent-cyan text-dark-primary font-semibold rounded-lg hover:shadow-glow-cyan transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="glass-card flex flex-col items-center justify-center py-16">
                  <CheckCircle size={48} className="text-green-400 mb-4" />
                  <h3 className="text-xl font-bold text-accent-cyan mb-2">Message Sent!</h3>
                  <p className="text-text-muted text-center">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
