'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { aboutBio, personalInfo } from '@/lib/data';
import { MapPin, GraduationCap, Briefcase, Code } from 'lucide-react';

const TechSphere = dynamic(() => import('@/components/three/TechSphere'), { ssr: false });

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function About() {
    const highlights = [
        { icon: <Briefcase size={16} />, label: 'Current', value: 'Duracell · Software Engineer', color: 'text-cyan-400' },
        { icon: <GraduationCap size={16} />, label: 'Education', value: 'M.S. Computer Science, UMKC', color: 'text-purple-400' },
        { icon: <MapPin size={16} />, label: 'Location', value: 'Kansas City, Missouri', color: 'text-amber-400' },
        { icon: <Code size={16} />, label: 'Specialty', value: 'Microservices & Cloud Architecture', color: 'text-green-400' },
    ];

    return (
        <section id="about" className="section-padding relative overflow-hidden bg-surface-1/40">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    className="text-center mb-16"
                >
                    <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-3">01. Who I Am</p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">About Me</h2>
                    <div className="section-divider" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: 3D sphere */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        custom={1}
                        className="relative"
                    >
                        <TechSphere />
                        {/* Overlay glow */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
                        </div>
                    </motion.div>

                    {/* Right: Text */}
                    <div className="space-y-8">
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            custom={2}
                        >
                            <h3 className="text-2xl font-display font-bold text-white mb-4 leading-tight">
                                Full Stack Developer with a{' '}
                                <span className="gradient-text">passion for scale</span>
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-base">
                                {aboutBio}
                            </p>
                        </motion.div>

                        {/* Highlights grid */}
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            custom={3}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                        >
                            {highlights.map((item, i) => (
                                <div key={i} className="glass rounded-xl p-4 flex items-start gap-3 neon-border">
                                    <span className={`${item.color} mt-0.5 flex-shrink-0`}>{item.icon}</span>
                                    <div>
                                        <div className="text-slate-500 text-xs font-mono mb-0.5">{item.label}</div>
                                        <div className="text-white text-sm font-medium">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Tagline */}
                        <motion.blockquote
                            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            custom={4}
                            className="pl-4 border-l-2 border-cyan-500"
                        >
                            <p className="text-cyan-400/80 italic text-base font-medium">
                                "{personalInfo.tagline}"
                            </p>
                        </motion.blockquote>

                        {/* CTA */}
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            custom={5}
                            className="flex gap-3"
                        >
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="px-6 py-2.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-xl text-sm font-medium hover:bg-cyan-500/20 hover:border-cyan-500/60 transition-all"
                            >
                                📧 {personalInfo.email}
                            </a>
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2.5 glass border border-white/10 text-slate-400 rounded-xl text-sm font-medium hover:text-white hover:border-white/20 transition-all"
                            >
                                LinkedIn →
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
