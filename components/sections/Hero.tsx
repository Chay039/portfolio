'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { personalInfo, typewriterTexts } from '@/lib/data';
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react';

const ParticleField = dynamic(() => import('@/components/three/ParticleField'), { ssr: false });

function useTypewriter(texts: string[], speed = 80, pause = 2200) {
    const [displayed, setDisplayed] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = texts[textIndex];
        let timer: ReturnType<typeof setTimeout>;

        if (!deleting && charIndex < current.length) {
            timer = setTimeout(() => setCharIndex((c) => c + 1), speed);
        } else if (!deleting && charIndex === current.length) {
            timer = setTimeout(() => setDeleting(true), pause);
        } else if (deleting && charIndex > 0) {
            timer = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
        } else if (deleting && charIndex === 0) {
            setDeleting(false);
            setTextIndex((i) => (i + 1) % texts.length);
        }

        setDisplayed(current.slice(0, charIndex));
        return () => clearTimeout(timer);
    }, [charIndex, deleting, textIndex, texts, speed, pause]);

    return displayed;
}

function CountUp({ end, suffix = '' }: { end: string; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const numericEnd = parseInt(end.replace(/\D/g, ''), 10);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                let start = 0;
                const step = numericEnd / 60;
                const timer = setInterval(() => {
                    start += step;
                    if (start >= numericEnd) { setCount(numericEnd); clearInterval(timer); }
                    else setCount(Math.floor(start));
                }, 25);
                observer.disconnect();
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [numericEnd]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
    const typeText = useTypewriter(typewriterTexts);
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const stats = [
        { value: '4', suffix: '+', label: 'Years Experience' },
        { value: '50', suffix: '+', label: 'Projects Built' },
        { value: '3', suffix: '', label: 'Countries' },
        { value: '2', suffix: '', label: 'Fortune 500' },
    ];

    return (
        <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">
            {/* Particle 3D Background */}
            <ParticleField />

            {/* Radial gradient overlays */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
                <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-amber-500/3 rounded-full blur-[80px]" />
            </div>

            {/* Bottom fade to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

            {/* Main content */}
            <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 pt-20">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 min-h-[calc(100vh-80px)]">

                    {/* Left: Text content */}
                    <div className="flex-1 flex flex-col justify-center py-12">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6 self-start"
                        >
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            Open to Full-Time Opportunities
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="font-display font-bold leading-tight mb-4"
                            style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}
                        >
                            <span className="text-white">Hi, I'm</span>
                            <br />
                            <span
                                className="gradient-text glitch"
                                data-text="Chaitanya Sai"
                            >
                                Chaitanya Sai
                            </span>
                            <br />
                            <span className="text-white/90">Juturi</span>
                        </motion.h1>

                        {/* Typewriter role */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="text-slate-400 text-lg font-mono">
                                {typeText}
                                <span className="text-cyan-400 animate-pulse">|</span>
                            </span>
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-slate-400 text-lg max-w-xl leading-relaxed mb-8"
                        >
                            {personalInfo.tagline}
                            <br />
                            <span className="text-slate-500 text-base mt-1 block">
                                Currently shipping at{' '}
                                <span className="text-amber-400 font-semibold">Duracell</span> · Previously at{' '}
                                <span className="text-blue-400 font-semibold">Nokia</span>
                            </span>
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-wrap gap-4 mb-10"
                        >
                            <button
                                onClick={scrollToProjects}
                                className="px-7 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-0.5 flex items-center gap-2"
                            >
                                View My Work
                                <ArrowDown size={16} className="rotate-[-90deg]" />
                            </button>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="px-7 py-3.5 glass border border-white/10 text-white font-semibold rounded-xl hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2"
                            >
                                <Mail size={16} />
                                Get in Touch
                            </a>
                            <a
                                href="#"
                                className="p-3.5 glass border border-white/10 text-slate-400 rounded-xl hover:border-purple-500/40 hover:text-purple-400 transition-all duration-300"
                            >
                                <Download size={18} />
                            </a>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="flex items-center gap-4"
                        >
                            <span className="text-slate-600 text-xs font-mono">CONNECT</span>
                            <div className="h-px flex-1 max-w-[40px] bg-slate-700" />
                            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                                className="text-slate-500 hover:text-white transition-colors">
                                <Github size={18} />
                            </a>
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                                className="text-slate-500 hover:text-cyan-400 transition-colors">
                                <Linkedin size={18} />
                            </a>
                            <a href={`mailto:${personalInfo.email}`}
                                className="text-slate-500 hover:text-amber-400 transition-colors">
                                <Mail size={18} />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Floating accent (desktop) */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="hidden lg:flex flex-col items-center justify-center py-12 mt-8"
                    >
                        {/* Code snippet card */}
                        <div className="glass border border-white/8 rounded-2xl p-6 w-80 font-mono text-xs">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                <span className="text-slate-500 text-xs ml-2">engineer.ts</span>
                            </div>
                            <div className="space-y-1">
                                <div><span className="text-purple-400">const</span> <span className="text-cyan-400">engineer</span> <span className="text-white">= {'{'}</span></div>
                                <div className="pl-4"><span className="text-amber-400">name</span><span className="text-white">: </span><span className="text-green-400">'Chaitanya'</span><span className="text-white">,</span></div>
                                <div className="pl-4"><span className="text-amber-400">role</span><span className="text-white">: </span><span className="text-green-400">'Full Stack Dev'</span><span className="text-white">,</span></div>
                                <div className="pl-4"><span className="text-amber-400">experience</span><span className="text-white">: </span><span className="text-cyan-400">4</span><span className="text-white">,</span></div>
                                <div className="pl-4"><span className="text-amber-400">companies</span><span className="text-white">: [</span></div>
                                <div className="pl-8"><span className="text-green-400">'Duracell'</span><span className="text-white">,</span></div>
                                <div className="pl-8"><span className="text-green-400">'Nokia'</span></div>
                                <div className="pl-4"><span className="text-white">],</span></div>
                                <div className="pl-4"><span className="text-amber-400">skills</span><span className="text-white">: </span><span className="text-cyan-400">50</span><span className="text-white">+,</span></div>
                                <div className="pl-4"><span className="text-amber-400">status</span><span className="text-white">: </span><span className="text-green-400 animate-pulse">'available ✓'</span></div>
                                <div><span className="text-white">{'}'}</span></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Stats bar */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.0 }}
                className="relative z-10 border-t border-white/5"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className={`py-6 px-4 text-center ${i < stats.length - 1 ? 'border-r border-white/5' : ''}`}
                            >
                                <div className="text-3xl font-display font-bold gradient-text mb-1">
                                    <CountUp end={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-slate-500 text-xs font-mono">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                onClick={scrollToAbout}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors z-20"
            >
                <span className="text-xs font-mono">scroll</span>
                <div className="w-5 h-8 rounded-full border border-current relative flex justify-center">
                    <motion.div
                        className="w-1 h-2 rounded-full bg-current absolute top-1.5"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </div>
            </motion.button>
        </section>
    );
}
