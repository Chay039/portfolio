import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

  const handleNavClick = (link: string) => {
    onNavigate(link.toLowerCase())
    setMobileMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-2xl font-bold display-font glow-text cursor-pointer"
            >
              CSJ
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className={`text-sm transition-all duration-300 relative pb-1 ${
                  activeSection === link.toLowerCase()
                    ? 'text-accent-cyan'
                    : 'text-text-primary hover:text-accent-cyan'
                }`}
              >
                {link}
                {activeSection === link.toLowerCase() && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-cyan rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="px-6 py-2 border border-accent-cyan rounded-full text-accent-cyan hover:bg-accent-cyan hover:text-dark-primary transition-all duration-300 glow-cyan text-sm font-semibold">
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-accent-cyan hover:text-accent-gold transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                  activeSection === link.toLowerCase()
                    ? 'bg-accent-cyan bg-opacity-10 text-accent-cyan'
                    : 'text-text-primary hover:bg-accent-cyan hover:bg-opacity-5'
                }`}
              >
                {link}
              </button>
            ))}
            <button className="w-full mt-4 px-6 py-2 border border-accent-cyan rounded-full text-accent-cyan hover:bg-accent-cyan hover:text-dark-primary transition-all duration-300">
              Hire Me
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
