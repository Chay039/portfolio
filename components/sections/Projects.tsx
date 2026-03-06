'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = -((e.clientY - rect.top) / rect.height - 0.5) * 20;
        setTilt({ x, y });
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            custom={index}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
            style={{
                transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                transition: hovered ? 'transform 0.05s linear' : 'transform 0.5s ease',
                transformStyle: 'preserve-3d',
            }}
            className="glass rounded-2xl overflow-hidden neon-border group cursor-pointer"
        >
            {/* Mock browser UI */}
            <div
                className="h-40 relative flex items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${project.color}10 0%, ${project.color}05 100%)` }}
            >
                {/* Browser chrome */}
                <div className="absolute top-0 left-0 right-0 h-8 flex items-center gap-1.5 px-3 bg-black/30 backdrop-blur-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    <div
                        className="flex-1 mx-3 h-4 rounded-full text-xs font-mono px-2 flex items-center"
                        style={{ background: `${project.color}15`, color: `${project.color}80` }}
                    >
                        {project.id}.io
                    </div>
                </div>

                {/* Mock content */}
                <div className="mt-4 text-center" style={{ transform: 'translateZ(20px)' }}>
                    <div
                        className="text-4xl font-display font-black mb-1 opacity-20"
                        style={{ color: project.color }}
                    >
                        {project.id.toUpperCase().slice(0, 2)}
                    </div>
                    {/* Metric badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold"
                        style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
                    >
                        <span className="text-base">↗</span>
                        {project.metric} {project.metricLabel}
                    </div>
                </div>

                {/* Grid lines */}
                <div className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{ backgroundImage: `linear-gradient(${project.color} 1px, transparent 1px), linear-gradient(90deg, ${project.color} 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                        <p className="text-slate-500 text-xs font-mono mb-1">{project.subtitle}</p>
                        <h3 className="text-white font-display font-bold text-lg">{project.title}</h3>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                        <a
                            href={project.githubUrl}
                            className="w-8 h-8 glass rounded-lg flex items-center justify-center text-slate-500 hover:text-white transition-colors"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Github size={14} />
                        </a>
                        <a
                            href={project.liveUrl}
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-900 transition-all"
                            style={{ background: project.color }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ArrowUpRight size={14} />
                        </a>
                    </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <span key={tag} className="tag-chip">{tag}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="section-padding relative overflow-hidden bg-background">
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-500/3 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    className="text-center mb-16"
                >
                    <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-3">04. What I've Built</p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Featured Projects</h2>
                    <div className="section-divider" />
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Production-grade software shipped to real users. Hover the cards to explore.
                    </p>
                </motion.div>

                {/* Project grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
                    variants={fadeUp}
                    custom={4}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                    >
                        <Github size={16} />
                        View all projects on GitHub
                        <ArrowUpRight size={14} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
