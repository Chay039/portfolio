import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { socialLinks } from '../data/portfolio'
import { useState } from 'react'

export const Footer: React.FC = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-glass-border bg-dark-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h3 className="text-lg font-bold display-font text-accent-cyan mb-3">Chaitanya</h3>
            <p className="text-text-muted text-sm">
              Full Stack Developer & Cloud Architect building scalable systems that last.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h3 className="text-lg font-bold display-font text-accent-gold mb-3">Navigate</h3>
            <ul className="space-y-2 text-sm">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-text-muted hover:text-accent-cyan transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className="text-lg font-bold display-font text-accent-cyan mb-3">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-glass-border text-text-muted hover:text-accent-cyan hover:border-accent-cyan transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/chaitanya-juturi/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-glass-border text-text-muted hover:text-accent-cyan hover:border-accent-cyan transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:jchaitu98@gmail.com" className="p-2 rounded-lg border border-glass-border text-text-muted hover:text-accent-cyan hover:border-accent-cyan transition-all">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-glass-border my-8"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-text-muted text-sm text-center md:text-left">
            Designed & Built by Chaitanya Sai Juturi © 2025
          </p>

          <button
            onClick={() => setShowEasterEgg(!showEasterEgg)}
            className="relative text-text-muted hover:text-accent-gold transition-colors text-sm mt-4 md:mt-0"
          >
            {showEasterEgg && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -top-8 right-0 text-xs text-accent-gold whitespace-nowrap"
              >
                ☕ + late nights 🌙
              </motion.span>
            )}
            2025
          </button>

          <div className="mt-4 md:mt-0 text-text-muted text-xs">
            Made with <span className="text-accent-cyan">React</span> + <span className="text-accent-gold">Tailwind</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
