'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '@/lib/data';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Scroll spy
    useEffect(() => {
        const sections = navLinks.map((l) => l.href.replace('#', ''));
        const observers = sections.map((id) => {
            const el = document.getElementById(id);
            if (!el) return null;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { rootMargin: '-40% 0px -55% 0px' }
            );
            obs.observe(el);
            return obs;
        });
        return () => observers.forEach((o) => o?.disconnect());
    }, []);

    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setMobileOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'glass border-b border-white/5 shadow-lg'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="flex items-center gap-2 group"
                    >
                        {/* <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-display font-bold text-sm">
                            CSJ
                        </div> */}
                        <span className="font-display font-semibold text-white text-sm hidden sm:block">
                            {/* {personalInfo.firstName} */}
                            <span className="text-cyan-400"> CSJ</span>
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.replace('#', '');
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => scrollTo(e, link.href)}
                                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isActive ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-active"
                                            className="absolute inset-0 rounded-lg bg-cyan-500/10 border border-cyan-500/20"
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.label}</span>
                                </a>
                            );
                        })}
                    </div>

                    {/* Hire Me CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="px-5 py-2 text-sm font-semibold rounded-lg bg-cyan-500 text-slate-900 hover:bg-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {[0, 1, 2].map((i) => (
                            <motion.span
                                key={i}
                                className="block w-full h-0.5 bg-white rounded-full origin-center"
                                animate={
                                    mobileOpen
                                        ? i === 0 ? { rotate: 45, y: 8 } : i === 1 ? { opacity: 0 } : { rotate: -45, y: -8 }
                                        : { rotate: 0, y: 0, opacity: 1 }
                                }
                                transition={{ duration: 0.3 }}
                            />
                        ))}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 md:hidden glass flex flex-col items-center justify-center gap-6"
                        onClick={() => setMobileOpen(false)}
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => scrollTo(e, link.href)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ delay: i * 0.08 }}
                                className="text-2xl font-display font-bold text-white hover:text-cyan-400 transition-colors"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.a
                            href={`mailto:${personalInfo.email}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: navLinks.length * 0.08 }}
                            className="mt-4 px-8 py-3 bg-cyan-500 text-slate-900 font-bold rounded-xl text-lg"
                        >
                            Hire Me
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
