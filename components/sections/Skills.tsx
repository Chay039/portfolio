'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
    }),
};

const skillIcons: Record<string, string> = {
    'Java': '☕', 'TypeScript': '🔷', 'JavaScript (ES6+)': '🟨', 'Python': '🐍',
    'React.js': '⚛️', 'Redux': '🔄', 'Next.js': '▲', 'HTML5': '🌐', 'CSS3': '🎨', 'Tailwind': '💨',
    'Node.js': '💚', 'Express.js': '🚂', 'Spring Boot': '🍃', 'GraphQL': '◈', 'REST APIs': '🔗', 'WebSocket': '⚡',
    'AWS Lambda': '⚡', 'EC2': '🖥', 'S3': '📦', 'RDS': '🗄', 'Docker': '🐳', 'Kubernetes': '⎈', 'Terraform': '🔧', 'Jenkins': '🤖',
    'PostgreSQL': '🐘', 'MongoDB': '🍃', 'SQL Server': '💾', 'Redis': '🔴',
    'Jest': '🃏', 'Cypress': '🌲', 'Selenium': '🤖', 'ELK Stack': '🔍', 'AppDynamics': '📊', 'CloudWatch': '👁',
};

export default function Skills() {
    return (
        <section id="skills" className="section-padding relative overflow-hidden bg-background">
            {/* Background accent */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/3 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    className="text-center mb-16"
                >
                    <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-3">02. What I Know</p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Tech Arsenal</h2>
                    <div className="section-divider" />
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Technologies I've mastered over 4+ years building production systems at scale.
                    </p>
                </motion.div>

                {/* Skill categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {skills.map((category, catIndex) => (
                        <motion.div
                            key={category.category}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeUp}
                            custom={catIndex}
                            className="glass-light rounded-2xl p-6 neon-border group hover:border-opacity-70 transition-all duration-400"
                            style={{ '--hover-color': category.color } as React.CSSProperties}
                        >
                            {/* Category header */}
                            <div className="flex items-center gap-3 mb-5">
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                                    style={{ background: `${category.color}15`, border: `1px solid ${category.color}30` }}
                                >
                                    {category.icon}
                                </div>
                                <div>
                                    <h3 className="text-white font-display font-semibold text-sm">{category.category}</h3>
                                    <p className="text-slate-500 text-xs font-mono">{category.items.length} skills</p>
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200"
                                        style={{
                                            background: `${category.color}10`,
                                            border: `1px solid ${category.color}25`,
                                            color: category.color,
                                        }}
                                    >
                                        <span className="text-sm">{skillIcons[skill] || '·'}</span>
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
                    variants={fadeUp}
                    custom={6}
                    className="text-center mt-14"
                >
                    <div className="inline-flex items-center gap-3 glass border border-white/8 rounded-2xl px-8 py-4">
                        <div className="flex -space-x-1">
                            {['#06b6d4', '#a855f7', '#f59e0b', '#22c55e'].map((color, i) => (
                                <div key={i} className="w-5 h-5 rounded-full border-2 border-background animate-pulse" style={{ background: color, animationDelay: `${i * 0.3}s` }} />
                            ))}
                        </div>
                        <span className="text-slate-400 text-sm">
                            Always learning & exploring new technologies
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
