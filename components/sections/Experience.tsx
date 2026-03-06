'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/lib/data';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function Experience() {
    return (
        <section id="experience" className="section-padding relative overflow-hidden bg-surface-1/40">
            {/* Gradient accent */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-500/3 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    className="text-center mb-20"
                >
                    <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-3">03. Where I've Been</p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Experience</h2>
                    <div className="section-divider" />
                    <p className="text-slate-400 max-w-xl mx-auto">
                        4+ years shipping production-grade systems at Fortune 500 companies.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 timeline-glow-line opacity-40" />

                    <div className="space-y-16">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeUp}
                                custom={i}
                                className={`relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-8 ${i % 2 === 0 ? '' : 'md:dir-rtl'}`}
                            >
                                {/* Timeline dot */}
                                <div
                                    className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-background z-10"
                                    style={{ background: exp.color }}
                                >
                                    {/* Ripple */}
                                    <div
                                        className="absolute inset-0 rounded-full animate-ping opacity-40"
                                        style={{ background: exp.color }}
                                    />
                                </div>

                                {/* Card - alternates sides on desktop */}
                                <div
                                    className={`md:col-span-1 ${i % 2 === 0 ? '' : 'md:col-start-2'}`}
                                >
                                    <div className="glass rounded-2xl p-6 neon-border group transition-all duration-400 hover:scale-[1.01]"
                                        style={{ '--neon-color': exp.color } as React.CSSProperties}>

                                        {/* Header */}
                                        <div className="flex items-start justify-between gap-4 mb-4">
                                            <div>
                                                {/* Company badge */}
                                                <span
                                                    className="inline-block text-xs font-mono font-bold px-2 py-0.5 rounded mb-2"
                                                    style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}
                                                >
                                                    {exp.companyShort}
                                                </span>
                                                <h3 className="text-white font-display font-bold text-lg leading-tight">{exp.role}</h3>
                                                <p className="text-slate-400 text-sm mt-0.5">{exp.company}</p>
                                            </div>
                                            <div className="flex-shrink-0 text-right">
                                                <div className="flex items-center gap-1 text-slate-500 text-xs font-mono">
                                                    <Calendar size={11} />
                                                    {exp.period}
                                                </div>
                                                <div className="flex items-center gap-1 text-slate-600 text-xs mt-1">
                                                    <MapPin size={11} />
                                                    {exp.location}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Highlights */}
                                        <ul className="space-y-2 mb-4">
                                            {exp.highlights.map((h, j) => (
                                                <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                                            {exp.tags.map((tag) => (
                                                <span key={tag} className="tag-chip">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Empty column for alternating layout */}
                                {i % 2 === 1 && <div className="hidden md:block md:col-start-1 md:row-start-1" />}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
