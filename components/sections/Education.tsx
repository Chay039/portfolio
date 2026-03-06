'use client';

import { motion } from 'framer-motion';
import { education } from '@/lib/data';
import { GraduationCap, MapPin, Award, Star } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function Education() {
    return (
        <section id="education" className="section-padding relative overflow-hidden bg-surface-1/40">
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/3 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    className="text-center mb-16"
                >
                    <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-3">05. My Background</p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Education</h2>
                    <div className="section-divider" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {education.map((edu, i) => {
                        const color = i === 0 ? '#06b6d4' : '#a855f7';
                        return (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeUp}
                                custom={i + 1}
                                className="relative glass rounded-2xl p-8 overflow-hidden group transition-all duration-300 hover:scale-[1.02]"
                                style={{ border: `1px solid ${color}20` }}
                            >
                                {/* Background gradient */}
                                <div
                                    className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                                    style={{ background: color }}
                                />

                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
                                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                                >
                                    <GraduationCap size={28} style={{ color }} />
                                </div>

                                {/* School badge */}
                                <span
                                    className="inline-block text-xs font-mono font-bold px-2 py-0.5 rounded mb-3"
                                    style={{ background: `${color}10`, color, border: `1px solid ${color}25` }}
                                >
                                    {edu.shortName}
                                </span>

                                <h3 className="text-white font-display font-bold text-lg leading-tight mb-2">
                                    {edu.degree}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4">{edu.school}</p>

                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2 text-slate-500">
                                        <MapPin size={13} />
                                        {edu.location}
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-500">
                                        <Award size={13} />
                                        GPA: <span className="text-white font-mono font-medium">{edu.gpa}</span>
                                    </div>
                                    <div className="flex items-center gap-2" style={{ color }}>
                                        <Star size={13} />
                                        {edu.highlight}
                                    </div>
                                </div>

                                <div className="mt-5 pt-4 border-t border-white/5 font-mono text-xs font-semibold" style={{ color }}>
                                    {edu.period}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
